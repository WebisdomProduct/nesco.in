import React from "react";
import Image from "next/image";

// Import amenity icons
import parkingIcon from "@/assests/nesco-business-page/bec-elements/41.jpg";
import spacesIcon from "@/assests/nesco-business-page/bec-elements/42.jpg";
import foodIcon from "@/assests/nesco-business-page/bec-elements/43.jpg";
import greenSpacesIcon from "@/assests/nesco-business-page/bec-elements/44.jpg";
import securityIcon from "@/assests/nesco-business-page/bec-elements/45.jpg";
import internetIcon from "@/assests/nesco-business-page/bec-elements/46.jpg";
import eventsIcon from "@/assests/nesco-business-page/bec-elements/47.jpg";
import transportIcon from "@/assests/nesco-business-page/bec-elements/48.jpg";

function BecAmenities() {
  const amenitiesList = [
    {
      icon: parkingIcon,
      name: "Ample Parking Space",
      desc: "for over 2,000 vehicles at any given time"
    },
    {
      icon: spacesIcon,
      name: "Spaces of Limitless Possibility",
      desc: "that evolve to suit your every need"
    },
    {
      icon: foodIcon,
      name: "Versatile Food & Beverage options",
      desc: "including open air cafes & food courts"
    },
    {
      icon: greenSpacesIcon,
      name: "Lush Open Spaces",
      desc: "with over 1,000 trees"
    },
    {
      icon: securityIcon,
      name: "Watchtowers & high level",
      desc: "professional security"
    },
    {
      icon: internetIcon,
      name: "24/7 Internet",
      desc: "state of the art technology services"
    },
    {
      icon: eventsIcon,
      name: "75 events a year",
      desc: "hosted at our facilities"
    },
    {
      icon: transportIcon,
      name: "Transportation services",
      desc: "available to and from the BEC"
    }
  ];

  return (
    <section className="w-full h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Section Title with yellow top border */}
      <div className="px-[5%] w-full border-t-2 border-[#f9d342] pt-8 pb-8">
        <h2 
          className="text-[2.5rem] md:text-[3rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Amenities
        </h2>
      </div>
      
      {/* Amenities Grid with fixed height container */}
      <div className="px-[5%] h-[calc(100%-140px)] flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-6 md:gap-10">
            {amenitiesList.map((item, index) => (
              <div className="text-center" key={index}>
                <div className="w-[70px] h-[70px] mb-5 mx-auto">
                  <Image
                    src={item.icon}
                    alt={`${item.name} Icon`}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <h4 
                  className="text-[1.15rem] font-bold mb-2 text-black"
                  style={{ fontFamily: "BrandingSemibold" }}
                >
                  {item.name}
                </h4>
                <p 
                  className="text-[0.95rem] text-[#666] px-2"
                  style={{ fontFamily: "BrandingMedium" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecAmenities;