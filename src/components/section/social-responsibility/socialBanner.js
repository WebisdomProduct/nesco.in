"use client";

import Banner from "@/components/common/MainBanner/Banner";
import React, { useEffect, useState } from "react";
import axios from "axios";

function SocialBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  const API = "https://nesco-backend-j567.onrender.com/api/v1/our_impact/csr/banner/all"; 
  // 🔁 change this to your real endpoint

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  // ✅ Fetch banner from backend
  const fetchBanner = async () => {
    try {
      const res = await axios.get(API);

      const formattedData = res.data.data.map((item) => ({
        image: item.image,
        mobileImage:item.mobileImage,
        data: (
          <div className="absolute md:top-[70%] top-[60%] right-0 px-20 py-6 bg-[#21409A] bg-opacity-50 text-white z-20">
            <p>{item.paragraph1}</p>
            <p>{item.paragraph2}</p>
          </div>
        ),
      }));

      setSliderData(formattedData);
    } catch (error) {
      console.error("Failed to fetch social banner:", error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const filter = "filter grayscale contrast-125";

  return (
    <div className="w-full">
      {sliderData.length > 0 && (
        <Banner
          SliderData={sliderData}
          onSlideChange={handleSlideChange}
          filter={filter}
        />
      )}
    </div>
  );
}

export default SocialBanner;
