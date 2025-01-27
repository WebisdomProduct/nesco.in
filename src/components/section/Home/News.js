import React from "react";
import AwardImage from "@/assests/Home/newsSvg/award.png";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

function News() {
  const newsData = [
    {
      backgroundcolor: "#C2B2AB",
      color: "#654E45",
      svgImage: AwardImage,
      title: "Awards and Recognitions",
      description:
        "We believe in raising the bar of Excellence at every step. Here’s a testimony of our efforts.",
      arrowColor: "#5C301E",
    },
    {
      backgroundcolor: "#A6B8C6",
      color: "#58667D",
      svgImage: AwardImage,
      title: "Technology Transfer Meet",
      description:
        "Tech Connect Global-the Official Technology Trading Event between India and Korea organised by NESCO Ltd and WEVIO Global Inc in...",
      arrowColor: "#2F356E",
    },
    {
      backgroundcolor: "#C6B6C4",
      color: "#75556F",
      svgImage: AwardImage,
      title: "Exhibitions",
      description:
        "Nesco's upcoming hall is to be ready by 2019 July. The proposed hall will be pillarless with all the modern facilities at a size of 1.5 lakh sq ft.",
      arrowColor: "#612659",
    },
    {
      backgroundcolor: "#9EC1BE", // Custom background for the 3rd card
      color: "#327062", // Custom color
      svgImage: AwardImage,
      title: <span className="text-[#4B5862]">BSE</span>,
      title2: <span className="text-[#445F53]">NSE</span>,
      description: "997.70",
      description1: "41.45(4.33%)",
      description2: (
        <p className="">
          <span className="text-[#327062] font-bold mr-1">Updated </span>14:04
          Pm | 07 Sept.{" "}
          <span className="text-[#327062] font-bold mr-1">Volume </span> 42190
        </p>
      ),
      arrowColor: "#C2B2AB", // Custom arrow color
    },
    {
      backgroundcolor: "#BEBBAC",
      color: "#68674D",
      svgImage: AwardImage,
      title: "Annual Report",
      description: "2023-24",
      downloadColor: "#585429",
    },
    {
      backgroundcolor: "#9EB2B8",
      color: "#4D6873",
      svgImage: AwardImage,
      title: "Introducing",
      description:
        "Nesco Foods will soon be opening two swanky new lounge bars that let patrons sample the best of the world's F&B in an ambiance of luxury and style.",
      arrowColor: "#18565A",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">
      <p className="border-b-2 border-primary text-primary font-bold pb-3 text-3xl">
        In the news
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-16 gap-10 lg:px-[7rem] px-5 md:px-10 mt-16">
        {newsData &&
          newsData.map((data, index) => {
            // Check if it's the 3rd item (index 2) to display a custom card
            if (index === 3) {
              return (
                <div key={index} className="">
                  <div
                    className="h-full p-5 shadow-lg gap-5 relative overflow-hidden"
                    style={{ backgroundColor: data.backgroundcolor }}
                  >
                    <div className="absolute right-0 scale-[4] top-[60%] -translate-y-1/2 flex">
                      {/* <img
                        src={data.svgImage.src}
                        alt="award"
                        className="w-16 h-16 mb-4"
                      /> */}
                    </div>
                    <div className="flex flex-col my-5 px-10 z-10 items-center">
                      <p
                        className="text-xl font-semibold mb-4 flex justify-between w-full"
                        style={{ color: data.color }}
                      >
                        <span>{data.title}</span>
                        <span>{data.title2}</span>
                      </p>
                      <p
                        className="text-5xl mb-2 font-bold text-center"
                        style={{ color: data.color }}
                      >
                        {data.description}
                      </p>
                      <p className="text-xl font-semibold">
                        {data.description1}
                      </p>
                      <div className="flex w-full mt-10 text-[13px]">
                        {data.description2}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (index === 4) {
              return (
                <div>
                  <div
                    className=" p-5 shadow-lg gap-5 relative overflow-hidden h-full"
                    style={{ backgroundColor: data.backgroundcolor }}
                  >
                    <div className="absolute right-0 scale-[4] top-[60%] -translate-y-1/2">
                      <img
                        src={data.svgImage.src}
                        alt="award"
                        className="w-16 h-16 mb-4"
                      />
                    </div>
                    <div className="flex flex-col mt-5 w-[60%] h-full justify-between pb-5">
                      <div>
                        <p
                          className="text-3xl font-semibold mb-2"
                          style={{ color: data.color }}
                        >
                          {data.title}
                        </p>
                        <p className="text-2xl font-bold">{data.description}</p>
                      </div>

                      <div className="flex w-full ">
                        <button
                          className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                          style={{
                            backgroundColor: data.downloadColor,
                          }}
                        >
                          <HiOutlineDownload
                            className="scale-[1.3]"
                            style={{
                              color: data.backgroundcolor,
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Default cards for other positions
            return (
              <div key={index} className="">
                <div
                  className=" p-5 shadow-lg gap-5 relative overflow-hidden h-full"
                  style={{ backgroundColor: data.backgroundcolor }}
                >
                  <div className="absolute right-0 scale-[4] top-[60%] -translate-y-1/2">
                    <img
                      src={data.svgImage.src}
                      alt="award"
                      className="w-16 h-16 mb-4"
                    />
                  </div>
                  <div className="flex flex-col mt-5 w-[60%]">
                    <p
                      className="text-xl font-semibold mb-4"
                      style={{ color: data.color }}
                    >
                      {data.title}
                    </p>
                    <p className="text-sm" style={{ color: data.color }}>
                      {data.description}
                    </p>
                    <div className="flex w-full mt-10">
                      <button
                        className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                        style={{
                          backgroundColor: data.arrowColor,
                        }}
                      >
                        <FaArrowRight
                          className="text-white"
                          style={{
                            color: data.backgroundcolor,
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default News;
