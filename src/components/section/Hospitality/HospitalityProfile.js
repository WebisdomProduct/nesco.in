import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-food-elements/30.jpg";

function HospitalityProfile() {
  return (
    <section className="w-full min-h-auto bg-white py-8 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Text Content - Left side */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Saurav Banerjee
            </h3>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-[#666] mb-4 text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Corporate Executive Chef
            </p>
            
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-left leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: For me the team comes first and commitment to hard work is our tool to achieve any goal.
            </p>
            
            <div className="space-y-8">
              <p 
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Chef Saurav Banerjee is our Corporate Executive Chef. He has a rich background spanning across diverse cuisines and experience in renowned kitchens. An alumnus of the Oberoi, Chef Saurav started restaurants and a long and very successful stint with "The Oberoi Group of Hotels". He is passionate about creating unique culinary experiences and is dedicated to inspiring our team towards culinary excellence. He has served one and many distinguished guests from the highest echelons of all walks of life.
              </p>
              <p 
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Chef Banerjee is excited to showcase high levels of creativity and expertise for our guests and take our gastronomy to the next level.
              </p>
            </div>
          </div>

          {/* Image Container - Right side */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Saurav Banerjee"
                fill
                className="object-cover"
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

export default HospitalityProfile;