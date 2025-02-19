"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/shareHolder/banner.jpg";
// import sebiImage from "@/assests/sebi/image.png";
import Navbar from "@/components/layout/navbar/Navbar";
function ShareBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute bg-blue-800 bg-opacity-50 md:right-0 py-6 px-20 z-20">
          <div className="innerContainer text-center">
            <p className="text-white sm:text-xl md:text-4xl lg:text-6xl font-branding-semibold">
              Shareholders
            </p>
            <p className="text-white sm:text-xl md:text-4xl lg:text-6xl font-branding-semibold">
              Services
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default ShareBanner;
