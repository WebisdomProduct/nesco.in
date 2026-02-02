import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { MdOutlineFileDownload } from "react-icons/md";

export default function StockChart({ GraphData }) {
  const { stockPrices, volumes, labels } = GraphData;

  // Filter out points with missing or zero values (assuming 0 is invalid for price)
  const chartData = labels
    .map((label, index) => ({
      name: label,
      value: stockPrices[index],
      volume: volumes[index],
    }))
    .filter(point => point.value && point.value > 0);

  const areaChartData = [
    { name: "09:24", value: 20 },
    { name: "09:34", value: 22 },
    { name: "09:44", value: 10 },
    { name: "09:54", value: 7 },
    { name: "10:04", value: 5 },
    { name: "10:14", value: 5 },
    { name: "10:24", value: 6 },
    { name: "10:34", value: 5 },
    { name: "10:44", value: 14 },
  ];

  return (
    <div className="pb-10 bg-white shadow-md rounded-lg flex flex-col justify-center">
      {/* Value Line Chart */}
      <div className="mb-6 w-full h-[600px]">
        <p className="text-2xl">03/02/2025</p>
        <p className="ml-20 mr-10 my-2 text-2xl flex justify-between">
          <span>RIL - Value</span>
          <span className="text-3xl inline-block w-13">
            <MdOutlineFileDownload />
          </span>
        </p>
        <ResponsiveContainer width="100%" height="100%" className="pb-10">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#433DC5"
              strokeWidth={2}
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Bar Chart */}
      <div className="w-full h-[500px] mt-8">
        <p className="ml-20 text-2xl text-[#433DC5] font-branding-semibold">
          Volume
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volume" fill="#433DC5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="w-full h-[100px] mt-14">
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={areaChartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#433DC5"
              fill="#433DC5"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
