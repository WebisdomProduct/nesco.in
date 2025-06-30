import React from "react";
import Image from "next/image";

// Import stat icons
import spaceIcon from "@/assests/nesco-business-page/bec-elements/37.png";
import spaceIcon2 from "@/assests/nesco-business-page/Indabrator-Elements/60.png";
import visitorsIcon from "@/assests/nesco-business-page/bec-elements/38.png";
import hostIcon from "@/assests/nesco-business-page/bec-elements/39.png";

function BecStats() {
  const stats = [
    {
      icon: spaceIcon2,
      value: "60k",
      label: "Sq.m of space",
    },
    {
      icon: visitorsIcon,
      value: "20mn",
      label: "visitors a year",
    },
    {
      icon: hostIcon,
      value: "#1 Host",
      label: "for most exhibitions in India",
    },
  ];

return (
<section className="w-full h-auto flex items-center justify-center bg-[#fab62a]">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 py-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {/* Responsive image size - larger on desktop - no bottom margin */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-[-50px]">
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

export default BecStats;