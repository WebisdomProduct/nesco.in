"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// 🔹 Hard-coded FALLBACK images (unchanged)
import buildingsImage from "@/assests/nesco-business-page/nesco-reality-elements/1.jpg";
import realtyLogo from "@/assests/nesco-business-page/nesco-reality-elements/2.png";

function RealtyHero() {
  const PAGE_NAME = "Nesco Reality";
  const BASE_URL =
    "https://nesco-backend-j567.onrender.com/api/v1/business/banner";

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
        console.warn("Using fallback hero images");
        setBanner(null);
      }
    };

    fetchBanner();
  }, []);

  // ✅ Decide images (backend OR fallback)
  const backgroundImage = isMobile
    ? banner?.mobileImage || buildingsImage
    : banner?.image1 || buildingsImage;

  const logoImage = banner?.image2 || realtyLogo;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Nesco Realty Modern Buildings"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white/70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={logoImage}
            alt="Nesco Realty Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RealtyHero;
