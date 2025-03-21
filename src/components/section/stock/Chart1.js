"use client";
import LineChart from "@/components/common/LineChart/line";
import React, { useState, useEffect } from "react";

function Chart1() {
  const [select, setSelect] = useState("nse");
  const [selectMonth, setSelectMonth] = useState("Today");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_ENDPOINT_CHART = "/api/chart-data";

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      setError(null);
      setChartData(null);

      try {
        const response = await fetch(
          `${API_ENDPOINT_CHART}?exchange=${select}&monthRange=${selectMonth}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json();
        console.log("API Response:", apiData); // Debugging

        setChartData(transformChartData(apiData));
      } catch (e) {
        console.error("Error fetching chart data:", e);
        setError("Failed to load chart data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [select, selectMonth]);

  // Function to transform API data into the required chart format
  const transformChartData = (apiData) => {
    if (!apiData) return null;

    console.log("Transforming data for:", select);

    return {
      labels: ["Open", "Close", "Bid Price", "Offer Price"], // Static labels
      stockPrices: [
        parseFloat(apiData[`${select}_open`] || 0),
        parseFloat(apiData[`${select}_close`] || 0),
        parseFloat(apiData[`${select}_bid_price`] || 0),
        parseFloat(apiData[`${select}_offer_price`] || 0),
      ],
      volumes: [parseInt(apiData[`${select}_volume`] || 0, 10)],
    };
  };

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
        <h1 className="text-6xl font-branding-semibold text-[#2C4AA0] text-center mb-10">
          Stock Chart
        </h1>
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
