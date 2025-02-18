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
  const cardData = [
    {
      image: practicesIcon1,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
    {
      image: practicesIcon2,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
    {
      image: practicesIcon3,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
    {
      image: practicesIcon4,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
    {
      image: practicesIcon5,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
    {
      image: practicesIcon6,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
    },
  ];

  return (
    <div className="goal-section1 flex flex-col justify-center items-center mt-0 lg:mt-10">
      <div className="my-12 text-center relative w-[90%]">
        <div className="mb-14">
          <h1 className="text-3xl font-bold"> Integrated Sustainability </h1>
          <h1 className="text-3xl font-bold">
            Practices for a Resilient Future
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((data, index) => (
            <div className="flex flex-col justify-center items-center">
              <div className="border-2 border-[#81e1aa] relative z-10">
                <Image
                  className="h-64 w-64 py-12 px-12"
                  src={data.image}
                  alt={data.title}
                />
                <FaArrowRight className="text-4xl text-white bg-[#63c88f] rounded-full p-1 absolute -bottom-4 -right-4 z-20" />
              </div>
              <p className="text-xl font-bold text-gray-800 w-60 mt-5">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SustainabilityPractices;
