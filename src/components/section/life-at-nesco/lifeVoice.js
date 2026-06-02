"use client";

import VideoBanner from "@/components/common/videoBanner/videoBanner";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE =
  "https://nesco-backend-1.onrender.com/api/v1/life_at_nesco/life_voices";

function LifeVoice() {
  const [sliderData, setSliderData] = useState([]);

  /* ================= FETCH VIDEOS ================= */
  const fetchLifeVoices = async () => {
    try {
      const res = await axios.get(API_BASE);

      // Map backend response → VideoBanner format
      const formatted = res.data.data.map((item) => ({
        video: item.video,
        type: item.type || "mp4",
      }));

      setSliderData(formatted);
    } catch (error) {
      console.error("Failed to fetch life voices:", error);
    }
  };

  useEffect(() => {
    fetchLifeVoices();
  }, []);

  return (
    <section className="header_color_black goal-section1 w-full relative overflow-hidden xl:h-screen flex justify-center items-center">
      <div className="w-full absolute bottom-0 left-0 bg-secondary h-[30%] z-0 hidden lg:block"></div>

      <div className="relative z-10 flex flex-col items-center lg:gap-0 gap-10 w-full h-full py-20">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-BrandingSemibold font-bold"
        >
          Voices of Nesco
        </h2>

        <div className="w-full overflow-hidden h-[100%]">
          {sliderData.length > 0 ? (
            <VideoBanner SliderData={sliderData} />
          ) : (
            <p className="text-center text-gray-400 mt-10">
              Loading videos...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default LifeVoice;
