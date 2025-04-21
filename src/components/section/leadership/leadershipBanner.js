"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/leadership/LeaderBanner.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
import featherImage from "@/assests/leadership/feather.png";
import LeaderBanner from "@/assests/leadership/Leadership.jpg";
import LeaderBanner1 from "@/assests/leadership/Leadership_1.jpg";
import LeaderBanner2 from "@/assests/leadership/Leadership_2.jpg";
import LeaderBanner3 from "@/assests/leadership/Leadership_3.jpg";
import LeaderBanner4 from "@/assests/leadership/Leadership_4.jpg";
import LeaderBanner5 from "@/assests/leadership/Leadership_5.jpg";
import Image from "next/image";
import LeadershipBanner1 from "@/components/common/MainBanner/leadershipBanner";

function LeadershipBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:right-20 text-center text-white z-20 xl:w-[40%] lg:w-[50%] top-[30%] flex flex-col gap-5 px-3">
          <p className="md:text-7xl text-4xl relative font-branding-bold md:leading-[5.4rem] mx-10">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन{" "}
            <div className="absolute -top-[3rem] transform -translate-y-1/2 -left-9">
              <Image
                src={featherImage}
                alt="Peacock feather"
                className="md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem]"
              />
            </div>
          </p>
          <p>The Bhagavad Gita, Chapter II, Verse 47 </p>
          <p className="md:text-3xl text-xl mt-5">
            Your right is in action, never to its fruits,
            <p>
              {" "}
              A verse that was
              <span className="md:text-4xl text-3xl font-branding-semibold">
                {" "}
                Jethabhai V. Patel's
              </span>{" "}
              guiding principle in life.
            </p>
          </p>
        </div>
      ),
    },
    {
      image: LeaderBanner,
      data: <div></div>,
    },
    {
      image: LeaderBanner1,
      data: <div></div>,
    },
    {
      image: LeaderBanner2,
      data: <div></div>,
    },
    {
      image: LeaderBanner3,
      data: <div></div>,
    },
    {
      image: LeaderBanner4,
      data: <div></div>,
    },
    {
      image: LeaderBanner5,
      data: <div></div>,
    },
  ];

  return (
    <div className="w-full ">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <LeadershipBanner1
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
}

export default LeadershipBanner;
