"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import axios from "axios";

const API = "https://nesco-backend-j567.onrender.com/api/v1/our_impact/sustainablility/banner";

function SustainabilityBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [banners, setBanners] = useState([]);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  // ✅ Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setBanners(res.data.data);
    } catch (error) {
      console.error("Banner Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ✅ Create SliderData dynamically
  const SliderData = banners.map((item) => ({
    image: item.image,
    mobileImage:item.mobileImage,
    data: (
      <div className="goal-section1 absolute top-[40%] md:right-[10%] text-white z-20 text-5xl text-center font-branding-medium">
        <p className="mt-5 mb-2 text-secondary">
          {item.paragraph1}
        </p>
        <p>{item.paragraph2}</p>
      </div>
    ),
  }));

  const filter = "";

  return (
    <div className="w-full">
      {/* <Navbar activeSlide={activeSlide} /> */}

      {SliderData.length > 0 && (
        <Banner
          SliderData={SliderData}
          onSlideChange={handleSlideChange}
          filter={filter}
          apperentClassName="absolute bg-black opacity-0 z-10"
        />
      )}
    </div>
  );
}

export default SustainabilityBanner;
