"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/announcement/25.jpg";

function AnnouncementBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage.src,
      data: (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 md:px-10">
          <div className="innerContainer text-center w-full max-w-5xl mx-auto">
            <p className="
            text-white 
            font-branding-medium 
            text-5xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-7xl 
            leading-tight
          ">
              Announcements
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default AnnouncementBanner;
