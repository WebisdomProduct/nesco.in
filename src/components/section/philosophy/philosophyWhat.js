"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

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
    if (!sectionRef.current || !textContainerRef.current || !headerRef.current)
      return;

    const fadeIn = () => {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power2.out",
        }
      );
    };

    const fadeOut = () => {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
        {
          opacity: 0,
          clipPath: "inset(0% 100% 0% 0%)", // Same direction as fade-in
          duration: 1.2,
          ease: "power2.in",
        }
      );
    };

    fadeIn();

    const interval = setInterval(() => {
      fadeOut(); // Fade out before changing text
      setTimeout(() => {
        setCurrentText((prevIndex) => (prevIndex + 1) % text.length);
        fadeIn(); // Fade in after changing text
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentText]);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

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
          start: "top 80%",
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

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full md:h-screen relative flex justify-center items-center py-20"
    >
      <div className="w-full h-fit flex md:flex-row flex-col justify-start items-center md:gap-0">
        <div
          className="xl:w-[70%] md:w-[80%] sm:w-[50%] flex flex-col z-0 relative"
          ref={textContainerRef}
        >
          {text[currentText].split(".").map((word, index) => (
            <p
              key={index}
              className={`xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-branding-bold text-[#0F0D9F] text-right uppercase ${
                index === 1 ? "md:pr-10 pr-5" : ""
              } ${index === 2 ? "md:pr-20 pr-10" : ""} ${
                index === 3 ? "md:pr-32 pr-16" : ""
              } ${index === 5 ? "md:pr-40 pr-24" : ""}`}
            >
              {word}
            </p>
          ))}
        </div>
        <div className="relative bottom-[-20px] md:bottom-[-100px] lg:bottom-[-100px] xl:bottom-[-100px] xl:w-[30%] md:w-[20%] w-full lg:self-end xl:self-end md:self-end flex md:items-end justify-center z-20 bg-white">
          <p
            ref={headerRef}
            className="xl:text-5xl lg:text-5xl md:text-4xl text-2xl text-[#00B6F1] font-branding-semibold xl:-ml-40"
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
