"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// 🔒 HARD-CODED FALLBACK IMAGE (DO NOT CHANGE)
import displayImage from "@/assests/nesco-business-page/nesco-food-elements/24.jpg";

// ================= API =================
const DISPLAY_API =
  "https://nesco-backend-j567.onrender.com/api/v1/business/display/page/Hospitality";

function HospitalityDisplay() {
  // ================= STATE =================
  const [cmsImage, setCmsImage] = useState(null);
  const [cmsAlt, setCmsAlt] = useState("");

  // ================= FETCH CMS DATA =================
  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const res = await axios.get(DISPLAY_API);

        if (Array.isArray(res.data?.data) && res.data.data.length > 0) {
          // take the first display image
          const item = res.data.data[0];
          setCmsImage(item.image);
          setCmsAlt(item.alt || "Hospitality display image");
        }
      } catch (err) {
        console.warn("CMS display image missing — using fallback");
      }
    };

    fetchDisplay();
  }, []);

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={cmsImage || displayImage} // ✅ CMS first, fallback second
          alt={cmsAlt || "Authentic Indian cuisine display"}
          fill
          className="object-cover w-full"
          priority
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 100vw,
                 (max-width: 1024px) 100vw,
                 100vw"
          quality={100}
        />
      </div>
    </div>
  );
}

export default HospitalityDisplay;
