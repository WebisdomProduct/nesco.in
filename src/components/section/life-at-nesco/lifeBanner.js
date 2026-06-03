"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Banner from "@/components/common/MainBanner/Banner";
// import Navbar from "@/components/layout/navbar/Navbar";

const API_BASE =
  "https://nesco-backend-1.onrender.com/api/v1/life_at_nesco/banner";

function LifeBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  /* ===========================
     Fetch Banner Data
  ============================ */
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(API_BASE);
        setBanners(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching life banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  /* ===========================
     Build Slider Data (SAFE)
  ============================ */
  const SliderData = useMemo(() => {
    return banners.map((item) => ({
      image: item.image,
      mobileImage: item.mobileImage,
      data: (
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 px-10 md:px-20 text-white z-20">
          <p className="mb-2 text-2xl md:text-4xl font-branding-medium">
            {item.paragraph1}
          </p>

          <p className="mb-2 text-2xl md:text-4xl font-branding-medium">
            {item.paragraph2}
          </p>

          <p className="text-[#08A8DD] text-4xl md:text-7xl mb-4 font-branding-medium">
            {item.paragraph3}
          </p>

          <p className="text-lg md:text-2xl mt-6 font-branding-medium max-w-3xl">
            {item.paragraph4}
          </p>
        </div>
      ),
    }));
  }, [banners]);

  /* ===========================
     Render Guard (CRITICAL)
  ============================ */
  if (loading || SliderData.length === 0) return null;

  return (
    <div className="w-full section mt-20">
      {/* <Navbar activeSlide={activeSlide} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default LifeBanner;
