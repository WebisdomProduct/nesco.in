"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/* ================= FALLBACK IMAGE ================= */
import incubationImage from "@/assests/nesco-business-page/nesco-reality-elements/10.jpg";

/* ================= CONFIG ================= */
const MENTOR_ID = "697df949d26359f67c431acf";
const API_URL = `https://nesco-backend-1.onrender.com/api/v1/business/extra/${MENTOR_ID}`;

function RealtyInitiative() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchInitiative = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.warn("Using fallback initiative content");
      }
    };

    fetchInitiative();
  }, []);

  /* ================= FALLBACK CONTENT ================= */

  const content = {
    heading2: "Our initiative",
    heading3: data?.heading3 || "Incubation centre",
    paragraph:
      data?.paragraph ||
      `Envisioned with foresight, the Incubation Centre is enabling
      promising, young businesses to take on bigger challenges. A
      fully-operational Incubator, the Centre functions as a catalyst for
      the new-age companies that are redefining business, operations and
      workplace culture in the startup era.`,
    image: data?.image || incubationImage,
  };

  return (
    <div className="w-full max-w-[90%] h-auto lg:min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white mx-auto py-8 md:py-0 lg:mt-4">

      {/* Left column */}
      <div className="lg:w-1/2 w-full py-6 md:py-[2%] flex flex-col justify-center lg:pr-10">

        <h2
          className="text-[48px] bg-blue-800 text-white text-center sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-2"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          {content.heading2}
        </h2>

        <h3
          className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.4rem] text-center lg:text-[2.6rem] font-bold mb-4 md:mb-6"
          style={{ fontFamily: "BrandingMedium" }}
        >
          {content.heading3}
        </h3>

        <p
          className="text-[22px] leading-relaxed text-left"
          style={{ fontFamily: "BrandingMedium" }}
        >
          {content.paragraph}
        </p>

      </div>

      {/* Right column */}
      <div className="lg:w-1/2 w-full flex items-center justify-center lg:mt-[10%] px-4 md:px-6 lg:px-8 py-6 md:py-16">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-100 shadow-lg rounded-lg">
          <Image
            src={content.image}
            alt={content.heading3}
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  );
}

export default RealtyInitiative;
