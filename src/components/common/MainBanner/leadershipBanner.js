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
    if (isMobile && data?.mobileImage) {
      return data.mobileImage;
    }

    if (typeof data?.image === "string") {
      return data.image;
    }

    return data?.image?.src;
  };

  /* ================= UI ================= */

  return (
    <div
      className={`w-full ${
        heightClassName || "h-[100vh]"
      } banner-section relative`}
    >
      <div
        className={`flex justify-center w-full overflow-hidden ${
          heightClassName || "h-[100vh]"
        } relative`}
      >
        {/* ================= SWIPER ================= */}

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: activeIndex === 0 ? 5000 : 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="w-full h-[100vh]"
        >
          {/* ================= SLIDES ================= */}

          {SliderData.length > 0 &&
            SliderData.map((data, index) => (
              <SwiperSlide
                key={index}
                className="relative w-full h-[100vh]"
              >
                <div className="w-full h-full relative flex justify-center items-center">

                  {/* CONTENT */}
                  {data.data && data.data}

                  {/* DARK OVERLAY */}
                  {!data.isOpacity && (
                    <div className="absolute inset-0 bg-black opacity-30 z-10" />
                  )}

                  {/* IMAGE */}
                  <img
                    src={getImage(data)}
                    alt="banner"
                    className={`w-full h-full object-cover ${filter}`}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* ================= NAVIGATION ================= */}

        <button
          ref={navigationPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 z-20"
        >
          <IoIosArrowBack size={40} />
        </button>

        <button
          ref={navigationNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 z-20"
        >
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </div>
  );
}

export default LeadershipBanner1;
