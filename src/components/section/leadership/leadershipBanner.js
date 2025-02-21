"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/leadership/LeaderBanner.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
import featherImage from "@/assests/leadership/feather.png";
import Image from "next/image";

function LeadershipBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:right-20 text-center text-white z-20 xl:w-[40%] lg:w-[50%] flex flex-col gap-5 px-3">
          <p className="md:text-7xl text-6xl relative">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन{" "}
            <div className="absolute -top-[3rem] transform -translate-y-1/2 -left-5">
              <Image
                src={featherImage}
                alt="Peacock feather"
                className="w-[15rem] h-[15rem]"
              />
            </div>
          </p>
          <p>The Bhagavad Gita, Chapter II, Verse 47 </p>
          <p className="text-3xl mt-5">
            Your right is in action, never to its fruits, A verse that was
            <span className="md:text-4xl text-3xl font-branding-semibold">
              {" "}
              Jethabhai V. Patel's
            </span>{" "}
            guiding principle in life.
          </p>
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

export default LeadershipBanner;
