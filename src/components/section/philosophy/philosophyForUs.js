"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BImage from "@/assests/philosophy/01-b.png";
import EImage from "@/assests/philosophy/02-e.png";
import LImage from "@/assests/philosophy/03-l.png";
import IImage from "@/assests/philosophy/04-i.png";
import EImage1 from "@/assests/philosophy/05-e.png";
import VImage from "@/assests/philosophy/06-v.png";
import EImage2 from "@/assests/philosophy/07-e.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PhilosophyForUs() {
  const [string, Setstring] = useState(` The notion of 'Believe' is what inspired our founder, the respected
            Shri. J. V. Patel, to establish Nesco. His simple belief in
            indigenous growth was steadfast, even in trying times. In all his
            time here, he focused his energies on developing industries that
            could lead to India’s advancement.`)
  const [string2, Setstring2] = useState(` Throughout our corporate history, we have stayed true to this
                philosophy of ‘Believe and all things will be possible'. The result
                of this contagious optimism is the Nesco that you experience today.
                We see ourselves as a company that believes in its employees and
                shareholders. In our clients as well as our products. In the
                services we provide, and the joy that comes with it for everyone
                involved. We believe in enriching and uplifting people’s lives and
                that is what makes people believe in us!`)
  const [expanded, setExpanded] = useState(false);
  const blueSqRef = useRef(null);
  const believeAnimRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [BImage, EImage, LImage, IImage, EImage1, VImage, EImage2];

  useEffect(() => {
    if (blueSqRef.current) {
      autoToggleLines();
      // const observer = new IntersectionObserver(
      //   (entries) => {
      //     if (entries[0].isIntersecting) {
      //       autoToggleLines();
      //     }
      //   },
      //   { threshold: 0.5 }
      // );
      // observer.observe(blueSqRef.current);
      // return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    startSlideShow();
    // if (believeAnimRef.current) {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       if (entries[0].isIntersecting) {
    //         setActiveIndex(0);
    //         startSlideShow();
    //       }
    //     },
    //     { threshold: 0.5 }
    //   );
    //   observer.observe(believeAnimRef.current);
    //   return () => observer.disconnect();
    // }
  }, []);

  function autoToggleLines() {
    if (!blueSqRef.current) return;
    blueSqRef.current.style.opacity = 1;
    setTimeout(() => {
      blueSqRef.current?.classList.remove("lineform");
      autoToggleLines2();
    }, 3000);
  }

  function autoToggleLines2() {
    if (!blueSqRef.current) return;
    blueSqRef.current.style.opacity = 1;
    setTimeout(() => {
      blueSqRef.current.classList.add("lineform");
      autoToggleLines();
    }, 1000);
  }

  function startSlideShow() {
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      startSlideShow();
    }, 4000);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

    // Animation for the first line (top)
    tl.fromTo(
      ".line-top",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power1.inOut" }
    );

    // Animation for the second line (right)
    tl.fromTo(
      ".line-right",
      { scaleY: 0 },
      { scaleY: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5" // Overlap with the previous animation
    );

    // Animation for the third line (bottom)
    tl.fromTo(
      ".line-bottom",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );

    // Animation for the fourth line (left)
    tl.fromTo(
      ".line-left",
      { scaleY: 0 },
      { scaleY: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".letterAnimation1",
  //     { opacity: 0 },
  //     { opacity: 1, duration: 2, repeat: -1 }
  //   );
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3700); // Change image every 1.5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".s11",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        delay: 2, // Delay before animation starts
        scrollTrigger: {
          trigger: ".s11",
          start: "top 80%", // Adjust the start position as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".s12",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".s12",
          start: "bottom 90%", // Adjust the start position as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".s13",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".s13",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".s14",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".s14",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);



  return (
    <section className="mobile-full philosophy-blue-sect inview w-full ">
    
        <div className="blue-sq-box">
          <p
            className="relative z-10 text-center font-bold leading-tight
             text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px]
             text-white"
          >
            For us,{" "}
            <span className="text-[#00b7f1]">
              'Believe'
            </span>{" "}
            is
            <br />
            more than a philosophy.
            <br />
            It is a way of life.
          </p>

          <div
            ref={blueSqRef}
            className="blue-sq-shape animatein visible lineform"
            data-animation="lineform"
            data-animation-delay="200"
            style={{ opacity: 1 }}
          >
            <span className="l1"></span>
            <span className="l2"></span>
            <span className="l3"></span>
            <span className="l4"></span>
          </div>
        </div>

        <div className="ledus-box " style={{ height: "80vh" }}  >
          <p
            className="box-lt text-left text-[177px] animatein slidein--lr-800-ease-600 visible"
            data-animation="slidein--lr-800-ease-600"
            data-animation-delay="200"
          >
            It has led us to become
            <br /> who we are and
            <br /> who we can be.
            <br /> As our founding
            <br /> philosophy, it guides
            <br /> us to enrich and make
            <br /> a difference in people's
            <br /> lives every day!
          </p>
          <div
            className="b-shape-anim animatein fadein-300-ease-0 startanim visible"
            data-animation="fadein-300-ease-0 startanim"
            data-animation-delay="200"
          >
            <div id="believe-anim" ref={believeAnimRef}className="
   relative
  translate-y-8
  md:translate-y-[-24px]
  ">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`img-item ${index === activeIndex ? "active" : ""
                    }`}
                >
                  <Image
                    src={img}
                    alt="Believe Letter"
                  // width={50}
                  // height={50}
                  />
                </div>
              ))}
            </div>
          </div>
          <p
            className={`box-rt animatein slideinsmall--rl-800-ease-600 visible transition-all duration-500
    ${expanded
                ? "max-h-[520px] overflow-y-auto"
                : "max-h-[520px] overflow-hidden md:max-h-none"
              }
  `}
          >
            {string}

            {!expanded && (
              <span className="block mt-4">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-[#42f6f6] bg-blue-800 px-10 py-3 font-semibold"
                >
                  Read more
                </button>
              </span>
            )}

            {expanded && (
              <>
                <br />
                <br />
                {string2}

                <span className="block mt-6">
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="text-[#42f6f6] bg-blue-800 px-10 py-3 font-semibold"
                  >
                    Read less
                  </button>
                </span>
              </>
            )}

          </p>



        </div>
    </section>
  );
}

export default PhilosophyForUs;
