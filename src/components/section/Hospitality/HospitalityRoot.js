import React from "react";
import Image from "next/image";

// Import kitchen image
import kitchenImage from "@/assests/nesco-business-page/nesco-food-elements/28.jpg";

function HospitalityRoot() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col overflow-hidden py-6 sm:py-8 md:py-12">
      <div className="w-full h-full px-[5%]">
        {/* Responsive title with better scaling */}
        <h2 
          className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] font-bold mb-2 pt-14 sm:mb-4"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          The Root
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 h-full">
          {/* Text content with improved responsive typography */}
          <div className="md:w-1/2 w-full flex flex-col justify-center mb-4 md:mb-0">
            <p 
              className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2.1rem] leading-relaxed"
              style={{ fontFamily: "BrandingRegular" }}
            >
              The nerve centre of the entire Foods operation, the Root is a state-of-the-art central kitchen. The facility allows the preparation of over 80,000 meals a day across a multitude of cuisines. Renowned and experienced chefs at The Root are able to prepare every meal perfectly, while respecting the customs of the cuisine as well as the customer.
            </p>
          </div>
          
          {/* Kitchen image with improved responsive height */}
          <div className="md:w-1/2 w-full relative">
            {/* Use aspect ratio instead of fixed height on mobile */}
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full rounded-md overflow-hidden">
              <Image
                src={kitchenImage}
                alt="Chefs working in The Root kitchen"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalityRoot;