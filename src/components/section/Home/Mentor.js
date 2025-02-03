import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";
import backgroundImage from "@/assests/Home/N.png";

function Mentor() {
  return (
    <div className="bg-[#D2EFFF] flex flex-col items-center justify-center relative w-full lg:h-[100vh] overflow-hidden pt-8 md:pt-0">
      <div className="z-10 relative flex flex-col items-center justify-center w-full h-full my-20">
        <div className="text-center">
          <p
            className="lg:text-5xl text-xl text-primary"
            style={{
              fontFamily: "BrandingMedium",
            }}
          >
            A note from the Founding
          </p>
          <p
            className="lg:text-[3.3rem] text-2xl font-bold text-primary pb-3 mt-4"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Director and Mentor
          </p>
        </div>
        <div className="lg:w-[70%] w-[80%] flex flex-col items-center md:text-lg mt-10">
          <p className="text-justify text-[1.6rem]  font-branding-medium leading-[2.2rem]">
            In the last eight decades, Nesco has come a long way. We see our
            present success as only the start to newer and bolder initiatives.
            This is an affirmation that as we continue to grow, we add to the
            growth of our country.
          </p>
          <div className="lg:flex mt-10 h-full w-full">
            <div className="lg:w-[70%] flex flex-col justify-between gap-10 lg:gap-0 md:text-lg">
              <p className="text-justify text-[1.6rem]  font-branding-medium leading-[2.2rem]">
                Our teams are motivated to set new benchmarks across industries
                through perseverance and innovation. The world we live in is
                rapidly evolving and at Nesco we are prepared to meet every
                challenge head on.
              </p>
              <p className="font-branding-semibold text-[1.8rem]  text-primary">
                - Late Shri. Sumant J. Patel.
              </p>
            </div>
            <div className="lg:w-[50%] flex lg:justify-end justify-center mt-10 lg:mt-0">
              <img
                src={MentorImage.src}
                alt="Mentor image"
                className="h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full z-0 absolute flex lg:items-center lg:justify-end justify-center sm:items-end items-center right-0 mt-36">
        <img
          src={backgroundImage.src}
          alt="background image"
          className="object-cover md:w-[70%] sm:h-full w-full h-[50%]"
        />
      </div>
    </div>
  );
}

export default Mentor;
