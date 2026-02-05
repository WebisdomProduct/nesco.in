"use client";

import React, { useEffect, useState, useRef } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  /* ================= MOBILE DETECTION ================= */

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= NOTIFY PARENT ================= */

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex]);

  /* ================= IMAGE SELECTOR ================= */

  const getImage = (data) => {
    if (isMobile && data?.mobileImage) return data.mobileImage;
    if (typeof data?.image === "string") return data.image;
    return data?.image?.src || "";
  };

  return (
    <div className={`w-full ${heightClassName || "h-screen"} relative overflow-hidden`}>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {SliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              {/* IMAGE */}
              <img
                src={getImage(data)}
                alt="banner"
                className={`absolute inset-0 w-full h-full object-cover ${filter}`}
              />

              {/* OVERLAY */}
              {!data?.isOpacity && (
                <div className="absolute inset-0 bg-black/30 z-10" />
              )}

              {/* CONTENT */}
              {data?.data && (
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                  {data.data}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
}

export default LeadershipBanner1;
