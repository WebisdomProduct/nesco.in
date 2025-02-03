"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
    <div className="w-full  h-[100vh] banner-section relative">
      <div className="relative">
        <div className="flex justify-center w-full overflow-hidden h-[100vh] relative">
          <Slider ref={sliderRef} {...settings} className="w-full h-[80vh]">
            {SliderData.map((data, index) => (
              <div
                key={index}
                className="bg-black text-white flex justify-center items-center text-2xl h-[100vh] relative transition-all duration-700"
              >
                {index !== 0 && (
                  <div className="absolute z-10 w-full h-full flex items-center justify-end overflow-hidden">
                    <div className="relative">
                      <div className="absolute z-20 md:top-[35%] top-[28%] transform -translate-y-1/2 w-1/2 md:translate-x-[52%] translate-x-[48%] text-center">
                        <img
                          src={data.hexaLogo.src}
                          alt="hexa image"
                          className="object-cover md:scale-50 scale-[.6]"
                        />
                      </div>
                      <div className="absolute z-20 md:top-[55%] font-branding-medium top-[57%] transform -translate-y-1/2 md:w-[47%] w-[60%] md:translate-x-[58%] translate-x-[36%] text-center md:text-[1.8rem] leading-[2.1rem] text-lg">
                        {data.description}
                      </div>

                      <img
                        src={data.hexaImage.src}
                        alt="hexa image"
                        className="object-cover md:scale-75 scale-[1.2] "
                      />
                    </div>
                  </div>
                )}
                <img
                  src={data.image.src}
                  alt="banner image"
                  className="mx-auto w-full h-full object-cover "
                />

                {index === 0 && (
                  <div className="text-black font-poppins absolute bottom-40 left-48">
                    <h1
                      //  className="text-6xl text-blue-900 font-[600]"
                      className="lg:text-[4.5rem] text-2xl font-bold text-primary pb-3 mt-4"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      Believe.
                    </h1>
                    <h2
                      // className="text-4xl font-medium"
                      className="md:text-[2.2rem] text-xl mt-4 font-bold my-4"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      The possibilities
                    </h2>
                    <h3
                      // className="text-4xl font-semibold"
                      className="md:text-[2.2rem] text-xl mt-4 font-bold my-4"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      are endless
                    </h3>
                    <p
                      // className="text-xl"
                      className="md:text-[1.4rem] text-xl mt-4 font-bold my-4"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      Welcome to{" "}
                      <strong
                        // className="text-blue-900"
                        className="md:text-[1.8rem] text-xl text-blue-900 mt-4 font-bold my-4"
                        style={{ fontFamily: "BrandingSemibold" }}
                      >
                        Nesco
                      </strong>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Banner;
