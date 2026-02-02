"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

/* ================= STATIC ICONS (DO NOT CHANGE) ================= */
import parkingIcon from "@/assests/nesco-business-page/bec-elements/41.png";
import spacesIcon from "@/assests/nesco-business-page/bec-elements/42.png";
import foodIcon from "@/assests/nesco-business-page/bec-elements/43.png";
import greenSpacesIcon from "@/assests/nesco-business-page/bec-elements/44.png";
import securityIcon from "@/assests/nesco-business-page/bec-elements/45.png";
import internetIcon from "@/assests/nesco-business-page/bec-elements/46.png";
import eventsIcon from "@/assests/nesco-business-page/bec-elements/48.png";
import transportIcon from "@/assests/nesco-business-page/bec-elements/47.png";

/* ================= STATIC DATA (LOCKED) ================= */
const STATIC_AMENITIES = [
  {
    icon: parkingIcon,
    name: "Ample Parking Space",
    desc: "for over 2,000 vehicles at any given time",
  },
  {
    icon: spacesIcon,
    name: "Spaces of Limitless Possibility",
    desc: "that evolve to suit your every need",
  },
  {
    icon: foodIcon,
    name: "Versatile Food & Beverage options",
    desc: "including open air cafes & food courts",
  },
  {
    icon: greenSpacesIcon,
    name: "Lush Open Spaces",
    desc: "with over 1,000 trees",
  },
  {
    icon: securityIcon,
    name: "Watchtowers & high level",
    desc: "professional security",
  },
  {
    icon: internetIcon,
    name: "24/7 Internet",
    desc: "state of the art technology services",
  },
  {
    icon: eventsIcon,
    name: "75 events a year",
    desc: "hosted at our facilities",
  },
  {
    icon: transportIcon,
    name: "Transportation services",
    desc: "available to and from the BEC",
  },
];

const PAGE_NAME = "Bombay Exhibition Center";
const BASE_URL =
  "https://nesco-backend-j567.onrender.com/api/v1/business/amenities";

/* ================= COMPONENT ================= */
function BecAmenities() {
  const [dynamicAmenities, setDynamicAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BACKEND DATA ================= */
  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setDynamicAmenities(res.data?.data || []);
      } catch (error) {
        console.error("Amenities fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmenities();
  }, []);

  /**
   * RULE:
   * - If backend data exists → show backend amenities
   * - If backend is empty / fails → show STATIC amenities
   */
  const amenitiesToRender =
    dynamicAmenities.length > 0
      ? dynamicAmenities.map((item) => ({
          icon: item.icon, // backend image URL
          name: item.name,
          desc: item.description,
          isRemote: true,
        }))
      : STATIC_AMENITIES.map((item) => ({
          ...item,
          isRemote: false,
        }));

  return (
    <div className="w-full h-[110vh] flex flex-col overflow-hidden bg-white py-4 sm:py-8 lg:pt-20">
      {/* ================= TITLE (STATIC) ================= */}
      <h2
        className="text-[48px] sm:text-[2.8rem] md:text-[3rem] font-bold px-[5%] pt-8 pb-6 sm:pb-8"
        style={{ fontFamily: "BrandingSemibold" }}
      >
        Amenities
      </h2>

      {/* ================= GRID ================= */}
      <div className="w-full flex-1 px-[5%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-y-auto">
        {loading
          ? null
          : amenitiesToRender.map((item, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center text-center
                  rounded-xl
                  p-4 sm:p-5 md:p-6
                  transition-all duration-300 ease-out
                  hover:bg-blue-200/50
                  hover:scale-105
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                {/* ================= ICON ================= */}
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] mb-2 sm:mb-4">
                  {item.isRemote ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>

                {/* ================= TEXT ================= */}
                <p
                  className="text-[22px] sm:text-[1.2rem] md:text-[1.3rem] text-blue-800"
                  style={{ fontFamily: "BrandingMedium" }}
                >
                  <span
                    className="font-bold"
                    style={{ fontFamily: "BrandingSemibold" }}
                  >
                    {item.name}
                  </span>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default BecAmenities;
