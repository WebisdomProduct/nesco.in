"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Image from "next/image";
import Cards from "../cards/Cards";

function SocialBanner1({
  SliderData,
  title,
  onReadMore,
  isModalOpen,
  selectedCard,
  closeModal,
}) {
  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom arrows
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-[60%] -translate-y-1/2 text-gray-200 p-3 rounded-full z-20"
    >
      <FaAngleLeft size={40} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-200 p-3 rounded-full z-20"
    >
      <FaAngleRight size={40} />
    </button>
  );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, [activeIndex, SliderData]);

  // Slider settings
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    beforeChange: (_, newIndex) => setActiveIndex(newIndex),
  };

  return (
    <div className="w-full lg:h-[100vh] banner-section relative flex flex-col justify-end lg:pt-8 pt-16">
      {/* TITLE */}
      <p className="text-center text-2xl md:text-4xl lg:text-5xl font-branding-semibold my-8 text-primary">
        {title}
      </p>

      <div className="relative">
        <div className="flex justify-center w-full overflow-hidden h-[80vh] relative">
          {/* SINGLE SLIDE */}
          {SliderData.length === 1 ? (
            <div className="relative w-full h-[100vh] flex justify-center items-center text-white transition-all duration-700">
              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center font-branding-medium z-20">
                <p className="text-3xl text-center">
                  {SliderData[0].title1}
                </p>
                <p className="text-3xl text-center">
                  {SliderData[0].title2}
                </p>
                <button
                  className="border border-white px-6 py-3 text-white mt-8"
                  onClick={() => onReadMore(SliderData[0])}
                >
                  <Link href={SliderData[0].link}></Link>
                  Read More
                </button>
              </div>

              {/* IMAGE */}
              <Image
                src={SliderData[0].bImage}
                alt="banner image"
                fill
                className="object-cover"
                priority
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ) : (
            /* MULTI SLIDE */
            <Slider ref={sliderRef} {...settings} className="w-full h-[80vh]">
              {SliderData.map((data, index) => (
                <div
                  key={index}
                  className="relative w-full h-[100vh] flex justify-center items-center text-white transition-all duration-700"
                >
                  {/* TEXT */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center font-branding-medium z-20">
                    <p className="text-4xl text-center">{data.title1}</p>
                    <p className="text-4xl text-center">{data.title2}</p>
                    <button
                      className="border border-white px-6 py-3 text-white mt-8 tracking-widest cursor-pointer"
                      onClick={() => onReadMore(data)}
                    >
                      Read More
                    </button>
                  </div>

                  {/* IMAGE */}
                  <Image
                    src={data.bImage}
                    alt="banner image"
                    fill
                    className="object-cover"
                  />

                  {/* BLACK OVERLAY */}
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* MODAL */}
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
