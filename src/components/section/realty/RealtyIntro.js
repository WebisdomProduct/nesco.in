import React from "react";

function RealtyIntro() {
  return (
    <section className="w-full h-auto bg-white flex flex-col md:flex-row overflow-hidden goal-section1">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center flex-1">
        <h1 
          className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          <span className="block">The future of</span>
          <span className="block">construction.</span>
          <span className="block mt-2">Unbeatable quality,</span>
          <span className="block">unbeatable value.</span>
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-[5%] bg-white flex flex-col ">
        <div className="h-full flex flex-col">
          <p 
            className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] mb-5 leading-relaxed pt-0 md:pt-[5%]"
            style={{ fontFamily: "BrandingMedium" }}
          >
            A robust real-estate provider, Nesco Realty uses the latest building technology and delivery mechanisms to create workspaces, homes and assembly spaces.
          </p>
          <p 
            className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[1.8rem] leading-relaxed pb-0 md:pb-[5%]"
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