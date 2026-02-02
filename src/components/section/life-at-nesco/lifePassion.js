"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../../assests/life-at-nesco/careers-img-2.jpg";

const API =
  "https://nesco-backend-j567.onrender.com/api/v1/life_at_nesco/passion";

function LifePassion() {
  const [content, setContent] = useState(null);

  const fetchPassion = async () => {
    try {
      const res = await axios.get(API);
      setContent(res.data.data[0]);
    } catch (error) {
      console.error("Failed to fetch passion section", error);
    }
  };

  useEffect(() => {
    fetchPassion();
  }, []);

  if (!content) return null;

  return (
    <section
      className="relative goal-section1 flex flex-col justify-center h-screen items-center py-24"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-5xl text-center font-branding-medium text-white">
        <h1 className="text-[48px] font-branding-semibold font-bold">
          {content.heading}
        </h1>

        <p className="text-[22px] pt-6">
          {content.paragraph1}
        </p>

        <p className="text-[22px] pt-5">
          {content.paragraph2}
        </p>
      </div>
    </section>
  );
}

export default LifePassion;
