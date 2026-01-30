"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const API =
  "http://localhost:8040/api/v1/our_impact/sustainablility/feature/feature";

function SustainabilityFeatures() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ========================
  // Fetch Features
  // ========================
  const fetchFeatures = async () => {
    try {
      const res = await axios.get(API);
      setFeatures(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load sustainability features.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  // ========================
  // States
  // ========================
  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  if (features.length === 0) {
    return (
      <p className="text-center mt-20">No sustainability features found.</p>
    );
  }

  // ========================
  // UI
  // ========================
  return (
    <div className="goal-section1 flex justify-center mb-14 mt-28 lg:mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between text-center w-[90%] gap-10">

        {features.map((item) => (
          <div key={item._id} className="flex flex-col items-center relative">

            {/* ICON BOX */}
            <div
              className="absolute md:w-[70px] w-[60px] h-[60px] p-2 left-0 transform -translate-y-1/2 top-5 md:-translate-x-[30%]"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* TITLE */}
            <p
              className="mb-8 py-2 md:px-6 md:text-xl whitespace-nowrap font-bold text-gray-800 w-full pl-10"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.title}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg ml-20 mr-4">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default SustainabilityFeatures;
