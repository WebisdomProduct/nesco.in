import React from "react";

export default function MediaBanner() {
  return (
    <section className="w-full min-h-screen flex items-center justify-start relative">
      <img
        src="https://nesco.in/assets/images/media/banner/media-banner.jpg"
        alt="media banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.85)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-40 z-10"></div>
      <div className="relative z-20 w-full md:w-[60%] lg:w-[40%] px-8 py-12 md:py-24">
        <div className="bg-[#5b5ba6]/80 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow" style={{ fontFamily: 'BrandingSemibold' }}>
            Get ready for<br />the upcoming Paddy Fields 2018!
          </h1>
        </div>
      </div>
    </section>
  );
}
