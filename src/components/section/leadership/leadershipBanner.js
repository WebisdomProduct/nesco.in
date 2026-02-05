"use client";

import React, { useEffect, useState } from "react";
import LeadershipBanner1 from "@/components/common/MainBanner/leadershipBanner";
import axios from "axios";

const API_BASE =
  "https://nesco-backend-j567.onrender.com/api/v1/about/leadership";

function LeadershipBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [banners, setBanners] = useState([]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  /* ================= FETCH BANNERS ================= */

  const fetchBanners = async () => {
    try {
      const res = await axios.get(API_BASE);

      const data = Array.isArray(res.data?.data)
        ? res.data.data
        : [];

      setBanners(data);
    } catch (err) {
      console.error("Leadership fetch error:", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ================= BUILD SLIDER DATA ================= */

  const SliderData = banners.map((item) => ({
    image: item.image,
    mobileImage: item.imageForMobile,

    data:
      (
        item.paragraph1 ||
        item.paragraph2 ||
        item.paragraph3 ||
        item.paragraph4 ||
        item.paragraph5 ||
        item.paragraph6
      ) ? (
        <div className="absolute md:right-20 mt-10 text-center text-white z-20 xl:w-[40%] lg:w-[50%] top-[30%] flex flex-col gap-5 px-3">

          {/* Heading */}
          {item.paragraph1 && (
            <p className="md:text-7xl text-4xl relative font-branding-bold md:leading-[5.4rem] mx-10">
              {item.paragraph1}

              {item.featherimage && (
                <div className="absolute -top-[3rem] transform -translate-y-1/2 -left-9">
                  <img
                    src={item.featherimage}
                    alt="feather"
                    className="md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem]"
                  />
                </div>
              )}
            </p>
          )}

          {/* Subtitle */}
          {item.paragraph2 && <p>{item.paragraph2}</p>}

          {/* Description */}
          {item.paragraph3 && (
            <div className="md:text-3xl text-xl mt-5 space-y-2">

              <p>{item.paragraph3}</p>

              {item.paragraph4 && <p>{item.paragraph4}</p>}

              {item.paragraph5 && (
                <p>
                  {item.paragraph5
                    .split("Jethabhai V. Patel's")
                    .map((text, idx, arr) =>
                      idx < arr.length - 1 ? (
                        <span key={idx}>
                          {text}
                          <span className="md:text-4xl text-3xl font-branding-semibold">
                            {" "}Jethabhai V. Patel's{" "}
                          </span>
                        </span>
                      ) : (
                        text
                      )
                    )}
                </p>
              )}

              {item.paragraph6 && <p>{item.paragraph6}</p>}

            </div>
          )}

        </div>
      ) : (
        <div />
      ),
  }));

  /* ================= UI ================= */

  return (
    <div className="w-full pt-[80px] md:pt-[96px]">
      <LeadershipBanner1
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
}

export default LeadershipBanner;
