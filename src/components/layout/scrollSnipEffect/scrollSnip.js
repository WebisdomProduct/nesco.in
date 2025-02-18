"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../footer/footer";

gsap.registerPlugin(ScrollTrigger);

function ScrollSnip({ Children }) {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width on initial render and window resize
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    // Initial check
    checkScreenWidth();

    // Add resize event listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Exit if not on desktop

    const container = containerRef.current;

    // Get all sections (excluding the footer)
    const sections = Array.from(container.querySelectorAll(".section"));

    // Set up ScrollTrigger for each section (excluding the footer)
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        snap: {
          snapTo: 1, // Snap to the closest section
          duration: { min: 0.2, max: 0.6 }, // Smooth snapping duration
          ease: "power1.inOut", // Easing function
        },
        // markers: true, // Debugging markers (can be removed in production)
        // onEnter: () => {
        //   // Change navbar color based on the section
        //   const navbar = document.querySelector("nav");
        //   if (section.classList.contains("goal-section")) {
        //     navbar.style.backgroundColor = "#403092"; // Purple
        //   } else {
        //     navbar.style.backgroundColor = "transparent"; // Default
        //   }
        // },
        // onEnterBack: () => {
        //   // Change navbar color when scrolling back
        //   const navbar = document.querySelector("nav");
        //   if (section.classList.contains("goal-section")) {
        //     navbar.style.backgroundColor = "#403092"; // Purple
        //   } else {
        //     navbar.style.backgroundColor = "transparent"; // Default
        //   }
        // },
      });
    });

    // Detect when the last section is reached and disable scroll-snapping
    const lastSection = sections[sections.length - 1];
    ScrollTrigger.create({
      trigger: lastSection,
      start: "bottom bottom", // Start when the bottom of the last section hits the bottom of the viewport
      end: "bottom top", // End when the bottom of the last section hits the top of the viewport
      onEnter: () => {
        // Disable scroll-snapping when the last section is reached
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.snap) {
            trigger.kill(); // Kill the snap functionality
          }
        });
      },
      onLeaveBack: () => {
        // Re-enable scroll-snapping when scrolling back up to the last section
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            snap: {
              snapTo: 1,
              duration: { min: 0.2, max: 0.6 },
              ease: "power1.inOut",
            },
          });
        });
      },
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isDesktop]); // Re-run effect when isDesktop changes

  return (
    <div className="container1 font-branding-medium" ref={containerRef}>
      {Children.map((data, index) => (
        <div className={`overflow-hidden ${data.classCss}`} key={index}>
          {data.comp}
        </div>
      ))}
      {/* Footer (not part of scroll-snapping) */}
      {/* <div className="">
        <Footer />
      </div> */}
    </div>
  );
}

export default ScrollSnip;
