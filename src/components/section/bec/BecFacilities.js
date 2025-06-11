import React from "react";
import Image from "next/image";

// Import facility image
import burgerImage from "@/assests/nesco-business-page/bec-elements/40.jpg";

function BecFacilities() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      {/* Section Title with yellow top border */}
      <div className="px-[5%] w-full border-t-2 border-[#f9d342] pt-8 pb-4">
        <h2 
          className="text-[2rem] md:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* Full-height burger image with overlay card - takes up remaining space */}
      <div className="relative w-full h-[calc(100%-120px)]">
        {/* Background Image */}
        <Image
          src={burgerImage}
          alt="Burger at Orchard"
          fill
          className="object-cover"
          priority
        />

        {/* White Card Overlay */}
        <div className="absolute left-[5%] top-[50%] transform -translate-y-1/2 bg-white p-6 md:p-8 w-[270px] md:w-[380px] shadow-md">
          <h3 
            className="text-[1.6rem] md:text-[1.8rem] font-bold mb-4"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Orchard
          </h3>
          <p 
            className="text-[0.9rem] md:text-[1rem] leading-[1.7]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            Flanked by open sky and trees, the 
            Orchard is a quick and accessible 
            haven for multi-cuisine. This food 
            court serves up a delightful variety in 
            both takeaway and dine-in formats for 
            every gourmand- leisurely lunches or 
            meals-on-the-go.
          </p>
        </div>

        {/* Additional Facility Cards (Hidden by default, would be shown in a real carousel) */}
        <div className="hidden">
          {/* These would be additional facility cards in a real implementation */}
        </div>

        {/* Pagination Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
          <div className="w-6 h-[1px] bg-white"></div>
          <span className="text-sm text-white bg-black/30 px-2 py-1 rounded-full">2/4</span>
          <div className="w-6 h-[1px] bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default BecFacilities;