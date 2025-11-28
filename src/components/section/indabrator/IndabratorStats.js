import React from "react";
import Image from "next/image";

// Import stat icons
import facilityIcon from "@/assests/nesco-business-page/Indabrator-Elements/60.png";
import projectsIcon from "@/assests/nesco-business-page/Indabrator-Elements/61.png";
import experienceIcon from "@/assests/nesco-business-page/Indabrator-Elements/62.png";

function IndabratorStats() {
  const stats = [
    {
      icon: facilityIcon,
      value: "1.1 Lac",
      label: "sq.ft manufacturing capacity",
    },
    {
      icon: projectsIcon,
      value: "5k+",
      label: "completed installations",
    },
    {
      icon: experienceIcon,
      value: "60+",
      label: "years of excellence",
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center bg-[#4dbeaf]">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 py-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Responsive image size - larger on desktop */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] lg:mb-[-50px] mb-[-20px]">
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={360}
                height={360}
                className="object-contain w-full h-full"
              />
            </div>
            <h3
              className="text-[2.8rem] sm:text-[3rem] md:text-[3.5rem] font-bold text-white"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>
            <p
              className="text-center text-[0.9rem] sm:text-[1rem] text-white mt-[-10px]"
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

export default IndabratorStats;
