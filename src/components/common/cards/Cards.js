import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Cards({ CardData }) {
  return (
    <div className="w-full  py-10 flex justify-center">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-[90%]">
        {CardData.map((data, index) => (
          <div key={index} className=" py-10 px-10 border-2 border-gray-500">
            <div className="flex flex-col gap-2 w-full h-full">
              <Image
                src={data.image}
                alt="Mentor"
                className="h-[23rem] w-[22rem] object-cover filter grayscale contrast-125 hover:filter-none transition-all duration-300"
              />

              <p className="flex justify-between mt-3">
                <span className="font-branding-bold text-xl">{data.name}</span>
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
