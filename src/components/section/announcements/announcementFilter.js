"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

function AnnouncementFilter() {
  const tableData = [
    {
      year: "2024-2025",
      date: "23 Jan 2025",
      description:
        "Disclosure under Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015-Sale of 100% stake in M Entertainments Private Limited ",
    },
    {
      year: "2024-2025",
      date: "17 Jan 2025",
      description:
        "Disclosure under Flegulation 30 of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015-Update on acquisition of 100% equity stake of Reliance New Energy Battery Limited ",
    },
    {
      year: "2024-2025",
      date: "17 Jan 2025 ",
      description:
        "Audio/video recording and transcript of the presentation made to analysts on the Unaudited Financial Results (Consolidated and Standalone) for the quarter and nine months ended December 31, 2024 ",
    },
    {
      year: "2024-2025",
      date: "16 Jan 2025 ",
      description:
        "Integrated Filing (Financial) for the quarter and nine months ended December 31, 2024 ",
    },
    {
      year: "2024-2025",
      date: "16 Jan 2025 ",
      description:
        "Disclosure under Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015-Acquisition of 100% equity stake of Lakadia B Power Transmission Limited ",
    },
    {
      year: "2024-2025",
      date: "10 Jan 2025 ",
      description:
        "Disclosure under Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015-Acquisition of 100% equity stake of Reliance New Energy Battery Limited ",
    },
    {
      year: "2024-2025",
      date: "16 Jan 2025",
      description:
        "Presentation on the Unaudited Financial Results (Consolidated and Standalone) for the quarter and nine months ended December 31, 2024 ",
    },
    {
      year: "2024-2025",
      date: "16 Jan 2025",
      description:
        "Media Release - Consolidated and Standalone Unaudited Financial Results for the quarter and nine months ended December 31, 2024 ",
    },
    {
      year: "2024-2025",
      date: "16 Jan 2025 ",
      description:
        "Consolidated and Standalone Unaudited Financial Results for the quarter and nine months ended December 31, 2024 ",
    },
    {
      year: "2024-2025",
      date: "31 Dec 2024 ",
      description:
        "Conversion of compulsorily convertible preference shares held by the Company in Viacom 18 Media Private Limited ",
    },
  ];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(8);
  const totalRows = tableData.length;
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredData = tableData
    .filter((item) =>
      selectedYears.length > 0 ? selectedYears.includes(item.year) : true
    )
    .filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleSelectAll = () => {
    if (selectedYears.length === allYears.length) {
      setSelectedYears([]);
    } else {
      setSelectedYears(allYears);
    }
  };

  return (
    <div>
      <div className="flex justify-center header_purple lg:mt-10 goal-section1">
        <div className=" my-12 flex md:flex-row flex-col justify-between w-[90%]">
          <div className="md:w-[20%]  py-6 mt-2 mb-2 flex flex-col">
            <div className="relative md:pr-10 text-gray-500 flex justify-center items-center">
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
            </div>
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
              <div key={index} className="flex items-center mb-2 ">
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
                onClick={() => setVisibleCheckboxes(visibleCheckboxes + 1)}
              >
                Show More{" "}
                <span className="w-4 h-4 rounded-full border-2 flex justify-center items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600 "></span>
                </span>
              </button>
            ) : (
              <button
                className="mt-2 text-gray-500 hover:underline w-fit p-1 flex justify-center items-center gap-3"
                onClick={() => setVisibleCheckboxes(7)}
              >
                Show Less{" "}
                <span className="w-4 h-4 rounded-full border-2 flex justify-center items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600 "></span>
                </span>
              </button>
            )} */}
          </div>

          <div className=" md:w-[80%] py-3 col-span-3 ">
            <table className="table-auto border-separate text-left w-full ">
              <thead>
                <tr>
                  <th className="bg-primary text-gray-200 shadow-sm pl-8 py-3 text-3xl ">
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
                        <p className=" whitespace-nowrap flex justify-center items-center">
                          {data.date}
                        </p>
                        <p className="px-4">{data.description}</p>
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
                  onClick={() => setVisibleRows((prev) => prev + 5)}
                >
                  Load More{" "}
                  <span className="">
                    <FaArrowRight className="rotate-90" />
                  </span>
                </button>
              ) : (
                <button
                  className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 flex justify-center items-center gap-3"
                  onClick={() => setVisibleRows(8)}
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
  );
}

export default AnnouncementFilter;
