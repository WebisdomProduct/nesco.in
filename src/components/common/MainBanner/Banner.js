"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Banner({
  SliderData,
  onSlideChange,
  filter,
  heightClassName,
  height1,
  apperentClassName = "absolute bg-black opacity-[0.55] z-10",
}) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const mainBannerRef = useRef(null);

  /* ------------------ Mobile Detection ------------------ */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ------------------ Swiper Events ------------------ */
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", (swiper) => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiperInstance]);

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  /* ------------------ ScrollTrigger ------------------ */
  useEffect(() => {
    if (mainBannerRef.current && swiperInstance) {
      ScrollTrigger.create({
        trigger: mainBannerRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          swiperInstance.slideTo(0);
          swiperInstance.autoplay?.start();
        },
        onLeave: () => {
          swiperInstance.slideTo(1);
          swiperInstance.autoplay?.stop();
        },
        onEnterBack: () => {
          swiperInstance.slideTo(0);
          swiperInstance.autoplay?.start();
        },
        onLeaveBack: () => {
          swiperInstance.slideTo(1);
          swiperInstance.autoplay?.stop();
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [swiperInstance]);

  /* ------------------ Image Selector ------------------ */
  const getImage = (data) => {
    if (isMobile && data?.mobileImage) {
      return data.mobileImage;
    }
    return data?.image;
  };

  /* ------------------ Render ------------------ */
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
          {/* ================= SINGLE IMAGE ================= */}
          {SliderData.length === 1 ? (
            <div className="w-full flex justify-center items-center h-[100vh] relative">

              {SliderData[0].data}

              {!SliderData[0].isOpacity && (
                <div className={`w-full h-full ${apperentClassName}`}></div>
              )}

              <img
                src={getImage(SliderData[0])}
                alt="banner"
                className={`w-full h-full object-cover ${height1} ${filter}`}
              />
            </div>
          ) : (
            /* ================= SWIPER ================= */
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              speed={1000}
              loop
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={setSwiperInstance}
              className="w-full h-[100vh]"
            >
              {SliderData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    ref={index === 0 ? mainBannerRef : null}
                    className="bg-black text-white flex justify-center items-center h-[100vh] relative"
                  >
                    {!data.data ? (
                      <div className="w-full h-full relative z-10">

                        {/* ---------- CUSTOM LAYOUT SLIDES ---------- */}
                        {index !== 0 ? (
                          <div
                            className={`absolute z-10 w-full h-full flex items-center justify-end overflow-hidden 
                            ${index === 3 || index === 5 ? "bottom-[17px]" : ""}`}
                          >
                            <div className="relative">

                              {/* Hexa Logo */}
                              <div className="absolute z-20 md:top-[35%] top-[28%] transform -translate-y-1/2 w-1/2 md:translate-x-[52%] translate-x-[48%] text-center">
                                <img
                                  src={data?.hexaLogo}
                                  alt="logo"
                                  className="object-cover md:scale-50 scale-[.6]"
                                />
                              </div>

                              {/* Description */}
                              <div className="absolute z-20 md:top-[47%] top-[45%] md:left-[27%] left-[22%] md:w-[47%] w-[60%] text-center md:text-2xl text-lg">
                                {data?.description}
                              </div>

                              {/* Hexa Image */}
                              <img
                                src={data?.hexaImage}
                                alt="hexa"
                                className="object-cover md:scale-75 scale-[1.2]"
                              />
                            </div>
                          </div>
                        ) : (
                          /* ---------- FIRST SLIDE TEXT ---------- */
                          <div className="text-black font-poppins absolute bottom-40 md:left-40 left-16 z-20">
                            <h1 className="lg:text-[7rem] text-5xl font-bold text-primary">
                              Believe.
                            </h1>
                            <h2 className="md:text-[2.5rem] text-2xl mt-2 font-bold">
                              The possibilities
                            </h2>
                            <h3 className="md:text-[2.5rem] text-2xl mt-4 font-bold">
                              are endless
                            </h3>
                            <p className="md:text-[1.4rem] text-2xl mt-4 font-bold">
                              Welcome to{" "}
                              <strong className="md:text-[1.8rem] text-xl text-blue-900">
                                Nesco
                              </strong>
                            </p>
                          </div>
                        )}

                        {/* Background Image */}
                        <img
                          src={getImage(data)}
                          alt="banner"
                          className="mx-auto w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      /* ---------- DATA SLIDE ---------- */
                      <div className="w-full flex justify-center items-center h-[100vh] relative">
                        {data.data}

                        {!data.isOpacity && (
                          <div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
                        )}

                        <img
                          src={getImage(data)}
                          alt="banner"
                          className={`w-full h-full object-cover ${filter}`}
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div
                className="absolute left-4 top-[50%] -translate-y-1/2 text-[#007AFE] z-10"
                ref={navigationPrevRef}
              >
                <IoIosArrowBack size={40} />
              </div>

              <div
                className="absolute right-4 top-[50%] -translate-y-1/2 text-[#007AFE] z-10"
                ref={navigationNextRef}
              >
                <IoIosArrowForward size={40} />
              </div>

            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
