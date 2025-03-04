"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/announcement/25.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
function AnnouncementBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:right-20 px-10 z-20 flex justify-center items-center h-[70vh] top-0">
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
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        heightClassName="h-[70vh] "
      />
    </div>
  );
}

export default AnnouncementBanner;
