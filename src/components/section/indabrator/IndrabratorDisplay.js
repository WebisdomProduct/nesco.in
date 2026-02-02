"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function HospitalityDisplay() {
  const PAGE_NAME = "Engineering";
  const BASE_URL =
    "https://nesco-backend-j567.onrender.com/api/v1/business/display";

  const [display, setDisplay] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DISPLAY ================= */
  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        const data = res.data.data;

        // Take first / latest image
        if (Array.isArray(data) && data.length > 0) {
          setDisplay(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch display image", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisplay();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!display) return null;

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative">
        <Image
          src={display.image}
          alt={display.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  );
}

export default HospitalityDisplay;
