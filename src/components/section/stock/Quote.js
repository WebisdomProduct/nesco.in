"use client";
import MainTable from "@/components/common/table/mainTable";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchChartData, transformChartData as transformChartDataUtil } from "@/utils/stockDataFetcher";

function Quote() {
  const today = new Date();
  const [exchange, setExchange] = useState("BSE");
  const [startDate, setStartDate] = useState({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  });
  const [endDate, setEndDate] = useState({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  });
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setHistoricalData(null);

    try {
      const exchangeKey = exchange.toLowerCase();
      const rawChartData = await fetchChartData(exchangeKey, "1y");

      if (rawChartData && rawChartData.length > 0) {
        const rows = rawChartData.map((item) => ({
          date: new Date(item.date).toLocaleDateString(),
          volume:
            item.volume && item.volume > 0
              ? (item.volume / 100000).toFixed(2) + " Lakh"
              : "-",
          openPrice: `₹${item.open?.toFixed(2) || "-"}`,
          closePrice: `₹${item.close?.toFixed(2) || "-"}`,
          highPrice: `₹${item.high?.toFixed(2) || "-"}`,
          lowPrice: `₹${item.low?.toFixed(2) || "-"}`,
        }));

        setHistoricalData({
          title: "DATE",
          dataIndex: "date",
          header: [
            { title: "DATE", dataIndex: "date" },
            { title: "VOLUME", dataIndex: "volume" },
            { title: "OPEN PRICE", dataIndex: "openPrice" },
            { title: "HIGH PRICE", dataIndex: "highPrice" },
            { title: "LOW PRICE", dataIndex: "lowPrice" },
            { title: "CLOSE PRICE", dataIndex: "closePrice" },
          ],
          rows: rows,
        });
      } else {
        setError("No historical data available for the selected period.");
      }
    } catch (e) {
      console.error("Error fetching historical data:", e);
      setError("Failed to load historical stock data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setHistoricalData(null);

    try {
      const exchangeKey = exchange.toLowerCase();
      const rawChartData = await fetchChartData(exchangeKey, "1y");

      // Filter data based on selected date range
      const startDateObj = new Date(startDate.year, startDate.month - 1, startDate.day);
      const endDateObj = new Date(endDate.year, endDate.month - 1, endDate.day);

      const filteredData = rawChartData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDateObj && itemDate <= endDateObj;
      });

      if (filteredData && filteredData.length > 0) {
        const rows = filteredData.map((item) => ({
          date: new Date(item.date).toLocaleDateString(),
          volume:
            item.volume && item.volume > 0
              ? (item.volume / 100000).toFixed(2) + " Lakh"
              : "-",
          openPrice: `₹${item.open?.toFixed(2) || "-"}`,
          closePrice: `₹${item.close?.toFixed(2) || "-"}`,
          highPrice: `₹${item.high?.toFixed(2) || "-"}`,
          lowPrice: `₹${item.low?.toFixed(2) || "-"}`,
        }));

        setHistoricalData({
          title: "DATE",
          dataIndex: "date",
          header: [
            { title: "DATE", dataIndex: "date" },
            { title: "VOLUME", dataIndex: "volume" },
            { title: "OPEN PRICE", dataIndex: "openPrice" },
            { title: "HIGH PRICE", dataIndex: "highPrice" },
            { title: "LOW PRICE", dataIndex: "lowPrice" },
            { title: "CLOSE PRICE", dataIndex: "closePrice" },
          ],
          rows: rows,
        });
      } else {
        setError("No historical data available for the selected period.");
      }
    } catch (e) {
      console.error("Error fetching historical data:", e);
      setError("Failed to load historical stock data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 21 }, (_, i) => 2005 + i); // Adjusted year range

  return (
    <div className="header_purple flex flex-col justify-center items-center py-10 font-branding-medium mt-0 lg:mt-10">
      <h1 className="text-5xl font-branding-bold text-primary text-center mb-2">
        NESCO Limited
      </h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        NSE: NESCO
      </p>
      <h2 className="text-6xl font-branding-semibold text-primary text-center mb-10">
        Historical Stock Quote
      </h2>
      <div className=" flex justify-center  w-[90%]  ">
        <div className="flex xl:flex-row flex-col overflow-hidden xl:gap-10 gap-5 justify-center items-center bg-[#B8DFFC] p-4 md:w-[80%] w-full">
          {/* Exchange Selector */}
          <div className="flex xl:flex-col items-center gap-2">
            <p className="text-[#3460C6] font-branding-semibold">Exchange: </p>
            <select
              value={exchange}
              onChange={(e) => setExchange(e.target.value)}
              className="md:w-20 w-16 h-10 text-center text-[#857E7E]"
            >
              <option value="BSE">BSE</option>
              <option value="NSE">NSE</option>
            </select>
          </div>

          {/* Start Date Selector */}
          <div className="flex xl:flex-col items-center gap-2">
            <p className="text-[#3460C6] font-branding-semibold">
              Start Date:{" "}
            </p>
            <div className="flex gap-3">
              <select
                value={startDate.day}
                onChange={(e) =>
                  setStartDate({ ...startDate, day: Number(e.target.value) })
                }
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
          <div className="flex xl:flex-col items-center gap-2">
            <p className="text-[#3460C6] font-branding-semibold">End Date: </p>
            <div className="flex gap-3">
              <select
                value={endDate.day}
                onChange={(e) =>
                  setEndDate({ ...endDate, day: Number(e.target.value) })
                }
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
                className="md:w-20 w-16 h-10 text-center text-[#857E7E] border-r-4 border-white"
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
              className={`${loading === true ? "px-10" : "px-12"
                } py-2 text-xl text-primary border-2 border-primary rounded-full font-branding-bold`}
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching" : "Search"}
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
          {!loading && !error && !historicalData && (
            <p>No historical data found for the selected period.</p>
          )}
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
