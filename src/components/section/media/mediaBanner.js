import React from "react";

const desktopImage = "/assets/media/media-banner.jpg";
const mobileImage = "/assets/media/media-banner-mobile.png";

export default function MediaBanner() {
  return (
    <section className="w-full min-h-screen flex items-center justify-start relative">
      
      {/* Desktop Image */}
      <img
        src={desktopImage}
        alt="media banner desktop"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.85)" }}
      />

      {/* Mobile Image */}
      <img
        src={mobileImage}
        alt="media banner mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.85)" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full md:w-[60%] lg:w-[40%] px-6 md:px-8 py-12 md:py-24">
        <div className="bg-[#5b5ba6]/80 rounded-lg p-6 md:p-12">
          <h1
            className="text-2xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Get ready for<br />the upcoming Paddy Fields 2018!
          </h1>
        </div>
      </div>
    </section>
  );
}
