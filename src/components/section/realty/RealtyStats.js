import React from "react";
import Image from "next/image";

// Import stat icons
import employeesIcon from "@/assests/nesco-business-page/nesco-reality-elements/7.jpg";
import foodBrandsIcon from "@/assests/nesco-business-page/nesco-reality-elements/8.jpg";
import operationsIcon from "@/assests/nesco-business-page/nesco-reality-elements/9.jpg";

function RealtyStats() {
  const stats = [
    {
      icon: employeesIcon,
      value: "25k",
      label: "Employees at our IT parks",
    },
    {
      icon: foodBrandsIcon,
      value: "20",
      label: "Leading food brands on location",
    },
    {
      icon: operationsIcon,
      value: "24/7",
      label: "Operations with available task force",
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-100 py-8 md:py-12">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-2 md:px-4"
          >
            {/* Responsive image size - larger on desktop */}
            <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] mb-4 md:mb-[-40px] lg:mb-[-70px]">
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={460}
                height={460}
                className="object-contain w-full h-full"
              />
            </div>
            <h3
              className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.5rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>
            <p
              className="text-center text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] text-[#483bb0] max-w-[200px] md:max-w-none"
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

export default RealtyStats;
