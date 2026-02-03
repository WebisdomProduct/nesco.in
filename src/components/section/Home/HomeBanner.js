import Banner from "@/components/common/MainBanner/Banner";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://nesco-backend-j567.onrender.com"; // your backend

function HomeBanner({ activeSlide, setActiveSlide }) {
  const [sliderData, setSliderData] = useState([]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Fetch banners from backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/v1/homepage/home-banner`);
        // Map backend data to your slider format
        const formattedData = res.data.banners.map(b => ({
          image: b.image,
          description: b.description,
          hexaImage: b.hexaImage || null,
          hexaLogo: b.hexaLogo || null
        }));
        setSliderData(formattedData);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="w-full">
      {sliderData.length > 0 ? (
        <Banner SliderData={sliderData} onSlideChange={handleSlideChange} />
      ) : (
        <p>Loading banners...</p>
      )}
    </div>
  );
}

export default HomeBanner;
