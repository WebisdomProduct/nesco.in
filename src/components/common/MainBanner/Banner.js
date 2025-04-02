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
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const mainBannerRef = useRef(null); // Ref for Main Banner section

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

  // Track Main Banner visibility
  useEffect(() => {
    if (mainBannerRef.current && swiperInstance) {
      ScrollTrigger.create({
        trigger: mainBannerRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          swiperInstance.slideTo(0); // Start from slide 0
          swiperInstance.autoplay.start();
        },
        onLeave: () => {
          swiperInstance.slideTo(1); // Stop at slide 1
          swiperInstance.autoplay.stop();
        },
        onEnterBack: () => {
          swiperInstance.slideTo(0); // Start from slide 0 again
          swiperInstance.autoplay.start();
        },
        onLeaveBack: () => {
          swiperInstance.slideTo(1); // Stop at slide 1 when leaving back
          swiperInstance.autoplay.stop();
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger);
    };
  }, [swiperInstance]);

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
          {SliderData.length === 1 ? (
            <div
              className={`w-full flex justify-center items-center text-2xl h-[100vh] relative `}
            >
              {SliderData[0].data}
              {SliderData[0].isOpacity ? (
                ""
              ) : (
                <div className={`w-full h-full ${apperentClassName}`}></div>
              )}
              <img
                src={SliderData[0].image.src}
                alt="banner image"
                className={`w-full object-cover h-full ${height1}  ${filter}`}
              />
            </div>
          ) : (
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
                    ref={index === 0 ? mainBannerRef : null} // Attach ref to Main Banner
                    className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700"
                  >
                    {!data.data ? (
                      <div className="w-full h-full relative z-10">
                        {index !== 0 ? (
                          <div
                            className={`absolute z-10 w-full h-full flex items-center justify-end overflow-hidden 
                            ${
                              index === 3 || index === 5 ? "bottom-[17px]" : ""
                            }`}
                          >
                            <div className="relative">
                              <div className="absolute z-20 md:top-[35%] top-[28%] transform -translate-y-1/2 w-1/2 md:translate-x-[52%] translate-x-[48%] text-center">
                                <img
                                  src={data?.hexaLogo?.src}
                                  alt="hexa image"
                                  className="object-cover md:scale-50 scale-[.6]"
                                />
                              </div>
                              <div className="absolute z-10 w-full h-full flex items-center justify-end overflow-hidden">
                                <div className="relative w-full h-full">
                                  {/* Description */}
                                  <div
                                    className={`absolute z-20 ${
                                      index === 5
                                        ? "md:top-[48%] lg:top-[48%] md:w-[47%] top-[40%] md:left-[27%] left-[18%]"
                                        : index === 3
                                        ? "md:top-[49%] lg:top-[49%] md:w-[50%]"
                                        : index === 4
                                        ? "md:top-[47%] lg:top-[47%] md:w-[47%]"
                                        : "md:top-[47%] lg:top-[47%] md:w-[47%] "
                                    } md:top-[45%] top-[45%] md:left-[27%] left-[22%] w-[60%] text-center md:text-2xl text-lg`}
                                  >
                                    {data?.description}
                                  </div>
                                </div>
                              </div>

                              <img
                                src={data?.hexaImage?.src}
                                alt="hexa image"
                                className="object-cover md:scale-75 scale-[1.2] "
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="text-black font-poppins absolute bottom-40 md:left-40 left-16 z-20">
                            <h1
                              className="lg:text-[7rem] text-5xl font-bold text-primary md:pb-3 mt-4"
                              style={{ fontFamily: "BrandingSemibold" }}
                            >
                              Believe.
                            </h1>
                            <h2
                              className="md:text-[2.5rem] text-2xl mt-2 font-bold my-4"
                              style={{ fontFamily: "BrandingSemibold" }}
                            >
                              The possibilities
                            </h2>
                            <h3
                              className="md:text-[2.5rem] text-2xl mt-4 font-bold my-4"
                              style={{ fontFamily: "BrandingSemibold" }}
                            >
                              are endless
                            </h3>
                            <p
                              className="md:text-[1.4rem] text-2xl mt-4 font-bold my-4"
                              style={{ fontFamily: "BrandingSemibold" }}
                            >
                              Welcome to{" "}
                              <strong
                                className="md:text-[1.8rem] text-xl text-blue-900 mt-4 font-bold my-4"
                                style={{ fontFamily: "BrandingSemibold" }}
                              >
                                Nesco
                              </strong>
                            </p>
                          </div>
                        )}

                        <img
                          src={data.image.src}
                          alt="banner image"
                          className="mx-auto w-full h-full object-cover "
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-full flex justify-center items-center text-2xl h-[100vh] relative `}
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
                    )}
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom Navigation Buttons */}
              <div
                className={`absolute left-4 top-[50%] transform -translate-y-1/2 text-[#007AFE] p-3 rounded-full z-10`}
                ref={navigationPrevRef}
              >
                <IoIosArrowBack size={40} />
              </div>
              <div
                className={`absolute right-4 top-[50%] transform -translate-y-1/2 text-[#007AFE] p-3 rounded-full z-10`}
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
