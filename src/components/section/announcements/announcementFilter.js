"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";

function AnnouncementFilter() {
  const { getQuery } = useGetQuery();

  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.announcements}`,
      onSuccess: (res) => {
        console.log("API Response:", res);
        setGetData(res?.newDetail || []);
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
          description: item.title,
          file: item.file,
          date: item.date.split("T")[0],
        };
      })
    : [];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(8);
  const totalRows = transformedData.length;
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allYears = Array.from(
    new Set(
      transformedData.map((item) => {
        const date = new Date(item.date);
        const startYear =
          date.getMonth() >= 3 ? date.getFullYear() : date.getFullYear() - 1;
        const endYear = startYear + 1;
        return `${startYear}-${endYear}`;
      })
    )
  ).sort((a, b) => b.localeCompare(a));

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  const filteredData = transformedData
    .filter((item) => {
      if (selectedYears.length === 0) return true;
      const itemDate = new Date(item.date);
      return selectedYears.some((year) => {
        const [startYear, endYear] = year.split("-").map(Number);
        const startDate = new Date(startYear, 2, 1); // March 1st of startYear
        const endDate = new Date(endYear, 1, 31); // March 31st of endYear
        return itemDate >= startDate && itemDate <= endDate;
      });
    })
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
          </div>

          <div className=" md:w-[80%] py-3 col-span-3 ">
            <table className="table-auto border-separate text-left w-full ">
              <thead>
                <tr>
                  <th className="bg-[#2b2a76] text-gray-200 shadow-sm pl-8 py-3 text-3xl">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.slice(0, visibleRows).map((data, index) => (
                    <tr key={index}>
                      <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                        <a
                          href={data.file}
                          target="_blank"
                          className="flex gap-2"
                        >
                          <div className="flex gap-10 my-3">
                            <p className=" whitespace-nowrap flex justify-center items-center">
                              {data.date}
                            </p>
                            <p className="px-4">{data.description}</p>
                          </div>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                      No data available
                    </td>
                  </tr>
                )}
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
