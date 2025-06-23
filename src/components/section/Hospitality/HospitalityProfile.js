import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-food-elements/30.jpg";

function HospitalityProfile() {
  return (
    <section className="w-full min-h-screen h-auto overflow-hidden bg-[#f9f9f9] py-8 sm:py-10 md:py-12 flex items-center">
      <div className="px-[5%] w-full">
        <div className="w-full sm:w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row items-start md:items-center">
          {/* Text Content - Better responsive scaling */}
          <div className="md:flex-[2] w-full pr-0 md:pr-6 lg:pr-12 mb-6 md:mb-0">
            <h3 
              className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold mb-1 sm:mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Saurav Banerjee
            </h3>
            <p 
              className="text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] text-[#666] mb-3 sm:mb-4 md:mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Corporate Executive Chef
            </p>
            <p 
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold mb-3 sm:mb-4 md:mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: For me the team comes first and commitment to hard work is our tool to achieve any goal.
            </p>
            <p 
              className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] mb-3 sm:mb-4"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Chef Saurav Banerjee is our Corporate Executive Chef. He has a rich background spanning across diverse cuisines and experience in renowned kitchens. An alumnus of the Oberoi, Chef Saurav started restaurants and a long and very successful stint with "The Oberoi Group of Hotels". He is passionate about creating unique culinary experiences and is dedicated to inspiring our team towards culinary excellence. He has served one and many distinguished guests from the highest echelons of all walks of life.
            </p>
            <p 
              className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] leading-[1.6] sm:leading-[1.7] md:leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Chef Banerjee is excited to showcase high levels of creativity and expertise for our guests and take our gastronomy to the next level.
            </p>
          </div>

          {/* Image Container - Responsive sizing with aspect ratio */}
          <div className="md:flex-1 w-full">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:h-[350px] lg:h-[450px]">
              <Image
                src={profileImage}
                alt="Saurav Banerjee"
                fill
                className="object-cover object-center rounded-md"
                priority
                sizes="(max-width: 768px) 90vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalityProfile;