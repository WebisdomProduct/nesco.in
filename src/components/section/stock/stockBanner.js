"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/stock/Layer 43.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
function StockBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute font-branding-semibold md:text-[5rem] text-[3.5rem] flex gap-2 z-20 md:left-20">
          <span className="text-white">Stock</span>
          <span className="text-blue-600">Watch</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default StockBanner;
