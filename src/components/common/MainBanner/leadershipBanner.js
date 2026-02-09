"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LeadershipBanner1({
  SliderData = [],
  onSlideChange = () => {},
  filter = "",
  heightClassName = "",
}) {
  const [isMobile, setIsMobile] = useState(false);

  /* ================= MOBILE ================= */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= IMAGE ================= */
  const getImage = (data) => {
    if (isMobile && data?.mobileImage) return data.mobileImage;
    return data?.image || "";
  };

  return (
    <div className={`w-full ${heightClassName || "h-[100vh]"} relative overflow-hidden`}>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".leader-prev",
          nextEl: ".leader-next",
        }}
        onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
        className="w-full h-full"
      >
        {SliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={getImage(data)}
                alt="banner"
                className={`absolute inset-0 w-full h-full object-cover ${filter}`}
              />

              {!data?.isOpacity && (
                <div className="absolute inset-0 bg-black/30 z-10" />
              )}

              {data?.data && (
                <div className="absolute inset-0 z-20">
                  {data.data}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAV BUTTONS */}
      <div className="leader-prev absolute left-5 top-1/2 -translate-y-1/2 z-50 text-white cursor-pointer">
        <IoIosArrowBack size={40} />
      </div>

      <div className="leader-next absolute right-5 top-1/2 -translate-y-1/2 z-50 text-white cursor-pointer">
        <IoIosArrowForward size={40} />
      </div>
    </div>
  );
}

export default LeadershipBanner1;
