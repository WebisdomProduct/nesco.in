import React from "react";
import ServiceImage from "@/assests/Home/service.jpeg";

function Service() {
  return (
    <div className="my-16 flex w-full justify-center ">
      <div className="w-[60%] relative overflow-hidden">
        <div className="absolute top-0 left-0 -z-[1] w-full h-full">
          <img
            src={ServiceImage.src}
            alt="service image"
            className="w-full h-full scale-125 absolute left-20 object-cover top-14"
          />
          {/* opacity */}
          <div
            className="absolute w-full h-full -z-0 top-0 left-0"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0) 10%, rgba(209,238,254,0.9) 60%)",
            }}
          ></div>
        </div>
        <div className="w-[50%] z-[1] flex flex-col gap-5 py-10 px-10">
          <p className="text-primary text-3xl font-bold mt-10">
            In service of a better & brighter tomorrow
          </p>
          <p className="text-lg text-justify">
            For us, social responsibility is all about creating positive impact
            in the lives of the hopeful by working tirelessly to improve access
            to education, infrastructure & medical facilities in rural areas.
          </p>
          <div className="mt-8">
            <button className="px-8 py-2 bg-primary text-white">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
