import React from "react";

function IndabratorIntro() {
  return (
    <section className="w-full min-h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[45%] w-full pl-[3%] py-12 flex flex-col justify-center">
        <h1 
          className="text-[4rem] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[5.9rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A pioneer of dreams that will engineer tomorrow.
        </h1>
      </div>
      
      {/* Right column - Description with responsive typography */}
      <div className="md:w-[55%] w-full pr-[2%] py-12 bg-white flex flex-col justify-center items-center">
        <div className="space-y-6">
          <p 
            className="text-[1.8rem] sm:text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed text-justify"
            style={{ fontFamily: "BrandingMedium" }}
          >
            Indabrator is an ideal service provider in the engineering segment. The company believes in a single-window solution for all surface-preparation needs. This includes machines, spares and abrasives. Indabrator's leadership is defined by its total immersion across the value chain with its own foundry and state-of-the-art manufacturing unit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndabratorIntro;