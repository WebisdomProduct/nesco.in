import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import image from "@/assests/shareHolder/49.png";

function ShareDetail() {
  return (
    <div className="goal-section1 relative flex justify-center items-center py-20 ">
      {/* Background Div */}
      <div className="absolute inset-0 bg-white h-3/4"></div>
      <div className="absolute inset-0 bg-blue-200 h-1/4 top-[75%] "></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-6 justify-evenly w-[90%]">
        {/* Card 1 */}
        <div className="border border-black shadow-lg p-6 lg:w-[30%] w-full bg-white">
          <div className="bg-indigo-900 flex-col items-center flex py-2">
            <div className="w-[50%] h-[50%]">
              <Image src={image} alt="image" className="w-full h-full" />
            </div>
            <div className=" text-white p-6 flex flex-col">
              <h2 className="md:text-3xl text-2xl text-center font-bold">
                Details of shares transferred to IEPF
              </h2>
              <p className="flex-grow text-xl font-poppins text-center mt-3">
                Pursuant to section 124(6) of the Companies Act.
              </p>
              <div className="w-full flex justify-end">
                <div className="bg-white flex justify-center items-center w-10 h-10 mt-3">
                  <button className=" bg-blue-900 text-white p-2 rounded-full">
                    <FaArrowDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-black shadow-lg p-6 lg:w-[30%] w-full bg-white">
          <div className="bg-indigo-900 flex-col h-full items-center justify-between flex py-2">
            <div className="w-[50%]">
              <Image src={image} alt="image" className="w-full h-full" />
            </div>
            <div className=" text-white p-6 flex flex-col">
              <h2 className="md:text-3xl text-2xl text-center font-bold px-5 pb-5 xl:pb-0">
                Application to claim unpaid dividend and shares
              </h2>
              <div className="w-full flex justify-end">
                <div className="bg-white flex justify-center items-center w-10 h-10 mt-3">
                  <button className=" bg-blue-900 text-white p-2 rounded-full">
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
