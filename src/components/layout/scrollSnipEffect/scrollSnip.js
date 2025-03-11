"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSnip({ Children }) {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Smoother snap configuration
  const snapConfig = {
    snapTo: 1,
    duration: { min: 0.1, max: 2 }, // Variable duration based on scroll speed
    ease: "expo.out", // Smoother easing function
    inertia: true, // Add momentum-based movement
    delay: 0, // No additional delay
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const sections = Array.from(container.querySelectorAll(".section"));
    let triggers = [];

    // Prefer CSS transforms for smoother animations
    gsap.set(sections, { willChange: "transform" });

    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        snap: snapConfig,
        onEnter: () => smoothNavbar(section),
        onEnterBack: () => smoothNavbar(section),
      });
      triggers.push(trigger);
    });

    // Last section handling
    const lastSection = sections[sections.length - 1];
    const lastTrigger = ScrollTrigger.create({
      trigger: lastSection,
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => triggers.forEach(t => t.kill()),
      onLeaveBack: () => {
        triggers = sections.map(section => 
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            snap: snapConfig,
          })
        );
      },
    });

    return () => {
      triggers.forEach(t => t.kill());
      lastTrigger.kill();
    };
  }, [isDesktop]);

  // Smoother navbar transition
  // const smoothNavbar = (section) => {
  //   gsap.to("nav", {
  //     // backgroundColor: section.classList.contains("goal-section") ? "#403092" : "transparent",
  //     // text:section.classList.contains("banner-section") ? "black" : "white"
  //     duration: 0.5,
  //     ease: "power2.out"
  //   });
  // };

  return (
    <div className="container1 font-branding-medium" ref={containerRef}>
      {Children.map((data, index) => (
        <div 
          className={` overflow-hidden ${data.classCss}`} 
          key={index}
          style={{ transform: "translateZ(0)" }} // Boost performance
        >
          {data.comp}
        </div>
      ))}
    </div>
  );
}

export default ScrollSnip;