import React from "react";
import Image from "next/image";

// Import service images
import shotBlastingImg from "@/assests/nesco-business-page/Indabrator-Elements/52.jpg";
import airPollutionImg from "@/assests/nesco-business-page/Indabrator-Elements/53.jpg";
import sparesImg from "@/assests/nesco-business-page/Indabrator-Elements/54.jpg";
import abrasivesImg from "@/assests/nesco-business-page/Indabrator-Elements/55.jpg";
import omImg from "@/assests/nesco-business-page/Indabrator-Elements/56.jpg";
import amcImg from "@/assests/nesco-business-page/Indabrator-Elements/57.jpg";
import paintingImg from "@/assests/nesco-business-page/Indabrator-Elements/58.jpg";

function IndabratorServices() {
  const services = [
    {
      title: "Shot-Blasting Machines",
      image: shotBlastingImg,
      alt: "Shot-Blasting Machine"
    },
    {
      title: "Air Pollution Control Systems",
      image: airPollutionImg,
      alt: "Air Pollution Control System"
    },
    {
      title: "Spares",
      image: sparesImg,
      alt: "Indabrator Spares"
    },
    {
      title: "Abrasives",
      image: abrasivesImg,
      alt: "Industrial Abrasives"
    },
    {
      title: "O & M",
      image: omImg,
      alt: "Operations & Maintenance"
    },
    {
      title: "AMC",
      image: amcImg,
      alt: "Annual Maintenance Contract"
    },
    {
      title: "Painting Systems",
      image: paintingImg,
      alt: "Industrial Painting Systems"
    }
  ];

  // Split services for desktop layout
  const topRowServices = services.slice(0, 4);
  const bottomRowServices = services.slice(4);

  return (
    <section className="w-full min-h-auto bg-[#0e129f] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Small screens only - Single column layout */}
      <div className="block lg:hidden w-full space-y-6 mb-6">
        {services.map((service, index) => (
          <div key={`mobile-${index}`} className="flex flex-col items-center">
            <div className="relative w-full h-48 sm:h-56 mb-3 overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 90vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all"></div>
            </div>
            <h3 className="text-center text-white text-lg font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Large screens - Original layout (unchanged) */}
      {/* Top row - 4 items */}
      <div className="hidden lg:grid grid-cols-4 gap-12 mb-16 w-full max-w-7xl">
        {topRowServices.map((service, index) => (
          <div key={`desktop-top-${index}`} className="flex flex-col items-center">
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all"></div>
            </div>
            <h3 className="text-center text-white text-lg font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Bottom row - 3 items centered */}
      <div className="hidden lg:grid grid-cols-3 gap-12 w-full max-w-5xl">
        {bottomRowServices.map((service, index) => (
          <div key={`desktop-bottom-${index}`} className="flex flex-col items-center">
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all"></div>
            </div>
            <h3 className="text-center text-white text-lg font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndabratorServices;