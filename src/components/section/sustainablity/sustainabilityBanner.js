"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/sustainability/frontImage.png";
import Navbar from "@/components/layout/navbar/Navbar";
function SustainabilityBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="goal-section1 absolute top-[40%] md:right-[10%] text-white z-20 text-5xl text-center font-branding-medium">
          <p className="mt-5 mb-2  text-secondary">Empowering tomorrow,</p>
          <p>by acting today</p>
        </div>
      ),
    },
  ];

  const filter = "";

  return (
    <div className="w-full">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        filter={filter}
        apperentClassName="absolute bg-black opacity-0 z-10"
      />
    </div>
  );
}

export default SustainabilityBanner;
