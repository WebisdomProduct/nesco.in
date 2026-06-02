"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import materialityPlaceholder from "@/assests/sustainability/materiality.png";

function SustainablityStrategy() {
  const [data, setData] = useState(null); // Backend data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://nesco-backend-1.onrender.com/api/v1/our_impact/sustainablility/stakeholder";
  const MAIN_TITLE = "Materiality shaping our business strategy";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/title/${encodeURIComponent(MAIN_TITLE)}`);

        // Normalize response: array or object
        let fetchedData = null;
        if (res.data?.data) {
          fetchedData = Array.isArray(res.data.data) ? res.data.data[0] : res.data.data;
        }

        if (fetchedData) {
          setData(fetchedData);
        } else {
          setError("No data found.");
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data from backend.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-600">No data available.</p>
      </div>
    );
  }

  return (
    <div className="goal-section1 flex justify-center items-center flex-col ">
      <div className="my-10 text-center w-[90%]">
        <div className="text-left md:mr-24 flex items-center justify-center">
          <h1 className="text-[48px] font-bold px-5 py-3 bg-[#C7E6F3] text-gray-900 inline-block">
            {data.title || MAIN_TITLE}
          </h1>
        </div>

        <div className="md:flex mt-16"> <div className="basis-[60%] md:mb-0 mb-8"> <p className=" text-[22px] w-[93%] text-left "> {' '}

          {data.description || "Description not available."}
        </p>
        </div>

          <div className="basis-[40%] w-full md:w-auto">
            <Image
              src={data.image || materialityPlaceholder}
              alt={data.title || "Materiality"}
              className="border-[4px] border-green-200 w-[99%] object-cover rounded-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainablityStrategy;
