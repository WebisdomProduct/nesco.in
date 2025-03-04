"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

function PhilosophyWhat() {
  const text = [
    "When.Boundaries. Keep us from.Crossing over",
    "When the emptiness.of space must.instead be flooded.with Familiarity",
    "When Lives can.Be Filled with.the unexpected",
    "When Journeys.Can Lead To.Discovery",
    "When Distances.can be Bridged by.opportunity",
    "When a little.deed can go.a long way",
    "When a smile can.Lead to unending.laughter",
    "When Tomorrow.holds even.more promise.than today",
  ];

  const [currentText, setCurrentText] = useState(0);
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % text.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, [currentText]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start animation when the top of the section reaches 80% of the viewport height
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      headerRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full md:h-screen relative flex justify-center items-center py-20"
    >
      <div className="w-full h-full flex md:flex-row flex-col justify-start items-center gap-10 md:gap-0">
        <div
          className="xl:w-[70%] md:w-[80%] sm:w-[50%] md:h-1/2 h-[12rem] flex flex-col z-0 relative"
          ref={textContainerRef}
        >
          {text[currentText].split(".").map((word, index) => (
            <p
              key={index}
              className={`xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-branding-semibold text-[#0F0D9F] text-right md:leading-[5rem] leading-[3rem] uppercase ${
                index === 1 ? "md:pr-10 pr-5" : ""
              } ${index === 2 ? "md:pr-20 pr-10" : ""} ${
                index === 3 ? "md:pr-32 pr-16" : ""
              } ${index === 5 ? "md:pr-40 pr-24" : ""}`}
            >
              <Typewriter
                options={{
                  strings: [word],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </p>
          ))}
        </div>
        <div className="xl:w-[30%] md:w-[20%] w-full h-1/2 flex md:items-end justify-center z-20 relative bg-white">
          <p
            ref={headerRef}
            className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-[#00B6F1] font-branding-semibold xl:-ml-20 xl:-mb-10"
          >
            What We
            <br /> Do Is Believe
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhilosophyWhat;
