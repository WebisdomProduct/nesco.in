"use client";
import React from "react";
import Image from "next/image";

// Import just the one hero background image
import businessMeeting from "@/assests/nesco-business-page/bec-elements/32.jpg";
// Import the BEC logo
import becLogo from "@/assests/nesco-business-page/bec-elements/31.png";

function BecHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={businessMeeting}
          alt="BEC Business Meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      {/* <div className="relative z-10 px-[5%] h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1
            className="text-white text-[2.5rem] sm:text-[3.5rem] font-bold leading-[1.2] drop-shadow-lg mb-6"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            A Confluence of business & cultures
          </h1>
          <p 
            className="text-white text-xl sm:text-2xl drop-shadow-lg"
            style={{ fontFamily: "BrandingRegular" }}
          >
            Where global businesses converge in Mumbai
          </p>
        </div>
      </div> */}

      {/* Logo positioned in bottom right corner - BLUE BANNER STYLE */}
      <div className="absolute bottom-8 right-[-200px] px-8 py-4 bg-white bg-opacity-70 z-20 flex items-center justify-center rounded-full w-[500px]">
        <Image
          src={becLogo}
          alt="Bombay Exhibition Center Logo"
          width={180}
          height={100}
          className="object-contain mr-auto ml-6"
        />
      </div>
    </section>
  );
}

export default BecHero;