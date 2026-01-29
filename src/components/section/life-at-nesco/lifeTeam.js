"use client";

import React, { useEffect,  useState } from "react";
import Image from "next/image";
import axios from "axios";

const API_BASE =
  "http://localhost:8040/api/v1/life_at_nesco/life_items?sequenceNumber=3";

function LifeCulture() {
  const [item, setItem] = useState(null);

  /* ================= FETCH SEQUENCE 1 ITEM ================= */
  const fetchItem = async () => {
    try {
      const res = await axios.get(API_BASE);

      // because API returns array
      if (res.data.data.length > 0) {
        setItem(res.data.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch culture item", error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if (!item) return null; // or loader

  return (
    <section className="goal-section1 header_color_black w-full lg:h-screen h-full bg-secondary pb-10 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 justify-between gap-10 pt-24 xl:items-start items-center w-[90%] mx-auto">

        {/* IMAGE */}
        <div className="relative h-[280px] md:h-[550px]">
          <Image
            src={item.image}
            alt={item.heading}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2
            style={{ fontFamily: "BrandingSemibold" }}
            className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-branding-semibold font-bold"
          >
            {item.heading}
          </h2>

          <div className="space-y-4 mt-8">
            <p className="md:text-3xl text-xl font-branding-medium">
              {item.paragraph1}
            </p>

            <p className="md:text-3xl text-xl font-branding-medium pt-5">
              {item.paragraph2}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LifeCulture;
