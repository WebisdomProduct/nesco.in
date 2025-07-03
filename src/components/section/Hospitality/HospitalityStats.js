import React from "react";
import Image from "next/image";

// Import stat icons
import brandsIcon from "@/assests/nesco-business-page/nesco-food-elements/25.png";
import spaceIcon from "@/assests/nesco-business-page/nesco-food-elements/26.png";
import mealsIcon from "@/assests/nesco-business-page/nesco-food-elements/27.png";

function HospitalityStats() {
  const stats = [
    {
      icon: brandsIcon,
      value: "8+",
      label: "food brands owned & operated with 130+ recipes",
    },
    {
      icon: spaceIcon,
      value: "24k",
      label: "Sq.ft food prep + flight kitchen",
    },
    {
      icon: mealsIcon,
      value: "80k",
      label: "Meals a day",
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center bg-[#6ac148] py-8 md:py-12 lg:py-16">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-2 md:px-4"
          >
            {/* Responsive image size */}
            <div className="w-[180px] h-[180px] md:w-[180px] md:h-[180px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] mb-4 md:mb-6 lg:mb-[-70px]">
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={360}
                height={360}
                className="object-contain w-full h-full"
              />
            </div>
            <h3
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>
            <p
              className="text-center text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-white mb-4 md:mb-6 lg:mb-8 max-w-[280px]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalityStats;
