import React from "react";
import sustainabilityPerformance from "@/assests/sustainability/sustainabilityPerformance.png";
import Image from "next/image";

function SustainabilityPerformance() {
  return (
    <>
      <div className="goal-section1 relative flex flex-col justify-center items-center mt-0 lg:mt-10">
        <div className="absolute bg-gray-300 w-full xl:h-[20%] md:h-[25%] sm:h-[15%] h-[10%] z-0 top-0"></div>
        <div className=" pt-16 lg:flex z-10 relative w-[90%]">
          <div className="basis-[60%] text-center">
            <Image
              src={sustainabilityPerformance}
              alt="Sustainability Performance"
              className="w-[95%] border-2 border-gray-400 mb-10"
            />
            <button className="bg-[#BA74B9] text-white px-3 p-2 lg:text-xl text-xl ">
              Business Responsibility and Sustainability Report
            </button>
          </div>
          <div className="basis-[40%]">
            <h1 className="text-[#BA74B9] text-3xl font-branding-semibold font-bold lg:mb-16 mb-8 lg:mt-0 mt-8">
              ESG Performance
            </h1>
            <p className="xl:text-[21px] lg:text-[17px] text-[16px] text-justify">
              At Nesco, we are committed to environmental stewardship and are
              focused on minimizing our carbon footprint, conserving natural
              resources, and promoting sustainable practices. Through continuous
              innovation and investment in green technologies, we strive to
              achieve operational excellence while safe
            </p>
            <p className="xl:text-[21px] lg:text-[17px] text-[16px] text-justify mt-5">
              Nesco is continuously improving its sustainability practices while
              identifying opportunities to adopt industry best practices.
            </p>
            <p className="xl:text-[21px] lg:text-[17px] text-[16px] text-justify mt-5">
              The ESG ambitions and action areas are aligned with the NGRBC
              Principles. Performance against these principles is discussed in
              detail in the Business Responsibility and Sustainability Report
              (BRSR) which is included in the statutory reports section of the
              Annual Reports.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 mt-10 bg-[#BA74B9] "></div>
    </>
  );
}

export default SustainabilityPerformance;
