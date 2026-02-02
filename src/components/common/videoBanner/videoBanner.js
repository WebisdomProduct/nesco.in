"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./VideoBanner.css";

function VideoBanner({ SliderData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Pause all videos when slide changes
    pauseAllVideos();
    setPlayingIndex(null);
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  };

  const handleVideoClick = (index) => {
    // If clicking the active video
    if (index === activeIndex) {
      if (playingIndex === index) {
        // If it's already playing, pause it
        videoRefs.current[index]?.pause();
        setPlayingIndex(null);
      } else {
        // Otherwise, pause all and play this one
        pauseAllVideos();
        videoRefs.current[index]?.play();
        setPlayingIndex(index);
      }
    }
  };

  // Update video refs array
  const setVideoRef = (el, index) => {
    videoRefs.current[index] = el;
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      pauseAllVideos();
    };
  }, []);

  return (
    <div className="w-full xl:h-[70vh]">
      {SliderData.length === 1 ? (
        <div className="text-white w-full flex justify-center items-center text-xl md:text-2xl">
          <div className="w-full max-w-4xl p-4">
            <video
              controls
              className="w-full h-auto rounded-lg shadow-lg"
              ref={(el) => setVideoRef(el, 0)}
              onClick={() => handleVideoClick(0)}
            >
              <source
                src={SliderData[0].video}
                type={`video/${SliderData[0].type}`}
              />
            </video>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="w-full lg:mt-10"
          >
            {SliderData.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex justify-center items-center p-4 transition-all duration-300 ${
                    index === activeIndex ? "scale-100" : "scale-75 opacity-70"
                  }`}
                >
                  <div className="w-full max-w-4xl mx-auto">
                    <video
                      ref={(el) => setVideoRef(el, index)}
                      controls
                      className="w-full rounded-lg shadow-lg xl:h-[60vh] bg-white video-full-timeline"
                      style={{ minHeight: '320px', minWidth: '100%', background: '#fff', paddingBottom: '0', boxSizing: 'border-box' }}
                      onClick={() => handleVideoClick(index)}
                    >
                      <source src={data.video} type={`video/${data.type}`} />
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition">
              <FaAngleLeft size={30} className="text-white" />
            </button>
            <button className="custom-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition">
              <FaAngleRight size={30} className="text-white" />
            </button>
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default VideoBanner;
