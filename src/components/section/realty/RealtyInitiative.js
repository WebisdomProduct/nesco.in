import React from "react";
import Image from "next/image";

// Import initiative image
import incubationImage from "@/assests/nesco-business-page/nesco-reality-elements/10.jpg";

function RealtyInitiative() {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left column - description */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center">
        <h2 
          className="text-[2.8rem] md:text-[3rem] font-bold mb-4"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Our initiative
        </h2>
        <h3 
          className="text-[2.4rem] md:text-[2.6rem] font-bold mb-5"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Incubation centre
        </h3>
        <p 
          className="text-[1.5rem] leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Envisioned with foresight, the Incubation Centre is enabling promising, young businesses to take on bigger challenges. A fully-operational Incubator, the Centre functions as a catalyst for the new-age companies that are redefining business, operations and workplace culture in the startup era.
        </p>
      </div>
      
      {/* Right column - image */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-12 py-16">
          <div className="w-full max-w-2xl h-96 relative bg-gray-100  overflow-hidden shadow-lg">
            <Image
              src={incubationImage}
              alt="Modern incubation centre workspace with yellow and blue workstations"
              fill
              className="object-cover"
            />
          </div>
        </div>
    </section>
  );
}

export default RealtyInitiative;