import React from "react";
// import SampleVideo from "@/assests/careers/sample.mp4";
function CareerVoice() {
  return (
    <section className="w-full md:h-screen relative overflow-hidden">
      <div className="w-full absolute bottom-0 left-0 bg-secondary h-[30%] z-0"></div>

      <div className="relative z-10 flex flex-col items-center md:pt-28 pt-10 lg:gap-0 gap-10">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-BrandingSemibold font-bold"
        >
          Voices of Nesco
        </h2>
        <div className="lg:w-[80%] scale-75 -mt-10">
          <video controls className=" ">
            <source src="/sample.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default CareerVoice;
