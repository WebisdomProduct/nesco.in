"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= FALLBACK IMAGES (DO NOT REMOVE) ================= */
import eventBackground from "@/assests/nesco-business-page/nesco-events/68.jpg";
import nescoEventsLogo from "@/assests/nesco-business-page/nesco-events/69.png";

/* ================= CONFIG ================= */
const PAGE_NAME = "Nesco Events";
const BASE_URL =
  "https://nesco-backend-1.onrender.com/api/v1/business/banner";

/* ================= COMPONENT ================= */
function EventHero() {
  const [banner, setBanner] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= SCREEN SIZE CHECK ================= */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* ================= FETCH BANNER ================= */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setBanner(res.data?.data || null);
      } catch (error) {
        console.warn(
          "Event banner CMS unavailable — using fallback images"
        );
        setBanner(null);
      }
    };

    fetchBanner();
  }, []);

  /* ================= IMAGE SOURCES ================= */
  const backgroundSrc = isMobile
    ? banner?.mobileImage || eventBackground
    : banner?.image1 || eventBackground;

  const logoSrc = banner?.image2 || nescoEventsLogo;

  /* ================= UI ================= */
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt="Nesco Events Concert Crowd"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Logo Container */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white/70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={logoSrc}
            alt="Nesco Events Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default EventHero;
