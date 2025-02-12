import Image from "next/image";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import practicesIcon from "@/assests/sustainability/practicesIcon.png";
import practicesIcon1 from "@/assests/sustainability/51.png";
import practicesIcon2 from "@/assests/sustainability/50.png";
import practicesIcon3 from "@/assests/sustainability/49.png";
import practicesIcon4 from "@/assests/sustainability/48.png";
import practicesIcon5 from "@/assests/sustainability/47.png";
import practicesIcon6 from "@/assests/sustainability/44.png";

function SustainabilityPractices() {
  return (
    <>
      <div className="my-12 text-center relative">
        <div className="mb-14">
          <h1 className="text-3xl font-bold"> Integrated Sustainability </h1>
          <h1 className="text-3xl font-bold">
            Practices for a Resilient Future
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly xl:px-72 md:px-20 px-12 gap-16">
          <div>
            <div className="border-2 border-[#81e1aa] relative">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon1}
                alt="practicesIcon1"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
          <div>
            <div className="border-2 border-[#81e1aa] relative z-10">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon2}
                alt="practicesIcon2"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
          <div>
            <div className="border-2 border-[#81e1aa] relative z-10">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon3}
                alt="practicesIcon1"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
          <div>
            <div className="border-2 border-[#81e1aa] relative z-10">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon4}
                alt="practicesIcon1"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
          <div>
            <div className="border-2 border-[#81e1aa] relative z-10">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon5}
                alt="practicesIcon1"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
          <div>
            <div className="border-2 border-[#81e1aa] relative z-10">
              <Image
                className="h-64 w-64 py-12 px-12"
                src={practicesIcon6}
                alt="practicesIcon1"
              />
              <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
            </div>
            <p className="text-xl font-bold text-gray-800 w-60 mt-5">
              Energy and Greenhouse Gas Emissions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SustainabilityPractices;
