import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import image from "@/assests/shareHolder/48.png";
import imageBlue from "@/assests/shareHolder/48blue.png";
import image2 from "@/assests/shareHolder/50.png";
import imageBlue2 from "@/assests/shareHolder/50blue.png";

function ShareDetail() {
  const [enter, setEnter] = useState(null);

  return (
    <div className="goal-section1 relative flex justify-center items-center py-20 ">
      {/* Background Div */}
      <div className="absolute inset-0 bg-white h-3/4"></div>
      <div className="absolute inset-0 bg-blue-200 h-1/4 top-[75%] "></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-6 justify-evenly w-[90%]">
        {/* Card 1 */}
        <div
          className={`border border-black shadow-lg p-6 xl:w-[30%] transition-all duration-300 ${
            enter === "card1" ? "bg-primary" : "bg-white"
          } w-full `}
        >
          <div
            className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 text-white h-full flex-col items-center justify-between flex py-2"
            onMouseEnter={() => setEnter("card1")}
            onMouseLeave={() => setEnter(null)}
          >
            <div className="max-w-[6rem] mt-5">
              {enter === "card1" ? (
                <Image
                  src={imageBlue}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-3 flex flex-col">
              <h2 className="md:text-3xl text-2xl text-center font-bold">
                Details of shares transferred to IEPF
              </h2>
              <p className="flex-grow text-xl font-poppins text-center mt-3">
                Pursuant to section 124(6) of the Companies Act.
              </p>
              <div className="w-full flex justify-end">
                <div className="flex justify-center items-center w-10 h-10 mt-3">
                  <button className=" bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaArrowDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`border border-black shadow-lg p-6 xl:w-[30%] transition-all duration-300 ${
            enter === "card2" ? "bg-primary" : "bg-white"
          } w-full `}
        >
          <div
            className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 text-white h-full flex-col items-center justify-between flex py-2"
            onMouseEnter={() => setEnter("card2")}
            onMouseLeave={() => setEnter(null)}
          >
            <div className="xl:w-[8rem] md:w-[10rem] sm:w-[9rem] w-[9.3rem] mt-5">
              {enter === "card2" ? (
                <Image
                  src={imageBlue2}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={image2}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className=" p-3 flex flex-col">
              <h2 className="md:text-3xl text-2xl text-center font-bold px-3 pb-5 xl:pb-0">
                Application to claim unpaid dividend and shares
              </h2>
              <div className="w-full flex justify-end">
                <div className=" flex justify-center items-center w-10 h-10 mt-3">
                  <button className=" bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaArrowDown className="-rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareDetail;
