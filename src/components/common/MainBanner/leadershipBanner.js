"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LeadershipBanner1({
  SliderData,
  onSlideChange,
  filter,
  heightClassName,
}) {
  const sliderRef1 = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
    >
      <IoIosArrowBack size={40} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
    >
      <IoIosArrowForward size={40} />
    </button>
  );

  useEffect(() => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPlay();
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
    autoplaySpeed: activeIndex === 0 ? 5000 : 3000,
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
          <Slider ref={sliderRef1} {...settings} className="w-full h-[80vh]">
            {SliderData.map((data, index) => (
              <div
                key={index}
                className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700"
              >
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LeadershipBanner1;
