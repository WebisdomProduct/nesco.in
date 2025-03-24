"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./buttonAnimation.css";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";

function FinancialResult() {
  const { getQuery } = useGetQuery();

  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.financials}`,
      onSuccess: (res) => {
        console.log("API Response:", res);
        setGetData(res?.data || []);
        setTimeout(() => setLoading(false), 2000);
      },
      onFail: (err) => {
        console.error("Failed to fetch announcements data:", err);
      },
    });
  }, []);

  const transformedData = Array.isArray(getData)
    ? getData.map((item, index) => {
        const year = `${new Date(item.date).getFullYear()}-${
          new Date(item.date).getFullYear() + 1
        }`;
        return {
          year,
          title: item.title,
          quarter: item.quater,
          option: item.option,
          file: item.file,
          date: item.date.split("T")[0],
        };
      })
    : [];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(5);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedQuarters, setSelectedQuarters] = useState([]);

  const [click, setClick] = useState("financials");

  const allYears = Array.from(
    new Set(transformedData.map((item) => item.year))
  ).sort((a, b) => b.localeCompare(a));

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarters((prevSelected) =>
      prevSelected.includes(quarter)
        ? prevSelected.filter((q) => q !== quarter)
        : [...prevSelected, quarter]
    );
  };

  const getFilteredFinancialData = () => {
    return transformedData.filter((item) => {
      if (item.option === "financials") {
        const yearFilter =
          selectedYears.length > 0 ? selectedYears.includes(item.year) : true;
        const quarterFilter =
          selectedQuarters.length > 0
            ? selectedQuarters.includes(item.quarter.toString()) // Ensure quarter is defined before calling toString()
            : true;
        return yearFilter && quarterFilter;
      }
      return false;
    });
  };

  const filteredData = () => {
    if (click === "financials") {
      return transformedData.filter(
        (item) =>
          item.option === "financials" &&
          (selectedYears?.length > 0
            ? selectedYears.includes(item.year)
            : true) &&
          (selectedQuarters.length > 0
            ? selectedQuarters.includes(item.quarter.toString())
            : true)
      );
    } else if (click === "annual") {
      return transformedData.filter(
        (item) =>
          item.option === "annual" &&
          (selectedYears?.length > 0 ? selectedYears.includes(item.year) : true)
      );
    } else if (click === "subsidiary") {
      return transformedData.filter(
        (item) =>
          item.option === "subsidiary" &&
          (selectedYears?.length > 0 ? selectedYears.includes(item.year) : true)
      );
    } else {
      return [];
    }
  };

  const handleSelectAll = () => {
    if (selectedYears.length === allYears.length) {
      setSelectedYears([]);
    } else {
      setSelectedYears(allYears);
    }
  };

  const currentFilteredData = filteredData();

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
              <p className=" mt-2 font-branding-medium text-gray-500 text-2xl">
                FILTERS
              </p>
              <button
                className="mt-4 mb-2 font-branding-medium text-gray-500 text-left"
                onClick={handleSelectAll}
              >
                {selectedYears.length === allYears.length
                  ? "Deselect All"
                  : "Select All"}
              </button>

              <p className="mt-5 mb-2 font-branding-medium text-gray-500 text-left">
                YEAR
              </p>
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

              {click === "financials" && (
                <div className="mt-5 mb-2">
                  <p className="mb-2 text-xl text-gray-500 font-branding-medium text-left">
                    QUARTER
                  </p>
                  <div className="flex flex-col gap-1">
                    {["1", "2", "3", "4"].map((quarter, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 text-gray-500 text-base md:text-xl"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                          checked={selectedQuarters.includes(quarter)}
                          onChange={() => handleQuarterChange(quarter)}
                        />
                        {quarter}
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
                    <th className=" bg-[#2b2a76] text-gray-200 shadow-sm pl-8 py-3 text-3xl">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentFilteredData
                    ?.slice(0, visibleRows)
                    .map((data, index) => (
                      <tr key={index}>
                        <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                          <div className="flex gap-10 my-3">
                            <a
                              href={data.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 hover:text-blue-700"
                            >
                              {data.title} - {data.year}{" "}
                              {/* Use `data.title` instead of `data.description` */}
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className="w-full justify-center items-center flex mt-10">
                {visibleRows < currentFilteredData?.length ? (
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
