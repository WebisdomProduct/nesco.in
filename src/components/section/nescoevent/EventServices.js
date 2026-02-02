"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const PAGE_NAME = "Nesco Events";

// APIs
const BANNER_API =
  "https://nesco-backend-j567.onrender.com/api/v1/business/banner";
const HERO_INTRO_API =
  "https://nesco-backend-j567.onrender.com/api/v1/business/hero-intro";

function EventServices() {
  const [bgImage, setBgImage] = useState(null);
  const [heading, setHeading] = useState("Where Every Detail Matters");
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  const fetchData = async () => {
    try {
      const [bannerRes, heroRes] = await Promise.all([
        axios.get(`${BANNER_API}/page/${PAGE_NAME}`),
        axios.get(`${HERO_INTRO_API}/page/${PAGE_NAME}`),
      ]);

      // Background Image
      if (bannerRes.data?.data?.image1) {
        setBgImage(bannerRes.data.data.image1);
      }

      // Heading Text
      if (heroRes.data?.data?.heading1) {
        setHeading(heroRes.data.data.heading1);
      }
    } catch (error) {
      console.error("Failed to load Event Services data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return null;

  return (
    <div className="relative w-full lg:h-screen overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Event Services Background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ================= TEXT OVERLAY ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-0">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl text-white">
          <h2
            className="
              text-[48px] leading-tight
              
              font-bold
            "
            style={{ fontFamily: "BrandingSemibold" }}
          >
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default EventServices;
