"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "@/components/common/MainBanner/Banner";

const API_BASE =
  "https://nesco-backend-j567.onrender.com/api/v1/about/overview/overview-banner";

function OverviewBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannerData, setBannerData] = useState([]); // ARRAY

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  /* ================= FETCH BANNER ================= */

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(API_BASE);

        // Store full array
        setBannerData(res.data?.data || []);
      } catch (error) {
        console.error("Failed to load overview banner", error);
      }
    };

    fetchBanner();
  }, []);

  /* ================= LOADING ================= */

  if (!bannerData.length) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  /* ================= BUILD SLIDER ================= */

  const SliderData = bannerData.map((item) => ({
    image: item.image,
    data: (
      <div className="bg-[#4E4F9F] z-20 absolute left-0 bg-opacity-90">
        <div className="text-center px-10 py-8">
          <p className="text-white sm:text-xl md:text-2xl font-branding-medium">
            {item.paragraph1}
          </p>

          <p className="text-blue-300 text-xl sm:text-2xl md:text-4xl font-branding-medium">
            {item.paragraph2}
          </p>

          <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
            {item.paragraph3}
          </p>

          <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
            {item.paragraph4}
          </p>
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full header_color_black">
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        apperentClassName="absolute"
      />
    </div>
  );
}

export default OverviewBanner;