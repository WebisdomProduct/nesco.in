import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Cards({ CardData }) {
  return (
    <div className="w-full  py-10 flex justify-center">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:w-[85%] w-[90%]">
        {CardData.map((data, index) => (
          <div
            key={index}
            className="pb-5 pt-12 px-12 border-2 border-gray-500"
          >
            <div className="flex flex-col gap-2">
              <Image src={data.image} alt="Mentor" className="" />
              <p className="flex justify-between">
                <span className="font-branding-bold text-lg">{data.name}</span>
                <span className="flex items-center">
                  <button className="text-primary text-2xl">
                    <FaArrowRightLong />
                  </button>
                </span>
              </p>
              <p className="font-poppins">{data.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
