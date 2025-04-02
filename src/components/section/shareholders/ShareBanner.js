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
        <div className="absolute h-full w-full">
          <div className="absolute md:left-0 md:bottom-20 bottom-1/2 py-6 px-20 z-20">
            <div className="innerContainer flex flex-col gap-3">
              <p className="text-white text-4xl lg:text-6xl font-branding-medium">
                Shareholders
              </p>
              <p className="text-4xl lg:text-6xl font-branding-medium text-[#45B7E2]">
                Services
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full header_color_black">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        apperentClassName="absolute"
      />
    </div>
  );
}

export default ShareBanner;
