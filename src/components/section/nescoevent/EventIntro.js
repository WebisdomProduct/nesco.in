"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

/* ================= CONFIG ================= */

const PAGE_NAME = "Nesco Events";
const BASE_URL =
  "https://nesco-backend-1.onrender.com/api/v1/business/hero-intro";

/* ================= FALLBACK CONTENT ================= */

const FALLBACK_HEADING =
  "Curating extravagant and breathtaking experiences from concept to execution";

const FALLBACK_PARAGRAPHS = [
  "We specialize in designing and delivering extraordinary experiences tailored to your vision. From the initial spark of an idea to the final, flawless execution, we handle every detail with precision, creativity, and a passion for excellence—turning once-in-a-lifetime moments into unforgettable realities.",
];

/* ================= COMPONENT ================= */

function EventIntro() {
  const [content, setContent] = useState(null);
  const [expanded, setExpanded] = useState(false);

  /* ================= FETCH CMS ================= */

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/page/${PAGE_NAME}`
        );
        setContent(res.data?.data || null);
      } catch {
        console.warn(
          "Hero intro CMS unavailable — using fallback content"
        );
        setContent(null);
      }
    };

    fetchIntro();
  }, []);

  /* ================= DATA MERGE ================= */

  const heading =
    content?.heading1 || FALLBACK_HEADING;

  const paragraphs =
    Array.isArray(content?.paragraph) && content.paragraph.length > 0
      ? content.paragraph
      : FALLBACK_PARAGRAPHS;

  const visibleParagraphs = expanded
    ? paragraphs
    : paragraphs.slice(0, 2);

  /* ================= UI ================= */

  return (
    <div className="w-[90%] bg-white flex flex-col md:flex-row lg:min-h-screen justify-center items-center md:gap-14 mx-auto">

      {/* ================= LEFT COLUMN ================= */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center py-8 md:pt-32 md:pb-12">
        <h1
          className="
            text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem]
            md:text-[3.4rem] lg:text-[3.8rem]
            xl:text-[4.4rem] 2xl:text-[5rem]
            font-bold leading-[1.1] sm:leading-[1.15]
            text-left
          "
          style={{ fontFamily: "BrandingSemibold" }}
        >
          {heading}
        </h1>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="w-full md:w-[50%] py-8 md:pt-32 md:pb-12 flex flex-col justify-center items-center">
        <div className="space-y-5 sm:space-y-6 md:space-y-7 max-w-none lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-between h-full">

          {visibleParagraphs.map((text, index) => (
            <p
              key={index}
              className="
                text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem]
                md:text-[1.2rem] lg:text-[1.3rem]
                xl:text-[1.4rem] 2xl:text-[1.5rem]
                leading-[1.6] sm:leading-[1.65] md:leading-[2]
                text-gray-800
              "
              style={{ fontFamily: "BrandingMedium" }}
            >
              {text}
            </p>
          ))}

          {/* READ MORE */}
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

export default EventIntro;
