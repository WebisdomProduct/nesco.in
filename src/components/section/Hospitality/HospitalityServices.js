import React from "react";
import Image from "next/image";

// Import service images
import weddingImage from "@/assests/nesco-business-page/nesco-food-elements/21.jpg";
import exhibitionsImage from "@/assests/nesco-business-page/nesco-food-elements/22.jpg";
import cateringImage from "@/assests/nesco-business-page/nesco-food-elements/23.jpg";

function HospitalityServices() {
  const spaces = [
    {
      title: "Exhibitions",
      image: weddingImage,
      alt: "Wedding and celebration catering services"
    },
    {
      title: "Weddings & Social Celebrations",
      image: exhibitionsImage,
      alt: "Exhibition catering services"
    },
    {
      title: "Outdoor Catering",
      image: cateringImage,
      alt: "Outdoor catering services"
    }
  ];

  return (
    <section className="w-full bg-blue-800 py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center">
    
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
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-light italic text-center px-2">
                    {space.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default HospitalityServices;