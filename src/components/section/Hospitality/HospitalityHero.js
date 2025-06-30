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
            <div 
        className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[200px] sm:w-[380px] md:w-[600px] hidden sm:flex overflow-hidden"
        style={{ borderRadius: "5rem" }}
      >
        {/* Fixed-size container for the logo */}
        <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
          <Image
            src={foodsLogo}
            alt="Nesco Realty Logo"
            width={210}
            height={60}
            className="object-contain scale-[1.45] sm:scale-[1.7] md:scale-[1.85] transform-gpu"
            style={{ marginLeft: "5rem" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HospitalityHero;