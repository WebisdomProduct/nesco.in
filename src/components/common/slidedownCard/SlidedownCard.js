"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SlidedownCard({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full flex flex-col md:items-center px-5 md:px-0">
      {data.map((v, i) => (
        <div key={i} className="md:w-[50%] my-2">
          <h3
            className="font-branding-medium text-3xl text-white flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{v.title}</span>
            <span className="text-4xl text-gray-400">
              <MdKeyboardArrowRight
                className={`transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          </h3>
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              openIndex === i
                ? "max-h-[300px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#114086] mt-5 text-white p-3 opacity-65">
              {/* <p>{v.description.address1}</p> */}
              {/* <p>{v.description.address2}</p> */}
              {/* <p>{v.description.city}</p> */}
              <p>Phone: {v.description.phone1}</p>
              <p>{v.description.contact}</p>
              <p>{v.description.phone2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlidedownCard;
