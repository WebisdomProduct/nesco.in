"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SlidedownCard({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full flex flex-col md:items-center px-5 md:px-0">
      {/* {data.map((v, i) => (
        <div key={i} className="md:w-[50%] my-2 relative">
          <h3
            className="font-branding-medium text-3xl text-white flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(i)}
          >
            <span>{v.title}</span>
            <span className="">
              <MdKeyboardArrowRight
                className={`transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          </h3>

          {/* Dropdown content */}
      {/* <div
            className={`font-bold transition-all duration-700 ease-in-out overflow-hidden transform ${
              openIndex === i
                ? "opacity-100 max-h-[300px]"
                : "opacity-0 max-h-0"
            }`}
          >
            <div className="bg-[#114086] flex flex-col relative text-white p-3 opacity-65">
              <p>{v.description.address1}</p>
              <p>{v.description.address2}</p>
              <p>{v.description.city}</p>
              <p>Phone: {v.description.phone1}</p>
              <p>{v.description.contact}</p>
              <p>{v.description.phone2}</p>
            </div>
          </div>
        </div>
      ))} */}
      {data.map((element, index) => (
        <div key={index} className="md:w-[50%] my-2 ">
          <div
            className="font-branding-medium text-xl md:text-3xl text-white flex justify-between items-center cursor-pointer p-4 hover:bg-white/10 rounded-lg transition-colors border-b border-white/20"
            onClick={() => handleToggle(index)}
          >
            {element.title}
            <span className="text-4xl text-gray-400">
              <MdKeyboardArrowRight
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          </div>
          <div>
            <div
              className={`font-bold transition-all duration-700 ease-in-out overflow-hidden transform ${
                openIndex === index
                  ? "opacity-100 max-h-[200px]"
                  : "opacity-0 max-h-0"
              }`}
            >
              <div className="bg-[#114086]/70 flex flex-col relative text-white p-5 rounded-b-lg gap-2 text-base md:text-lg">
                <p>{element.description.address1}</p>
                <p>{element.description.address2}</p>
                <p>{element.description.city}</p>
                {element.description.phone1 && (
                  <p>Phone: <a href={`tel:${element.description.phone1.replace(/\s+/g, '')}`} className="hover:underline text-blue-300">{element.description.phone1}</a></p>
                )}
                {element.description.phone2 && (
                  <p>Alt Phone: <a href={`tel:${element.description.phone2.replace(/\s+/g, '')}`} className="hover:underline text-blue-300">{element.description.phone2}</a></p>
                )}
                {element.description.contact && (
                  <p>Email: <a href={`mailto:${element.description.contact}`} className="hover:underline text-blue-300">{element.description.contact}</a></p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlidedownCard;
