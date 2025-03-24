"use client";
import React, { useEffect, useState, useRef } from "react";
import MentorImage from "@/assests/Home/SirImage.png";
import backgroundImage from "@/assests/Home/N-3.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Mentor() {
  const [text, setText] = useState("");
  const fullText = `In the last eight decades, Nesco has come a long way. We see our present success as only the start to newer and bolder initiatives. This is an affirmation that as we continue to grow, we add to the growth of our country.\n\nOur teams are motivated to set new benchmarks across industries through perseverance and innovation. The world we live in is rapidly evolving and at Nesco we are prepared to meet every challenge head on.`;
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setText(fullText);

    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 2,
      }
    );
  }, []);

  return (
    <section className="bg-[#D5EFFF] flex flex-col items-center justify-center relative w-full xl:h-auto h-full overflow-hidden sectionReveal">
      <div className="z-20 relative w-[90%] flex flex-col items-center justify-center mx-auto mt-12 mb-10 md:h-screen goal-section1">
        <div className="flex md:flex-row flex-col items-start md:gap-20 gap-10">
          <div className="relative md:w-[55%] h-full">
            <div className="z-10 relative">
              <h2
                style={{ fontFamily: "BrandingSemibold" }}
                className="text-3xl md:text-5xl text-primary"
              >
                A note from the Founding
              </h2>
              <h3 className="font-branding-medium text-3xl mt-2 md:text-4xl text-primary">
                Director and Mentor
              </h3>
              <div className="space-y-2 mt-4 text-gray-700 text-justify">
                <p
                  ref={textRef}
                  className="lg:text-3xl text-2xl font-branding-medium lg:leading-[2.5rem] drop-shadow-xl whitespace-pre-line"
                >
                  {text}
                </p>
              </div>
            </div>
            {/* Background Image */}
            <div className="w-full h-full z-0 absolute top-16 opacity-40">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={backgroundImage}
                  alt="background image"
                  objectFit="cover"
                  className="w-full xl:scale-[1.3] lg:scale-[1.7] md:scale-[1.7] scale-[1]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[45%] w-full h-full md:items-end items-center justify-center z-10 relative">
            <div className="w-full">
              <div className="w-full max-w-[650px] border-[10px] border-primary">
                <Image
                  src={MentorImage}
                  alt="Mentor"
                  width={650}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[1.8rem] font-branding-semibold text-primary">
                  Sumant J. Patel
                </h3>
                <p className="mt-1 font-branding-medium text-[1.2rem]">
                  (15th August 1935 – 17th November 2021)
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
