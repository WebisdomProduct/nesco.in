import React from "react";
import Image from "next/image";

// Import hall images
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecHalls() {
  const spaces = [
    {
      title: "Exhibitions",
      image: exhibitionImg,
      alt: "Exhibition halls at BEC",
    },
    {
      title: "Celebration Halls",
      image: celebrationImg,
      alt: "Celebration venues at BEC",
    },
    {
      title: "MICE Halls",
      image: miceImg,
      alt: "MICE facilities at BEC",
    },
  ];

  return (
    <section className="w-full bg-white pb-[1%] px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
    
          </div>
          
          {/* Spaces Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {spaces.map((space, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Image Container - Responsive heights */}
                  <div className="w-full max-w-sm h-64 sm:h-80 md:h-96 lg:h-[36rem] mb-4 sm:mb-6 overflow-hidden relative rounded-lg">
                    <Image
                      src={space.image}
                      alt={space.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Title Below Image */}
                  <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-light italic text-center px-2">
                    {space.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default BecHalls;