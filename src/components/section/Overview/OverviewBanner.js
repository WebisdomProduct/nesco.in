"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "@/components/common/MainBanner/Banner";

const API_BASE = "http://localhost:8040/api/v1/about/overview/overview-banner";

function OverviewBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannerData, setBannerData] = useState(null);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  /* ================= FETCH BANNER ================= */

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(API_BASE);
        console.log(res);
        // Taking first banner (if multiple exist)
        setBannerData(res.data.data[0]);

      } catch (error) {
        console.error("Failed to load overview banner", error);
      }
    };

    fetchBanner();
    
  }, []);

  /* ================= LOADING STATE ================= */

  if (!bannerData) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  /* ================= SLIDER DATA ================= */

  const SliderData = [
    {
      image: bannerData.image,
      data: (
        <>
          <div className="bg-[#4E4F9F] z-20 absolute left-0 bg-opacity-90">
            <div className="text-center px-10 py-8">

              <p className="text-white sm:text-xl md:text-2xl font-branding-medium">
                {bannerData.paragraph1}
              </p>

              <p className="text-blue-300 text-xl sm:text-2xl md:text-4xl font-branding-medium">
                {bannerData.paragraph2}
              </p>

              <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
                {bannerData.paragraph3}
              </p>

              <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
                {bannerData.paragraph4}
              </p>

            </div>
          </div>
        </>
      ),
    },
  ];

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
