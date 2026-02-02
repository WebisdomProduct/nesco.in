"use client";
import LineChart from "@/components/common/LineChart/line";
import React, { useState, useEffect } from "react";
import { fetchChartData, transformChartData as transformChartDataUtil } from "@/utils/stockDataFetcher";

function Chart1() {
  const [select, setSelect] = useState("nse");
  const [selectMonth, setSelectMonth] = useState("Today");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const periodMap = {
    "Today": "1d",
    "1 Month": "1mo",
    "3 Months": "3mo",
    "6 Months": "6mo",
    "1 Year": "1y",
    "3 Years": "2y",
    "Custom": "1mo",
  };

  useEffect(() => {
    const loadChartData = async () => {
      setLoading(true);
      setError(null);
      setChartData(null);

      try {
        const period = periodMap[selectMonth] || "1mo";
        const rawChartData = await fetchChartData(select, period);
        const transformedData = transformChartDataUtil(rawChartData);
        setChartData(transformedData);
      } catch (e) {
        console.error("Error fetching chart data:", e);
        setError("Failed to load chart data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadChartData();
  }, [select, selectMonth]);

  if (loading) {
    return (
      <div className="goal-section1 pb-10 py-20 bg-white shadow-md rounded-lg flex justify-center">
        <div className="flex flex-col w-[90%] items-center">
          <h1 className="text-6xl font-branding-semibold text-[#2C4AA0] text-center mb-10">
            Stock Chart
          </h1>
          <p>Loading chart data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="goal-section1 pb-10 py-20 bg-white shadow-md rounded-lg flex justify-center">
        <div className="flex flex-col w-[90%] items-center">
          <h1 className="text-6xl font-branding-semibold text-[#2C4AA0] text-center mb-10">
            Stock Chart
          </h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="goal-section1 pb-10 py-20 bg-white shadow-md rounded-lg flex justify-center">
      <div className="flex flex-col w-[90%] items-center">
        <h1 className="text-5xl font-branding-bold text-[#2C4AA0] text-center mb-2">
          NESCO Limited
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          NSE: NESCO
        </p>
        <h2 className="text-6xl font-branding-semibold text-[#2C4AA0] text-center mb-10">
          Stock Chart
        </h2>
        <div className="flex w-full border-b-2 border-b-[#433DC5] mb-5">
          <button
            onClick={() => setSelect("nse")}
            className={
              select === "nse"
                ? "font-branding-bold text-white bg-[#433DC5] py-2 px-6 rounded-t-lg"
                : "font-branding-medium py-2 px-6"
            }
            aria-pressed={select === "nse"}
          >
            NSE
          </button>
          <button
            onClick={() => setSelect("bse")}
            className={
              select === "bse"
                ? "font-branding-bold text-white bg-primary py-2 px-6 rounded-t-lg"
                : "font-branding-medium py-2 px-6"
            }
            aria-pressed={select === "bse"}
          >
            BSE
          </button>
        </div>
        <div className="flex space-x-4 mb-4 bg-[#433DC5] py-4 px-10 w-full overflow-x-auto font-branding-semibold">
          {[
            "Today",
            "1 Month",
            "3 Months",
            "6 Months",
            "1 Year",
            "3 Years",
            "Custom",
          ].map((tab) => (
            <div className="border-r-2 pr-2" key={tab}>
              <button
                className={`whitespace-nowrap px-4 py-2 ${
                  selectMonth === tab
                    ? "bg-white text-primary rounded-lg"
                    : "text-white"
                }`}
                onClick={() => setSelectMonth(tab)}
                aria-pressed={selectMonth === tab}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full">
          {chartData ? (
            <LineChart GraphData={chartData} />
          ) : (
            <p>No chart data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chart1;
