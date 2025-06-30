import React from "react";

function EventIntro() {
  return (
    <section className="w-full min-h-auto h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full pl-[3%] py-[3%] flex flex-col justify-center">
        <h1 
          className="text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.3rem] xl:text-[4.8rem] font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Curating extravagant and breath taking experiences from concept to execution
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full pr-[3%] py-[3%]bg-white flex flex-col justify-center">
        <p 
          className="text-[1.7rem] sm:text-[1.9rem] md:text-[2.1rem] lg:text-[2.3rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          We specialize in designing and delivering extraordinary experiences tailored to your vision. From the initial spark of an idea to the final, flawless execution, we handle every detail with precision, creativity, and a passion for excellence—turning once-in-a-lifetime moments into unforgettable realities.
        </p>
      </div>
    </section>
  );
}

export default EventIntro;