import React from "react";
import Image from "next/image";

// Import unit images - using the ones from your attachments
import factoryImg1 from "@/assests/nesco-business-page/Indabrator-Elements/63.jpg"; // First factory image
import factoryImg2 from "@/assests/nesco-business-page/Indabrator-Elements/64.jpg"; // Second factory image

function IndabratorUnitss() {
  return (
    <section className="w-full h-auto bg-white flex flex-col overflow-hidden">
      {/* Title with padding */}
      <div className="w-full pt-10 pb-4 px-[5%]">
        {/* <h2 
          className="text-[2rem] md:text-[2.2rem] font-bold"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Our Manufacturing Units
        </h2> */}
      </div>

      {/* Container for both factory sections */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        {/* Works I Section */}
        {/* <div className="relative w-full h-[90vh]">

          <Image
            src={factoryImg1}
            alt="Indabrator Factory - Works I"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 bg-white p-5 md:p-6 max-w-[85%] md:max-w-[420px] shadow-md">
            <h3 
              className="text-[1.2rem] md:text-[1.4rem] font-bold mb-1"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Works I
            </h3>
            <p className="text-sm text-gray-600 mb-3">Vataman, Gujarat</p>
            
            <p 
              className="text-[0.9rem] md:text-[1rem] leading-relaxed"
              style={{ fontFamily: "BrandingRegular" }}
            >
              The Vataman units are situated within 31 acres of green expanses. At this location, over 1500 skilled workers are engaged in the manufacturing of shot-blasting machines and other equipment.
            </p>
            <p 
              className="text-[0.9rem] md:text-[1rem] leading-relaxed mt-2"
              style={{ fontFamily: "BrandingRegular" }}
            >
              The unit produces numerous shot blasting, painting and air pollution control equipments every year. The R&D Centre facilitates in creating customized solutions for all applications.
            </p>
          </div>
        </div> */}

        {/* Works II Section */}
        <div className="relative w-full h-[90vh]">
          <Image
            src={factoryImg2}
            alt="Indabrator Factory - Works II"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute left-[5%] bottom-0 bg-white p-5 md:p-6 max-w-[95%] md:max-w-[580px] min-h-[420px] shadow-md">
            <h3
              className="text-[1.2rem] md:text-[1.4rem] font-bold mb-1"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Works II
            </h3>
            <p className="text-md text-gray-600 mb-3">Karamsad, Gujarat</p>

            <p
              className="text-[1.1rem] md:text-[1.2rem] leading-relaxed"
              style={{ fontFamily: "BrandingMedium" }}
            >
              The Indabrator foundry and abrasive plant is located within 60
              acres of land in Karamsad, Gujarat. Lauded as one of India's
              finest manufacturing centers, the plant includes full heat
              treatment facilities and physical and chemical tests laboratories.
            </p>
            <p
              className="text-[1.1rem] md:text-[1.2rem] leading-relaxed mt-2"
              style={{ fontFamily: "BrandingMedium" }}
            >
              The state-of-the-art alloy iron foundry enables the manufacture of
              highly wear-resistant shell-molded alloy iron castings and spares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndabratorUnitss;
