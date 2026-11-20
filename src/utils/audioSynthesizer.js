// Web Audio API Synthesizer for Vice City Ambient Radio & Sound FX
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentStation = 'vice-synth';
    this.timerId = null;
    this.step = 0;
    this.masterGain = null;
    this.analyser = null;
    this.stationPatterns = {
      'vice-synth': {
        bpm: 105,
        bassNotes: [55, 55, 48, 48, 43, 43, 50, 50], // A1, C1, G0, D1
        chords: [
          [220, 261.63, 329.63, 440], // Am
          [174.61, 220, 261.63, 349.23], // F
          [130.81, 164.81, 196, 261.63], // C
          [196, 246.94, 293.66, 392] // G
        ],
        filterFreq: 1200
      },
      'wave-103': {
        bpm: 120,
        bassNotes: [65.41, 65.41, 58.27, 58.27, 55, 55, 65.41, 73.42],
        chords: [
          [261.63, 311.13, 392], // Cm
          [233.08, 293.66, 349.23], // Bb
          [220, 261.63, 329.63], // Am
          [246.94, 293.66, 370] // Bdim
        ],
        filterFreq: 2200
      },
      'espantoso': {
        bpm: 98,
        bassNotes: [49, 49, 58.27, 49, 65.41, 49, 58.27, 55],
        chords: [
          [246.94, 311.13, 370], // B
          [220, 277.18, 329.63], // A
          [207.65, 261.63, 311.13], // G#
          [233.08, 293.66, 349.23] // Bb
        ],
        filterFreq: 1600
      },
      'leonida-trap': {
        bpm: 140,
        bassNotes: [36.7, 36.7, 36.7, 41.2, 43.65, 43.65, 38.89, 36.7],
        chords: [
          [146.83, 174.61, 220],
          [164.81, 196, 246.94],
          [174.61, 220, 261.63],
          [146.83, 174.61, 220]
        ],
        filterFreq: 800
      }
    };
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.22, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playStation(stationKey) {
    this.init();
    if (stationKey) this.currentStation = stationKey;
    if (this.isPlaying) {
      this.stop();
    }
    this.isPlaying = true;
    this.step = 0;
    this.scheduleNextBeat();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  toggle(stationKey) {
    if (this.isPlaying && (!stationKey || stationKey === this.currentStation)) {
      this.stop();
      return false;
    } else {
      this.playStation(stationKey || this.currentStation);
      return true;
    }
  }

  playLaserSfx() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // ignore audio context restrictions
    }
  }

  playClickSfx() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // ignore
    }
  }

  playSirenSfx() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      
      // Siren wail modulation
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.linearRampToValueAtTime(950, now + 0.4);
      osc.frequency.linearRampToValueAtTime(650, now + 0.8);
      osc.frequency.linearRampToValueAtTime(950, now + 1.2);
      osc.frequency.linearRampToValueAtTime(650, now + 1.6);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 1.8);
    } catch {
      // ignore
    }
  }

  playCheatSfx() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch {
      // ignore
    }
  }

  playAmbientLocation(type) {
    this.init();
    try {
      const now = this.ctx.currentTime;
      if (type === 'beach') {
        // Ocean waves sound using noise buffer
        const bufferSize = this.ctx.sampleRate * 2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.linearRampToValueAtTime(700, now + 1);
        filter.frequency.linearRampToValueAtTime(250, now + 2);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        noise.start(now);
      } else {
        // City / swamp drone
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(type === 'swamp' ? 75 : 120, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 1.5);
      }
    } catch {
      // ignore
    }
  }

  scheduleNextBeat() {
    if (!this.isPlaying || !this.ctx) return;

    const pattern = this.stationPatterns[this.currentStation] || this.stationPatterns['vice-synth'];
    const intervalMs = (60 / pattern.bpm) * 1000 * 0.5; // sixteenth-ish note pace

    this.playStep(this.step, pattern);
    this.step = (this.step + 1) % 16;

    this.timerId = setTimeout(() => {
      this.scheduleNextBeat();
    }, intervalMs);
  }

  playStep(step, pattern) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;

    // Bassline on every 2 steps
    if (step % 2 === 0) {
      const noteIndex = Math.floor(step / 2) % pattern.bassNotes.length;
      const freq = pattern.bassNotes[noteIndex];
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      bassOsc.type = this.currentStation === 'leonida-trap' ? 'sine' : 'sawtooth';
      bassOsc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(pattern.filterFreq || 900, now);

      bassGain.gain.setValueAtTime(0.24, now);
      bassGain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);

      bassOsc.connect(filter);
      filter.connect(bassGain);
      bassGain.connect(this.masterGain);

      bassOsc.start(now);
      bassOsc.stop(now + 0.35);
    }

    // Synth chord pads on steps 0, 4, 8, 12
    if (step % 4 === 0) {
      const chordIndex = Math.floor(step / 4) % pattern.chords.length;
      const notes = pattern.chords[chordIndex];

      notes.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(pattern.filterFreq * 1.2, now);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.9);
      });
    }

    // Hi-hat / shaker pulse on offbeats
    if (step % 2 === 1) {
      const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.03, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(6500, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start(now);
    }
  }

  getFrequencyData() {
    if (!this.analyser) return new Uint8Array(16);
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }
}

export const soundSystem = new SoundSystem();

