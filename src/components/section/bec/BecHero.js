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
      
      {/* Content - Just like in the screenshot */}
      {/* <div className="relative z-10 px-[5%] h-full flex flex-col justify-center">
        <div className="max-w-2xl mt-32">
          <h1
            className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.2] drop-shadow-lg mb-4"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            A Confluence of business & cultures
          </h1>
        </div>
      </div> */}

      <div 
        className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[200px] sm:w-[380px] md:w-[600px] hidden sm:flex overflow-hidden"
        style={{ borderRadius: "5rem" }}
      >
        {/* Fixed-size container for the logo */}
        <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
          <Image
            src={becLogo}
            alt="Bombay Exhibition Center Logo"
            width={210}
            height={60}
            className="object-contain scale-125 sm:scale-140 md:scale-150 transform-gpu"
            style={{ marginLeft: "5rem" }}
          />
        </div>
      </div>


    </section>
  );
}

export default BecHero;