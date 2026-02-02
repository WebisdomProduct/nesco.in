"use client";
import MainTable from "@/components/common/table/mainTable";
import React, { useState, useEffect } from "react";
import { fetchBothExchanges, transformQuoteData } from "@/utils/stockDataFetcher";

function Shares() {
  const [select, setSelect] = useState("bse");
  const [nseDisplayData, setNseDisplayData] = useState(null); // Data for NSE tables
  const [bseDisplayData, setBseDisplayData] = useState(null); // Data for BSE tables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timing, setTiming] = useState({
    delay: "Real-time",
    lastUpdated: "...",
  });

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBothExchanges();
        setNseDisplayData(transformDisplayData(data.nse));
        setBseDisplayData(transformDisplayData(data.bse));
        setTiming({
          delay: "Real-time",
          lastUpdated: new Date().toLocaleString(),
        });
      } catch (e) {
        console.error("Error fetching stock data:", e);
        setError("Failed to load stock data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  const transformDisplayData = (stockData) => {
    if (!stockData) return null;

    const currentPrice = stockData.currentPrice;
    const previousClose = stockData.previousClose;
    const open = stockData.open;
    const dayHigh = stockData.dayHigh;
    const dayLow = stockData.dayLow;
    const fiftyTwoWeekHigh = stockData.fiftyTwoWeekHigh;
    const fiftyTwoWeekLow = stockData.fiftyTwoWeekLow;
    const volume = stockData.volume;
    const change = stockData.change;
    const changePercent = stockData.changePercent;

    return {
      NseData: {
        title: "CURRENCY",
        dataIndex: "currency",
        header: [
          { title: "PRICE", dataIndex: "price" },
          { title: "PREVIOUS CLOSE", dataIndex: "bid" },
          { title: "CHANGE", dataIndex: "offer" },
          { title: "CHANGE IN (%)", dataIndex: "change" },
          { title: "VOLUME", dataIndex: "volume" },
        ],
        rows: [
          {
            currency: "Rupees",
            price: `₹ ${currentPrice}`,
            bid: `₹ ${previousClose}`,
            offer: `₹ ${change}`,
            change: `${changePercent}%`,
            volume: volume,
          },
        ],
      },
      NseData2: {
        title: "TODAY'S OPEN",
        dataIndex: "todayOpen",
        header: [
          { title: "PREVIOUS CLOSE", dataIndex: "previousClose" },
          { title: "TODAY'S OPEN", dataIndex: "todayOpen" },
          { title: "INTRADAY HIGH", dataIndex: "intradayHigh" },
          { title: "INTRADAY LOW", dataIndex: "intradayLow" },
          { title: "52 WEEK HIGH", dataIndex: "weekHigh" },
          { title: "52 WEEK LOW", dataIndex: "weekLow" },
        ],
        rows: [
          {
            todayOpen: `₹ ${open}`,
            previousClose: `₹ ${previousClose}`,
            intradayHigh: `₹ ${dayHigh}`,
            intradayLow: `₹ ${dayLow}`,
            weekHigh: `₹ ${fiftyTwoWeekHigh}`,
            weekLow: `₹ ${fiftyTwoWeekLow}`,
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
      <h1 className="text-5xl font-branding-bold text-primary text-center mb-2">
        NESCO Limited
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        NSE: NESCO
      </p>
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
