"use client";
import React from "react";
import Image from "next/image";

// Import hero background image (using one from the nesco-events folder)
import eventBackground from "@/assests/nesco-business-page/nesco-events/68.jpg";
import nescoEventsLogo from "@/assests/nesco-business-page/nesco-events/69.png";

function EventHero() {
  return (
    <section className="header_white relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={eventBackground}
          alt="Nesco Events Concert Crowd"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Nesco Events Logo - positioned similar to other hero sections */}
      <div 
        className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[200px] sm:w-[380px] md:w-[600px] hidden sm:flex overflow-hidden"
        style={{ borderRadius: "5rem" }}
      >
<div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
                <Image
                  src={nescoEventsLogo}
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

export default EventHero;