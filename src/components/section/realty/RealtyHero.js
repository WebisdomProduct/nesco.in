"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import buildingsImage from "@/assests/nesco-business-page/nesco-reality-elements/1.jpg";
// Import the Nesco Realty logo
import realtyLogo from "@/assests/nesco-business-page/nesco-reality-elements/2.png";

function RealtyHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={buildingsImage}
          alt="Nesco Realty Modern Buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Logo positioned in top right - size unchanged */}
      <div className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-70 z-20 flex items-center rounded-full w-[180px] sm:w-[320px] md:w-[500px] hidden sm:flex overflow-hidden">
        <div className="relative flex items-center overflow-hidden pl-2 sm:pl-4 md:pl-6">
          <Image
            src={realtyLogo}
            alt="nesco realty Logo"
            width={250}
            height={90}
            className="object-contain scale-[1.3] sm:scale-[1.4] md:scale-[1.5] transform-gpu"
          />
        </div>
      </div>
    </section>
  );
}

export default RealtyHero;