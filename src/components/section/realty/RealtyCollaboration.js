"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function RealtyCollaboration() {
  const PAGE_NAME = "Nesco Reality";
  const BASE_URL =
    "https://nesco-backend-1.onrender.com/api/v1/business/display";

  const [display, setDisplay] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DISPLAY IMAGE ================= */
  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        const data = res.data.data;

        if (Array.isArray(data) && data.length > 0) {
          setDisplay(data[0]); // first / latest image
        }
      } catch (error) {
        console.error("Failed to fetch Realty display image", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisplay();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen bg-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!display) return null;

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={display.image}
          alt={display.alt}
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  );
}

export default RealtyCollaboration;
