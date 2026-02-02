import React from "react";
import Link from "next/link";

export default function AwardsBanner() {
  return (
    <section className="w-full h-[320px] md:h-[400px] lg:h-[420px] flex items-end justify-start relative overflow-hidden">
      <img
        src="https://www.okayplusgroup.com/images/awards-achievements-top-banner-mb.jpg"
        alt="Awards Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{objectPosition: 'center'}}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-60 z-10"></div>
      <div className="relative z-20 w-full md:w-[90%] mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary drop-shadow"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Awards & Recognition
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 font-branding-medium drop-shadow">
          Celebrating excellence and achievement across all our divisions
        </p>
      </div>
    </section>
  );
}
