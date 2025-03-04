import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Cards({ CardData }) {
  return (
    <div className="w-full  py-10 flex justify-center">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-[90%]">
        {CardData.map((data, index) => (
          <div
            key={index}
            className=" py-10 px-10 border-2 border-gray-500 flex justify-center"
          >
            <div className="flex flex-col gap-2 w-[25rem] h-full items-center ">
              <Image
                src={data.image}
                alt="Mentor"
                className="h-[23rem] w-[25rem] object-cover object-top filter grayscale contrast-125 hover:filter-none transition-all duration-300"
              />

              <p className="flex justify-between mt-3 w-full">
                <span className="font-branding-bold text-xl inline-block w-full text-left">
                  {data.name}
                </span>
                <span className="flex items-center ">
                  <button className="text-primary text-2xl mr-1">
                    <FaArrowRightLong />
                  </button>
                </span>
              </p>
              <p className="font-poppins text-left w-full">{data.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
