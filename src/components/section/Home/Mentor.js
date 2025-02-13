import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";
import backgroundImage from "@/assests/Home/N.png";
import Image from "next/image";

function Mentor() {
  return (
    <section className="bg-[#cbe0e7] flex flex-col items-center justify-center relative w-full xl:h-auto h-full overflow-hidden pt-8 md:pt-0 pb-10">
      {/* Content */}
      <div className="z-20 relative w-[90%] flex flex-col items-center justify-center mx-auto mt-20 mb-10 md:h-screen goal-section1">
        <div className="flex md:flex-row flex-col items-start gap-5">
          {/* Text Content */}
          <div className="relative md:w-[60%] h-full">
            <div className="z-10 relative">
              <h2
                style={{ fontFamily: "BrandingSemibold" }}
                className="text-3xl md:text-5xl text-primary"
              >
                A note from the Founding
              </h2>
              <h3 className="font-branding-medium text-3xl mt-2 md:text-4xl text-primary">
                Director and Mentor
              </h3>
              <div className="space-y-4 mt-7 text-gray-700">
                <p className="lg:text-3xl text-2xl font-branding-medium leading-9">
                  In the last eight decades, Nesco has come a long way. We see
                  our present success as only the start to newer and bolder
                  initiatives. This is an affirmation that as we continue to
                  grow, we add to the growth of our country.
                </p>
                <p className="lg:text-3xl text-2xl font-branding-medium leading-9">
                  Our teams are motivated to set new benchmarks across
                  industries through perseverance and innovation. The world we
                  live in is rapidly evolving and at Nesco we are prepared to
                  meet every challenge head on.
                </p>
              </div>
            </div>
            {/* Background Image */}
            <div className="w-full h-full z-0 absolute top-16">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={backgroundImage}
                  alt="background image"
                  objectFit="cover"
                  className="w-full xl:scale-[1] lg:scale-[1.5] md:scale-[1.7] scale-[1.5]"
                />
              </div>
            </div>
          </div>

          {/* Mentor Image and Name */}
          <div className="flex flex-col md:w-[40%] w-full h-full md:items-end items-center justify-center z-10 relative">
            <div className="w-full">
              <div className="w-full max-w-[500px]">
                <Image
                  src={MentorImage}
                  alt="Mentor"
                  width={550}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-2xl font-branding-medium text-primary">
                  Sumant J. Patel
                </h3>
                <p className="mt-1 font-branding-medium">
                  (15th August 1935 – 17th November 2021)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentor;
