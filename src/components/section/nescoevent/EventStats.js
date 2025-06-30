import React from "react";
import Image from "next/image";

// Import the stat icons
import icon1 from "@/assests/nesco-business-page/nesco-events/72.png";
import icon2 from "@/assests/nesco-business-page/nesco-events/71.png";

function EventStats() {
  const stats = [
    {
      value: "60K",
      label: "Sq.ft of Space",
      icon: icon1
    },
    {
      value: "#1 Host",
      label: "for best exhibitions in Mumbai",
      icon: icon2
    }
  ];

  return (
    <section className="w-full h-auto flex items-center justify-center bg-[#f44554]">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 lg:gap-48 py-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {/* Responsive image size - larger on desktop */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-[-30px]">
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

export default EventStats;