'use client';

import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import PhilosophyImage from '@/assests/philosophy/philosophy-sect-img.jpg';
import PhilosophyV from '@/assests/philosophy/vision-char-bt.png';
import PhilosophyVtp from '@/assests/philosophy/vision-char-tp.png';
import PhilosophyMtp from '@/assests/philosophy/mission-char-tp.png';
import PhilosophyMbt from '@/assests/philosophy/mission-char-bt.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PhilosophyVision() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.side',
        { x: 0, y: 0 },
        {
          x: -20,
          y: 12,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.vision-block',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.side1',
        { x: 0, y: 0 },
        {
          x: -15,
          y: 8,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.mission-block',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.slide1',
        { y: 80 },
        {
          y: 0,
          duration: 1.6,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.text-block',
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.slide2',
        { x: -60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.title-block',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#00B7F1] flex flex-col items-center pb-20"
    >
      <Image src={PhilosophyImage} className="w-full" alt="Philosophy" />

      <div className="flex md:flex-row flex-col xl:w-[60%] lg:w-[70%] w-[90%] gap-16 mt-20">
        {/* Vision */}
        <div className="md:w-1/2 vision-block">
          <div className="relative title-block">
            <Image
              src={PhilosophyVtp}
              className="side absolute w-[70%]"
              alt="Vision Top"
            />
            <Image src={PhilosophyV} className="w-[70%]" alt="Vision Bottom" />

            <h2 className="slide2 text-3xl lg:text-5xl font-branding-bold text-[#0E0E80] mt-6">
              Our <br /> Vision
            </h2>
          </div>

          <div className="text-block text-xl text-white text-center mt-8 space-y-6">
            <p className="slide1">
              We believe in making a positive impact on people&apos;s lives by
              investing in progressive change.
            </p>
            <p className="slide1">
              We believe in earning respect as true visionaries and leaders of
              positive growth.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="md:w-1/2  mission-block">
          <div className="relative title-block">
            <Image
              src={PhilosophyMtp}
              className="side1 absolute w-[70%]"
              alt="Mission Top"
            />
            <Image
              src={PhilosophyMbt}
              className="w-[70%]"
              alt="Mission Bottom"
            />

            <h2 className="slide2 text-3xl lg:text-5xl font-branding-bold text-[#0E0E80] mt-6 text-right">
              Our <br /> Mission
            </h2>
          </div>

          <div className="text-block text-xl text-white text-center mt-8 space-y-6">
            <p className="slide1">
              We are focused on improving quality of life through every product
              and service we offer.
            </p>
            <p className="slide1">
              Our goal is to become category leaders and bring pride to the
              nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophyVision;
