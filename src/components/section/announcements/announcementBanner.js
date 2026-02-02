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
      image: bannerImage.src, // ✅ REQUIRED FIX
      data: (
        <div className="absolute md:right-20 px-10 z-20 flex justify-center items-center h-full top-0">
          <div className="innerContainer text-center">
            <p className="text-white text-[3.5rem] lg:text-[5rem] font-branding-medium">
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
