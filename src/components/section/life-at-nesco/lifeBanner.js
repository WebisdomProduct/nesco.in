"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/careers/73.jpeg";
import Navbar from "@/components/layout/navbar/Navbar";
function LifeBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:top-[50%] md:left-[10%] top:[20%] md:px-20 px-10 py-6  text-white z-20 text-4xl font-branding-medium">
            <p className="mb-2">Be celebrated, recognised</p>
            <p className="mb-2">And valued.</p>
            <p className="text-[#08A8DD] md:text-7xl text-4xl mb-4">Believe</p>
            <p className="text-lg md:text-2xl md:w-[100%] mt-6 font-branding-medium">
              At Nesco, we see ourselves as a family and we are all about giving our employees the breadth to expand and explore.
            </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full section">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default LifeBanner;
