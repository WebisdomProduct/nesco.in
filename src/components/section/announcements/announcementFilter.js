"use client";
import React, { useEffect, useState } from "react";
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

  // Transform and sort data in descending order (newest first)
  const transformedData = Array.isArray(getData)
    ? getData
        .map((item, index) => {
          const year = `${new Date(item.date).getFullYear()}-${
            new Date(item.date).getFullYear() + 1
          }`;
          return {
            year,
            description: item.title,
            file: item.file,
            date: item.date.split("T")[0],
            rawDate: new Date(item.date), // Keep raw date for sorting
          };
        })
        .sort((a, b) => b.rawDate - a.rawDate) // Sort by date descending (newest first)
    : [];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(8);
  const totalRows = transformedData.length;
  const [selectedYears, setSelectedYears] = useState([]);

  // Extract unique years and sort them in descending order
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
  ).sort((a, b) => b.localeCompare(a)); // Sort years descending (newest first)

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  // Filter data based on selected years
  const filteredData = transformedData.filter((item) => {
    if (selectedYears.length === 0) return true;
    const itemDate = new Date(item.date);
    return selectedYears.some((year) => {
      const [startYear, endYear] = year.split("-").map(Number);
      const startDate = new Date(startYear, 2, 1); // March 1st of startYear
      const endDate = new Date(endYear, 2, 31); // March 31st of endYear (changed from 1, 31)
      return itemDate >= startDate && itemDate <= endDate;
    });
  });

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
        <div className="my-12 flex md:flex-row flex-col justify-between w-[90%]">
          {/* Filters Section */}
          <div className="md:w-[20%] py-6 mt-2 mb-2 flex flex-col">
            <p className="mt-2 font-branding-medium text-gray-500 text-2xl">
              FILTERS
            </p>
            <button
              className="mt-4 mb-2 font-branding-medium text-gray-500 text-left hover:text-gray-700 transition-colors"
              onClick={handleSelectAll}
            >
              {selectedYears.length === allYears.length
                ? "Deselect All"
                : "Select All"}
            </button>

            {allYears.slice(0, visibleCheckboxes).map((year, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 cursor-pointer"
                  checked={selectedYears.includes(year)}
                  onChange={() => handleYearChange(year)}
                />
                <label className="ml-2 text-base md:text-xl font-medium text-gray-500 cursor-pointer">
                  {year}
                </label>
              </div>
            ))}

            {allYears.length > visibleCheckboxes && (
              <button
                className="mt-2 text-blue-600 hover:text-blue-800 text-left text-sm"
                onClick={() =>
                  setVisibleCheckboxes((prev) =>
                    prev === 8 ? allYears.length : 8
                  )
                }
              >
                {visibleCheckboxes === 8
                  ? `Show ${allYears.length - 8} more`
                  : "Show less"}
              </button>
            )}
          </div>

          {/* Table Section */}
          <div className="md:w-[80%] py-3 col-span-3">
            {loading ? (
              <div className="text-center py-10 text-lg text-gray-500">
                Loading announcements...
              </div>
            ) : (
              <>
                <table className="table-auto border-separate text-left w-full">
                  <thead>
                    <tr>
                      <th className="bg-[#2b2a76] text-gray-200 shadow-sm pl-8 py-3 text-xl md:text-3xl">
                        Announcements
                        {selectedYears.length > 0 && (
                          <span className="text-sm ml-3 font-normal">
                            ({filteredData.length}{" "}
                            {filteredData.length === 1 ? "result" : "results"})
                          </span>
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.slice(0, visibleRows).map((data, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                            <a
                              href={data.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex gap-2 hover:text-blue-600 transition-colors"
                            >
                              <div className="flex flex-col md:flex-row gap-3 md:gap-10 my-3 w-full">
                                <p className="whitespace-nowrap flex justify-start md:justify-center items-center font-branding-semibold text-gray-600">
                                  {data.date}
                                </p>
                                <p className="px-0 md:px-4 flex-1">
                                  {data.description}
                                </p>
                              </div>
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="shadow-md pl-3 py-6 font-branding-medium text-gray-500 text-base md:text-xl text-center">
                          {selectedYears.length > 0
                            ? "No announcements found for selected year(s)"
                            : "No announcements available"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* Load More/Less Button */}
                {filteredData.length > 8 && (
                  <div className="w-full justify-center items-center flex mt-10">
                    {visibleRows < filteredData.length ? (
                      <button
                        className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-colors flex justify-center items-center gap-3"
                        onClick={() => setVisibleRows((prev) => prev + 5)}
                      >
                        Load More{" "}
                        <span>
                          <FaArrowRight className="rotate-90" />
                        </span>
                        <span className="text-sm">
                          ({filteredData.length - visibleRows} remaining)
                        </span>
                      </button>
                    ) : (
                      <button
                        className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-colors flex justify-center items-center gap-3"
                        onClick={() => setVisibleRows(8)}
                      >
                        Load Less{" "}
                        <span>
                          <FaArrowRight className="-rotate-90" />
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementFilter;