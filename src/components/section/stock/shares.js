"use client";
import LineChart from "@/components/common/LineChart/line";
import MainTable from "@/components/common/table/mainTable";
import React, { useState } from "react";

function Shares() {
  const [select, setSelect] = useState("bse");

  const NseData = {
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
        currency: "Rupees",
        price: "₹ 1,248.55000",
        bid: "₹ 1,248.55",
        offer: "₹ 1,248.60",
        change: "-1.27%",
        volume: "3,130,810",
      },
    ],
  };
  const NseData2 = {
    title: "TODAY'S OPEN",
    dataIndex: "todayOpen",
    header: [
      { title: "PREVIOUS CLOSE", dataIndex: "previousClose" },
      { title: "INTRADAY HIGH", dataIndex: "intradayHigh" },
      { title: "INTRADAY LOW", dataIndex: "intradayLow" },
      { title: "52 WEEK HIGH", dataIndex: "weekHigh" },
      { title: "52 WEEK LOW", dataIndex: "weekLow" },
    ],
    rows: [
      {
        todayOpen: "₹ 1,251.00",
        previousClose: "₹ 1,264.60",
        intradayHigh: "₹ 1,253.95",
        intradayLow: "₹ 1,237.55",
        weekHigh: "₹ 1,608.80",
        weekLow: "₹ 1,201.50",
      },
    ],
  };
  const BseData = {
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
        currency: "Rupees",
        price: "₹ 1,248.55",
        bid: "₹ 1,248.55",
        offer: "₹ 1,248.60",
        change: "-1.27%",
        volume: "3,130,810",
      },
    ],
  };
  const BseData2 = {
    title: "TODAY'S OPEN",
    dataIndex: "todayOpen",
    titleColData: "₹ 1,251.00",
    header: [
      { title: "PREVIOUS CLOSE", dataIndex: "previousClose" },
      { title: "INTRADAY HIGH", dataIndex: "intradayHigh" },
      { title: "INTRADAY LOW", dataIndex: "intradayLow" },
      { title: "52 WEEK HIGH", dataIndex: "weekHigh" },
      { title: "52 WEEK LOW", dataIndex: "weekLow" },
    ],
    rows: [
      {
        todayOpen: "₹ 1,251.00",
        previousClose: "₹ 1,264.60",
        intradayHigh: "₹ 1,253.95",
        intradayLow: "₹ 1,237.55",
        weekHigh: "₹ 1,608.80",
        weekLow: "₹ 1,201.50",
      },
    ],
  };

  const timing = {
    delay: "15",
    lastUpdated: "03/02/2025 10:39 AM",
  };

  return (
    <section className="header_purple goal-section1 pt-20 pb-10 font-branding-medium flex justify-center items-center flex-col">
      <h2 className="text-6xl font-branding-semibold text-primary text-center my-8">
        Shares
      </h2>
      <div className="w-full flex justify-center items-center flex-col bg-secondary">
        <div className=" flex flex-col items-center justify-center py-5 w-[90%]">
          <div className="flex justify-between w-full items-center">
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
              {select === "bse" ? (
                <div className="flex flex-col gap-10">
                  <MainTable tableData={BseData} pagination={false} />
                  <MainTable tableData={BseData2} pagination={false} />
                </div>
              ) : (
                <div className="flex flex-col gap-10">
                  <MainTable tableData={NseData} pagination={false} />
                  <MainTable tableData={NseData2} pagination={false} />
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
