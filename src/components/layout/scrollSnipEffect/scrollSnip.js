"use client";
import React, { useEffect } from "react";

function ScrollSnip({ Children }) {
  useEffect(() => {
    const container = document.querySelector(".container1");
    let isScrolling = false;

    const smoothScrollTo = (targetY, duration = 1000) => {
      const start = container.scrollTop;
      const change = targetY - start;
      const startTime = performance.now();

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);
        container.scrollTop = start + change * easing;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleScroll = (e) => {
      if (isScrolling) return;

      const delta = e.deltaY;
      const sections = Array.from(document.querySelectorAll(".section"));
      const currentScroll = container.scrollTop;
      const viewportHeight = window.innerHeight;

      // Find the current active section
      let activeSectionIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          activeSectionIndex = i;
          break;
        }
      }

      if (activeSectionIndex === -1) return;

      // Handle Goal section scrolling
      const activeSection = sections[activeSectionIndex];
      if (activeSection.classList.contains("goal-section")) {
        const goalSectionBottom =
          activeSection.offsetTop + activeSection.offsetHeight;
        const isAtGoalSectionEnd =
          currentScroll + viewportHeight >= goalSectionBottom - 10;

        // Scroll down from Goal section to Mentor
        if (delta > 0 && isAtGoalSectionEnd) {
          const nextSection = sections[activeSectionIndex + 1];
          if (nextSection) {
            isScrolling = true;
            smoothScrollTo(nextSection.offsetTop);
            setTimeout(() => (isScrolling = false), 1000);
          }
          return;
        }

        // Scroll up from Goal section to HomeBanner
        if (delta < 0 && currentScroll <= activeSection.offsetTop + 10) {
          const prevSection = sections[activeSectionIndex - 1];
          if (prevSection) {
            isScrolling = true;
            smoothScrollTo(prevSection.offsetTop);
            setTimeout(() => (isScrolling = false), 1000);
          }
          return;
        }

        // Allow normal scrolling within Goal section
        return;
      }

      // Handle scroll-snapping for other sections
      isScrolling = true;

      if (delta > 0) {
        // Scroll down: Move to the next section
        const nextSection = sections[activeSectionIndex + 1];
        if (nextSection) smoothScrollTo(nextSection.offsetTop);
      } else {
        // Scroll up: Move to the previous section
        const prevSection = sections[activeSectionIndex - 1];
        if (prevSection) smoothScrollTo(prevSection.offsetTop);
      }

      setTimeout(() => (isScrolling = false), 1000);
    };

    container.addEventListener("wheel", handleScroll);
    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="container1">
      {Children.map((data, index) => (
        <div className={`${data.classCss}`} key={index}>
          {data.comp}
        </div>
      ))}
    </div>
  );
}

export default ScrollSnip;
