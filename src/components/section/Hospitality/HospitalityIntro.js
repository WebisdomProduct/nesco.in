import React from "react";

function HospitalityIntro() {
  return (
    <section className="w-full min-h-auto bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[45%] w-full pl-[3%] py-12 flex flex-col justify-center">
        <h1 
          className="text-[4rem] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[5.9rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Creating a myriad of gourmet experiences
        </h1>
      </div>
      
      {/* Right column - Description with responsive typography */}
      <div className="md:w-[55%] w-full pr-[2%] py-12 bg-white flex flex-col justify-center items-center">
        <p 
          className="text-[1.8rem] sm:text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed text-justify"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Holistic and well-equipped infrastructure marries an experienced team at Nesco Foods to create versatile culinary experiences. From developing unique food brands, to creating multi-cuisine recipes for events and occasions, the brand's understanding of food is vast in its breadth but intricate in their level of detail.
        </p>
      </div>
    </section>
  );
}

export default HospitalityIntro;