"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import weldingImage from "@/assests/nesco-business-page/Indabrator-Elements/51.jpg";
// Import the Indabrator logo
import indabratorLogo from "@/assests/nesco-business-page/Indabrator-Elements/50.png";

function IndabratorHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={weldingImage}
          alt="Industrial welding with sparks"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Logo positioned for all screen sizes */}
      <div 
              className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[200px] sm:w-[380px] md:w-[600px] hidden sm:flex overflow-hidden"
              style={{ borderRadius: "5rem" }}
            >
              {/* Fixed-size container for the logo */}
              <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
                <Image
                  src={indabratorLogo}
                  alt="Nesco Realty Logo"
                  width={210}
                  height={60}
                  className="object-contain scale-[1.45] sm:scale-[1.6] md:scale-[1.75] transform-gpu"
                  style={{ marginLeft: "5rem" }}
                />
              </div>
            </div>
    </section>
  );
}

export default IndabratorHero;