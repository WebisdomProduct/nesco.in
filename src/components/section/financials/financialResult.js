"use client";
import React, { useEffect, useState, useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./buttonAnimation.css";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";

function FinancialResult() {
  const { getQuery } = useGetQuery();

  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  // UI State
  const [visibleRows, setVisibleRows] = useState(5);
  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedQuarters, setSelectedQuarters] = useState([]);
  const [activeTab, setActiveTab] = useState("financials");

  // --- 1. FETCH DATA ---
  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.financials}`,
      onSuccess: (res) => {
        setGetData(res?.data || []);
        setLoading(false);
      },
      onFail: (err) => {
        console.error("❌ API FAILED:", err);
        setLoading(false);
      },
    });
  }, []);

  // --- 2. HELPER: Financial Year Calculation (Strict April-March) ---
  const getFinancialYear = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";

    const month = date.getMonth(); // 0=Jan, 1=Feb, 2=Mar, 3=Apr...
    const year = date.getFullYear();

    // Indian FY: Starts April 1st.
    // If Jan(0), Feb(1), or Mar(2) -> Belongs to Previous Calendar Year.
    // If Apr(3) to Dec(11) -> Belongs to Current Calendar Year.
    const startYear = month >= 3 ? year : year - 1;
    return `${startYear}-${startYear + 1}`;
  };

  // --- 3. TRANSFORM & SORT ---
  const transformedData = useMemo(() => {
    if (!Array.isArray(getData)) return [];


    const processed = getData.map((item, index) => {
      // 1. Normalize Option (financial vs financials)
      let cleanOption = item.option ? item.option.toLowerCase().trim() : "";
      if (cleanOption === "financial") cleanOption = "financials";

      // 2. Calculate Year - PRIORITY: Title > Date
      let year = getFinancialYear(item.date);

      // Attempt to extract year from Title (e.g., "Annual Return 2020-21" or "2020-2021")
      if (item.title) {
        // Matches "2020-21", "2020-2021", "FY 2020-21"
        const yearMatch = item.title.match(/(\d{4})-(\d{2,4})/);
        if (yearMatch) {
          const startYear = parseInt(yearMatch[1]);
          const endPart = yearMatch[2];
          // Normalize "2020-21" to "2020-2021"
          const endYear = endPart.length === 2 ? `20${endPart}` : endPart;
          // Basic validity check (end year should be start + 1)
          if (parseInt(endYear) === startYear + 1) {
            year = `${startYear}-${endYear}`;
          }
        }
      }

      // 3. Normalize Quarter
      let quarter = item.quater ? String(item.quater) : null;

      // Fallback: Extract Quarter from Title if missing
      if (!quarter && item.title) {
        const qMatch = item.title.match(/Q([1-4])/i);
        if (qMatch) {
          quarter = qMatch[1];
        }
      }

      const transformedItem = {
        ...item,
        year,
        option: cleanOption,
        quarter,
        rawDate: item.date ? new Date(item.date) : new Date(0),
      };

      // Log specific items to debug "Missing" documents
      if (item.title && (item.title.includes("Q4") || item.title.includes("Q3"))) {
      
      }

      return transformedItem;
    });

    // Sort by Date Descending (Newest First)
    const sorted = processed.sort((a, b) => b.rawDate - a.rawDate);

    return sorted;
  }, [getData]);

  // --- 4. EXTRACT YEARS ---
  const allYears = useMemo(() => {
    const years = new Set(transformedData.map((item) => item.year));
    if (years.has("N/A")) years.delete("N/A");
    return Array.from(years).sort((a, b) => b.localeCompare(a));
  }, [transformedData]);

  // --- 5. FILTER LOGIC ---
  const filteredData = useMemo(() => {
  

    let data = transformedData;

    // A. Filter by Tab
    if (activeTab === "financials") {
      data = data.filter((item) => item.option === "financials");
    } else if (activeTab === "annual") {
      data = data.filter((item) => item.option === "annual");
    } else if (activeTab === "subsidiary") {
      data = data.filter((item) => item.option === "subsidiary");
    } else if (activeTab === "annualReturn") {
      data = data.filter(
        (item) =>
          item.option === "annual-return" &&
          item.title &&
          item.title.toLowerCase().includes("annual return")
      );
    } else {
      data = [];
    }

    // B. Filter by Year
    if (selectedYears.length > 0) {
      data = data.filter((item) => selectedYears.includes(item.year));
    }

    // C. Filter by Quarter (Only for Financial Results)
    if (activeTab === "financials" && selectedQuarters.length > 0) {
      data = data.filter(
        (item) => item.quarter && selectedQuarters.includes(item.quarter)
      );
    }

    return data;
  }, [transformedData, activeTab, selectedYears, selectedQuarters]);

  // Handlers
  const handleYearChange = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarters((prev) =>
      prev.includes(quarter) ? prev.filter((q) => q !== quarter) : [...prev, quarter]
    );
  };

  const handleSelectAllYears = () => {
    setSelectedYears(selectedYears.length === allYears.length ? [] : allYears);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleRows(5);
  };

  return (
    <div>
      <div className="flex justify-center mt-16 lg:mt-28 mb-10 header_purple goal-section1">
        <div className="flex items-end flex-col border-2 w-[90%] lg:px-12 px-5">

          {/* --- TABS --- */}
          <div className="w-full flex md:flex-row flex-col justify-between items-center z-50 gap-6 lg:w-[85%] transform md:-translate-y-1/2">
            {[
              { id: "financials", label: "Financial Results" },
              { id: "annual", label: "Annual Reports" },
              { id: "subsidiary", label: "Subsidiary Accounts" },
              { id: "annualReturn", label: "Annual Return" },
            ].map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id
                  ? "bg-white text-blue-600 border-blue-600"
                  : "bg-blue-600 text-white"
                  } hover:text-blue-600 hover:bg-white hover:border-blue-600 border-2 px-4 transition-all duration-300 py-2 text-center font-branding-medium text-2xl w-full md:w-auto cursor-pointer`}
              >
                <button
                  className="w-full h-full"
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>

          <div className="my-12 flex md:flex-row flex-col justify-between w-[98%] md:w-full">

            {/* --- FILTERS SIDEBAR --- */}
            <div className="md:w-[30%] py-6 mt-2 mb-2 flex flex-col">


              <button
                className="mt-4 mb-2 font-branding-medium text-gray-500 text-left hover:text-gray-700 transition-colors"
                onClick={handleSelectAllYears}
              >
                {selectedYears.length === allYears.length && allYears.length > 0
                  ? "Deselect All"
                  : "Select All"}
              </button>

              <p className="mt-5 mb-2 font-branding-medium text-gray-500 text-left">
                YEAR
              </p>

              {allYears.slice(0, visibleCheckboxes).map((year) => (
                <div key={year} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`year-${year}`}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 cursor-pointer"
                    checked={selectedYears.includes(year)}
                    onChange={() => handleYearChange(year)}
                  />
                  <label
                    htmlFor={`year-${year}`}
                    className="ml-2 text-base md:text-xl font-medium text-gray-500 cursor-pointer select-none"
                  >
                    {year}
                  </label>
                </div>
              ))}

              {allYears.length > 8 && (
                <button
                  className="mt-2 text-blue-600 hover:text-blue-800 text-left text-sm font-medium"
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

              {activeTab === "financials" && (
                <div className="mt-5 mb-2">
                  <p className="mb-2 text-xl text-gray-500 font-branding-medium text-left">
                    QUARTER
                  </p>
                  <div className="flex flex-col gap-1">
                    {["1", "2", "3", "4"].map((q) => (
                      <div key={q} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`quarter-${q}`}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 cursor-pointer"
                          checked={selectedQuarters.includes(q)}
                          onChange={() => handleQuarterChange(q)}
                        />
                        <label
                          htmlFor={`quarter-${q}`}
                          className="text-gray-500 text-base md:text-xl cursor-pointer select-none"
                        >
                          Q{q}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* --- RESULTS TABLE --- */}
            <div className="md:w-[70%] py-3 col-span-3">
              {loading ? (
                <div className="text-center py-10 text-lg text-gray-500 font-branding-medium">
                  Loading Documents...
                </div>
              ) : (
                <>
                  <table className="table-auto border-separate text-left w-full">
                    <thead>
                      <tr>
                        <th className="bg-[#2b2a76] text-gray-200 shadow-sm pl-8 py-3 text-3xl rounded-t-sm">
                          Year | {activeTab === "financials" ? "Financial Results" : activeTab === "annual" ? "Annual Reports" : activeTab === "subsidiary" ? "Subsidiary Accounts" : "Annual Return"}
                          <span className="text-sm ml-4 font-normal text-gray-300">
                            ({filteredData.length} Found)
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.length > 0 ? (
                        filteredData
                          .sort((a, b) => {
                            const order = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
                            return order[a.title] - order[b.title];
                          })
                          .slice(0, visibleRows)
                          .map((data, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100">
                              <td className="shadow-sm pl-3 font-branding-medium text-gray-500 text-base md:text-xl py-4 border-l-4 border-transparent hover:border-blue-600">
                                <a
                                  href={data.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:text-blue-700 transition-colors w-full"
                                >
                                  {/* --- DISPLAY ROW --- */}
                                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 w-full">

                                    {/* Financial Year */}
                                    <span className="text-blue-600 font-semibold whitespace-nowrap text-base">
                                      {data.year}
                                    </span>

                                    <span className="hidden md:block text-gray-300">|</span>

                                    {/* Title */}
                                    <span className="flex-1">
                                      {data.title}
                                      {" "}
                                      {{
                                        Q1: "Apr - Jun",
                                        Q2: "Jul - Sep",
                                        Q3: "Oct - Dec",
                                        Q4: "Jan - Mar",
                                      }[data.title] || ""}
                                    </span>

                                  </div>
                                </a>
                              </td>
                            </tr>
                          ))
                      ) : (
                        <tr>
                          <td className="shadow-md pl-3 py-10 font-branding-medium text-gray-500 text-xl text-center">
                            No documents found for the selected filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Load More Button */}
                  <div className="w-full justify-center items-center flex mt-10">
                    {filteredData.length > 5 && (
                      <>
                        {visibleRows < filteredData.length ? (
                          <button
                            className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 hover:bg-gray-600 hover:text-white hover:border-gray-600 transition-all duration-300 flex justify-center items-center gap-3"
                            onClick={() => setVisibleRows((prev) => prev + 3)}
                          >
                            Load More
                            <FaArrowRight className="rotate-90" />
                          </button>
                        ) : (
                          <button
                            className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 hover:bg-gray-600 hover:text-white hover:border-gray-600 transition-all duration-300 flex justify-center items-center gap-3"
                            onClick={() => setVisibleRows(5)}
                          >
                            Load Less
                            <FaArrowRight className="-rotate-90" />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialResult;