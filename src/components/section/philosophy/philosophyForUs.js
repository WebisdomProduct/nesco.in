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
  useEffect(() => {
    import("./index.css");
    import("./main.css");
    import("./media.css");
    import("./plugin.css");
  }, []);
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

  // return (
  //   <div className="bg-[#0F0E9F] flex flex-col justify-center items-center">
  //     <div className="lg:h-screen md:h-[60vh] w-full text-white xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] md:leading-[5rem] text-center font-branding-semibold flex flex-col justify-center items-center relative">
  //       <div className="w-full h-full relative flex justify-center items-center">
  //         <div className="relative hidden w-[76rem] h-[34rem] lg:flex justify-center items-center">
  //           {/* Top Line */}
  //           <div className="line-top absolute top-0 left-[43%] w-[57%] h-3 bg-[#00B7F1] rounded-full transform origin-left"></div>

  //           {/* Right Line */}
  //           <div className="line-right absolute top-1 right-0 w-3 h-[47rem] bg-[#00B7F1] rounded-full transform origin-top rotate-45"></div>

  //           {/* Bottom Line */}
  //           <div className="line-bottom absolute bottom-0 left-[56.4%] w-[56.5%] h-3 bg-[#00B7F1] rounded-full transform origin-left rotate-180"></div>

  //           {/* Left Line */}
  //           <div className="line-left absolute top-[100%] -left-3 w-3 h-[48rem] bg-[#00B7F1] rounded-full transform origin-top rotate-[225deg]"></div>
  //         </div>
  //       </div>
  //       <div className=" s11 bg-[#0F0E9F] top-[130px] z-30 md:absolute my-10 md:my-0">
  //         <p>For us,</p>
  //         <p className="text-[#00B7F1]">'Believe'</p>
  //         <p>is</p>
  //         <p>more than a philosophy</p>
  //         <p>It is a way of life.</p>
  //       </div>
  //     </div>
  //     <div
  //       style={{
  //         padding: 0,
  //         height: 810,
  //         width: "100%",
  //         position: "relative",
  //         zIndex: 2,
  //       }}
  //     >
  //       {/* <div className="lg:h-screen relative w-full flex flex-col s14"> */}
  //       {/* <div className="bg-[#00B7F1] md:w-[1600px] lg:w-full 2xl:w-[2030px] h-[1000px] skew-[46deg] absolute -bottom-1/2"></div> */}
  //       {/* <div className="hidden lg:block leading-0 absolute left-[26%]">
  //         <div
  //           className={`letterAnimation text-[30rem] text-white flex justify-center items-center`}
  //         > */}
  //       <div
  //         style={{
  //           position: "absolute",
  //           width: "36%",
  //           left: "26%",
  //           top: 0,
  //           height: 550,
  //         }}
  //       >
  //         <div
  //           style={{
  //             position: "absolute",
  //             zIndex: 3,
  //             height: "100%",
  //             width: "100%",
  //           }}
  //           className="changing-images-2"
  //         >
  //           <div className="changing-images">
  //             {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPy4QWtfglbm7rI4dSi6dvh4n8ZExI828MA&s" /> */}
  //             <Image
  //               key={currentIndex}
  //               src={images[currentIndex]}
  //               alt="B letter"
  //               className="w-full h-full object-cover "
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       {/* </div>
  //       </div> */}
  //       {/* <div className="lg:h-screen relative w-full flex flex-col s14">
  //       <div className="bg-[#00B7F1] md:w-[1600px] lg:w-full 2xl:w-[2030px] h-[1000px] skew-[46deg] absolute -bottom-1/2"></div>
  //       <div className="hidden lg:block leading-0 absolute left-[26%]">
  //         <div
  //           className={`letterAnimation text-[30rem] text-white flex justify-center items-center`}
  //         >
  //           <div className="leading-0 rotate-[-136deg] xl:w-[70%] w-[50%] p-3 relative mt-12 transition-all duration-1000 ease-in-out ">
  //             <Image
  //               key={currentIndex}
  //               src={images[currentIndex]}
  //               alt="B letter"
  //               className="w-full h-full object-cover "
  //             />
  //           </div>
  //         </div>
  //       </div> */}
  //       {/* <div className="relative w-full h-full flex lg:flex-row flex-col justify-center items-center">
  //         <p className="text-[#00B7F1] lg:w-72 w-[90%] lg:text-right text-center xl:left-[10%] left-[0%] top-[20%] text-2xl font-branding-semibold lg:absolute s12">
  //           It has led us to become who we are and
  //           <br /> who we can be.
  //           <br /> As our founding philosophy, it guides us to enrich and make a
  //           difference in people's lives every day!
  //         </p>
  //         <div className="lg:hidden h-[400px] justify-center items-center flex w-[600px]">
  //           <div className={`letterAnimation flex justify-center items-center`}>
  //             <div className="leading-0 rotate-[-136deg] w-[50%] p-3 relative mt-12 transition-all duration-1000 ease-in-out">
  //               <Image
  //                 key={currentIndex}
  //                 src={images[currentIndex]}
  //                 alt="B letter"
  //                 className="w-full h-full object-cover "
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="text-white xl:w-[27rem] lg:w-[20rem] w-[90%] xl:right-[7%] right-10 flex flex-col gap-10 xl:top-[35%] top-[30%] text-base lg:absolute py-10 lg:py-0 -mt-20 lg:-mt-5 s13 lg:text-lg">
  //           <p>
  //             The notion of 'Believe' is what inspired our founder, the
  //             respected Shri. J. V. Patel, to establish Nesco. His simple belief
  //             in indigenous growth was steadfast, even in trying times. In all
  //             his time here, he focused his energies on developing industries
  //             that could lead to India&#39;s advancement.
  //           </p>
  //           <p>
  //             Throughout our corporate history, we have stayed true to this
  //             philosophy of &#39;Believe and all things will be possible'. The
  //             result of this contagious optimism is the Nesco that you
  //             experience today. We see ourselves as a company that believes in
  //             its employees and shareholders. In our clients as well as our
  //             products. In the services we provide, and the joy that comes with
  //             it for everyone involved. We believe in enriching and uplifting
  //             people&#39;s lives and that is what makes people believe in us!
  //           </p>
  //         </div>
  //       </div> */}
  //     </div>
  //   </div>
  // );

  return (
    <section className="mobile-full philosophy-blue-sect inview">
      <div className="container">
        <div className="blue-sq-box">
          <p
            className="animatein slideinsmall--lr-500-ease-500 visible"
            data-animation="slideinsmall--lr-500-ease-500"
            data-animation-delay="2500"
          >
            For us, <span className="txt-lt-blue">'Believe'</span> is
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

        <div className="ledus-box">
          <p
            className="box-lt animatein slidein--lr-800-ease-600 visible"
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
            <div id="believe-anim" ref={believeAnimRef}>
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`img-item ${
                    index === activeIndex ? "active" : ""
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
            className="box-rt animatein slideinsmall--rl-800-ease-600 visible"
            data-animation="slideinsmall--rl-800-ease-600"
            data-animation-delay="200"
          >
            The notion of 'Believe' is what inspired our founder, the respected
            Shri. J. V. Patel, to establish Nesco. His simple belief in
            indigenous growth was steadfast, even in trying times. In all his
            time here, he focused his energies on developing industries that
            could lead to India’s advancement.
            <br />
            <br /> Throughout our corporate history, we have stayed true to this
            philosophy of ‘Believe and all things will be possible'. The result
            of this contagious optimism is the Nesco that you experience today.
            We see ourselves as a company that believes in its employees and
            shareholders. In our clients as well as our products. In the
            services we provide, and the joy that comes with it for everyone
            involved. We believe in enriching and uplifting people’s lives and
            that is what makes people believe in us!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophyForUs;
