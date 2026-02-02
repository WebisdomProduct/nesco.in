"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function RealtySpaces() {
  const PAGE_NAME = "Nesco Reality";
  const BASE_URL =
    "https://nesco-backend-j567.onrender.com/api/v1/business/halls";

  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH HALLS ================= */
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setSpaces(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch reality spaces", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-blue-800 py-20 text-center text-white">
        Loading spaces...
      </div>
    );
  }

  if (!spaces.length) {
    return (
      <div className="w-full bg-blue-800 py-20 text-center text-white">
        No spaces available
      </div>
    );
  }

  return (
    <div className="w-full bg-blue-800 py-4 sm:py-6 md:py-8 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {spaces.map((space) => (
            <div
              key={space._id}
              className="flex flex-col items-center"
            >
              {/* IMAGE */}
              <div className="w-full max-w-sm h-48 sm:h-64 md:h-72 lg:h-[36rem] mb-3 sm:mb-4 lg:mb-6 overflow-hidden relative rounded-lg shadow-lg">
                <Image
                  src={space.image}
                  alt={space.alt || space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-white text-base sm:text-lg lg:text-2xl font-light italic text-center px-2 leading-relaxed">
                {space.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealtySpaces;
