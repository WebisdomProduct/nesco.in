"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

function PhilosophyBelieve() {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    const timer1 = setTimeout(() => {
      setShowContent1(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (showContent) {
        gsap.fromTo(
          ".blue-stripe",
          { opacity: 0 },
          { opacity: 1, duration: 2 }
        );
      }
      if (showContent1) {
        gsap.fromTo(".content", { width: 0 }, { width: "100%", duration: 3 });
        gsap.fromTo(
          ".content2",
          { x: 2000, opacity: 0 },
          { x: 0, opacity: 1, duration: 3 }
        );
      }
    });

    return () => ctx.revert();
  }, [showContent, showContent1]);

  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      {/* Video Background */}
      <div className="w-full h-full absolute">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source
            src="https://dayanandsagaruniversity.s3.ap-south-1.amazonaws.com/audio/1740482036556.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {showContent && (
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-[#05547A] opacity-40"></div>
          {/* Blue Stripe Container */}
          <div className="blue-stripe absolute w-[550vw] h-[550vh] flex justify-center items-center lg:gap-32 md:gap-32 gap-20 rotate-[40deg] ml-[30rem] z-20">
            <div className="h-full w-32 bg-[#101485] opacity-80 hidden md:block"></div>
            <div className="h-full w-32 bg-[#101485] opacity-80"></div>
            <div className="h-full w-32 bg-[#101485] opacity-80"></div>
            <div className="h-full w-[900px] bg-[#101485] opacity-80"></div>
          </div>
          {showContent1 && (
            <div className=" relative w-full h-full flex xl:flex-row flex-col gap-10 items-center overflow-hidden ">
              <div className="content relative xl:w-[70%] w-full h-[75%] flex justify-center items-center">
                <div className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20">
                  <span className="lg:mx-10 mx-3 absolute -top-1/2 transform -translate-y-[90%] lg:left-[16.8rem] md:left-[16rem] left-[8rem]">
                    E
                  </span>
                </div>
                <div className=" absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[0%] left-0 z-20 transform">
                  <span className="lg:mx-10 mx-3 absolute -top-1/2 transform -translate-y-[90%] lg:left-[32.6rem] md:left-[25.6rem] left-[15rem]">
                    L
                  </span>
                </div>
                <div className=" absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20 transform">
                  <span className="lg:mx-10 mx-3 absolute transform md:top-7 top-4 left-2 md:left-[5.5rem] lg:left-0 ">
                    I
                  </span>
                </div>
                <div className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20 transform">
                  <span className="lg:mx-10 mx-3 absolute transform md:top-7 top-4 left-[11.6rem] md:left-[19.8rem] lg:left-[26.5rem] ">
                    V
                  </span>
                </div>
                <div className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20 transform">
                  <span className="lg:mx-10 mx-3 absolute transform md:top-7 top-4 left-[19.5rem] md:left-[30.5rem] lg:left-[44rem] ">
                    E
                  </span>
                </div>

                {/* Text Container */}
                <p className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white md:left-[10%] left-[1%] transform translate-y-[5%] overflow-hidden">
                  <span className="lg:mx-10 mx-3 relative z-0 ">B</span>
                  <span className="lg:mx-10 mx-3 relative opacity-0">E</span>
                  <span className="lg:mx-10 mx-3 relative opacity-1">L</span>
                  <br />
                  <span className="lg:mx-10 mx-3 relative opacity-0">I</span>
                  <span className="lg:mx-10 mx-3 relative">E</span>
                  <span className="lg:mx-10 mx-3 relative opacity-0">V</span>
                  <span className="lg:mx-10 mx-3 relative opacity-0">E</span>
                </p>
              </div>
              <div className="text-left xl:h-full xl:w-[30%] w-full">
                <p className="z-30 text-[#01aeec] w-60 relative xl:top-[58%] text-xl content2">
                  A whole universe stands waiting to be explored. And yet it may
                  remain undiscovered, unless you believe in taking the first
                  step!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PhilosophyBelieve;
