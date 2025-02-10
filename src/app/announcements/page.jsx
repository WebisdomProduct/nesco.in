"use client";
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useState } from "react";

const page = () => {

    const [visibleCheckboxes, setVisibleCheckboxes] = useState(5);
    const [visibleRows, setVisibleRows] = useState(5);

  return (
    <div className="financials">
      <Navbar />

      <div className="relative w-full">
        <div className="imgContainer bg-slate-400">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="financials"
            className="w-full object-cover h-auto"
          />
        </div>

        {/* Centered on the right side */}
        <div
          className="sideBox  absolute top-1/2 right-[5%] 
      transform -translate-y-1/2  
      w-[90%] sm:w-[80%] md:w-[50%] lg:w-[35%]
      py-6 px-4 opacity-90 flex justify-center items-center 
      "
        >
          <div className="innerContainer text-center">
            <p className="text-white  sm:text-xl md:text-4xl lg:text-5xl font-branding-medium">
              Announcements
            </p>
          </div>
        </div>
      </div>

      <div className="resultsSection mx-auto mt-12 mb-10 w-full px-4">
        <div className="outContainer  sm:w-[95%] md:w-[90%] h-fit grid grid-cols-4 gap-[10px] mx-auto ">
          <div className="absolute justify-center w-full px-4 ">
            <div className="relative w-fit max-w-xs sm:max-w-sm md:max-w-lg text-gray-500">
              <input
                type="text"
                placeholder="Search..."
                className="sm:w-24 md:w-32 lg:w-48  px-2 py-1 pl-8 border-b  border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-2 top-2 w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
          <div className="checkContainer w-full p-4 py-6 mt-2 sm:ml-3 md:ml-4 mb-2 flex flex-col">
            <p className=" w-fit mt-2 font-branding-medium text-gray-500">Filters</p>
            <p className="mt-2 mb-2 w-fit font-branding-medium text-gray-500">Filters</p>

            {Array(15)
              .fill("Default Checkbox")
              .slice(0, visibleCheckboxes)
              .map((label, index) => (
                <div
                  className="flex items-center mb-2 font-branding-medium"
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-500">
                    {label}
                  </label>
                </div>
              ))}

              {visibleCheckboxes < 15 && (
                <button className="mt-2 text-gray-500 hover:underline  w-fit p-1  "
                onClick = {() => setVisibleCheckboxes(visibleCheckboxes + 5)}>
                    Show More Filters
                </button>
              )}
          </div>

          <div className="tableContainer  w-auto p-3 col-span-3 m-6 ">
            <table className="table-auto border-separate text-left w-full h-full  ">
              <thead>
                <tr>
                  <th className="title bg-violet-700 text-gray-200 shadow-sm pl-2 ">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill("Financial Statements of Subsidiaries 2023-24")
                  .slice(0, visibleRows)
                  .map((row, index) => (
                    <tr key={index}>
                      <td className="border-separate border-spacing-2 shadow-sm pl-3 font-branding-medium text-gray-500">
                        {row}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {visibleRows < 10 && (
                <button className="mt-2 text-gray-500 hover: underline w-fit p-1"
                onClick={() => setVisibleRows(visibleRows+5)}>
                    Show More Rows
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
