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
      label: "food brands owned & operated with 130+ recipes"
    },
    {
      icon: spaceIcon,
      value: "24k",
      label: "Sq.ft food prep + flight kitchen"
    },
    {
      icon: mealsIcon,
      value: "80k",
      label: "Meals a day"
    }
  ];

  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#6ac148]">
          <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                {/* Responsive image size - larger on desktop */}
                <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-6">
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    width={360}
                    height={360}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 
                  className="text-[2.8rem] sm:text-[3rem] md:text-[3.5rem] font-bold mb-2 text-white"
                  style={{ fontFamily: "BrandingSemibold" }}
                >
                  {stat.value}
                </h3>
                <p 
                  className="text-center text-[0.9rem] sm:text-[1rem] text-white"
                  style={{ fontFamily: "BrandingRegular" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
  );
}

export default HospitalityStats;