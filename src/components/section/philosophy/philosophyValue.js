"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function PhilosophyValue() {
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  useEffect(() => {
    leftRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    rightRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const leftData = [
    {
      title: "We’re ambitious and ingenious",
      desc: "We’re here to make a mark. We’re not imitators and believe in leading by carving our own unique and ingenious way forward.",
    },
    {
      title: "We listen",
      desc: "We listen to our customers and our employees and anticipate what they need. We genuinely care and seek to make a positive impact on their lives.",
    },
    {
      title: "We are out-of-the-box thinkers",
      desc: "We like to stand out with our innovative and unexpected ideas. We’re open minded, adventurous, creative, playful. And yes, we’re not afraid to have fun.",
    },
    {
      title: "We are life-long learners",
      desc: "We believe that learning never ends. We don’t claim to know everything and know we never will. We are always looking at ways to stay updated with what’s around us, making sure we as a collective people are encouraged to learn and grow as a result.",
    },
  ];
  const rightData = [
    {
      title: "We’re honest",
      desc: "In a world of rosy pictures and blanket statements, you can count on us to be honest. We don't promise if we can't keep it.",
    },
    {
      title: "We don’t give up",
      desc: "We’re passionate and determined. We believe that problems are just challenges and challenges drive us. We don’t give up easily. We don’t give up at all.",
    },
    {
      title: "We thrive on team work",
      desc: "Our people make us who we are. We're positive and believe in building a positive team that feels nurtured, inspired and encouraged to be the best they can.",
    },
    {
      title: "We give back and we love our planet",
      desc: "A drop in the ocean is never just a drop. This is our motto when it comes to giving back and protecting our planet. We know that our higher purpose is to share and care. That’s why we pay great attention to the causes we support.",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full flex-col mt-24">
      <h2 className="text-5xl font-branding-semibold text-[#0E0E80]">
        Our Values
      </h2>
      <div className="flex md:flex-row flex-col lg:w-[80%] w-[90%] justify-center mt-10">
        <div className="md:w-1/2">
          {leftData.map((data, index) => (
            <div
              className="md:text-right md:my-28 my-8 px-4 opacity-0"
              key={index}
              ref={(el) => (leftRefs.current[index] = el)}
            >
              <p className="text-[#00B7F1] text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-xl text-gray-600 mt-5">{data.desc}</p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 md:-mt-28">
          {rightData.map((data, index) => (
            <div
              className="md:text-left md:my-28 my-8 px-4 opacity-0"
              key={index}
              ref={(el) => (rightRefs.current[index] = el)}
            >
              <p className="text-[#00B7F1] text-5xl font-branding-bold">
                {data.title}
              </p>
              <p className="text-xl text-gray-600 mt-5">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhilosophyValue;
