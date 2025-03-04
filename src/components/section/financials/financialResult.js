"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./buttonAnimation.css";

function FinancialResult() {
  const FinancialtableData = [
    { year: "2024-2025", description: "Financials Statements of Subsidiaries" },
    { year: "2023-2024", description: "Financials Statements of Subsidiaries" },
    { year: "2022-2023", description: "Financials Statements of Subsidiaries" },
    { year: "2021-2022", description: "Financials Statements of Subsidiaries" },
    { year: "2020-2021", description: "Financials Statements of Subsidiaries" },
    { year: "2019-2020", description: "Financials Statements of Subsidiaries" },
    { year: "2018-2019", description: "Financials Statements of Subsidiaries" },
    { year: "2017-2018", description: "Financials Statements of Subsidiaries" },
  ];

  const AnnualtableData = [
    { year: "2024-2025", description: "Annual Reports" },
    { year: "2023-2024", description: "Annual Reports" },
    { year: "2022-2023", description: "Annual Reports" },
    { year: "2021-2022", description: "Annual Reports" },
    { year: "2020-2021", description: "Annual Reports" },
    { year: "2019-2020", description: "Annual Reports" },
    { year: "2018-2019", description: "Annual Reports" },
    { year: "2017-2018", description: "Annual Reports" },
  ];

  const SubsidiarytableData = [
    { year: "2024-2025", description: "Subsidiary Accounts" },
    { year: "2023-2024", description: "Subsidiary Accounts" },
    { year: "2022-2023", description: "Subsidiary Accounts" },
    { year: "2021-2022", description: "Subsidiary Accounts" },
    { year: "2020-2021", description: "Subsidiary Accounts" },
    { year: "2019-2020", description: "Subsidiary Accounts" },
    { year: "2018-2019", description: "Subsidiary Accounts" },
    { year: "2017-2018", description: "Subsidiary Accounts" },
  ];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(5);
  // const totalRows = tableData.length;
  const [selectedYears, setSelectedYears] = useState([]);

  const [click, setClick] = useState("financials");
  // const [searchQuery, setSearchQuery] = useState("");

  const allYears = Array.from({ length: 8 }, (_, i) => {
    const startYear = 2024 - i;
    const endYear = startYear + 1;
    return `${startYear}-${endYear.toString()}`;
  });

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  const filteredData = (
    click === "financials"
      ? FinancialtableData
      : click === "annual"
      ? AnnualtableData
      : SubsidiarytableData
  ).filter((item) =>
    selectedYears.length > 0 ? selectedYears.includes(item.year) : true
  );
  // .filter((item) =>
  //   item.description.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const financialData = Array.from({ length: 10 }, (_, i) => ({
  //   year: allYears[i],
  //   title: `Financial Statements of Subsidiaries ${allYears[i]}`,
  // }));

  const handleSelectAll = () => {
    if (selectedYears.length === allYears.length) {
      setSelectedYears([]);
    } else {
      setSelectedYears(allYears);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-16 lg:mt-28 mb-10 header_purple goal-section1">
        <div className="flex items-end flex-col border-2 w-[90%] lg:px-12 px-5">
          <div className="w-full flex md:flex-row flex-col justify-between items-center z-50 gap-6 lg:w-[70%] transform md:-translate-y-1/2">
            <div
              className={`${
                click === "financials"
                  ? "bg-white text-blue-600 border-blue-600"
                  : "bg-blue-600 text-white"
              } hover:text-blue-600 hover:bg-white hover:border-blue-600 border-2 px-4 transition-all duration-300 py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("financials")}>
                Financial Results
              </button>
            </div>

            <div
              className={`${
                click === "annual"
                  ? "bg-white text-cyan-500 border-cyan-500"
                  : "bg-cyan-500 text-white"
              } hover:text-cyan-500 hover:bg-white hover:border-cyan-500 border-2 px-4 transition-all duration-300  py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("annual")}>
                Annual Reports
              </button>
            </div>

            <div
              className={`${
                click === "subsidiary"
                  ? "bg-white text-purple-500 border-purple-500"
                  : "bg-purple-500 text-white"
              } hover:text-purple-500 hover:bg-white hover:border-purple-500 border-2 px-4 transition-all duration-300 py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("subsidiary")}>
                Subsidiary Accounts
              </button>
            </div>
          </div>

          <div className=" my-12 flex md:flex-row flex-col justify-between w-[98%] md:w-full">
            <div className="md:w-[30%]  py-6 mt-2 mb-2 flex flex-col">
              {/* <div className="relative md:pr-20 text-gray-500 flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-2 py-1 pl-8 border-b  border-gray-300 "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute left-2  w-5 h-5 text-gray-500 ">
                  <IoSearch className="w-full h-full" />
                </button>
              </div> */}
              <p className=" mt-2 font-branding-medium text-gray-500 text-2xl">
                FILTERS
              </p>
              <button
                className="mt-4 mb-2 font-branding-medium text-gray-500 text-left"
                onClick={handleSelectAll}
              >
                {/* <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  checked={selectedYears.length === allYears.length}
                  onChange={handleSelectAll}
                /> */}
                Select All
              </button>

              {allYears.slice(0, visibleCheckboxes).map((year, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    checked={selectedYears.includes(year)}
                    onChange={() => handleYearChange(year)}
                  />
                  <label className="ml-2 text-base md:text-xl font-medium text-gray-500">
                    {year}
                  </label>
                </div>
              ))}

              {/* {visibleCheckboxes < allYears.length ? (
                <button
                  className="mt-2 text-gray-500 hover:underline w-fit p-1 flex justify-center items-center gap-3"
                  onClick={() => setVisibleCheckboxes(visibleCheckboxes + 5)}
                >
                  Show More{" "}
                  <span className="w-4 h-4 rounded-full border-2 flex justify-center items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 "></span>
                  </span>
                </button>
              ) : (
                <button
                  className="mt-2 text-gray-500 hover:underline w-fit p-1 flex justify-center items-center gap-3"
                  onClick={() => setVisibleCheckboxes(10)}
                >
                  Show Less{" "}
                  <span className="w-4 h-4 rounded-full border-2 flex justify-center items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 "></span>
                  </span>
                </button>
              )} */}

              {click === "financials" && (
                <div className="mt-5 mb-2">
                  <p className="mb-2 text-xl text-gray-500 ">QUARTER</p>
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 text-gray-500 text-base md:text-xl"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                        />
                        Q{index + 1}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className=" md:w-[70%] py-3 col-span-3 ">
              <table className="table-auto border-separate text-left w-full ">
                <thead>
                  <tr>
                    <th className=" bg-[#21409A] text-gray-200 shadow-sm pl-8 py-3 text-3xl">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {filteredData.slice(0, visibleRows).map((row, index) => (
                           <tr key={index}>
                             <td className="shadow-md pl-3 font-branding-medium text-gray-500">
                               <div className="flex justify-between mx-4 md:pr-[8%] my-3">
                                 <span className="">{row.year}</span>
                                 <span className=" ">{row.title}</span>
                               </div>
                             </td>
                           </tr>
                         ))} */}
                  {filteredData.slice(0, visibleRows).map((data, index) => (
                    <tr key={index}>
                      <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                        <div className="flex gap-10 my-3">
                          <p className="px-4">
                            {data.description} -{" "}
                            {data.year.slice(0, 5) + +data.year.slice(7)}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="w-full justify-center items-center flex mt-10">
                {visibleRows < filteredData.length ? (
                  <button
                    className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 flex justify-center items-center gap-3"
                    onClick={() => setVisibleRows((prev) => prev + 3)}
                  >
                    Load More{" "}
                    <span className="">
                      <FaArrowRight className="rotate-90" />
                    </span>
                  </button>
                ) : (
                  <button
                    className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 flex justify-center items-center gap-3"
                    onClick={() => setVisibleRows(5)}
                  >
                    Load Less{" "}
                    <span className="">
                      <FaArrowRight className="-rotate-90" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialResult;
