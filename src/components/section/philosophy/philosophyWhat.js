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
      className="header_color_black w-full h-screen relative overflow-hidden flex justify-center items-center"
    >
      <div className="w-full h-full flex justify-start items-center">
        <div
          className="w-[70%] h-1/2 flex flex-col overflow-hidden z-0 relative"
          ref={textContainerRef}
        >
          {text[currentText].split(".").map((word, index) => (
            <p
              key={index}
              className={`text-8xl font-branding-semibold text-[#0F0D9F] text-right leading-[5rem] uppercase ${
                index === 1 ? "pr-10" : ""
              } ${index === 2 ? "pr-20" : ""} ${index === 3 ? "pr-32" : ""} ${
                index === 5 ? "pr-40" : ""
              }`}
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
        <div className="w-[30%] h-1/2 flex items-end z-20 relative bg-white">
          <p
            ref={headerRef}
            className="text-6xl text-[#00B6F1] font-branding-semibold -ml-20 -mb-10"
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
