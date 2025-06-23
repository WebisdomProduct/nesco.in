import React from "react";

function HospitalityIntro() {
  return (
    <section className="w-full min-h-screen h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with better mobile sizing */}
      <div className="md:w-1/2 w-full p-4 sm:p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Creating a myriad of gourmet experiences
        </h1>
      </div>
      
      {/* Right column - Description with responsive typography */}
      <div className="md:w-1/2 w-full p-4 sm:p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Holistic and well-equipped infrastructure marries an experienced team at Nesco Foods to create versatile culinary experiences.
        </p>
        <p 
          className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[1.4] sm:leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          From developing unique food brands, to creating multi-cuisine recipes for events and occasions, the brand's understanding of food is vast in its breadth but intricate in their level of detail.
        </p>
      </div>
    </section>
  );
}

export default HospitalityIntro;