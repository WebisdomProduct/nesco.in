import React from "react";
import "./about.css";
import Navbar from "@/components/layout/navbar/Navbar";

const page = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="imgcontainer relative">
        <img
          src="https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          className="img w-full"
        />
        <div className="sideBox bg-violet-900  sm:w-[45%] md:w-[45%] lg:w-[25%] z-50 absolute top-1/2 sm:left-[12vh] md:left-[13vh] lg: left-[15vh] transform -translate-x-1/2 -translate-y-1/2 py-10 md:pl-10 sm:pl-3 lg:pl-16 opacity-85 flex justify-center items-center flex-wrap  ">
         <div className="innerContainer text-center">
         <p className="text-white sm:text-xl md:text-2xl font-branding-medium ">
            To be constantly
          </p>

          <p className="text-blue-300 text-xl sm:text-2xl md:text-3xl font-branding-medium">
            {" "}
            dynamic is growth.
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
            To be constantly
          </p>
          <p className="text-blue-300 text-xl sm:text-2xl md:text-3xl  font-branding-medium">
            learning is wisdom
          </p>
         </div>
        </div>
      </div>

      <div className="text flex flex-col md:flex-row">
        <div className="leftText md:w-1/2 px-2 md:px-16 py-8">
          <p class="text-blue-800 text-3xl md:text-6xl  font-branding-semibold px-[20%] py-[40%]">
            Businesses
            <br /> evolve,so do <br /> mindsets. Only <br />
            beliefs remains <br /> unchanged.
          </p>
        </div>

        <div className="rightText  px-4 md:px-16 py-8 text flex"> 
          <p class="text-gray-700 text-base md:text-2xl font-branding-medium p-4  ">
            With business verticals as varied as exhibitions, events,
            hospitality, MICE, and realty, our steady expansion augments our
            growth as we watch several new ideas find form.
            <br />
            <br />
            With the continued expansion of the Bombay Exhibition Center, there
            is now a versatile solution for any trade fair. The BEC is already
            India’s largest exhibition venue in the private sector, hosting all
            the Messe’s as well as organizers from across the globe.
            <br />
            <br /> Nesco Realty carved a new benchmark with its premium IT Park.
            A self-sustained facility, the Park is laid out over several million
            square feet. It accommodates the world’s leading multinationals such
            as HSBC, KPMG, PWC, MSCI, BlackRock, and several others. The
            division is now looking to offer maxi-
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
