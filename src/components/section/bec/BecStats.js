"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC ICONS (LOCKED) ================= */
import spaceIcon from "@/assests/nesco-business-page/bec-elements/37.png";
import spaceIcon2 from "@/assests/nesco-business-page/Indabrator-Elements/60.png";
import visitorsIcon from "@/assests/nesco-business-page/bec-elements/38.png";
import hostIcon from "@/assests/nesco-business-page/bec-elements/39.png";

/* ================= STATIC STATS (DO NOT TOUCH) ================= */
const STATIC_STATS = [
  {
    icon: spaceIcon2,
    value: "60k",
    label: "Sq.m of space",
  },
  {
    icon: visitorsIcon,
    value: "20mn",
    label: "visitors a year",
  },
  {
    icon: hostIcon,
    value: "#1 Host",
    label: "for most exhibitions in India",
  },
];

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-1.onrender.com/api/v1/business/stats";

/* ================= COMPONENT ================= */
function BecStats() {
  const [dynamicStats, setDynamicStats] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BACKEND STATS ================= */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setDynamicStats(res.data?.data || []);
      } catch (error) {
        console.error("Stats fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  /**
   * RULE (STRICT):
   * - Backend data exists → render backend stats
   * - Backend empty / fails → render STATIC stats only
   */
  const statsToRender =
    dynamicStats.length > 0
      ? dynamicStats.map((item) => ({
        icon: item.icon, // remote URL
        value: item.value,
        label: item.label,
        isRemote: true,
      }))
      : STATIC_STATS.map((item) => ({
        ...item,
        isRemote: false,
      }));

  return (
    <div className="w-full h-auto flex items-center justify-center bg-blue-800 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12">
        {!loading &&
          statsToRender.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 sm:px-4"
            >
              {/* ================= ICON ================= */}
              <div className="w-[100px] h-[100px] bg-white xs:w-[120px] xs:h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] mb-[-10px] sm:mb-[-20px] md:mb-[-30px]">
                {stat.isRemote ? (
                  <img
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    width={360}
                    height={360}
                    className="object-contain w-full h-full"
                  />
                )}
              </div>

              {/* ================= VALUE ================= */}
              <h3
                className="text-[32px] sm:text-[3rem] md:text-[48px] mt-12 font-bold text-white"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                {stat.value}
              </h3>

              {/* ================= LABEL ================= */}
              <p
                className="text-center text-[22px] sm:text-[22px] text-white px-2 lg:mt-[-10px]"
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

export default BecStats;
