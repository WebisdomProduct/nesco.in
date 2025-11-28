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
import gymIcon from "@/assests/nesco-business-page/nesco-reality-elements/19.png";

function RealtyAmenities() {
  const topRowAmenities = [
    {
      icon: parkingIcon,
      title: "Ample Parking Space",
      description: "for over 2,000 vehicles at any given time",
    },
    {
      icon: shoppingIcon,
      title: "Simplified Living with",
      description: "creche & convenience stores",
    },
    {
      icon: foodIcon,
      title: "Versatile Food & Beverage",
      description: "options including open air cafes & food courts",
    },
    {
      icon: greenIcon,
      title: "Lush Open Spaces",
      description: "with over 1,000 trees",
    },
  ];

  const bottomRowAmenities = [
    {
      icon: transportIcon,
      title: "Transportation",
      description: "services available",
    },
    {
      icon: entertainmentIcon,
      title: "Prime Entertainment in proximity",
      description: "",
    },
    {
      icon: sportsIcon,
      title: "Unwind",
      description: "at Futsal Turf & Golfing Greens",
    },
    {
      icon: gymIcon,
      title: "Hitech Gym",
      description: "state-of-the-art fitness facilities",
    },
  ];

  const allAmenities = [...topRowAmenities, ...bottomRowAmenities];

  return (
    <div className="w-[90%] bg-white py-6 sm:py-10 lg:min-h-screen mx-auto">
      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 lg:mt-20">
        Amenities
      </h2>

      {/* Desktop Layout - Two separate rows */}
      <div className="hidden lg:block space-y-16">
        {/* Top Row - 4 items */}
        <div className="grid grid-cols-4 gap-6 xl:gap-8">
          {topRowAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 xl:w-40 xl:h-40 mb-6 flex items-center justify-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-xl text-black leading-relaxed">
                <span style={{ fontFamily: "BrandingSemibold" }}>
                  {amenity.title}
                </span>
                <span style={{ fontFamily: "BrandingMedium" }}>
                  {" "}
                  {amenity.description}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 items centered */}
      <div className="hidden lg:block space-y-16">
        {/* Top Row - 4 items */}
        <div className="grid grid-cols-4 gap-6 xl:gap-8">
          {bottomRowAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 xl:w-40 xl:h-40 mb-6 flex items-center justify-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-xl text-black leading-relaxed">
                <span style={{ fontFamily: "BrandingSemibold" }}>
                  {amenity.title}
                </span>
                <span style={{ fontFamily: "BrandingMedium" }}>
                  {" "}
                  {amenity.description}
                </span>
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Single responsive grid */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {allAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed px-2 max-w-sm">
                <span style={{ fontFamily: "BrandingSemibold" }}>
                  {amenity.title}
                </span>
                <span style={{ fontFamily: "BrandingMedium" }}>
                  {" "}
                  {amenity.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealtyAmenities;
