import React from "react";

function PhilosophyBelieve() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center relative overflow-hidden">
      {/* Video Background */}
      <div className="w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source
            src="https://dayanandsagaruniversity.s3.ap-south-1.amazonaws.com/audio/1740482036556.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-[#05547A] opacity-40"></div>

      <div className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20">
        <span className="lg:mx-10 mx-3 absolute -top-1/2 transform -translate-y-[90%] lg:left-[16.8rem] md:left-[16rem] left-[8rem]">
          E
        </span>
      </div>
      <div className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white lg:left-[10%] md:left-[1%] left-0 z-20">
        <span className="lg:mx-10 mx-3 absolute -top-1/2 transform -translate-y-[90%] lg:left-[32.6rem] md:left-[25.6rem] left-[8rem]">
          L
        </span>
      </div>

      {/* Blue Stripe Container */}
      <div className="absolute w-full h-[550vh] flex justify-center items-center lg:gap-32 md:gap-20 gap-10 rotate-[40deg] xl:ml-[20rem] lg:ml-[30rem] md:ml-[40rem] ml-[30rem] z-10">
        <div className="h-full lg:w-44 w-[400px] bg-[#101485] opacity-80 hidden md:block"></div>
        <div className="h-full lg:w-44 w-[400px] bg-[#101485] opacity-80"></div>
        <div className="h-full lg:w-44 w-[400px] bg-[#101485] opacity-80"></div>
        <div className="h-full w-[900px] md:w-[900px] lg:w-[900px] bg-[#101485] opacity-80"></div>
      </div>

      {/* Text Container */}
      <p className="absolute md:leading-[18rem] leading-[10rem] lg:text-[20rem] md:text-[15rem] text-[10rem] font-branding-bold text-white md:left-[10%] left-[1%] transform translate-y-[5%]">
        <span
          className="lg:mx-10 mx-3 relative"
          style={{ zIndex: "-10 !important" }}
        >
          B
        </span>
        <span className="lg:mx-10 mx-3 relative opacity-0">E</span>
        <span className="lg:mx-10 mx-3 relative" style={{ zIndex: 25 }}>
          L
        </span>
        <br />
        <span className="lg:mx-10 mx-3 relative" style={{ zIndex: 25 }}>
          I
        </span>
        <span className="lg:mx-10 mx-3 relative" style={{ zIndex: 25 }}>
          E
        </span>
        <span className="lg:mx-10 mx-3 relative" style={{ zIndex: 25 }}>
          V
        </span>
        <span className="lg:mx-10 mx-3 relative" style={{ zIndex: 25 }}>
          E
        </span>
      </p>
    </div>
  );
}

export default PhilosophyBelieve;
