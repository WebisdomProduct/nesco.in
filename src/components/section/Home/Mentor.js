import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";
import backgroundImage from "@/assests/Home/N.png";
import Image from "next/image";

function Mentor() {
  return (
    <div className="bg-[#D2EFFF] flex flex-col items-center justify-center relative w-full lg:h-[100vh] overflow-hidden pt-8 md:pt-0">
      <div className="z-10 relative w-[81%] flex flex-col items-center justify-center mx-auto h-full my-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="">
            <h2
              style={{ fontFamily: "BrandingSemibold" }}
              className=" text-3xl md:text-5xl text-indigo-700"
            >
              A note from the Founding
            </h2>
            <h3 className="font-branding-medium text-3xl mt-2 md:text-4xl text-indigo-700">
              Director and Mentor
            </h3>
            <div className="space-y-4 text-gray-700 mt-8">
              <p className="text-[19px] font-branding-medium">
                In the last eight decades, Nesco has come a long way. We see our
                present success as only the start to newer and bolder
                initiatives. This is an affirmation that as we continue to grow,
                we add to the growth of our country.
              </p>
              <p className="text-[19px] font-branding-medium">
                Our teams are motivated to set new benchmarks across industries
                through perseverance and innovation. The world we live in is
                rapidly evolving and at Nesco we are prepared to meet every
                challenge head on.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="">
              <Image
                src={MentorImage}
                width={350}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-branding-medium text-indigo-700">
                Sumant J. Patel
              </h3>
              <p className="text-gray-600 mt-1 font-branding-medium">
                (15th August 1935 – 17th November 2021)
              </p>
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
