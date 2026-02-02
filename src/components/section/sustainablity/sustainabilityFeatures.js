"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const API =
  "https://nesco-backend-j567.onrender.com/api/v1/our_impact/sustainablility/feature/feature";

function SustainabilityFeatures() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!features.length)
    return <p className="text-center mt-20">No sustainability features found.</p>;

  return (
    <section className="goal-section1 flex justify-center mb-14 mt-28 lg:mt-32">
      <div className="grid grid-cols-1 bg-inherit lg:grid-cols-2 xl:grid-cols-3 w-[90%] gap-10">

        {features.map((item) => (
          <div
            key={item._id}
            className="relative rounded-2xl shadow-md p-8 pt-14 transition hover:shadow-lg"
            style={{
              backgroundColor: `${item.bgColor}50`, // soft tint
              borderTop: `4px solid ${item.bgColor}`,
            }}
          >
            {/* ICON */}
            <div
              className="absolute -top-7 left-6 w-[60px] h-[60px] p-2 rounded-xl flex items-center justify-center shadow"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              )}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default SustainabilityFeatures;
