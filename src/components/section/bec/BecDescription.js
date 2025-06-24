import React from "react";

function BecDescription() {
  return (
    <section className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center flex-1">
        <h1 
          className="text-[3.5rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A Confluence of business & cultures
        </h1>
      </div>
      
      {/* Right column - Description with improved text scaling */}
      <div className="md:w-1/2 w-full p-[5%] bg-gray-50 flex flex-col justify-center ">
        <p 
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          If business is on the cards, all roads, lead to the Bombay Exhibition Center. Founded in 1991, the BEC reflects Belief and Opportunity. Bringing over millions of ideas to life, the Center has helped the globe converge in Mumbai with a common purpose.
        </p>
        <p 
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] leading-relaxed mb-5"
          style={{ fontFamily: "BrandingMedium" }}
        >
          As a space of limitless possibility, the BEC is endlessly customisable. With robust infrastructure, the center paces itself to global standards. The wide options of venues, the versatility packed within, are topped with helpful services.
        </p>
        <p 
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] leading-relaxed"
          style={{ fontFamily: "BrandingMedium" }}
        >
          The BEC has attained historical status in Mumbai as the ideal location for exhibitions, MICE, trade shows, business displays, events and entertainment.
        </p>
      </div>
    </section>
  );
}

export default BecDescription;