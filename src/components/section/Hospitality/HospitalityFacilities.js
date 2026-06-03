"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// 🔒 HARD-CODED FALLBACK IMAGES (DO NOT REMOVE)
import orchardImage from "@/assests/nesco-business-page/bec-elements/40.jpg";
import cafeteriaImage from "@/assests/nesco-business-page/bec-elements/33.jpg";
import foodCourtImage from "@/assests/nesco-business-page/bec-elements/34.jpg";
import restaurantImage from "@/assests/nesco-business-page/bec-elements/35.jpg";

// ================= API =================
const FACILITIES_API =
  "https://nesco-backend-1.onrender.com/api/v1/business/facilities/page/Hospitality";

function HospitalityFacilities() {
  // ================= FALLBACK DATA =================
  const fallbackFacilities = [
    {
      name: "The Hall",
      image: orchardImage,
      description:
        "An expansive multi-function exhibition hall with over 25,000 sq.ft of open space. Perfect for large-scale events, exhibitions, and corporate functions.",
    },
    {
      name: "Orchard",
      image: cafeteriaImage,
      description:
        "A vibrant food court offering multiple cuisines for dine-in and takeaway, surrounded by open sky and greenery.",
    },
    {
      name: "The Pavilion",
      image: foodCourtImage,
      description:
        "A flexible indoor-outdoor venue ideal for launches, networking events, and social gatherings.",
    },
    {
      name: "Conference Center",
      image: restaurantImage,
      description:
        "Premium meeting spaces equipped with modern AV systems and comfortable seating for business events.",
    },
  ];

  // ================= STATE =================
  const [facilities, setFacilities] = useState(fallbackFacilities);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= FETCH CMS =================
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await axios.get(FACILITIES_API);

        if (Array.isArray(res.data?.data) && res.data.data.length > 0) {
          setFacilities(
            res.data.data.map((item, index) => ({
              name: item.name,
              description: item.description,
              image: item.image || fallbackFacilities[index % fallbackFacilities.length].image,
            }))
          );
        }
      } catch (err) {
        console.warn("Facilities CMS missing — using fallback data");
      }
    };

    fetchFacilities();
  }, []);

  // ================= SLIDER CONTROLS =================
  const goToPrevious = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? facilities.length - 1 : prev - 1
    );

  const goToNext = () =>
    setCurrentIndex((prev) =>
      prev === facilities.length - 1 ? 0 : prev + 1
    );

  const currentFacility = facilities[currentIndex];

  return (
    <div className="w-full overflow-hidden">
      {/* ================= TITLE ================= */}
      <div className="px-[5%] w-full border-t-2 border-white py-6 lg:pt-24">
        <h2
          className="text-[1.3rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* ================= IMAGE + CARD ================= */}
      <div className="relative w-full h-[500px] lg:h-[calc(100vh-120px)]">
        <Image
          src={currentFacility.image}
          alt={currentFacility.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* INFO CARD */}
        <div className="absolute left-0 sm:left-[5%] bottom-0 lg:bottom-10 mb-20 bg-white p-6 lg:p-8 w-full sm:w-[70%] lg:w-[450px] shadow-md max-h-[60%] overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h3
              className="text-[1.4rem] lg:text-[1.8rem] font-bold pr-4"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {currentFacility.name}
            </h3>
            <span className="text-xs border px-2 py-1 rounded">
              {currentIndex + 1}/{facilities.length}
            </span>
          </div>

          <p
            className="text-[0.95rem] lg:text-[1.1rem] leading-[1.4]"
            style={{ fontFamily: "BrandingMedium" }}
          >
            {currentFacility.description}
          </p>

          {/* CONTROLS */}
          <div className="flex justify-between items-center mt-4">
            <button onClick={goToPrevious} aria-label="Previous">
              ‹
            </button>

            <div className="flex gap-2">
              {facilities.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${i === currentIndex ? "bg-black" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button onClick={goToNext} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalityFacilities;
