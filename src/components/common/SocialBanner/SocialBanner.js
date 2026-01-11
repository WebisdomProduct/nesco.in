"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import Cards from "../cards/Cards";

function SocialBanner1({ SliderData, title, onReadMore, isModalOpen, selectedCard, closeModal }) {
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
    >
      <FaAngleLeft size={40} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-[60%] transform -translate-y-1/2 text-gray-200 p-3 rounded-full z-10"
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
    autoplaySpeed: 3000,
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
    <div className="w-full lg:h-[100vh] banner-section relative flex flex-col justify-end lg:pt-8 pt-16">
      <p className="text-center text-2xl md:text-4xl lg:text-5xl font-branding-semibold my-8 text-primary">
        {title}
      </p>
      <div className="relative">
        <div className="flex justify-center w-full overflow-hidden h-[80vh] relative">
          {SliderData.length === 1 ? (
            <div className="bg-black text-white flex w-full justify-center items-center text-2xl h-[100vh] relative transition-all duration-700">
              <div className="absolute w-full h-full flex flex-col justify-center items-center font-branding-medium z-10">
                <p className="text-3xl text-center">{SliderData[0].title1}</p>
                <p className="text-3xl text-center">{SliderData[0].title2}</p>
                <button className="border border-white px-6 py-3 text-white mt-8"
                  onClick={() => onReadMore(SliderData[0])}>
                  <Link href={SliderData[0].link}> </Link>
                  Read More
                </button>
              </div>
              <Image
                src={SliderData[0].bImage}
                alt="banner image"
                fill
                className="mx-auto w-full h-full object-cover "
              />
            </div>
          ) : (
            <Slider ref={sliderRef} {...settings} className="w-full h-[80vh]">
              {SliderData.map((data, index) => (
                <div
                  key={index}
                  className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700"
                >
                  <div className="absolute w-full h-full flex flex-col justify-center items-center font-branding-medium z-10">
                    <p className="text-4xl text-center">{data.title1}</p>
                    <p className="text-4xl text-center">{data.title2}</p>
                    <button
                      className="border border-white px-6 py-3 text-white mt-8 tracking-widest cursor-pointer"
                      onClick={() => onReadMore(data)}
                    >
                      Read More
                    </button>
                  </div>
                  <Image
                    src={data.bImage}
                    alt="banner image"
                    fill
                    className="mx-auto w-full h-full object-cover "
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>

        {isModalOpen && (
          <Cards
            CardData={[selectedCard]}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default SocialBanner1;
