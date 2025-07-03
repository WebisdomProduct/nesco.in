import React from "react";
import Image from "next/image";

// Import initiative image
import incubationImage from "@/assests/nesco-business-page/nesco-reality-elements/10.jpg";

function RealtyInitiative() {
  return (
    <div className="w-full max-w-[90%] h-auto lg:min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white mx-auto py-8 md:py-0 lg:mt-4">
      {/* Left column - description */}
      <div className="lg:w-1/2 w-full py-6 md:py-[2%] flex flex-col justify-center lg:pr-10">
        <h2
          className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-2"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Our initiative
        </h2>
        <h3
          className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold mb-4 md:mb-6"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Incubation centre
        </h3>
        <p
          className="text-[1.2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] leading-relaxed text-justify"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Envisioned with foresight, the Incubation Centre is enabling
          promising, young businesses to take on bigger challenges. A
          fully-operational Incubator, the Centre functions as a catalyst for
          the new-age companies that are redefining business, operations and
          workplace culture in the startup era.
        </p>
      </div>

      {/* Right column - image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center lg:mt-[10%] px-4 md:px-6 lg:px-8 py-6 md:py-16">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-100 shadow-lg rounded-lg">
          <Image
            src={incubationImage}
            alt="Modern incubation centre workspace with yellow and blue workstations"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RealtyInitiative;
