import React from "react";

function RealtyIntro() {
  return (
    <section className="w-full h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full pl-[2%] flex flex-col justify-center flex-1">
        <h1 
          className="text-[3rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[4.9rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          <span className="block">The future of</span>
          <span className="block">construction.</span>
          <span className="block mt-2">Unbeatable quality,</span>
          <span className="block">unbeatable value.</span>
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-[50%] w-full pr-[2%] py-4 bg-white flex flex-col justify-start h-full">
        <div className="h-full flex flex-col">
          <p 
            className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] mb-5 leading-relaxed"
            style={{ fontFamily: "BrandingMedium" }}
          >
            A robust real-estate provider, Nesco Realty uses the latest building technology and delivery mechanisms to create workspaces, homes and assembly spaces.
          </p>
          <p 
            className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] leading-relaxed "
            style={{ fontFamily: "BrandingMedium" }}
          >
            Keeping abreast with new technology, the brand weaves world-class amenities and sustainability provisions into every project, with meticulous attention to detail. Customized to urban lifestyles, the brand metamorphoses ingenious design into structures of practicality and utility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RealtyIntro;