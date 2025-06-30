import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/bec-elements/49.jpg";

function BecProfile() {
  return (
    <section className="w-full min-h-auto h-auto overflow-hidden bg-white flex">
      <div className="w-full">
        <div className="w-[100%] mx-auto flex flex-col md:flex-row">
          {/* Text Content - Expanded width */}
          <div className="md:w-[65%] w-full pr-0  mb-8 md:mb-0 ml-16">
            <h3 
              className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Harsh Mukherjee
            </h3>
            <p 
              className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] text-[#666] mb-4 sm:mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Assistant Vice President - Sales
            </p>
            <p 
              className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] font-bold mb-3 sm:mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Actually, I can
            </p>
            <p 
              className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[1.9rem] leading-[1.6] sm:leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              For over 25 years, Harsh Mukherjee has been both a marketing leader and mentor. Harsh is analytical about task completion and delivering value to customers. He began his career in the publications industry. His fondness for the written word exists to this day as he enjoys reading the latest in current affairs and science and technology.
            </p>
          </div>

          {/* Image Container - Smaller size, shifted right */}
          <div className="md:w-[65%] w-full relative h-[750px] sm:h-[700px] md:h-[750px] lg:h-[800px] ml-auto">
            <Image
              src={profileImage}
              alt="Harsh Mukherjee"
              fill
              className="object-contain rounded-md"
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecProfile;