import React from "react";

function IndabratorIntro() {
  return (
    <section className="w-full min-h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with better mobile scaling */}
      <div className="md:w-1/2 w-full p-2 sm:p-6 md:p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A pioneer of dreams that will engineer tomorrow.
        </h1>
      </div>
      
      {/* Right column - Description with responsive typography */}
      <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-[5%] bg-white flex flex-col">
        <p 
          className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Indabrator is an ideal service provider in the engineering segment. The company believes in a single-window solution for all surface-preparation needs. This includes machines, spares and abrasives.
        </p>
        <p 
          className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[1.4] sm:leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Indabrator's leadership is defined by its total immersion across the value chain with its own foundry and state-of-the-art manufacturing unit.
        </p>
      </div>
    </section>
  );
}

export default IndabratorIntro;