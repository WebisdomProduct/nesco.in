"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import "./index.css";

function PhilosophyForUs() {
  //   useEffect(() => {
  //     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  //     // Animation for the first line (top)
  //     tl.fromTo(
  //       ".line-top",
  //       { scaleX: 0 },
  //       { scaleX: 1, duration: 1, ease: "power1.inOut" }
  //     );

  //     // Animation for the second line (right)
  //     tl.fromTo(
  //       ".line-right",
  //       { scaleY: 0 },
  //       { scaleY: 1, duration: 1, ease: "power1.inOut" },
  //       "-=0.5" // Overlap with the previous animation
  //     );

  //     // Animation for the third line (bottom)
  //     tl.fromTo(
  //       ".line-bottom",
  //       { scaleX: 0 },
  //       { scaleX: 1, duration: 1, ease: "power1.inOut" },
  //       "-=0.5"
  //     );

  //     // Animation for the fourth line (left)
  //     tl.fromTo(
  //       ".line-left",
  //       { scaleY: 0 },
  //       { scaleY: 1, duration: 1, ease: "power1.inOut" },
  //       "-=0.5"
  //     );

  //     return () => {
  //       tl.kill();
  //     };
  //   }, []);

  return (
    <div className="bg-[#0F0E9F] flex justify-center items-center">
      <div className="h-screen w-full text-white xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-[6rem] text-center font-branding-semibold flex flex-col justify-center items-center relative">
        <div className="w-full h-full relative flex justify-center items-center">
          <div className="relative w-[80%] h-[70%] flex justify-center items-center">
            {/* Top Line */}
            <div className="line-top absolute top-0 left-[40%] w-[60%] h-3 bg-[#00B7F1] rounded-full transform origin-left"></div>

            {/* Right Line */}
            <div className="line-right absolute top-1 right-0 w-3 h-full bg-[#00B7F1] rounded-full transform origin-top rotate-45"></div>

            {/* Bottom Line */}
            <div className="line-bottom absolute top-[70%] left-[54%] w-[60%] h-3 bg-[#00B7F1] rounded-full transform origin-left rotate-180"></div>

            {/* Left Line */}
            <div className="line-left absolute top-[70%] -left-[20%] w-3 h-full bg-[#00B7F1] rounded-full transform origin-top rotate-[225deg]"></div>
          </div>
        </div>
        {/* <div className="bg-[#0F0E9F] w-[70%] z-30 absolute">
          <p>For us,</p>
          <p className="text-[#00B7F1]">'Believe'</p>
          <p>is</p>
          <p>more than a philosophy. It is a way of life.</p>
        </div> */}
      </div>
    </div>
  );
}

export default PhilosophyForUs;
