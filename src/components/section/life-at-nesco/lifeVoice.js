import VideoBanner from "@/components/common/videoBanner/videoBanner";
import React from "react";
// import SampleVideo from "@/assests/careers/sample.mp4";
function LifeVoice() {
  const SliderData = [
    {
      video: "/sample.mp4",
      type: "mp4",
    },
    {
      video: "/sample.mp4",
      type: "mp4",
    },
    {
      video: "/sample.mp4",
      type: "mp4",
    },
    {
      video: "/sample.mp4",
      type: "mp4",
    },
  ];

  return (
    <section className="header_color_black goal-section1 w-full relative overflow-hidden xl:h-screen flex justify-center items-center">
      <div className="w-full absolute bottom-0 left-0 bg-secondary h-[30%] z-0 hidden lg:block"></div>

      <div className="relative z-10 flex flex-col items-center lg:gap-0 gap-10 w-full h-full py-20">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-BrandingSemibold font-bold"
        >
          Voices of Nesco
        </h2>
        {/* <div className="lg:w-[80%] scale-75 -mt-10">
          <video controls className=" ">
            <source src="/sample.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="w-full overflow-hidden h-[100%]">
          <VideoBanner SliderData={SliderData} />
        </div>
      </div>
    </section>
  );
}

export default LifeVoice;
