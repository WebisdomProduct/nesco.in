"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const API_BASE =
  "https://nesco-backend-1.onrender.com/api/v1/life_at_nesco/life_items?sequenceNumber=2";

function LifeCommitment() {
  const [item, setItem] = useState(null);

  /* ================= FETCH SEQUENCE 2 ITEM ================= */
  const fetchItem = async () => {
    try {
      const res = await axios.get(API_BASE);

      if (res.data.data.length > 0) {
        setItem(res.data.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch commitment item", error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if (!item) return null; // or loader

  return (
    <section className="header_color_black goal-section1 w-full lg:h-screen h-full pb-10 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 justify-between gap-10 pt-24 xl:items-start items-center w-[90%] mx-auto">

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <h2
            style={{ fontFamily: "BrandingSemibold" }}
            className="text-[#1e3a8a] text-[48px] font-branding-semibold font-bold"
          >
            {item.heading}
          </h2>

          <div className="space-y-4 mt-8">
            <p className="text-[22px] font-branding-medium">
              {item.paragraph1}
            </p>

            <p className="text-[22px] font-branding-medium pt-5">
              {item.paragraph2}
            </p>
          </div>
        </div>

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

      </div>
    </section>
  );
}

export default LifeCommitment;
