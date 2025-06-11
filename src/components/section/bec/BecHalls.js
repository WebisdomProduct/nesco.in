import React from "react";
import Image from "next/image";

// Import hall images
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecHalls() {
  return (
    <section className="px-[5%] py-8 w-full">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-4">
        {/* Exhibition Hall */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full h-[180px] md:h-[220px]">
            <Image
              src={exhibitionImg}
              alt="Exhibition Hall"
              fill
              className="object-cover"
            />
          </div>
          <p 
            className="mt-3 italic text-center text-[1.1rem]"
            style={{ fontFamily: "TimesNewRoman" }}
          >
            Exhibitions
          </p>
        </div>
        
        {/* Celebration Hall */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full h-[180px] md:h-[220px]">
            <Image
              src={celebrationImg}
              alt="Celebration Hall"
              fill
              className="object-cover"
            />
          </div>
          <p 
            className="mt-3 italic text-center text-[1.1rem]"
            style={{ fontFamily: "TimesNewRoman" }}
          >
            Celebration Halls
          </p>
        </div>
        
        {/* MICE Hall */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full h-[180px] md:h-[220px]">
            <Image
              src={miceImg}
              alt="MICE Hall"
              fill
              className="object-cover"
            />
          </div>
          <p 
            className="mt-3 italic text-center text-[1.1rem]"
            style={{ fontFamily: "TimesNewRoman" }}
          >
            MICE Halls
          </p>
        </div>
      </div>
    </section>
  );
}

export default BecHalls;