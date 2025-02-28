"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner({ SliderData, onSlideChange, filter, heightClassName }) {
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="buttonColor absolute left-4 top-[60%] transform -translate-y-1/2 text-[#06A7E5] p-3 rounded-full z-10"
    >
      <FaAngleLeft size={40} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="buttonColor absolute right-4 top-[60%] transform -translate-y-1/2 text-[#06A7E5] p-3 rounded-full z-10"
    >
      <FaAngleRight size={40} />
    </button>
  );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, [activeIndex, SliderData]);

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

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
                <div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
              )}
              <img
                src={SliderData[0].image.src}
                alt="banner image"
                className={`w-full h-full object-cover ${filter}`}
              />
            </div>
          ) : (
            <Slider ref={sliderRef} {...settings} className="w-full h-[80vh]">
              {SliderData.map((data, index) => (
                <div
                  key={index}
                  className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700"
                >
                  {!data.data ? (
                    <div className="w-full h-full relative z-10">
                      {index !== 0 ? (
                        <div
                          className={`absolute z-10 w-full h-full flex items-center justify-end overflow-hidden 
                          ${index === 3 || index === 5 ? "bottom-[17px]" : ""}`}
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
                        <div
                          // id="slider-0"
                          className="text-black font-poppins absolute bottom-40 md:left-48 left-16 z-20"
                        >
                          <h1
                            className="lg:text-[4.5rem] text-5xl font-bold text-primary md:pb-3 mt-4"
                            style={{ fontFamily: "BrandingSemibold" }}
                          >
                            Believe.
                          </h1>
                          <h2
                            className="md:text-[2.2rem] text-2xl mt-4 font-bold my-4"
                            style={{ fontFamily: "BrandingSemibold" }}
                          >
                            The possibilities
                          </h2>
                          <h3
                            className="md:text-[2.2rem] text-2xl mt-4 font-bold my-4"
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
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
