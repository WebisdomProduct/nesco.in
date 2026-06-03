"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// 🔒 FALLBACK IMAGE (DO NOT REMOVE)
import kitchenImage from "@/assests/nesco-business-page/nesco-food-elements/28.jpg";

/* ================= CONFIG ================= */

const MENTOR_ID = "697e04b9d64c9ff144fd60ec";
const API_URL = `https://nesco-backend-j567.onrender.com/api/v1/business/extra/${MENTOR_ID}`;

/* ================= COMPONENT ================= */

function HospitalityRoot() {
  /* ================= FALLBACK CONTENT ================= */

  const fallbackData = {
    heading2: "The Root",
    paragraph:
      "The nerve centre of the entire Foods operation, the Root is a state-of-the-art central kitchen. The facility allows the preparation of over 80,000 meals a day across a multitude of cuisines. Renowned and experienced chefs at The Root are able to prepare every meal perfectly, while respecting the customs of the cuisine as well as the customer.",
    image: kitchenImage,
  };

  /* ================= STATE ================= */

  const [data, setData] = useState(fallbackData);

  /* ================= FETCH CMS ================= */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        console.log(res);
        const result = await res.json();
        console.log("this is the result " , result);

        if (result) {
          setData({
            heading2: result.heading2 || fallbackData.heading2,
            paragraph: result.paragraph || fallbackData.paragraph,
            image: result.image || fallbackData.image,
          });
        }
      } catch (err) {
        console.warn("Root CMS unavailable — using fallback content");
      }
    };

    fetchData();
  }, []);

  /* ================= UI ================= */

  return (
    <div className="w-full max-w-[90%] h-auto lg:min-h-screen flex flex-col md:flex-row overflow-hidden bg-white mx-auto py-8 md:py-0 lg:mt-4 my-0 md:my-10 lg:my-0">

      {/* LEFT COLUMN — TEXT */}
      <div className="md:w-1/2 w-full py-6 md:py-[2%] flex flex-col justify-center">
        <h2
          className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-4 md:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          {data.heading2}
        </h2>

        <p
          className="  text-[22px] leading-[42px]
md:text-[26px] md:leading-[26px]"
          style={{ fontFamily: "BrandingMedium" }}
        >
          {data.paragraph}
        </p>
      </div>

      {/* RIGHT COLUMN — IMAGE */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-6 md:py-16">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-100 shadow-lg rounded-lg">
          <Image
            src={data.image}
            alt="The Root central kitchen"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityRoot;
