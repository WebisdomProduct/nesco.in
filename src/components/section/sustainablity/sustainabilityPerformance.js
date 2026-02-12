"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const API =
  "https://nesco-backend-j567.onrender.com/api/v1/our_impact/sustainablility/performance";

function SustainabilityPerformance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch API Data
  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const res = await axios.get(`${API}/get`);
        setData(res.data.data[0]);
      } catch (err) {
        console.error(err);
        setError("Failed to load ESG performance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPerformance();
  }, []);

  // ✅ Redirect Function (Dynamic till .com)
  const handleRedirect = () => {
    const baseUrl = window.location.origin; // automatically gets https://yourdomain.com
    window.location.href = `${baseUrl}/sebi`;
  };

  // ✅ Loading & Error Handling
  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (error) return <p className="text-center p-10 text-red-600">{error}</p>;
  if (!data) return <p className="text-center p-10">No data available</p>;

  return (
    <>
      <div className="goal-section1 relative flex flex-col justify-center items-center mt-0 lg:mt-10">
        <div className="absolute bg-[#EEF2F2] w-full xl:h-[20%] md:h-[25%] sm:h-[15%] h-[10%] z-0 top-0"></div>

        <div className="pt-16 lg:flex z-10 relative w-[90%]">
          {/* Left Side */}
          <div className="basis-[60%] text-center">
            <img
              src={data.image}
              alt="Sustainability Performance"
              className="w-[95%] border-2 border-gray-400 mb-10"
            />

            {/* ✅ Button with Redirect */}
            <button
              onClick={handleRedirect}
              className="bg-[#BA74B9] text-white px-4 py-2 lg:text-xl text-xl rounded-md hover:bg-[#a85aa7] transition duration-300"
            >
              {data.buttonText}
            </button>
          </div>

          {/* Right Side */}
          <div className="basis-[40%]">
            <h1 className="text-[#BA74B9] text-3xl font-bold lg:mb-16 mb-8 lg:mt-0 mt-8">
              {data.heading1}
            </h1>

            <p className="xl:text-[21px] lg:text-[17px] text-[16px]">
              {data.paragraph1}
            </p>

            <p className="xl:text-[21px] lg:text-[17px] text-[16px] mt-5">
              {data.paragraph2}
            </p>

            <p className="xl:text-[21px] lg:text-[17px] text-[16px] mt-5">
              {data.paragraph3}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-1 mt-10 bg-[#BA74B9]"></div>
    </>
  );
}

export default SustainabilityPerformance;
