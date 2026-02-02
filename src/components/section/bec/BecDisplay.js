"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC FALLBACK ================= */
import displayImage from "@/assests/nesco-business-page/bec-elements/36.png";

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-j567.onrender.com/api/v1/business/display";

function BecDisplay() {
  const [display, setDisplay] = useState({
    image: displayImage,
    alt: "Exhibition Floor Display",
  });

  /* ================= FETCH BACKEND ================= */
  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        const data = res.data?.data;

        // Use ONLY the first image if available
        if (Array.isArray(data) && data.length > 0) {
          setDisplay({
            image: data[0].image,
            alt: data[0].alt || "Exhibition Floor Display",
          });
        }
      } catch (err) {
        console.error("Display fetch failed", err);
        // fallback stays
      }
    };

    fetchDisplay();
  }, []);

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={display.image}
          alt={display.alt}
          fill
          className="object-cover w-full"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={100}
        />
      </div>
    </div>
  );
}

export default BecDisplay;
