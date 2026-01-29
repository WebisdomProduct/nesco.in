"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8040/api/v1/life_at_nesco/passion";

function LifePassion() {

  const [content, setContent] = useState(null);

  const fetchPassion = async () => {
    try {
      const res = await axios.get(API);
      // assuming array comes from backend
      setContent(res.data.data[0]); 
    } catch (error) {
      console.error("Failed to fetch passion section", error);
    }
  };

  useEffect(() => {
    fetchPassion();
  }, []);

  if (!content) return null; // or loader

  return (
    <section className="goal-section1 flex flex-col justify-center items-center py-20">
      <div className="w-[90%] font-branding-medium">

        <h1 className="text-[#1e3a8a] text-2xl text-center md:text-5xl lg:text-6xl font-branding-semibold font-bold">
          {content.heading}
        </h1>

        <p className="md:text-xl lg:text-3xl font-branding-medium pt-5">
          {content.paragraph1}
        </p>

        <p className="md:text-xl lg:text-3xl font-branding-medium pt-5">
          {content.paragraph2}
        </p>

      </div>
    </section>
  );
}

export default LifePassion;
