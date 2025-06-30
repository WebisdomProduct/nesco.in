import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-reality-elements/18.jpg";

function RealtyProfile() {
  return (
    <section className="w-full min-h-auto bg-white pt-8 lg:pt-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Text Content - Left side */}
          <div className="w-full lg:w-[60%] lg:pr-8">
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-left"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dharmesh Joshi
            </h3>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-[#666] mb-12 text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Sr. General Manager - Special Projects
            </p>
            
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10 text-left leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Action is better than Words. Quit talking and lets start Doing!
            </p>
            
            <div className="space-y-10">
              <p 
                className="text-xl sm:text-2xl lg:text-3xl leading-loose text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Dharmesh is a multifaceted professional with good understanding of various industries.
              </p>
              <p 
                className="text-xl sm:text-2xl lg:text-3xl leading-loose text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                With techno-commercial experience and working with top management, enables him to add value in Corporate Strategy & Infrastructure projects. Dharmesh is very passionate about whatever he does. Currently handling Special Projects, he is involved in Nesco's various Divisions. Dharmesh enjoys reading, music and spending his time with family.
              </p>
            </div>
          </div>

          {/* Image Container - Right side */}
          <div className="w-full lg:w-[40%]">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Dharmesh Joshi"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealtyProfile;