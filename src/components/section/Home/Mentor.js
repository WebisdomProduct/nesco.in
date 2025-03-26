"use client";
import React, { useEffect, useState, useRef } from "react";
import MentorImage from "@/assests/Home/mentorNew/Sumant.png";
import backgroundImage from "@/assests/Home/mentorNew/SumanBack.jpg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Mentor() {
  const fullText = `In the last eight decades, Nesco has come a long way. We see our present success as only the start to newer and bolder initiatives. This is an affirmation that as we continue to grow, we add to the growth of our country.\nOur teams are motivated to set new benchmarks across industries through perseverance and innovation. The world we live in is rapidly evolving and at Nesco we are prepared to meet every challenge head on.`;

  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden lg:h-screen "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full  goal-section1">
        <div className="flex lg:flex-row flex-col lg:items-start items-center h-full w-full">
          <div className="flex flex-col lg:w-[50%] w-1/2 h-full xl:justify-end justify-center z-10 relative">
            <Image
              src={MentorImage}
              alt="Mentor"
              width={650}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="relative lg:w-[50%] h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <div className=" mt-4">
              <h2 className="text-[2rem] font-branding-semibold text-[#0638A5]">
                Sumant J. Patel
              </h2>
              <p className="mt-1 font-branding-medium text-[1rem] mb-4">
                (15th August 1935 – 17th November 2021)
              </p>
            </div>

            <hr className=" bg-black border-1 border-black mb-4" />
            <div className="relative">
              <h2 className="text-xl flex items-center font-branding-medium whitespace-nowrap flex-wrap">
                A note from the Founding
                <strong className="font-branding-semibold ml-1 ">
                  {" "}
                  Director and Mentor
                </strong>
              </h2>
              <div className="space-y-2 mt-2 text-justify">
                <p className="font-branding-medium">
                  {fullText.split("\n")[0]}
                </p>
                <p className="font-branding-medium">
                  {fullText.split("\n")[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentor;
