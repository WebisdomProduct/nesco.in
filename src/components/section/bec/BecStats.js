import React from "react";
import Image from "next/image";

// Import images
import spaceIcon from "@/assests/nesco-business-page/bec-elements/37.png";
import visitorsIcon from "@/assests/nesco-business-page/bec-elements/38.png";
import hostIcon from "@/assests/nesco-business-page/bec-elements/39.png";

function BecStats() {
  return (
    <section className="flex justify-around bg-[#f9d342] py-16 px-[5%] mt-8 w-full">
      <div className="text-center flex-1">
        <div className="w-[60px] h-[60px] mb-3 mx-auto">
          <Image
            src={spaceIcon}
            alt="Space Icon"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <h3 
          className="text-[2rem] font-bold my-3"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          60k
        </h3>
        <p 
          className="text-[0.9rem]"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Square Space
        </p>
      </div>
      <div className="text-center flex-1">
        <div className="w-[60px] h-[60px] mb-3 mx-auto">
          <Image
            src={visitorsIcon}
            alt="Visitors Icon"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <h3 
          className="text-[2rem] font-bold my-3"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          20mn
        </h3>
        <p 
          className="text-[0.9rem]"
          style={{ fontFamily: "BrandingMedium" }}
        >
          visitors p.a.
        </p>
      </div>
      <div className="text-center flex-1">
        <div className="w-[60px] h-[60px] mb-3 mx-auto">
          <Image
            src={hostIcon}
            alt="Host Icon"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <h3 
          className="text-[2rem] font-bold my-3"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          #1 Host
        </h3>
        <p 
          className="text-[0.9rem]"
          style={{ fontFamily: "BrandingMedium" }}
        >
          for most exhibitions in India
        </p>
      </div>
    </section>
  );
}

export default BecStats;