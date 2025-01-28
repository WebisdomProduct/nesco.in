"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner({ SliderData }) {
  const sliderRef = React.useRef(null);

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,

    appendDots: (dots) => (
      <div className="pt-5">
        <ul className="flex justify-center md:gap-4 gap-2 items-center">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-gray-300 transition-colors duration-300 mt-4"></div>
    ),
  };

  // Apply default purple background to the first dot
  useEffect(() => {
    const dots = document.querySelectorAll(".slick-dots li");
    if (dots.length > 0) {
      const firstDot = dots[0].querySelector("div");
      if (firstDot) {
        firstDot.classList.add("bg-purple-600");
        firstDot.classList.remove("bg-gray-300");
      }
    }
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-full pt-24 mb-16">
      <div className="relative">
        {/* Left Arrow */}
        {/* <button
          className="absolute md:left-5 left-3 top-1/2 transform -translate-y-1/2 z-10 bg-primary p-2 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <FaAngleLeft size={34} className="text-white" />
        </button> */}

        {/* Slider */}
        <div className="flex justify-center w-full">
          <Slider
            ref={sliderRef}
            {...settings}
            className="w-full h-[80vh]"
            beforeChange={(oldIndex, newIndex) => {
              const dots = document.querySelectorAll(".slick-dots li");
              dots.forEach((dot, index) => {
                const dotDiv = dot.querySelector("div");
                if (index === newIndex) {
                  dotDiv.classList.add("bg-purple-600");
                  dotDiv.classList.remove("bg-gray-300");
                } else {
                  dotDiv.classList.add("bg-gray-300");
                  dotDiv.classList.remove("bg-purple-600");
                }
              });
            }}
          >
            {SliderData
              ? SliderData.map((data, index) => (
                  <div
                    key={index}
                    className="bg-black text-white flex justify-center items-center text-2xl h-[80vh] mb-10 relative"
                  >
                    {/* <div className="z-20 absolute bottom-14 lg:left-36 md:left-28 left-16">
                      <p className="text-primary md:text-[4rem] text-[3rem] leading-[4rem] font-bold">
                        {data.title}.
                      </p>
                      <p className="md:text-[2.2rem] text-[1.5rem] md:leading-[3.3rem] font-normal text-black">
                        {data.subtitle1}
                      </p>
                      <p className="font-medium md:text-[3rem] text-[2rem] md:leading-[2rem] text-black">
                        {data.subtitle2}
                      </p>
                      <p className="mt-4 text-primary md:text-2xl text-lg">
                        <span className="font-medium">
                          {data.description1}{" "}
                        </span>
                        <span className="font-bold">{data.description2}</span>
                      </p>
                    </div> */}
                    <img
                      src={data.image.src}
                      className=" mx-auto w-full h-full z-0 object-cover"
                    />
                  </div>
                ))
              : "Slider data"}
          </Slider>
        </div>

        {/* Right Arrow */}
        {/* <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary p-2 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <FaAngleRight size={34} className="text-white" />
        </button> */}
      </div>
    </div>
  );
}

export default Banner;
