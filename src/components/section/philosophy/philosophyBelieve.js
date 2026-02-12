"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

const API_BASE =
  "https://nesco-backend-j567.onrender.com/api/v1/about/philosophy";

function PhilosophyBelieve() {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [philosophy, setPhilosophy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* ------------------ Detect Mobile ------------------ */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ------------------ Fetch Data ------------------ */
  const fetchPhilosophy = async () => {
    try {
      const res = await axios.get(API_BASE);
      if (res.data?.data?.length > 0) {
        setPhilosophy(res.data.data[0]);
      }
    } catch (err) {
      console.error("Failed to fetch philosophy:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ Initial Timers ------------------ */
  useEffect(() => {
    fetchPhilosophy();

    const timer = setTimeout(() => setShowContent(true), 1000);
    const timer1 = setTimeout(() => setShowContent1(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  /* ------------------ GSAP Animations ------------------ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (showContent) {
        gsap.fromTo(".blue-stripe", { opacity: 0 }, { opacity: 1, duration: 2 });
      }

      if (showContent1) {
        gsap.fromTo(
          ".content",
          { width: 0, opacity: 0 },
          { width: "100%", opacity: 1, duration: 2 }
        );

        gsap.fromTo(
          ".content2",
          { x: 2000, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
      }
    });

    return () => ctx.revert();
  }, [showContent, showContent1]);

  /* ------------------ Loading ------------------ */
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  /* ------------------ Media ------------------ */
  const videoUrl =
    philosophy?.videoUrl ||
    philosophy?.video ||
    "https://anandrathiimages.s3.ap-south-1.amazonaws.com/5945347_Cluster_Galaxies_3840x2160.mp4";

  const mobileImage =
    philosophy?.mobileImage ||
    "https://via.placeholder.com/800x1200";

  const description =
    philosophy?.description ||
    "A whole universe stands waiting to be explored. And yet it may remain undiscovered, unless you believe in taking the first step!";

  /* ------------------ Render ------------------ */
  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">

      {/* ================= Background Media ================= */}
      <div className="w-full h-full absolute">
        {isMobile ? (
          <img
            src={mobileImage}
            alt="Philosophy Mobile"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>

      {/* ================= Animated Content ================= */}
      {showContent && (
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">

          {/* Overlay */}
          <div className="absolute w-full h-full bg-[#05547A] opacity-40"></div>

          {/* Blue Stripes */}
          <div className="blue-stripe absolute w-[550vw] h-[550vh] flex justify-center items-center gap-20 rotate-[40deg] ml-[30rem] z-20">
            <div className="h-full w-32 bg-[#101485] opacity-80 hidden md:block"></div>
            <div className="h-full w-32 bg-[#101485] opacity-80"></div>
            <div className="h-full w-32 bg-[#101485] opacity-80"></div>
            <div className="h-full w-[900px] bg-[#101485] opacity-80"></div>
          </div>

          {showContent1 && (
            <div className="content absolute left-0 w-full h-full flex xl:flex-row flex-col gap-10 items-center overflow-hidden">

              {/* BELIEVE */}
              <div className="relative xl:w-[75%] w-full h-[75%] flex justify-center items-center">
                <p className="md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[7rem] font-branding-bold text-white md:left-[10%] left-[1%] absolute">
                  BEL<br />IEVE
                </p>
              </div>

              {/* Description */}
              <div className="text-left xl:h-full xl:w-[25%] w-full xl:block flex justify-center">
                <p className="z-30 text-[#01aeec] xl:w-60 sm:w-1/2 w-[90%] relative xl:top-[50%] my-10 text-[24px] content2">
                  {description}
                </p>
              </div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default PhilosophyBelieve;
