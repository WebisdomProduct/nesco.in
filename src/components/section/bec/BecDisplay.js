import React from "react";
import Image from "next/image";

// Import display image
import displayImage from "@/assests/nesco-business-page/bec-elements/36.jpg";

// Import stat icons
import spaceIcon from "@/assests/nesco-business-page/bec-elements/37.png";
import visitorsIcon from "@/assests/nesco-business-page/bec-elements/38.png";
import hostIcon from "@/assests/nesco-business-page/bec-elements/39.png";

function BecDisplayWithStats() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Display Section - Exactly 50% Height with minimum height */}
      <div className="w-full relative h-[50%] min-h-[400px]">
        <Image
          src={displayImage}
          alt="Exhibition Floor Display"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Stats Section - Exactly 50% Height */}
      <div className="h-[50%] min-h-[500px] flex items-center justify-around bg-[#f9d342] px-[5%] w-full">
        {/* Space Stat */}
        <div className="text-center flex-1 mt-[-100px]">
          <div className="w-[400px] h-[400px] mb-1 mx-auto">
            <Image
              src={spaceIcon}
              alt="Space Icon"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <h3 
            className="text-[1.6rem] md:text-[1.8rem] font-bold mt-[-80px] mb-0"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            60k
          </h3>
          <p 
            className="text-[0.8rem]"
            style={{ fontFamily: "BrandingMedium" }}
          >
            Square Space
          </p>
        </div>
        
        {/* Visitors Stat */}
        <div className="text-center flex-1 mt-[-100px]">
          <div className="w-[400px] h-[400px] mb-1 mx-auto">
            <Image
              src={visitorsIcon}
              alt="Visitors Icon"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <h3 
            className="text-[1.6rem] md:text-[1.8rem] font-bold mt-[-80px] mb-0"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            20mn
          </h3>
          <p 
            className="text-[0.8rem]"
            style={{ fontFamily: "BrandingMedium" }}
          >
            visitors p.a.
          </p>
        </div>
        
        {/* Host Stat */}
        <div className="text-center flex-1 mt-[-100px]">
          <div className="w-[400px] h-[400px] mb-1 mx-auto">
            <Image
              src={hostIcon}
              alt="Host Icon"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <h3 
            className="text-[1.6rem] md:text-[1.8rem] font-bold mt-[-80px] mb-0"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            #1 Host
          </h3>
          <p 
            className="text-[0.8rem]"
            style={{ fontFamily: "BrandingMedium" }}
          >
            for most exhibitions in India
          </p>
        </div>
      </div>
    </section>
  );
}

export default BecDisplayWithStats;