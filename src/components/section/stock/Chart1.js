"use client";
import LineChart from "@/components/common/LineChart/line";
import React, { useState } from "react";

function Chart1() {
  const [select, setSelect] = useState("nse");
  const [selectMonth, setSelectMonth] = useState("Today");

  const NseGraphData = {
    labels: [
      "09:24",
      "09:29",
      "09:34",
      "09:39",
      "09:44",
      "09:49",
      "09:54",
      "09:59",
      "10:04",
      "10:09",
      "10:14",
      "10:19",
      "10:24",
      "10:29",
      "10:34",
      "10:39",
      "10:44",
    ],

    stockPrices: [
      1248, 1250, 1249, 1247, 1245, 1242, 1240, 1239, 1240, 1241, 1241, 1240,
      1241, 1243, 1245, 1247, 1249,
    ],

    volumes: [
      600000, 150000, 120000, 130000, 180000, 140000, 160000, 150000, 170000,
      140000, 160000, 150000, 170000, 160000, 170000, 190000, 200000,
    ],
  };
  const BseGraphData = {
    labels: [
      "09:24",
      "09:29",
      "09:34",
      "09:39",
      "09:44",
      "09:49",
      "09:54",
      "09:59",
      "10:04",
      "10:09",
      "10:14",
      "10:19",
      "10:24",
      "10:29",
      "10:34",
      "10:39",
      "10:44",
    ],

    stockPrices: [
      1250, 1230, 1211, 1235, 1240, 1247, 1240, 1239, 1240, 1241, 1241, 1240,
      1241, 1243, 1245, 1247, 1249,
    ],

    volumes: [
      600000, 250000, 20000, 130000, 180000, 140000, 160000, 150000, 170000,
      140000, 160000, 150000, 170000, 160000, 170000, 190000, 200000,
    ],
  };

  return (
    <div className="goal-section1 pb-10 py-20 bg-white shadow-md rounded-lg  flex justify-center">
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
            <div className="border-r-2 pr-2">
              <button
                key={tab}
                className={` whitespace-nowrap px-4 py-2 ${
                  selectMonth === tab
                    ? " bg-white text-primary rounded-lg"
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
        <div className="w-full ">
          {select === "bse" ? (
            <LineChart GraphData={BseGraphData} />
          ) : (
            <LineChart GraphData={NseGraphData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Chart1;
