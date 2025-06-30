import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-reality-elements/18.jpg";

function RealtyProfile() {
  return (
    <section className="w-full min-h-auto bg-white py-4 sm:py-8 lg:py-12">
      <div className="px-4 sm:px-6 lg:px-[5%] w-full h-full flex pt-4 sm:pt-8 lg:pt-16">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:flex-[2] w-full lg:pr-8">
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.2rem] font-bold mb-2 text-center lg:text-left"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dharmesh Joshi
            </h3>
            <p 
              className="text-lg sm:text-xl lg:text-2xl xl:text-[1.4rem] text-[#666] mb-4 sm:mb-6 text-center lg:text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Sr. General Manager - Special Projects
            </p>
            <p 
              className="text-lg sm:text-xl lg:text-2xl xl:text-[1.7rem] font-bold mb-4 sm:mb-5 text-center lg:text-left leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Action is better than Words. Quit talking and lets start Doing!
            </p>
            <p 
              className="text-base sm:text-lg lg:text-xl xl:text-[1.5rem] leading-relaxed lg:leading-[1.8] text-center lg:text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Dharmesh is a multifaceted professional with good understanding of various industries.
            </p>
            <p 
              className="text-base sm:text-lg lg:text-xl xl:text-[1.5rem] leading-relaxed lg:leading-[1.8] text-center lg:text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              With techno-commercial experience and working with top management, enables him to add value in Corporate Strategy & Infrastructure projects. Dharmesh is very passionate about whatever he does. Currently handling Special Projects, he is involved in Nesco's various Divisions. Dharmesh enjoys reading, music and spending his time with family.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[450px] xl:h-[500px] w-full">
              <Image
                src={profileImage}
                alt="Dharmesh Joshi"
                fill
                className="object-cover rounded-md shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealtyProfile;