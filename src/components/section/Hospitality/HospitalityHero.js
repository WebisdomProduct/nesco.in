"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import foodImage from "@/assests/nesco-business-page/nesco-food-elements/20.jpg";
// Import the Nesco Foods logo
import foodsLogo from "@/assests/nesco-business-page/nesco-food-elements/19.png";

function HospitalityHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={foodImage}
          alt="Nesco Foods Gourmet Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Logo positioned in top right - with reduced scaling */}
      <div className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-70 z-20 flex items-center rounded-full w-[180px] sm:w-[320px] md:w-[500px] hidden sm:flex overflow-hidden">
        <div className="relative flex items-center overflow-hidden pl-2 sm:pl-4 md:pl-6">
          <Image
            src={foodsLogo}
            alt="Nesco Foods Logo"
            width={210}
            height={60}
            className="object-contain scale-[1.0] sm:scale-[1.1] md:scale-[1.2] transform-gpu"
          />
        </div>
      </div>
    </section>
  );
}

export default HospitalityHero;