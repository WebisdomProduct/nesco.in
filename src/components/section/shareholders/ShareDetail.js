import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { FaArrowDown } from "react-icons/fa";
import image from "@/assests/shareHolder/48.png";
import imageBlue from "@/assests/shareHolder/48blue.png";
import image2 from "@/assests/shareHolder/50.png";
import imageBlue2 from "@/assests/shareHolder/50blue.png";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";

function ShareDetail() {
  const { getQuery } = useGetQuery();
  const [enter, setEnter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.shareholder.documents}`,
      onSuccess: (res) => {
        setGetData(res?.data || []);
        setTimeout(() => setLoading(false), 2000);
      },
      onFail: (err) => {
        console.error("Failed to fetch announcements data:", err);
      },
    });
  }, []);

  const transformedData = useMemo(() => {
    return Array.isArray(getData)
      ? getData.map((item) => ({
          title: item.title,
          file: item.file,
        }))
      : [];
  }, [getData]);

  const images = {
    default: [image, image2], // Default images
    hover: [imageBlue, imageBlue2], // Hover images
  };

  return (
    <div className="goal-section1 relative flex justify-center items-center py-20 cursor-pointer">
      {/* Background Div */}
      <div className="absolute inset-0 bg-white h-3/4"></div>
      <div className="absolute inset-0 bg-blue-200 h-1/4 top-[75%]"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-6 justify-evenly w-[90%]">
        {transformedData.map((data, index) => (
          <div
            key={index}
            className={`border border-black shadow-lg p-6 xl:w-[30%] transition-all duration-300 ${
              enter === `card${index}` ? "bg-primary" : "bg-white"
            } w-full`}
          >
            <a href={data.file} target="_blank" rel="noreferrer">
              <div
                className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 text-white h-full flex-col items-center justify-between flex py-2"
                onMouseEnter={() => setEnter(`card${index}`)}
                onMouseLeave={() => setEnter(null)}
              >
                <div
                  className={`${index === 1 ? "w-[9rem]" : "w-[7rem]"} mt-5`}
                >
                  <Image
                    src={
                      enter === `card${index}`
                        ? images.hover[index]
                        : images.default[index]
                    }
                    alt="image"
                    className={`${
                      index === 1 ? "w-[200px] h-[130px]" : "w-full h-full"
                    } object-cover`}
                  />
                </div>
                <div className="p-3 flex flex-col">
                  <h2 className="md:text-3xl text-2xl text-center font-bold">
                    {data.title}
                  </h2>
                  {data.title === "Details of shares transferred to IEPF" && (
                    <p className="flex-grow text-xl font-poppins text-center mt-3">
                      Pursuant to section 124(6) of the Companies Act.
                    </p>
                  )}
                  <div className="w-full flex justify-end">
                    <div className="flex justify-center items-center w-10 h-10 mt-3">
                      <button
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
                        onClick={() => window.open(data.file, "_blank")} // Open the file in a new tab
                        aria-label="Download"
                      >
                        <FaArrowDown />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareDetail;
