"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= FALLBACK ICONS ================= */
import parkingIcon from "@/assests/nesco-business-page/nesco-reality-elements/11.png";
import shoppingIcon from "@/assests/nesco-business-page/nesco-reality-elements/12.png";
import foodIcon from "@/assests/nesco-business-page/nesco-reality-elements/13.png";
import greenIcon from "@/assests/nesco-business-page/nesco-reality-elements/14.png";
import transportIcon from "@/assests/nesco-business-page/nesco-reality-elements/15.png";
import entertainmentIcon from "@/assests/nesco-business-page/nesco-reality-elements/16.png";
import sportsIcon from "@/assests/nesco-business-page/nesco-reality-elements/17.png";
import gymIcon from "@/assests/nesco-business-page/nesco-reality-elements/19.png";

function RealtyAmenities() {
  const PAGE_NAME = "Nesco Reality";
  const BASE_URL =
    "https://nesco-backend-1.onrender.com/api/v1/business/amenities";

  const [backendAmenities, setBackendAmenities] = useState([]);

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setBackendAmenities(res.data.data || []);
      } catch (error) {
        console.warn("Using fallback amenities");
      }
    };

    fetchAmenities();
  }, []);

  /* ================= FALLBACK DATA ================= */

  const fallbackAmenities = [
    {
      icon: parkingIcon,
      title: "Ample Parking Space",
      description: "for over 2,000 vehicles at any given time",
    },
    {
      icon: shoppingIcon,
      title: "Simplified Living with",
      description: "creche & convenience stores",
    },
    {
      icon: foodIcon,
      title: "Versatile Food & Beverage",
      description: "options including open air cafes & food courts",
    },
    {
      icon: greenIcon,
      title: "Lush Open Spaces",
      description: "with over 1,000 trees",
    },
    {
      icon: transportIcon,
      title: "Transportation",
      description: "services available",
    },
    {
      icon: entertainmentIcon,
      title: "Prime Entertainment in proximity",
      description: "",
    },
    {
      icon: sportsIcon,
      title: "Unwind",
      description: "at Futsal Turf & Golfing Greens",
    },
    {
      icon: gymIcon,
      title: "Hitech Gym",
      description: "state-of-the-art fitness facilities",
    },
  ];

  /* ================= FINAL DATA SOURCE ================= */

  const amenities =
    backendAmenities.length > 0
      ? backendAmenities.map((item) => ({
        icon: item.icon,
        title: item.name,
        description: item.description,
      }))
      : fallbackAmenities;

  const topRowAmenities = amenities.slice(0, 4);
  const bottomRowAmenities = amenities.slice(4, 8);

  return (
    <div className="w-[90%] bg-white py-6 sm:py-10 lg:min-h-screen mx-auto">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 lg:mt-20">
        Amenities
      </h2>

      {/* Desktop */}
      <div className="hidden lg:block space-y-16">

        <div className="grid grid-cols-4 gap-6 xl:gap-8">
          {topRowAmenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6 xl:gap-8">
          {bottomRowAmenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} />
          ))}
        </div>

      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} mobile />
          ))}
        </div>
      </div>

    </div>
  );
}

/* ================= CARD COMPONENT ================= */

function AmenityCard({ amenity, mobile }) {
  return (
    <div className="group flex flex-col items-center text-center rounded-xl p-4 transition-all duration-300 hover:bg-gray-100 hover:scale-110">

      <div className={`${mobile ? "w-24 h-24 sm:w-32 sm:h-32" : "w-40 h-40"} mb-6 flex items-center justify-center`}>
        <Image
          src={amenity.icon}
          alt={amenity.title}
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>

      <p className={`${mobile ? "text-sm sm:text-base md:text-lg" : "text-xl"} text-black leading-relaxed`}>
        <span style={{ fontFamily: "BrandingSemibold" }}>
          {amenity.title}
        </span>
        <span style={{ fontFamily: "BrandingMedium" }}>
          {" "}
          {amenity.description}
        </span>
      </p>

    </div>
  );
}

export default RealtyAmenities;
