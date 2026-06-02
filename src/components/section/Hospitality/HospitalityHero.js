"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// 🔒 Hard-coded fallback assets (DO NOT CHANGE)
import foodImage from "@/assests/nesco-business-page/nesco-food-elements/20.jpg";
import foodsLogo from "@/assests/nesco-business-page/nesco-food-elements/19.png";

// ================= API ENDPOINTS =================
const BANNER_API =
  "https://nesco-backend-1.onrender.com/api/v1/business/banner/page/Hospitality";
const HERO_API =
  "https://nesco-backend-1.onrender.com/api/v1/business/hero-intro/page/Hospitality";

function HospitalityHero() {
  // ================= STATE =================
  const [banner, setBanner] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [heading, setHeading] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  // ================= SCREEN SIZE CHECK =================
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ================= FETCH CMS DATA =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bannerRes, heroRes] = await Promise.all([
          axios.get(BANNER_API),
          axios.get(HERO_API),
        ]);

        // Banner image (desktop + mobile support)
        setBanner(bannerRes.data?.data || null);

        // Hero intro text
        if (heroRes.data?.data) {
          setHeading(heroRes.data.data.heading1 || "");
          setParagraphs(heroRes.data.data.paragraph || []);
        }
      } catch (err) {
        console.warn("CMS data unavailable — using hard-coded fallback");
        setBanner(null);
      }
    };

    fetchData();
  }, []);

  // ================= IMAGE SOURCES =================
  const backgroundImage = isMobile
    ? banner?.mobileImage || foodImage
    : banner?.image1 || foodImage;

  // ================= UI =================
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} // ✅ Mobile-aware CMS first, fallback second
          alt="Nesco Foods Gourmet Experience"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= LOGO (UNCHANGED) ================= */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white/70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[250px] h-[140px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={foodsLogo}
            alt="Nesco Hospitality Logo"
            width={250}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityHero;
