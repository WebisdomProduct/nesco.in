import React from "react";
import Image from "next/image";

// Import space images
import residentialImage from "@/assests/nesco-business-page/nesco-reality-elements/4.jpg";
import workspaceImage from "@/assests/nesco-business-page/nesco-reality-elements/3.jpg";
import assemblyImage from "@/assests/nesco-business-page/nesco-reality-elements/5.jpg";

function RealtySpaces() {
  const spaces = [
    {
      title: "Workspaces",
      image: workspaceImage,
      alt: "Modern workspace environment"
    },
    {
      title: "Residential Spaces", 
      image: residentialImage,
      alt: "Modern residential living space"
    },
    {
      title: "Assembly Spaces",
      image: assemblyImage, 
      alt: "Assembly and event spaces"
    }
  ];

  return (
    <section className=" w-full bg-blue-800 py-2 sm:py-4 lg:py-8 px-4 sm:px-6 lg:px-8">
      {/* Main Title */}
      {/* <div className="text-center mb-8 sm:mb-10 lg:mb-12"> */}

      {/* </div> */}
      
      {/* Spaces Grid */}
      <div className="max-w-7xl mx-auto header_white">
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

export default RealtySpaces;