"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function EventStats() {
  const PAGE_NAME = "Nesco Events";
  const BASE_URL =
    "https://nesco-backend-1.onrender.com/api/v1/business/stats";

  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH STATS ================= */
  const fetchStats = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/page/${PAGE_NAME}`
      );
      setStats(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch event stats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading || stats.length === 0) return null;

  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 lg:gap-48 py-12">

        {stats.map((stat) => (
          <div
            key={stat._id}
            className="flex flex-col items-center text-center px-4"
          >
            {/* ICON */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-[-30px]">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={360}
                height={360}
                className="object-contain w-full h-full"
                quality={100}
              />
            </div>

            {/* VALUE */}
            <h3
              className="text-[2.8rem] sm:text-[3rem] md:text-[3.5rem] font-bold text-black"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>

            {/* LABEL */}
            <p
              className="text-center text-[0.9rem] sm:text-[1rem] text-black mt-[-10px]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default EventStats;
