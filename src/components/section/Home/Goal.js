import React from "react";
import GoalImage from "@/assests/Home/goal.png";
import Image from "next/image";

export default function Goal() {
  return (
    <section className="w-full h-screen bg-gray-200">
      <div className="grid md:grid-cols-2 gap-8 pt-24 items-center w-[81%] mx-auto ">
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src={GoalImage}
            alt="Illustration of a person with a flag standing on a light bulb"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="">
          <div className="">
            <h1
              style={{ fontFamily: "BrandingSemibold" }}
              className="text-[#1e3a8a] text-4xl md:text-5xl lg:text-6xl font-BrandingSemibold font-bold"
            >
              One goal. 8 decades.
            </h1>
            <h2 className="text-[#1e3a8a] mt-3 text-4xl md:text-5xl font-branding-medium">
              Infinite possibilities
            </h2>
          </div>
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl md:text-3xl text-black font-branding-medium">
              In 1939, we set out on our goal to make India stand out on the
              world map.
            </h2>
            <p className="text-gray-700 text-[19px] text-justify font-branding-medium tracking-wider leading-relaxed">
              From designing and manufacturing engineering solutions, the Nesco
              Group has diversified into multiple industries including
              Exhibitions, Real Estate, Hospitality, Events and Entertainment.
              Our inspirational growth over the last eight decades only shows
              how a vision can empower limitless possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
