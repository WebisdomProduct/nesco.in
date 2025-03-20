"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/Overview/18.png";
// import sebiImage from "@/assests/sebi/image.png";
import Navbar from "@/components/layout/navbar/Navbar";
function OverviewBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <>
          <div className="bg-[#4E4F9F] z-20 absolute left-0 bg-opacity-90">
            <div className="text-center px-10 py-8">
              <p className="text-white sm:text-xl md:text-2xl font-branding-medium ">
                To be constantly
              </p>

              <p className="text-blue-300 text-xl sm:text-2xl md:text-4xl font-branding-medium">
                {" "}
                dynamic is growth.
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
                To be constantly
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl  font-branding-medium">
                learning is wisdom
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full ">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        apperentClassName=""
      />
    </div>
  );
}

export default OverviewBanner;
