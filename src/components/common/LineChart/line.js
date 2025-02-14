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
  Legend
);

export default function LineChart({ GraphData }) {
  const { stockPrices, volumes, labels } = GraphData;

  const lineData = {
    labels,
    datasets: [
      {
        label: "RIL - Value",
        data: stockPrices,
        borderColor: "blue",
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
        backgroundColor: "blue",
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

  return (
    <div className="pb-10 bg-white shadow-md rounded-lg  flex flex-col justify-center">
      {/* Navigation Tabs */}

      {/* Line Chart */}
      <div className="mb-6  w-full">
        <p className=" text-2xl">03/02/2025</p>
        <p className="ml-20 my-2 text-2xl">RIL - Value</p>
        <Line
          data={lineData}
          options={options}
          className="flex w-full h-full"
        />
      </div>

      {/* Bar Chart */}
      <div className="md:mt-20  w-full ">
        <p className="ml-20 text-2xl text-primary">Volume</p>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
}
