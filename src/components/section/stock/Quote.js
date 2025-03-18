"use client";
import MainTable from "@/components/common/table/mainTable";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Quote() {
  const [exchange, setExchange] = useState("BSE");
  const [startDate, setStartDate] = useState({ day: 3, month: 1, year: 2025 });
  const [endDate, setEndDate] = useState({ day: 3, month: 1, year: 2025 });
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_ENDPOINT_HISTORICAL = "/api/historical-quote"; // Next.js API route

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setHistoricalData(null); // Clear previous data

    const startDateStr = `${startDate.year}-${String(startDate.month).padStart(2, '0')}-${String(startDate.day).padStart(2, '0')}`;
    const endDateStr = `${endDate.year}-${String(endDate.month).padStart(2, '0')}-${String(endDate.day).padStart(2, '0')}`;

    try {
      const response = await fetch(
        `${API_ENDPOINT_HISTORICAL}?exchange=${exchange}&startDate=${startDateStr}&endDate=${endDateStr}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const apiData = await response.json();
      setHistoricalData(transformHistoricalData(apiData));
    } catch (e) {
      console.error("Error fetching historical data:", e);
      setError("Failed to load historical stock data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const transformHistoricalData = (apiData) => {
    if (!apiData || !Array.isArray(apiData)) {
      return null; // Handle cases where API data is missing or not an array
    }

    const rows = apiData.map(item => ({
      date: item.date || "-", // Assuming API returns 'date' field
      openPrice: item.openPrice ? `₹${parseFloat(item.openPrice).toFixed(2)}` : "-", // Format price
      highPrice: item.highPrice ? `₹${parseFloat(item.highPrice).toFixed(2)}` : "-",
      lowPrice: item.lowPrice ? `₹${parseFloat(item.lowPrice).toFixed(2)}` : "-",
      closePrice: item.closePrice ? `₹${parseFloat(item.closePrice).toFixed(2)}` : "-",
      tradedValue: item.tradedValue || "-", // You might need to format traded value
      noOfTrades: item.noOfTrades || "-",
      tradedQuantity: item.tradedQuantity || "-",
    }));

    return {
      title: "DATE",
      dataIndex: "date",
      header: [
        { title: "OPEN PRICE", dataIndex: "openPrice" },
        { title: "HIGH PRICE", dataIndex: "highPrice" },
        { title: "LOW PRICE", dataIndex: "lowPrice" },
        { title: "CLOSE PRICE", dataIndex: "closePrice" },
        { title: "TRADED VALUE", dataIndex: "tradedValue" },
        { title: "NO. OF TRADES", dataIndex: "noOfTrades" },
        { title: "TRADED QUANTITY", dataIndex: "tradedQuantity" },
      ],
      rows: rows,
    };
  };


  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 20 }, (_, i) => 2005 + i); // Adjusted year range

  return (
    <div className="goal-section1 flex flex-col justify-center items-center py-10 font-branding-medium mt-0 lg:mt-10">
      <h2 className="text-6xl font-branding-semibold text-primary text-center mb-10">
        Historical Stock Quote
      </h2>
      <div className=" flex justify-center  w-[90%]  ">
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center bg-[#B8DFFC] p-4 w-[70%]">
          {/* Exchange Selector */}
          <div className="flex flex-col gap-2">
            <p className="text-[#3460C6] font-branding-semibold">Exchange: </p>
            <select
              value={exchange}
              onChange={(e) => setExchange(e.target.value)}
              className="w-20 h-10 text-center text-[#857E7E]"
            >
              <option value="BSE">BSE</option>
              <option value="NSE">NSE</option>
            </select>
          </div>

          {/* Start Date Selector */}
          <div className="flex flex-col gap-2">
            <p className="text-[#3460C6] font-branding-semibold">
              Start Date:{" "}
            </p>
            <div className="flex gap-3">
              <select
                value={startDate.day}
                onChange={(e) =>
                  setStartDate({ ...startDate, day: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                value={startDate.month}
                onChange={(e) =>
                  setStartDate({ ...startDate, month: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                value={startDate.year}
                onChange={(e) =>
                  setStartDate({ ...startDate, year: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* End Date Selector */}
          <div className="flex flex-col gap-2">
            <p className="text-[#3460C6] font-branding-semibold">End Date: </p>
            <div className="flex gap-3">
              <select
                value={endDate.day}
                onChange={(e) =>
                  setEndDate({ ...endDate, day: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                value={endDate.month}
                onChange={(e) =>
                  setEndDate({ ...endDate, month: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                value={endDate.year}
                onChange={(e) =>
                  setEndDate({ ...endDate, year: Number(e.target.value) })
                }
                className="w-20 h-10 text-center text-[#857E7E]"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <button
              className="px-12 py-2 text-xl text-primary border-2 border-primary rounded-full font-branding-bold"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-4 mt-16 font-branding-semibold text-gray-500">
        <p>
          <span> Exchange : {exchange}</span> |
          <span>
            {" "}
            Period: {startDate.day}/{startDate.month}/{startDate.year} to{" "}
            {endDate.day}/{endDate.month}/{endDate.year}
          </span>
        </p>
        <div>
          {loading && <p>Loading historical data...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {historicalData && (
            <MainTable
              tableData={historicalData}
              pagination={true}
              textColor="#4b5563"
              ClassCss="font-size: 14px"
              ClassCss1="font-size:16px"
            />
          )}
          {!loading && !error && !historicalData && <p>No historical data found for the selected period.</p>}
        </div>
        <div className="w-full font-branding-medium">
          <p>^Traded Value Rs. in Crores.</p>
          <p>*All price data is in INR.</p>
          <p>BSE: The Bombay Stock Exchange Limited, Mumbai, India</p>
          <p>
            NSE: The National Stock Exchange of India Limited, Mumbai, India
          </p>
          <p>Quotes delayed at least 15 minutes.</p>
          <p>
            NOTE: The closing price above is not necessarily indicative of
            future price performance.
          </p>
          <p>
            Market data provided by{" "}
            <span className="text-blue-400">
              {" "}
              <Link href="#"> Dion Global Solutions Ltd.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quote;