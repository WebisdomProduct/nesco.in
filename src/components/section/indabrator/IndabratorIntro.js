"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= CONFIG ================= */

const PAGE_NAME = "Engineering";
const BASE_URL =
  "https://nesco-backend-j567.onrender.com/api/v1/business";

/* ================= FALLBACK CONTENT ================= */

const FALLBACK_HEADING =
  "A pioneer of dreams that will engineer tomorrow.";

const FALLBACK_PARAGRAPHS = [
  "Indabrator is an ideal service provider in the engineering segment. The company believes in a single-window solution for all surface-preparation needs.",
];

/* ================= COMPONENT ================= */

export default function IndabratorIntro() {
  const [banner, setBanner] = useState(null);
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bannerRes, introRes] = await Promise.all([
          axios.get(`${BASE_URL}/banner/page/${PAGE_NAME}`),
          axios.get(`${BASE_URL}/hero-intro/page/${PAGE_NAME}`),
        ]);

        setBanner(bannerRes.data?.data || null);
        setIntro(introRes.data?.data || null);
      } catch (err) {
        console.error("Failed to load engineering intro");
      }
    };

    fetchData();
  }, []);

  /* ================= DATA MERGE ================= */

  const heading = intro?.heading1 || FALLBACK_HEADING;

  const paragraphs =
    Array.isArray(intro?.paragraph) && intro.paragraph.length > 0
      ? intro.paragraph
      : FALLBACK_PARAGRAPHS;

  return (
    <section className="relative w-full overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      {banner?.image && (
        <Image
          src={banner.image}
          alt={banner?.title || "Engineering banner"}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-white/80 z-0" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-[90%] mx-auto flex flex-col md:flex-row lg:min-h-screen justify-center items-center md:gap-14">

        {/* LEFT COLUMN — HEADING */}
        <div className="w-full md:w-[50%] flex flex-col justify-center py-8 md:pt-32 md:pb-12">
          <h1
            className="
              text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem]
              md:text-[3.4rem] lg:text-[3.8rem]
              xl:text-[4.4rem] 2xl:text-[5rem]
              font-bold leading-[1.1] sm:leading-[1.15]
              text-left text-black
            "
            style={{ fontFamily: "BrandingSemibold" }}
          >
            {heading}
          </h1>
        </div>

        {/* RIGHT COLUMN — PARAGRAPHS */}
        <div className="w-full md:w-[50%] py-8 md:pt-32 md:pb-12 flex flex-col justify-center">
          <div className="space-y-5 sm:space-y-6 md:space-y-7 max-w-none lg:max-w-4xl xl:max-w-5xl">

            {paragraphs.map((text, index) => (
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

          </div>
        </div>
      </div>
    </section>
  );
}
