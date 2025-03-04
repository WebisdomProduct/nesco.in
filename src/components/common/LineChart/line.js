import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { MdOutlineFileDownload } from "react-icons/md";

export default function LineChart({ GraphData }) {
  const { stockPrices, volumes, labels } = GraphData;

  const lineData = {
    labels,
    datasets: [
      {
        label: "RIL - Value",
        data: stockPrices,
        borderColor: "#433DC5",
        backgroundColor: "transparent",
        pointRadius: 2,
        pointHoverRadius: 4,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Volume",
        data: volumes,
        backgroundColor: "#433DC5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };
  const data = {
    labels: [
      "09:24",
      "09:34",
      "09:44",
      "09:54",
      "10:04",
      "10:14",
      "10:24",
      "10:34",
      "10:44",
    ],
    datasets: [
      {
        data: [20, 22, 10, 7, 5, 5, 6, 5, 14], // Replace with your actual data
        borderColor: "#433DC5", // Line color
        backgroundColor: "#433DC5", // Fill color
        fill: "origin", // Fill from the origin (y = 0)
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
        // text: "U5KZ4 Area Chart", // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          // text: "Time", // X-axis label
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis from 0
        title: {
          display: true,
          // text: "Value", // Y-axis label
        },
      },
    },
  };

  return (
    <div className="pb-10 bg-white shadow-md rounded-lg  flex flex-col justify-center">
      {/* Navigation Tabs */}

      {/* Line Chart */}
      <div className="mb-6  w-full">
        <p className=" text-2xl">03/02/2025</p>
        <p className="ml-20 mr-10 my-2 text-2xl flex justify-between">
          <span>RIL - Value</span>
          <span className="text-3xl inline-block w-13">
            {" "}
            <MdOutlineFileDownload />{" "}
          </span>
        </p>
        <Line
          data={lineData}
          options={options}
          className="flex w-full h-full"
        />
      </div>

      {/* Bar Chart */}
      <div className="md:mt-20  w-full ">
        <p className="ml-20 text-2xl text-[#433DC5] font-branding-semibold">
          Volume
        </p>
        <Bar data={barData} options={options} />
      </div>

      <div className="md:mt-20 w-full h-full ">
        {/* <p className="ml-20 text-2xl text-primary">Volume</p> */}
        <Line data={data} options={options1} />
      </div>
    </div>
  );
}
