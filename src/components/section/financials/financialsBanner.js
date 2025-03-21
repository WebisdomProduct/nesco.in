"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/financials/image.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
function FinancialsBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      isOpacity: true,
      data: (
        <div className="absolute z-20 md:top-[30%] left-[10%]">
          <div className="innerContainer text-center">
            <p className="text-[#E1FB80] md:text-[4rem] text-5xl font-branding-medium  text-left ">
              Our numbers
            </p>

            <p className="md:text-[4rem] text-5xl text-white text-left font-branding-medium">
              {" "}
              tell our story
            </p>
          </div>
        </div>
      ),
    },
  ];

  const filter = "";

  return (
    <div className="w-full">
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        filter={filter}
        height1="h-full"
      />
    </div>
  );
}

export default FinancialsBanner;
