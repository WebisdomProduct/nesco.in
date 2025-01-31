"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner({ SliderData }) {
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-[60%] transform -translate-y-1/2 bg-primary opacity-80 text-white p-3 rounded-full z-10"
    >
      <FaAngleLeft size={24} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-[60%] transform -translate-y-1/2 bg-primary opacity-80 text-white p-3 rounded-full z-10"
    >
      <FaAngleRight size={24} />
    </button>
  );

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

  return (
    <div className="w-full  h-[100vh] banner-section relative">
      <div className="relative">
        <div className="flex justify-center w-full overflow-hidden h-[100vh]">
          <Slider ref={sliderRef} {...settings} className="w-full h-[80vh]">
            {SliderData
              ? SliderData.map((data, index) => (
                  <div
                    key={index}
                    className={`bg-black text-white flex justify-center items-center text-2xl h-[100vh] mb-10 relative transform transition-all duration-700 ${
                      index === activeIndex
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-10 scale-95"
                    }`}
                  >
                    <img
                      src={data.image.src}
                      className="mx-auto w-full h-full z-0 object-cover"
                    />
                  </div>
                ))
              : "Slider data"}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Banner;
