"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "@/components/common/MainBanner/Banner";
import Navbar from "@/components/layout/navbar/Navbar";

// 🔁 Change this API to your actual endpoint
const API_BASE = "https://nesco-backend-j567.onrender.com/api/v1/life_at_nesco/banner";

function LifeBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [banners, setBanners] = useState([]);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  /* ===========================
     Fetch Banner Data
  ============================ */
  const fetchBanners = async () => {
    try {
      const res = await axios.get(API_BASE);
      console.log(res);
      setBanners(res.data.data || []);
    } catch (error) {
      console.error("Error fetching life banners:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ===========================
     Build Slider Data
  ============================ */
  const SliderData = banners.map((item) => ({
    image: item.image, // full image URL from backend
    data: (
      <div className="absolute md:top-[50%] md:left-[10%] md:px-20 px-10 py-6 text-white z-20 text-4xl font-branding-medium">

        <p className="mb-2">{item.paragraph1}</p>

        <p className="mb-2">{item.paragraph2}</p>

        <p className="text-[#08A8DD] md:text-7xl text-4xl mb-4">
          {item.paragraph3}
        </p>

        <p className="text-lg md:text-2xl md:w-[100%] mt-6 font-branding-medium">
          {item.paragraph4}
        </p>

      </div>
    ),
  }));

  return (
    <div className="w-full section">
      {/* <Navbar activeSlide={activeSlide} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default LifeBanner;
