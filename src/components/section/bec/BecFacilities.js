"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC FALLBACK (DO NOT TOUCH DESIGN) ================= */
import orchardImage from "@/assests/nesco-business-page/bec-elements/40.jpg";

const STATIC_FACILITIES = [
  {
    id: 1,
    name: "The Hall",
    image: orchardImage,
    description:
      "An expansive multi-function exhibition hall with over 25,000 sq.ft of open space. Perfect for large-scale events, exhibitions, and corporate functions. Equipped with state-of-the-art lighting systems and utility connections throughout the space.",
  },
  {
    id: 2,
    name: "Orchard",
    image: orchardImage,
    description:
      "Flanked by open sky and trees, the Orchard is a quick and accessible haven for multi-cuisine. This food court serves up a delightful variety in both takeaway and dine-in formats for every gourmand- leisurely lunches or meals-on-the-go.",
  },
  {
    id: 3,
    name: "The Pavilion",
    image: orchardImage,
    description:
      "A versatile indoor-outdoor space that combines the comfort of a sheltered venue with the natural ambiance of open surroundings. The Pavilion offers 12,000 sq.ft of flexible space for product launches, networking events or casual gatherings.",
  },
  {
    id: 4,
    name: "Conference Center",
    image: orchardImage,
    description:
      "Our premium meeting space equipped with advanced audio-visual technology and comfortable seating for up to 200 attendees. The Conference Center includes breakout rooms and dedicated catering areas for productive business meetings.",
  },
];

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-1.onrender.com/api/v1/business/facilities";

function BecFacilities() {
  const [backendFacilities, setBackendFacilities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= FETCH BACKEND ================= */
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        if (Array.isArray(res.data?.data)) {
          setBackendFacilities(res.data.data);
        }
      } catch (err) {
        console.error("Facilities fetch failed", err);
      }
    };

    fetchFacilities();
  }, []);

  /* ================= FINAL DATA SOURCE ================= */
  const facilities =
    backendFacilities.length > 0
      ? backendFacilities.map((item, index) => ({
        id: item._id || index,
        name: item.name,
        description: item.description,
        image: item.image, // backend image URL
      }))
      : STATIC_FACILITIES;

  const currentFacility = facilities[currentIndex];

  /* ================= CAROUSEL CONTROLS ================= */
  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? facilities.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === facilities.length - 1 ? 0 : currentIndex + 1
    );
  };

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === facilities.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-change every 5 seconds
    
    return () => clearInterval(timer);
  }, [facilities.length]);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* TITLE */}
      <div className="px-[5%] w-full border-t-2 py-6 lg:pt-24">
        <h2 className="text-[48px] font-bold text-black">
          Facilities
        </h2>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-[70vh] md:h-[calc(100%-140px)]">

        {/* Background Image */}
        <Image
          src={currentFacility.image}
          alt={currentFacility.name}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />

        {/* CONTENT CARD */}
        <div className="
      absolute 
      left-4 right-4 bottom-6
      md:left-[5%] md:bottom-20 md:right-auto
      bg-white 
      p-5 md:p-8 
      w-auto md:w-[550px] 
      shadow-lg
      rounded-lg
    "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h3 className="text-lg md:text-[1.8rem] font-bold">
              {currentFacility.name}
            </h3>

            <span className="text-xs md:text-sm border px-2 py-1">
              {currentIndex + 1}/{facilities.length}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-[1.2rem] leading-relaxed md:leading-[1.7] mb-8 md:mb-20">
            {currentFacility.description}
          </p>

          {/* CONTROLS */}
          <div className="flex justify-between items-center">
            <button onClick={goToPrevious} className="text-xl md:text-2xl">
              ‹
            </button>

            <div className="flex gap-2">
              {facilities.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index === currentIndex ? "bg-black scale-125" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button onClick={goToNext} className="text-xl md:text-2xl">
              ›
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BecFacilities;
