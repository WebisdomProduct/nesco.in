"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSnip({ Children }) {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check for screen width
  useEffect(() => {
    const checkScreenWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  // useEffect(() => {
  //   // Initialize Lenis for smooth scrolling
  //   const lenis = new Lenis({
  //     smooth: true,
  //     syncTouch: true,
  //     gestureOrientation: "vertical",
  //     wheelMultiplier: 1.2,
  //     touchMultiplier: 2,
  //   });
  //   lenisRef.current = lenis;

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const sections = Array.from(container.querySelectorAll(".section"));

    // Enable smooth snapping
    gsap.set(sections, { willChange: "transform" });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        snap: {
          snapTo: 1, // Snap to the closest section
          duration: 1,
          ease: "power1.out",
          inertia: true,
          delay: 0,
        },
      });
    });

    // Debug - check for header_white sections
    console.log("Header white sections:", document.querySelectorAll(".header_white").length);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="container1 font-branding-medium scroll-smooth"
    >
      {Children.map((data, index) => {
        // Split the classCss into individual classes
        const classes = data.classCss.split(' ');
        const hasHeaderWhite = classes.includes('header_white');
        
        return (
          <section
            key={index}
            className={`flex items-center justify-center ${data.classCss}`}
            data-header-white={hasHeaderWhite ? "true" : "false"}
            style={{ scrollSnapAlign: "start", transform: "translateZ(0)" }} // Performance boost
          >
            {data.comp}
          </section>
        );
      })}
    </div>
  );
}

export default ScrollSnip;
