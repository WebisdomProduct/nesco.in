"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import foodImage from "@/assests/nesco-business-page/nesco-food-elements/20.jpg";
// Import the Nesco Foods logo
import foodsLogo from "@/assests/nesco-business-page/nesco-food-elements/19.png";

function HospitalityHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={foodImage}
          alt="Nesco Foods Gourmet Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>



      {/* Logo Container - unified style */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[250px] h-[140px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={foodsLogo}
            alt="Nesco Hospitality Logo"
            width={250}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityHero;
