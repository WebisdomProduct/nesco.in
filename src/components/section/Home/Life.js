import React from "react";
import background from "@/assests/Home/N-1.png";

function Life() {
  return (
    <div className="flex lg:px-[7rem] px-5 md:px-16 justify-between items-center w-full bg-[#002172] relative pt-16 overflow-hidden h-[100vh]">
      <div className="flex flex-col lg:w-[40%]  md:gap-7 gap-10 py-20 z-10">
        <p className="text-3xl font-bold text-secondary text-center md:text-left">
          Life at Nesco
        </p>
        <p className="text-white text-3xl  text-center md:text-left">
          An inspired culture of progress
        </p>
        <p className="text-white text-justify md:w-[70%] md:text-base text-lg">
          At Nesco, we foster an inspired culture of{" "}
          <span className="font-bold">
            {" "}
            progress, where every individual is empowered
          </span>{" "}
          to grow, innovate, and thrive. Our commitment to creating a nurturing
          environment has earned us the distinction of being a Great Place to
          Work Certified. This recognition reflects our dedication to providing
          our team with the best platform for professional development,
          collaboration, and success. We believe that when our people flourish,
          so does our organi- zation, making Nesco not just a workplace, but a
          community of motivated individuals shaping the future together.
        </p>
      </div>

      <div className="hidden lg:block absolute w-full h-full top-0 left-0">
        <img
          src={background.src}
          alt="background"
          className=" absolute z-0 right-0  xl:w-[70%] lg:w-[700px] xl:-top-[12%] lg:top-[10%]"
        />
        <div className="absolute hidden md:block z-0 bottom-16 right-10 w-[140px]">
          <div className="overflow-hidden relative text-white bg-red-500 text-[2rem] leading-8 border-x-2 border-t-2 border-white p-3">
            Great Place To Work
          </div>
          <div className="text-white flex flex-col items-center border-x-2 relative">
            <p className="text-[1.8rem]">Certified</p>
            <p className="text-[8px] pb-1">December 2024 - December 2025</p>
            {/* Triangle */}
            {/* <div className="absolute w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-t-[70px] border-t-white top-full"></div> */}
          </div>
          <div className="text-white flex flex-col items-center relative mb-5">
            <span className="inline-block bg-[#002172] absolute -top-1 left-0 h-1 w-full z-10 rounded-full border-l-2 border-r-2"></span>
            <span className="absolute -top-[16px] ">
              <svg
                width="140"
                height="100"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="0,0 200,0 100,80"
                  fill="#002172"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text
                  x="50%"
                  y="20%"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                >
                  INDIA
                </text>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Life;
