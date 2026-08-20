"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function IndabratorServices() {
  const PAGE_NAME = "Engineering";
  const BASE_URL =
    "https://nesco-backend-1.onrender.com/api/v1/business/halls";

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/page/${PAGE_NAME}`);
        setServices(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch services", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  /* ================= STATES ================= */
  if (loading) {
    return (
      <div className="w-full py-20 text-center text-white bg-[#0e129f]">
        Loading services...
      </div>
    );
  }

  if (!services.length) return null;

  /* ================= DESKTOP SPLIT ================= */
  const topRowServices = services.slice(0, 3);
  const bottomRowServices = services.slice(3, 6);

  return (
    <div className="w-full min-h-auto bg-[#0e129f] flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 lg:pt-24 lg:h-screen pt-12">

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden w-full space-y-6 mb-6">
        {services.map((service, index) => (
          <div key={service._id || index} className="flex flex-col items-center">
            <div className="relative w-full h-48 sm:h-56 mb-3 overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 90vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all" />
            </div>
            <h3 className="text-center text-white text-[1.25rem] font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP – TOP ROW ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-12 mb-16 w-full max-w-5xl">
        {topRowServices.map((service) => (
          <div key={service._id} className="flex flex-col items-center">
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all" />
            </div>
            <h3 className="text-center text-white text-lg font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP – BOTTOM ROW ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-12 w-full max-w-5xl">
        {bottomRowServices.map((service) => (
          <div key={service._id} className="flex flex-col items-center">
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all" />
            </div>
            <h3 className="text-center text-white text-lg font-medium leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndabratorServices;
