import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/bec-elements/49.jpg";

function BecProfile() {
  return (
    <section className="w-full h-screen overflow-hidden bg-[#f9f9f9] flex items-center">
      {/* Content Container */}
      <div className="px-[5%] w-full h-full flex items-center">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-[2] pr-0 md:pr-12 mb-8 md:mb-0">
            <h3 
              className="text-[2rem] md:text-[2.2rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Harsh Mukherjee
            </h3>
            <p 
              className="text-[1.1rem] text-[#666] mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Assistant Vice President - Sales
            </p>
            <p 
              className="text-[1.2rem] font-bold mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Actually, I can
            </p>
            <p 
              className="text-[1rem] leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              For over 25 years, Harsh Mukherjee has been 
              both a marketing leader and mentor. Harsh is 
              analytical about task completion and delivering 
              value to customers. He began his career in the 
              publications industry. His fondness for the 
              written word exists to this day as he enjoys 
              reading the latest in current affairs and science 
              and technology.
            </p>
          </div>

          {/* Image Container - Taller on desktop */}
          <div className="flex-1 relative h-[350px] md:h-[450px] w-full">
            <Image
              src={profileImage}
              alt="Harsh Mukherjee"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecProfile;