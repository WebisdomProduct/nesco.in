import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/bec-elements/49.jpg";

function BecProfile() {
  return (
    <section className="w-full min-h-screen h-auto overflow-hidden bg-white flex items-center py-8 sm:py-10 md:py-16">
      <div className="px-[5%] w-full">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content - Improved responsive typography */}
          <div className="md:w-[60%] w-full pr-0 md:pr-12 mb-8 md:mb-0">
            <h3 
              className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Harsh Mukherjee
            </h3>
            <p 
              className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-[#666] mb-4 sm:mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Assistant Vice President - Sales
            </p>
            <p 
              className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-bold mb-3 sm:mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Actually, I can
            </p>
            <p 
              className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] leading-[1.6] sm:leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              For over 25 years, Harsh Mukherjee has been both a marketing leader and mentor. Harsh is analytical about task completion and delivering value to customers. He began his career in the publications industry. His fondness for the written word exists to this day as he enjoys reading the latest in current affairs and science and technology.
            </p>
          </div>

          {/* Image Container - Responsive sizing and positioning */}
          <div className="md:w-[40%] w-full relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            <Image
              src={profileImage}
              alt="Harsh Mukherjee"
              fill
              className="object-cover rounded-md"
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