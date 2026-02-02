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

      // Safety check: If elements aren't found, ensure they are visible (fallback)
      if (leftItems.length === 0 && rightItems.length === 0) return;

      // Animate Left Items (Come from left)
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

      // Animate Right Items (Come from right)
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
        delay: 0.2, // Slight delay after left items start
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftData = [
    {
      title: 'We’re ambitious and ingenious',
      desc: 'We’re here to make a mark.',
    },
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
      className="flex flex-col items-center w-full mt-24"
    >
      <h2 className="text-[48px] font-branding-semibold text-[#0E0E80]">
        Our Values
      </h2>

      <div className="flex md:flex-row flex-col lg:w-[80%] w-[90%] mt-16">
        <div className="md:w-1/2">
          {leftData.map((data, index) => (
            <div
              key={index}
              className="left-item md:text-right md:my-28 my-12 px-4"
            >
              <p className="text-[#00B7F1] text-3xl md:text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-2xl text-gray-600 mt-5">{data.desc}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 md:-mt-28">
          {rightData.map((data, index) => (
            <div
              key={index}
              className="right-item md:text-left md:my-28 my-12 px-4"
            >
              <p className="text-[#00B7F1] text-3xl md:text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-2xl text-gray-600 mt-5">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhilosophyValue;
