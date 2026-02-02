"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function BecDescription() {
  const PAGE_NAME = "Bombay Exhibition Center";
  const BASE_URL =
    "https://nesco-backend-j567.onrender.com/api/v1/business/hero-intro";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  /* ================= FETCH ================= */
  const fetchIntro = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
      setData(res.data.data);
    } catch (error) {
      console.error("Failed to load description", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIntro();
  }, []);

  if (loading) return null;

  const paragraphs = Array.isArray(data?.paragraph)
    ? data.paragraph
    : [];

  const visibleParagraphs = expanded
    ? paragraphs
    : paragraphs.slice(0, 2);

  return (
    <div className="w-[90%] bg-white flex flex-col md:flex-row lg:min-h-screen justify-center items-center md:gap-14 mx-auto">

      {/* ================= LEFT COLUMN ================= */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center py-8 md:pt-32 md:pb-12">
        <h1
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          {data?.heading1}
        </h1>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="w-full md:w-[50%] py-8 md:pt-32 md:pb-12 flex flex-col justify-center items-center">

        <div className="space-y-5 sm:space-y-6 md:space-y-7 max-w-none lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-between h-full">

          {visibleParagraphs.map((text, index) => (
            <p
              key={index}
              className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {text}
            </p>
          ))}

          {/* READ MORE BUTTON */}
          {paragraphs.length > 2 && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-blue-800 font-semibold underline mt-4 self-start"
              style={{ fontFamily: "BrandingSemibold" }}
              aria-expanded={expanded}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default BecDescription;
