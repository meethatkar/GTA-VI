import { useGSAP } from "@gsap/react"
import React, { useState } from "react"
import gsap from "gsap"
import { ArrowDownToDot } from "lucide-react";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"      //will transform from center
    }).to(".vi-mask-group", {
      scale: 10,
      delay: -1.7,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function (){
        if(this.progress() >= 0.9){   //progress() value is between 0 to 1 and it indicated animation progress
          document.querySelector(".svg").remove();      //remove from code
          setShowContent(true);
          this.kill();    //kill the aniamtion once completed
        }
      }
    })
  })

  useGSAP(() => {
    // Center baseline managed by GSAP to avoid stacking transforms
    gsap.set("#heading", { xPercent: -50, left: "50%" });
  
    const main = document.querySelector(".main");
    const onMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 80; // adjust sensitivity
      gsap.to("#heading", {
        x: xMove ,                 // pixels, centered around 0
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".buildings", {
        x: xMove * 0.6,                 // pixels, centered around 0
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".sky", {
        x: xMove * 0.8,                 // pixels, centered around 0
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".main-char", {
        x: xMove * 0.6,                 // pixels, centered around 0
        duration: 0.2,
        ease: "power3.out"
      });
    };
  
    main?.addEventListener("mousemove", onMove);
    return () => main?.removeEventListener("mouseleave", onMove);
  }, [showContent]);

  return (
   <div>
     <div className='svg flex items-center justify-center fixed top-0 left-0 z-[10] w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>        {/* <defs> (short for definitions) is a section where you declare reusable elements (like gradients, patterns, masks, etc.). */}
          <mask id="viMask">      {/* <mask> defines a graphical mask, which determines which parts of an image are visible. In your code, anything white in the mask is shown and anything black is hidden when the mask is applied to an image.  */}
            <rect width="100%" height="100%" fill="black" />
            <g className='vi-mask-group'>     {/* used to group multiple SVG elements, styla and animation are applied to all it's child at once */}
              <text
                x= "50%"   //position
                y= "50%"
                fontSize= "250"
                textAnchor= "middle"      //centers the text horizontally on its x position.
                fill= "white"
                dominantBaseline= "middle"        //control the vertical alignment of text relative to the specified y coordinate.
                fontFamily= "Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image 
          href= "./buildings.png"
          width ="100%"
          height= "100%"
          preserveAspectRatio= "xMidYMid slice"       //think of xMidYMid slice as CSS background-size: cover
          mask = "url(#viMask)"
          style={{zIndex: "10", position: "relative"}}
        />
        <image 
          href= "./clouds.png"
          width ="100%"
          height= "100%"
          preserveAspectRatio= "xMidYMid slice"       //think of xMidYMid slice as CSS background-size: cover
          mask = "url(#viMask)"
          style={{zIndex: "5", position: "relative"}}
        />
      </svg>
    </div>
    { showContent && (
      <div className="main w-full">
        <div id="landing" className="overflow-hidden relative w-full h-screen bg-black">
          {/* NAVBAR */}
          <div id="navbar" className="bg-transparent absolute top-0 left-0 z-20 text-white w-full h-10 p-5">
            <div id="left-text" className="flex items-center gap-5">
              <div id="line" className="">
                <div className="lines h-[3px] w-8 bg-white mb-1.5"></div>
                <div className="lines h-[3px] w-6 bg-white mb-1.5"></div>
                <div className="lines h-[3px] w-4 bg-white mb-1.5"></div>
              </div>
              <h5 className="text-xl font-semibold font-nav"> ROCKSTAR GAMES </h5>
            </div>
          </div>
          {/* SCROLL DONW TEXT */}
          <h5 className="flex items-center gap-2 border-1 p-1 rounded-xl  text-2xl font-sans font-semibold absolute bottom-[3%] left-[2%] text-white z-20">
            <ArrowDownToDot />
            Scroll Down 
          </h5>
          {/* IMAGE DIVS */}
          <div id="images-div" className="relative z-5 overflow-hidden w-full h-screen">
            <img src="./buildings.png" alt="" className="buildings absolute top-0 left-0 w-full z-5 h-screen scale-x-120"/>
            <img src="./clouds.png" alt="" className="sky absolute top-0 left-0 w-full h-screen scale-x-120"/>
            <img src="./main-char.png" alt="" className="main-char absolute -bottom-[28%] left-1/2 z-25 -translate-x-1/2 h-screen scale-x-100"/>
            <img src="/ps5.png" alt="" className="absolute -bottom-[8%] left-1/2 -translate-x-1/2 scale-40 z-30"/>
             {/* HEADING TEXT */}
          <div id="heading" className="absolute top-[10%] z-20 left-1/2 text-white font-heading text-[7rem] opacity-75">
            <h2 className="leading-none -ml-[10%]"> Grand </h2>
            <h2 className="leading-none ml-[10%]"> Thef </h2>
            <h2 className="leading-none -ml-[25%]"> Auto </h2>
          </div>
          </div>
        </div>
        <div id="scrolled-div">
          
        </div>
      </div>
    )}
   </div>
  )
}

export default App