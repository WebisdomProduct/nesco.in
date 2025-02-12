import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import image from "@/assests/shareHolder/49.png";

function ShareDetail() {
  return (
    <div className="relative  flex justify-center items-center px-6 py-8 ">
      {/* Background Div */}
      <div className="absolute inset-0 bg-white h-3/4"></div>
      <div className="absolute inset-0 bg-blue-200 h-1/4 top-[75%] "></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-6 justify-evenly">
        {/* Card 1 */}
        <div className="border border-gray-300 shadow-lg p-6 lg:w-[30%] w-full">
          <div className="bg-indigo-900 flex-col items-center flex py-2">
            <div className="w-[50%] h-[50%]">
              <Image src={image} alt="image" className="w-full h-full" />
            </div>
            <div className=" text-white p-6 flex flex-col">
              <h2 className="text-lg font-bold">
                Details of shares transferred to IEPF
              </h2>
              <p className="text-sm flex-grow">
                Pursuant to section 124(6) of the Companies Act.
              </p>
              <div className="w-full flex justify-end">
                <button className="mt-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 shadow-lg p-6 lg:w-[30%] w-full">
          <div className="bg-indigo-900 flex-col items-center flex py-2">
            <div className="w-[50%] h-[50%]">
              <Image src={image} alt="image" className="w-full h-full" />
            </div>
            <div className=" text-white p-6 flex flex-col">
              <h2 className="text-lg font-bold">
                Details of shares transferred to IEPF
              </h2>
              <p className="text-sm flex-grow">
                Pursuant to section 124(6) of the Companies Act.
              </p>
              <div className="w-full flex justify-end">
                <button className="mt-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareDetail;
