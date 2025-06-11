import React from "react";
import Image from "next/image";

// Import hall images
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecDescriptionWithHalls() {
  return (
    <section className="py-12 px-[5%] bg-white w-full h-screen overflow-hidden flex flex-col justify-between">
      {/* Description Section */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row mb-8">
        {/* Left column with heading */}
        <div className="md:w-[45%] mb-8 md:mb-0">
          <h2 
            className="text-[2.5rem] sm:text-[3rem] font-bold leading-tight text-black"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            A Confluence <br />
            of business & <br />
            cultures
          </h2>
        </div>
        
        {/* Right column with text */}
        <div className="md:w-[55%]">
          <p
            className="mb-4 text-[1rem] leading-relaxed text-[#333]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            If business is on the cards, all roads, lead to the 
            Bombay Exhibition Center. Founded in 1991, the BEC 
            reflects Belief and Opportunity. Bringing over 
            millions of ideas to life, the Center has helped the 
            globe converge in Mumbai with a common purpose.
          </p>
          
          <p
            className="mb-4 text-[1rem] leading-relaxed text-[#333]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            As a space of limitless possibility, the BEC is 
            endlessly customisable. With robust infrastructure, 
            the center paces itself to global standards. The wide 
            options of venues, the versatility packed within, are 
            topped with helpful services.
          </p>
          
          <p
            className="text-[1rem] leading-relaxed text-[#333]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            The BEC has attained historical status in Mumbai as 
            the ideal location for exhibitions, MICE, trade shows, 
            business displays, events and entertainment.
          </p>
        </div>
      </div>

      {/* Halls Section */}
      <div className="w-[90%] mx-auto mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
          {/* Exhibition Hall - Vertical Rectangle */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-[80%] md:w-[75%] h-[250px] md:h-[300px]">
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
          
          {/* Celebration Hall - Vertical Rectangle */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-[80%] md:w-[75%] h-[250px] md:h-[300px]">
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
          
          {/* MICE Hall - Vertical Rectangle */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-[80%] md:w-[75%] h-[250px] md:h-[300px]">
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
      </div>
    </section>
  );
}

export default BecDescriptionWithHalls;