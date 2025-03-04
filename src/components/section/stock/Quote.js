"use client";
import MainTable from "@/components/common/table/mainTable";
import Link from "next/link";
import React, { useState } from "react";

function Quote() {
  const [exchange, setExchange] = useState("BSE");
  const [startDate, setStartDate] = useState({ day: 3, month: 1, year: 2025 });
  const [endDate, setEndDate] = useState({ day: 3, month: 1, year: 2025 });

  const BseData = {
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
    rows: [
      {
        date: "01-02-2025",
        openPrice: "₹1,265.00",
        highPrice: "₹1,269.95",
        lowPrice: "₹1,241.50",
        closePrice: "₹1,264.65",
        tradedValue: "33.54",
        noOfTrades: "6933",
        tradedQuantity: "266300",
      },
      {
        date: "31-01-2025",
        openPrice: "₹1,257.40",
        highPrice: "₹1,266.00",
        lowPrice: "₹1,249.50",
        closePrice: "₹1,264.90",
        tradedValue: "51.99",
        noOfTrades: "15527",
        tradedQuantity: "412707",
      },
      {
        date: "31-01-2025",
        openPrice: "₹1,257.40",
        highPrice: "₹1,266.00",
        lowPrice: "₹1,249.50",
        closePrice: "₹1,264.90",
        tradedValue: "51.99",
        noOfTrades: "15527",
        tradedQuantity: "412707",
      },
      {
        date: "31-01-2025",
        openPrice: "₹1,257.40",
        highPrice: "₹1,266.00",
        lowPrice: "₹1,249.50",
        closePrice: "₹1,264.90",
        tradedValue: "51.99",
        noOfTrades: "15527",
        tradedQuantity: "412707",
      },
      {
        date: "31-01-2025",
        openPrice: "₹1,257.40",
        highPrice: "₹1,266.00",
        lowPrice: "₹1,249.50",
        closePrice: "₹1,264.90",
        tradedValue: "51.99",
        noOfTrades: "15527",
        tradedQuantity: "412707",
      },
      {
        date: "31-01-2025",
        openPrice: "₹1,257.40",
        highPrice: "₹1,266.00",
        lowPrice: "₹1,249.50",
        closePrice: "₹1,264.90",
        tradedValue: "51.99",
        noOfTrades: "15527",
        tradedQuantity: "412707",
      },
      // Add more rows as needed
    ],
  };

  const handleSearch = () => {
    console.log("Selected Exchange:", exchange);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 20 }, (_, i) => 2020 + i);

  return (
    <div className="goal-section1 flex flex-col justify-center items-center py-10 font-branding-medium mt-0 lg:mt-10">
      <h2 className="text-6xl font-branding-semibold text-primary text-center mb-10">
        Historical Stock Quote
      </h2>
      <div className=" flex justify-center  w-[90%]  ">
        <div className="flex lg:flex-row flex-col gap-20 justify-center items-center bg-[#B8DFFC] p-4 w-[80%]">
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
            >
              Search
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
          <MainTable
            tableData={BseData}
            pagination={true}
            textColor="#4b5563"
            ClassCss="font-size: 14px"
            ClassCss1="font-size:16px"
          />
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
