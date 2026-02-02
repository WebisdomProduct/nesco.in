"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import stakeholderPlaceholder from "@/assests/sustainability/stakeholder.png";

function SustainabilityTerms() {
  const [data, setData] = useState(null); // Single object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://nesco-backend-j567.onrender.com/api/v1/our_impact/sustainablility/stakeholder";
  const MAIN_TITLE = "Stakeholder Engagement & Management";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/title/${encodeURIComponent(MAIN_TITLE)}`);

        // Ensure res.data.data exists
        if (res.data?.data) {
          // If backend sends an array, take the first item
          const fetchedData = Array.isArray(res.data.data) ? res.data.data[0] : res.data.data;
          setData(fetchedData);
        } else {
          setData(null);
          setError("No data found.");
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch stakeholder data.");
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
        <p className="text-gray-600">No stakeholder data available.</p>
      </div>
    );
  }

  return (
    <div className="goal-section1 flex justify-center items-center flex-col mt-0 lg:mt-10">
      <div className="my-10 text-center w-[90%]">
        <div className="text-right md:mr-24 flex items-center justify-center">
          <h1 className="text-[48px] font-bold px-5 py-3 bg-[#C7E6F3] text-gray-900 inline-block">
            {data.title || MAIN_TITLE}
          </h1>
        </div>

        <div className="md:flex mt-16 flex-col md:flex-row items-center md:items-start">
          <div className="basis-[40%] md:mb-0 mb-5 w-full md:w-auto">
            <Image
              src={data.image || stakeholderPlaceholder}
              alt={data.title || "Stakeholder"}
              width={500}
              height={500}
              className="border-3 border-sky-200 w-full h-auto object-cover rounded-md"
            />
          </div>

          <div className="basis-[60%]"> <p className=" text-[22px] w-[93%]  text-left md:ml-10 sm:pl-0 pl-3">
            {data.description || "Description not available."}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityTerms;
