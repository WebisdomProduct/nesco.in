"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LeadershipBanner1({
  SliderData,
  onSlideChange,
  filter,
  heightClassName,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  return (
    <div
      className={`w-full ${
        heightClassName ? heightClassName : "h-[100vh]"
      } banner-section relative`}
    >
      <div className="relative">
        <div
          className={`flex justify-center w-full overflow-hidden ${
            heightClassName ? heightClassName : "h-[100vh]"
          } relative`}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: activeIndex === 0 ? 5000 : 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              // Delay navigation buttons initialization until swiper is ready
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="w-full h-[100vh]"
          >
            {SliderData.map((data, index) => (
              <SwiperSlide
                key={index}
                className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700 min-h-[800px]"
              >
                <div
                  className={`w-full flex justify-center items-center text-2xl h-[100vh] relative`}
                >
                  {data.data}
                  {data.isOpacity ? (
                    ""
                  ) : (
                    <div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
                  )}
                  <img
                    src={data.image.src}
                    alt="banner image"
                    className={`w-full h-full object-cover ${filter}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button
            ref={navigationPrevRef}
            className="absolute left-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
          >
            <IoIosArrowBack size={40} />
          </button>
          <button
            ref={navigationNextRef}
            className="absolute right-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
          >
            <IoIosArrowForward size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadershipBanner1;
