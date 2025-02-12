import React from "react";
import sustainabilityPerformance from "@/assests/sustainability/sustainabilityPerformance.png";
import Image from "next/image";

function SustainabilityPerformance() {
  return (
    <>
      <div className=" relative">
        <div className="absolute bg-gray-300 w-full xl:h-[20%] md:h-[25%] sm:h-[15%] h-[10%] z-0"></div>
        <div className="w-full pt-16 md:flex xl:px-28 md:px-16 px-10 z-10 relative">
          <div className="basis-[60%] text-center">
            <Image
              src={sustainabilityPerformance}
              alt="Sustainability Performance"
              className="w-[95%] border-2 border-gray-400 mb-10"
            />
            <button className="bg-[#f2a0ed] px-3 p-2 text-sm">
              Business Responsibility and Sustainability Report
            </button>
          </div>
          <div className="basis-[40%]">
            <h1 className="text-[#c051b8] text-3xl font-bold md:mb-16 mb-8 md:mt-0 mt-8">
              ESG Performance
            </h1>
            <p className="xl:text-[21px] lg:text-[17px] text-[16px] text-justify">
              At Nesco, we are committed to environmental stewardship and are
              focused on minimizing our carbon footprint, conserving natural re
              sources, and promoting sustainable practices. Through continuous
              innovation and invest ment in green technologies, we strive to
              achieve operational excellence while safe Nesco is continuously
              improving its sustain ability practices while identifying
              opportunities to adopt industry best practices. The ESG ambitions
              and action areas are aligned with the NGRBC Principles. Perfor The
              ESG ambitions and action areas are aligned with the NGRBC
              Principles. Perfor mance against these principles is discussed in
              detail in the Business Responsibility and Sus tainability Report
              (BRSR) which is included in the statutory reports section of the
              Annual Reports.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 mt-10 bg-[#c051b8] "></div>
    </>
  );
}

export default SustainabilityPerformance;
