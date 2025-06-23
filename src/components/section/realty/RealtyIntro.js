import React from "react";

function RealtyIntro() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold leading-tight mb-4 md:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          <span className="block">The future of</span>
          <span className="block">construction.</span>
          <span className="block mt-2">Unbeatable quality,</span>
          <span className="block">unbeatable value.</span>
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-lg sm:text-xl md:text-[1.5rem] lg:text-[1.7rem] mb-4 sm:mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          A robust real-estate provider, Nesco Realty uses the latest building technology and delivery mechanisms to create workspaces, homes and assembly spaces.
        </p>
        <p 
          className="text-lg sm:text-xl md:text-[1.5rem] lg:text-[1.7rem] leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Keeping abreast with new technology, the brand weaves world-class amenities and sustainability provisions into every project, with meticulous attention to detail. Customized to urban lifestyles, the brand metamorphoses ingenious design into structures of practicality and utility.
        </p>
      </div>
    </section>
  );
}

export default RealtyIntro;