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
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  /* ================= MOBILE ================= */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= NAVIGATION SETUP ================= */
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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
        loop={SliderData.length > 1}
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={setSwiperInstance}
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
      <button 
        ref={prevRef}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-50 text-white cursor-pointer" 
        aria-label="Previous slide"
      >
        <IoIosArrowBack size={40} />
      </button>

      <button 
        ref={nextRef}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-50 text-white cursor-pointer" 
        aria-label="Next slide"
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
}

export default LeadershipBanner1;