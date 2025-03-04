"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/sebi/image.jpg";
// import sebiImage from "@/assests/sebi/image.png";
import Navbar from "@/components/layout/navbar/Navbar";
function SebiBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute z-20 flex justify-end md:top-[25%] md:right-20">
          <div className="text-5xl text-center md:w-[55%]">
            Disclosures under Regulation <br /> 46 of SEBI (LODR) Regulations,
            2015 & others statuory information
          </div>
        </div>
      ),
      isOpacity: "true",
    },
  ];
  const filter = "absolute object-right";

  return (
    <div className="w-full">
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        heightClassName="h-[90vh] "
        filter={filter}
      />
    </div>
  );
}

export default SebiBanner;
