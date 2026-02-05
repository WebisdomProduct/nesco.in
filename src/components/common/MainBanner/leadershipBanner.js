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

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  /* ================= MOBILE DETECTION ================= */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= NOTIFY PARENT ================= */

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  /* ================= IMAGE SELECTOR ================= */

  const getImage = (data) => {
    if (isMobile && data?.mobileImage) return data.mobileImage;
    if (typeof data?.image === "string") return data.image;
    return data?.image?.src || "";
  };

  /* ================= UI ================= */

  return (
    <div
      className={`w-full ${
        heightClassName || "h-[100vh]"
      } relative overflow-hidden`}
    >
      {/* ================= SWIPER ================= */}

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        speed={800}
        simulateTouch={true}
        touchStartPreventDefault={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          setTimeout(() => {
            if (
              navigationPrevRef.current &&
              navigationNextRef.current
            ) {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="w-full h-full"
      >
        {/* ================= SLIDES ================= */}

        {SliderData.map((data, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full"
          >
            <div className="relative w-full h-full">

              {/* IMAGE */}
              <img
                src={getImage(data)}
                alt="banner"
                className={`w-full h-full object-cover ${filter}`}
              />

              {/* OVERLAY */}
              {!data?.isOpacity && (
                <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
              )}

              {/* CONTENT */}
              {data?.data && (
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {data.data}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= NAVIGATION ================= */}

      <button
        ref={navigationPrevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        ref={navigationNextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
}

export default LeadershipBanner1;
