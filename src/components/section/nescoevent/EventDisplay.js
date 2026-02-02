"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const PAGE_NAME = "Nesco Events";
const DISPLAY_API =
  "https://nesco-backend-j567.onrender.com/api/v1/business/display";

function EventDisplay() {
  const [displays, setDisplays] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DISPLAY IMAGES ================= */
  const fetchDisplays = async () => {
    try {
      const res = await axios.get(
        `${DISPLAY_API}/page/${PAGE_NAME}`
      );
      setDisplays(res.data.data || []);
    } catch (error) {
      console.error("Failed to load event displays");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDisplays();
  }, []);

  if (loading || displays.length === 0) return null;

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative flex items-center justify-center">

        {/* ================= IMAGE WRAPPER ================= */}
        <div className="relative w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] md:w-[140%] md:h-[140%]">

          {displays.map((item, index) => (
            <Image
              key={item._id}
              src={item.image}
              alt={item.alt || "Event Display Image"}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="100vw"
              quality={100}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default EventDisplay;
