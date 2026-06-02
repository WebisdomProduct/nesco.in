'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

// 🔹 Fallback background image (hard-coded stays)
import fallbackWeldingImage from '@/assests/nesco-business-page/Indabrator-Elements/51.jpg';

// 🔹 Logo remains hard-coded
import indabratorLogo from '@/assests/nesco-business-page/Indabrator-Elements/50.png';

const PAGE_NAME = 'Engineering';
const BASE_URL = 'https://nesco-backend-1.onrender.com/api/v1/business/banner';

function IndabratorHero() {
  const [banner, setBanner] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= SCREEN SIZE CHECK ================= */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  /* ================= FETCH BANNER ================= */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setBanner(res.data?.data || null);
      } catch (err) {
        console.error('Failed to load engineering hero banner');
        setBanner(null);
      }
    };

    fetchBanner();
  }, []);

  /* ================= IMAGE SOURCES ================= */
  const backgroundImage = isMobile
    ? banner?.mobileImage || fallbackWeldingImage
    : banner?.image1 || fallbackWeldingImage;

  /* ================= UI ================= */
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Industrial welding with sparks"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo Container */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white/70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={indabratorLogo}
            alt="Indabrator Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default IndabratorHero;
