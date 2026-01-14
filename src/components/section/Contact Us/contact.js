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
      <div className="absolute z-0 w-full h-full lg:top-0 md:top-[20%] top-[25%]">
        <Image
          src={WorldImage}
          alt="World Image"
          className="w-[90%] object-cover mx-auto"
        />
      </div>

      <div>
        <h1 className="font-branding-medium text-white text-6xl z-10 relative">
          Contact Us
        </h1>
      </div>

      <div className="w-full flex flex-col md:items-center mt-32 z-10 relative">
        <SlidedownCard data={data} />
      </div>
    </div>
  );
}

export default Contact;
