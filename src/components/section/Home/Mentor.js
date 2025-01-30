import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";
import backgroundImage from "@/assests/Home/N.png";

function Mentor() {
  return (
    <div className="bg-[#D2EFFF] flex flex-col items-center justify-center relative w-full lg:h-[100vh] overflow-hidden ">
      <div className="z-10 relative flex flex-col items-center justify-center w-full h-full my-20">
        <div className="text-center">
          <p className="lg:text-3xl text-xl text-primary">
            A note from the Founding
          </p>
          <p className="lg:text-3xl text-2xl font-bold text-primary border-b-2 border-b-primary pb-3 mt-2">
            Director and Mentor
          </p>
        </div>
        <div className="lg:w-[60%] w-[80%] flex flex-col items-center md:text-lg mt-10">
          <p>
            In the last eight decades, Nesco has come a long way. We see our
            present success as only the start to newer and bolder initiatives.
            This is an affirmation that as we continue to grow, we add to the
            growth of our country.
          </p>
          <div className="lg:flex mt-10 h-full w-full">
            <div className="lg:w-[70%] flex flex-col justify-between gap-10 lg:gap-0 md:text-lg">
              <p>
                Our teams are motivated to set new benchmarks across industries
                through perseverance and innovation. The world we live in is
                rapidly evolving and at Nesco we are prepared to meet every
                challenge head on.
              </p>
              <p className="font-bold text-primary">
                -Late Shri. Sumant J. Patel.
              </p>
            </div>
            <div className="lg:w-[30%] flex lg:justify-end justify-center mt-10 lg:mt-0">
              <img
                src={MentorImage.src}
                alt="Mentor image"
                className="h-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full z-0 absolute">
        <img
          src={backgroundImage.src}
          alt="background image"
          className="object-cover absolute lg:w-[70%] w-full right-0 lg:-top-[10%] top-[50%] sm:top-[20%] "
        />
      </div>
    </div>
  );
}

export default Mentor;
