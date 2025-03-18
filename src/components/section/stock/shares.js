"use client";
import MainTable from "@/components/common/table/mainTable";
import React, { useState, useEffect } from "react";

function Shares() {
  const [select, setSelect] = useState("bse");
  const [stockData, setStockData] = useState(null); // Store raw API data
  const [nseDisplayData, setNseDisplayData] = useState(null); // Data for NSE tables
  const [bseDisplayData, setBsetDisplayData] = useState(null); // Data for BSE tables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timing, setTiming] = useState({
    delay: "...",
    lastUpdated: "...",
  });

  const API_ENDPOINT = "/api/stock-data"; // Next.js API route - adjust if needed

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_ENDPOINT); // No exchange param needed now, API returns both
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStockData(data); // Store the raw data
        setTiming({
          delay: "15", // Assuming realtime data from this API
          lastUpdated: new Date().toLocaleString(), // Update timestamp
        });
      } catch (e) {
        console.error("Error fetching stock data:", e);
        setError("Failed to load stock data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []); // Fetch data once on component mount

  useEffect(() => {
    if (stockData) {
      // Transform data whenever raw stockData changes
      setNseDisplayData(transformStockData("nse", stockData));
      setBsetDisplayData(transformStockData("bse", stockData));
    }
  }, [stockData]); // Re-transform data when stockData updates

  const transformStockData = (exchange, rawData) => {
    if (!rawData) return null;

    const exchangeData = rawData[exchange]; // e.g., rawData['nse'] or rawData['bse']
    const bidPrice = rawData[`${exchange}_bid_price`] || "-";
    const offerPrice = rawData[`${exchange}_offer_price`] || "-";
    const closePrice = rawData[`${exchange}_close`] || "-";
    const currentPrice = rawData[exchange] || "-";
    const volume = rawData[`${exchange}_volume`] || "-";
    const openPrice = rawData[`${exchange}_open`] || "-";

    let changePercent = "-";
    let changeValue = "-";

    if (currentPrice !== "-" && closePrice !== "-") {
      changeValue = (parseFloat(currentPrice) - parseFloat(closePrice)).toFixed(2);
      changePercent = ((parseFloat(changeValue) / parseFloat(closePrice)) * 100).toFixed(2) + "%";
    }


    return {
      NseData: { // Reusing NseData for both NSE and BSE display structure
        title: "CURRENCY",
        dataIndex: "currency",
        header: [
          { title: "PRICE", dataIndex: "price" },
          { title: "BID", dataIndex: "bid" },
          { title: "OFFER", dataIndex: "offer" },
          { title: "CHANGE IN (%)", dataIndex: "change" },
          { title: "VOLUME", dataIndex: "volume" },
        ],
        rows: [
          {
            currency: "Rupees", // Assuming currency is always Rupees
            price: `₹ ${currentPrice}`,
            bid: `₹ ${bidPrice}`,
            offer: `₹ ${offerPrice}`,
            change: `${changeValue} (${changePercent})`,
            volume: volume,
          },
        ],
      },
      NseData2: { // Reusing NseData2 for both NSE and BSE display structure
        title: "TODAY'S OPEN",
        dataIndex: "todayOpen",
        header: [
          { title: "PREVIOUS CLOSE", dataIndex: "previousClose" },
          { title: "TODAY'S OPEN", dataIndex: "todayOpen" }, // Changed header to "TODAY'S OPEN"
          { title: "INTRADAY HIGH", dataIndex: "intradayHigh" },
          { title: "INTRADAY LOW", dataIndex: "intradayLow" },
          { title: "52 WEEK HIGH", dataIndex: "weekHigh" },
          { title: "52 WEEK LOW", dataIndex: "weekLow" },
        ],
        rows: [
          {
            todayOpen: `₹ ${openPrice}`,
            previousClose: `₹ ${closePrice}`,
            intradayHigh: "-", // Not in API response
            intradayLow: "-",  // Not in API response
            weekHigh: "-",     // Not in API response
            weekLow: "-",      // Not in API response
          },
        ],
      },
    };
  };

  const currentDisplayData = select === "nse" ? nseDisplayData : bseDisplayData;

  if (loading) {
    return (
      <section className="header_purple goal-section1 pt-20 pb-10 font-branding-medium flex justify-center items-center flex-col">
        <h2 className="text-6xl font-branding-semibold text-primary text-center my-8">
          Shares
        </h2>
        <div className="w-full flex justify-center items-center flex-col bg-secondary">
          <div className=" flex flex-col items-center justify-center py-5 w-[90%]">
            <p>Loading stock data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="header_purple goal-section1 pt-20 pb-10 font-branding-medium flex justify-center items-center flex-col">
        <h2 className="text-6xl font-branding-semibold text-primary text-center my-8">
          Shares
        </h2>
        <div className="w-full flex justify-center items-center flex-col bg-secondary">
          <div className=" flex flex-col items-center justify-center py-5 w-[90%]">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="header_purple goal-section1 pt-20 pb-10 font-branding-medium flex justify-center items-center flex-col">
      <h2 className="text-6xl font-branding-semibold text-primary text-center my-8">
        Shares
      </h2>
      <div className="w-full flex justify-center items-center flex-col bg-secondary">
        <div className=" flex flex-col items-center justify-center py-5 w-[90%]">
          <div className=" flex justify-between w-full items-center">
            <span className="text-3xl text-[#21409A] font-branding-semibold">
              Stock Quote
            </span>
            <div className="flex gap-2 text-xl">
              <button
                onClick={() => setSelect("nse")}
                className={select === "nse" ? "font-branding-bold" : ""}
                aria-pressed={select === "nse"}
              >
                NSE
              </button>
              <span className="text-[#21409A] font-branding-bold"> |</span>
              <button
                onClick={() => setSelect("bse")}
                className={select === "bse" ? "font-branding-bold" : ""}
                aria-pressed={select === "bse"}
              >
                BSE
              </button>
            </div>
          </div>
          <div className=" bg-white w-full flex flex-col items-center my-10">
            <div className=" w-[90%] my-10">
              {currentDisplayData && (
                <div className="flex flex-col gap-10">
                  <MainTable
                    tableData={currentDisplayData.NseData}
                    pagination={false}
                  />
                  <MainTable
                    tableData={currentDisplayData.NseData2}
                    pagination={false}
                  />
                </div>
              )}
            </div>
          </div>
          <div className=" w-full my-5 flex justify-end ">
            <div className="text-left">
              <p> Pricing delay by {timing.delay} minutes</p>
              <p>Last Updated {timing.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shares;