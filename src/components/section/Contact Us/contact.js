'use client';

import SlidedownCard from "@/components/common/slidedownCard/SlidedownCard";
import React, { useEffect, useState } from "react";
import WorldImage from "@/assests/contact/33.png";
import Image from "next/image";
import axios from "axios";
import { apiBaseUrl } from "@/apis";
function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/api/v1/contact`);

        setData(Array.isArray(res.data) ? [...res.data].reverse() : []);
      } catch (error) {
        console.error("Failed to fetch contact data", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="bg-[#0A2B72] w-full xl:py-36 py-20 flex flex-col justify-between items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
        <Image
          src={WorldImage}
          alt="World Image"
          className="w-full h-full object-contain p-4 md:p-10"
        />
      </div>

      <div>
        <h1 className="font-branding-medium text-white text-4xl md:text-6xl z-10 relative mt-10 md:mt-0">
          Contact Us
        </h1>
      </div>

      <div className="w-full flex flex-col md:items-center mt-10 md:mt-32 z-10 relative">
        <SlidedownCard data={data} />
      </div>
    </div>
  );
}

export default Contact;
