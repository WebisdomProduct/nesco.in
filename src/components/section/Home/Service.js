import React from "react";
import ServiceImage from "@/assests/Home/girl.jpg";

function Service() {
  return (
    <div className="md:pt-[78px] pt-10 flex w-full justify-center items-center h-[100vh]">
      <div className=" md:w-[80%] w-[90%] relative overflow-hidden h-[80%] flex items-center">
        <div className="absolute top-0 left-0 -z-[1] w-full h-full">
          <img
            src={ServiceImage.src}
            alt="service image"
            className="w-full h-full object-cover"
          />
          {/* opacity */}
          {/* <div
            className="absolute w-full h-full -z-0 top-0 left-0"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0) 10%, rgba(209,238,254,0.9) 60%)",
            }}
          ></div> */}
        </div>
        <div className="xl:w-[65%] lg:w-[60%] md:w-[70%] z-[1] flex flex-col gap-5 py-10 lg:px-20 md:px-10 px-5 ">
          {/* <p className="text-primary md:text-4xl text-3xl font-bold mt-10"> */}

          <p
            className="lg:text-[3.2rem] text-2xl font-bold text-primary mt-10 tracking-wide leading-[3.5rem]"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            In service of a better & brighter tomorrow
          </p>

          {/* <p className="text-lg lg:text-xl text-justify"> */}
          <p className="text-justify md:w-[90%] text-[1.47rem] font-branding-medium leading-[2rem]">
            For us, social responsibility is all about creating positive impact
            in the lives of the hopeful by working tirelessly to improve access
            to education, infrastructure & medical facilities in rural areas.
          </p>
          <div className="mt-8">
            <button className="px-8 py-2 bg-primary border border-black text-[1.4rem] uppercase font-branding-semibold text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
