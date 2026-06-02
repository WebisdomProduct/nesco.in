"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC FALLBACKS (DO NOT REMOVE) ================= */
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-1.onrender.com/api/v1/business/halls";

function BecHalls() {
  /* ================= STATIC DEFAULT ================= */
  const staticSpaces = [
    {
      title: "Exhibitions",
      image: exhibitionImg,
      alt: "Exhibition halls at BEC",
    },
    {
      title: "Celebration Halls",
      image: celebrationImg,
      alt: "Celebration venues at BEC",
    },
    {
      title: "MICE Halls",
      image: miceImg,
      alt: "MICE facilities at BEC",
    },
  ];

  const [spaces, setSpaces] = useState(staticSpaces);

  /* ================= FETCH BACKEND ================= */
  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        const backendHalls = res.data?.data;

        if (Array.isArray(backendHalls) && backendHalls.length > 0) {
          setSpaces(
            backendHalls.map((hall) => ({
              title: hall.title,
              image: hall.image, // URL from backend
              alt: hall.alt || hall.title,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch halls", err);
        // fallback stays automatically
      }
    };

    fetchHalls();
  }, []);

  return (
    <div className="w-full bg-white pb-[1%] px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {spaces.map((space, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[36rem] mb-3 sm:mb-4 lg:mb-6 overflow-hidden relative rounded-lg">
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-light italic text-center px-2">
                {space.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BecHalls;
