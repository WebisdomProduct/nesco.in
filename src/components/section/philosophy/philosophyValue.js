'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function PhilosophyValue() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const leftItems = gsap.utils.toArray('.left-item');
      const rightItems = gsap.utils.toArray('.right-item');

      if (leftItems.length === 0 && rightItems.length === 0) return;

      gsap.from(leftItems, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        x: -80,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.25,
      });

      gsap.from(rightItems, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        x: 80,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.25,
        delay: 0.2,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftData = [
    { title: 'We’re ambitious and ingenious', desc: 'We’re here to make a mark.' },
    { title: 'We listen', desc: 'We listen to our customers and employees.' },
    { title: 'We think differently', desc: 'We embrace innovation.' },
    { title: 'We are life-long learners', desc: 'Learning never stops.' },
  ];

  const rightData = [
    { title: 'We’re honest', desc: 'We do what we say.' },
    { title: 'We don’t give up', desc: 'Challenges drive us.' },
    { title: 'We thrive on teamwork', desc: 'People power us.' },
    { title: 'We give back', desc: 'We care for our planet.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center w-full mt-16 md:mt-24"
    >
      <h2 className="text-3xl md:text-[48px] font-branding-semibold text-[#0E0E80] text-center">
        Our Values
      </h2>

      <div className="flex flex-col md:flex-row w-[92%] lg:w-[80%] mt-10 md:mt-16">
        {/* LEFT COLUMN */}
        <div className="md:w-1/2">
          {leftData.map((data, index) => (
            <div
              key={index}
              className="left-item text-center md:text-right my-10 md:my-28 px-2 md:px-4"
            >
              <p className="text-[#00B7F1] text-xl sm:text-2xl md:text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-600 mt-3 md:mt-5">
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-1/2 md:-mt-28">
          {rightData.map((data, index) => (
            <div
              key={index}
              className="right-item text-center md:text-left my-10 md:my-28 px-2 md:px-4"
            >
              <p className="text-[#00B7F1] text-xl sm:text-2xl md:text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-600 mt-3 md:mt-5">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhilosophyValue;
