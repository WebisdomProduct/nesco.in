import React from "react";
import Image from "next/image";

// Import amenity icons
import parkingIcon from "@/assests/nesco-business-page/nesco-reality-elements/11.jpg";
import shoppingIcon from "@/assests/nesco-business-page/nesco-reality-elements/12.jpg";
import foodIcon from "@/assests/nesco-business-page/nesco-reality-elements/13.jpg";
import greenIcon from "@/assests/nesco-business-page/nesco-reality-elements/14.jpg";
import transportIcon from "@/assests/nesco-business-page/nesco-reality-elements/15.jpg";
import entertainmentIcon from "@/assests/nesco-business-page/nesco-reality-elements/16.jpg";
import sportsIcon from "@/assests/nesco-business-page/nesco-reality-elements/17.jpg";

function RealtyAmenities() {
  const topRowAmenities = [
    {
      icon: parkingIcon,
      title: "Ample Parking Space",
      description: "for over 2,000 vehicles at any given time"
    },
    {
      icon: shoppingIcon,
      title: "Simplified Living with",
      description: "creche & convenience stores"
    },
    {
      icon: transportIcon,
      title: "Versatile Food & Beverage",
      description: "options including open air cafes & food courts"
    },
    {
      icon: entertainmentIcon,
      title: "Lush Open Spaces",
      description: "with over 1,000 trees"
    }
  ];

  const bottomRowAmenities = [
    {
      icon: foodIcon,
      title: "Transportation",
      description: "services available"
    },
    {
      icon: greenIcon,
      title: "Prime Entertainment in proximity",
      description: ""
    },
    {
      icon: sportsIcon,
      title: "Unwind",
      description: "at Futsal Turf & Golfing Greens"
    }
  ];

  const allAmenities = [...topRowAmenities, ...bottomRowAmenities];

  return (
    <section className="w-full bg-white py-6 sm:py-10 px-4 sm:px-8 lg:px-16">
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-12 lg:mb-16">
        Amenities
      </h2>
      
      {/* Desktop Layout - Two separate rows */}
      <div className="hidden lg:block">
        {/* Top Row - 4 items */}
        <div className="grid grid-cols-4 gap-12 mb-16">
          {topRowAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-30 h-30 mb-6 flex items-center justify-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <p className="text-xl text-black leading-relaxed">
                <span style={{ fontFamily: "BrandingSemibold" }}>{amenity.title}</span>
                <span style={{ fontFamily: "BrandingMedium" }}> {amenity.description}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 items centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-24 max-w-4xl">
            {bottomRowAmenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-30 h-30 mb-6 flex items-center justify-center">
                  <Image
                    src={amenity.icon}
                    alt={amenity.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl text-black leading-relaxed">
                  <span style={{ fontFamily: "BrandingSemibold" }}>{amenity.title}</span>
                  <span style={{ fontFamily: "BrandingMedium" }}> {amenity.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Single responsive grid */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {allAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-base sm:text-lg text-black leading-relaxed px-2">
                <span style={{ fontFamily: "BrandingSemibold" }}>{amenity.title}</span>
                <span style={{ fontFamily: "BrandingMedium" }}> {amenity.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RealtyAmenities;