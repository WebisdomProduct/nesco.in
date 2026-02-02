"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC FALLBACKS (LOCKED DESIGN) ================= */
import businessMeeting from "@/assests/nesco-business-page/bec-elements/32.png";
import becLogo from "@/assests/nesco-business-page/bec-elements/31.png";

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-j567.onrender.com/api/v1/business/banner";

function BecHero() {
  const [banner, setBanner] = useState(null);

  /* ================= FETCH BANNER ================= */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setBanner(res.data?.data || null);
      } catch (err) {
        console.error("Banner fetch failed", err);
        setBanner(null);
      }
    };

    fetchBanner();
  }, []);

  /* ================= FINAL IMAGE SOURCES ================= */
  const backgroundImage = banner?.image1 || businessMeeting;
  const logoImage = banner?.image2 || becLogo;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Bombay Exhibition Center"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= LOGO CARD ================= */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={logoImage}
            alt="Bombay Exhibition Center Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BecHero;
