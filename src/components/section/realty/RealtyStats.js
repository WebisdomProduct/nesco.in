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
      label: "Employees at our IT parks"
    },
    {
      icon: foodBrandsIcon,
      value: "20",
      label: "Leading food brands on location"
    },
    {
      icon: operationsIcon,
      value: "24/7",
      label: "Operations with available task force"
    }
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {/* Responsive image size - larger on desktop */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-[-70px]">
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={360}
                height={360}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 
              className="text-[2.8rem] sm:text-[3rem] md:text-[3.5rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>
            <p 
              className="text-center text-[1.4rem] sm:text-[1.5rem] text-[#483bb0]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RealtyStats;