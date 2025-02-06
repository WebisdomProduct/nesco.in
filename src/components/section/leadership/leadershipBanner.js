"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/leadership/image.png";
import Navbar from "@/components/layout/navbar/Navbar";
function LeadershipBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
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

export default LeadershipBanner;
