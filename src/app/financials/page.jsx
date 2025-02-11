import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="financials">
      <Navbar />

      <div className="imgContainer bg-slate-400">
        <img
          src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="financials"
          className="w-full object-cover h-auto"
        />
      </div>
      <div
        className="sideBox absolute sm:top-[10%] md:top-1/4 lg:top-1/2 sm:left-[5%] md:left-[10%] lg:left-[20%] 
            transform -translate-y-1/2 py-6 px-4 opacity-85 flex justify-center items-center"
      >
        <div className="innerContainer text-center">
          <p className="text-white sm:text-2xl md:text-4xl lg:text-5xl font-branding-medium  text-left ">
            Our numbers
          </p>

          <p className=" sm:text-2xl md:text-4xl lg:text-5xl text-left font-branding-medium">
            {" "}
            tell our story
          </p>
        </div>
      </div>
      <div className="resultsSection mx-auto mt-12 mb-10 w-full px-4">
        <div className="grid grid-cols-3 gap-4 mx-auto  md:mb-[-2vh] w-full max-w-5xl justify-center items-center z-50 ">
          <div className="box1 bg-blue-600 px-4 py-2 justify-center items-center w-fit z-50 font-branding-semibold sm :text-xl md:text-2xl text-white">
            Financial Results
          </div>

          <div className="box1 bg-cyan-500 px-4 py-2 flex flex-col justify-center items-center w-fit z-50 font-branding-semibold sm:text-xl  md:text-2xl text-white">
            Annual Reports
          </div>

          <div className="box1 bg-purple-700 px-4 py-2 flex flex-col justify-center items-center w-fit z-50 font-branding-semibold sm:text-xl md:text-2xl text-white">
            Subsidiary Accounts
          </div>
        </div>

        <div className="outContainer border shadow-sm border-gray-300 sm:w-[95%] md:w-[90%] h-fit grid grid-cols-4 gap-[10px] mx-auto ">
          <div className="checkContainer w-full p-4 py-6 mt-4 sm:ml-3 md:ml-4 mb-2 flex flex-col">
            <p className=" w-fit ">Filters</p>
            <p className="mt-2 mb-2 w-fit ">Filters</p>

            {Array(15)
              .fill("Default Checkbox")
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
          </div>

          <div className="tableContainer  w-auto p-3 col-span-3 m-6 ">
            <table className="table-auto border-separate text-left w-full h-full  ">
              <thead>
                <tr>
                  <th className="title bg-blue-800 text-gray-200 shadow-sm pl-2">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill("Financial Statements of Subsidiaries 2023-24")
                  .map((row, index) => (
                    <tr key={index}>
                      <td className="border-separate border-spacing-2 shadow-sm pl-3 font-branding-medium text-gray-500">
                        {row}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
