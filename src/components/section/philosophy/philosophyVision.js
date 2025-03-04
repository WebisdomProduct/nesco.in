"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import PhilosophyImage from "@/assests/philosophy/philosophy-sect-img.jpg";
import PhilosophyV from "@/assests/philosophy/vision-char-bt.png";
import PhilosophyVtp from "@/assests/philosophy/vision-char-tp.png";
import PhilosophyMtp from "@/assests/philosophy/mission-char-tp.png";
import PhilosophyMbt from "@/assests/philosophy/mission-char-bt.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PhilosophyVision() {
  useEffect(() => {
    gsap.fromTo(
      ".side",
      { marginTop: 0, marginLeft: 0 },
      {
        marginTop: "12px",
        marginLeft: "-20px",
        duration: 2,
        scrollTrigger: {
          trigger: ".side",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",

          //   scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".side1",
      { marginTop: 0, marginLeft: 0 },
      {
        marginTop: "8px",
        marginLeft: "-15px",
        duration: 2,
        scrollTrigger: {
          trigger: ".side1",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",

          //   scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".slide1",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".slide1",
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none none",

          //   scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".slide2",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".slide2",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",

          //   scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#00B7F1] flex flex-col justify-center items-center pb-20">
      <div className="w-full">
        <Image src={PhilosophyImage} className="w-full" alt="Philosophy" />
      </div>
      <div className="flex md:flex-row flex-col xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] gap-10">
        <div className="py-5 md:w-1/2">
          <div className="flex flex-col gap-0 relative -mt-24">
            <Image
              src={PhilosophyVtp}
              className="side absolute w-[70%] md:w-full"
              alt="Vision Top"
            />
            <Image
              src={PhilosophyV}
              className="w-[70%] md:w-full"
              alt="Vision Bottom"
            />
            <div className="lg:text-5xl text-3xl absolute top-32 lg:left-[80%] md:left-[70%] left-[50%] font-branding-bold text-[#0E0E80] overflow-hidden">
              <div className="slide2">
                Our
                <br /> Vision
              </div>
            </div>
          </div>
          <div className="text-2xl text-white text-center px-5 flex flex-col gap-8 mt-10 slide1">
            <p>
              We believe in making a positive impact on people&#39;s lives by
              investing in progressive change.
            </p>
            <p>
              We also believe in using every opportunity as a means to
              &#39;earn&#39; respect as a true visionary and leader of positive
              growth.
            </p>
          </div>
        </div>
        <div className="py-5 md:w-1/2 md:mt-[35%]">
          <div className="flex flex-col gap-0 relative items-center">
            <Image
              src={PhilosophyMtp}
              className="side1 absolute w-[80%] md:w-full"
              alt="Mission Top"
            />
            <Image
              src={PhilosophyMbt}
              className="w-[80%] md:w-full"
              alt="Mission Bottom"
            />
            <div className="lg:text-5xl text-3xl absolute top-28 md:-ml-[90%] sm:-ml-[60%] -ml-[70%] font-branding-bold text-[#0E0E80] text-right overflow-hidden">
              <div className="slide2">
                Our
                <br /> Mission
              </div>
            </div>
          </div>
          <div className="text-2xl text-white text-center px-5 flex flex-col gap-8 mt-10 slide1">
            <p>
              As nation builders, we are focused on improving the quality of
              life through every product and service we offer.
            </p>
            <p>
              Our goal is to become category leaders, attain profitable growth
              and bring pride to the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhilosophyVision;
