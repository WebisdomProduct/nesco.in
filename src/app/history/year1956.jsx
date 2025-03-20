"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyThree from "@/assests/history/historyThree.png";

const Year1956 = () => {
  const [year1956InView, setYear1956InView] = useState(false);
   const [count, setCount] = useState(1000);

  const { ref: year1956Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1956InView(inView),
  });

 useEffect(() => {
    if (year1956InView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 5;
          if (nextCount >= 1956) {
            clearInterval(interval);
            return 1956; // Stop exactly at 1952
          }
          return nextCount;
        });
      }, 10); // Fast counting interval

      return () => clearInterval(interval);
    }
  }, [year1956InView]);

  return (
    <motion.div
      ref={year1956Observer}
      className="1956Div mt-[3%] w-full max-w-[1200px] mx-auto relative p-4 items-center h-fit flex flex-col md:flex-row m-4 transition-all ease-in-out duration-300 hover:translate-y-1 gap-10 ml-auto md:left-6"
      data-year="1956"
      initial={{ opacity: 0, y: 50 }}
      animate={year1956InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="iconDiv flex items-center justify-center relative w-full sm:w-1/2 lg:w-1/3 mt-4 md:m-6 md:ml-14">
        <Image
          src={historyThree}
          alt="Top Image"
          width={350}
          height={350}
          className="max-w-full w-full h-auto"
        />
      </div>

      <div className="contentDiv p-6 sm:p-8 m-2 flex flex-col relative bg-[#060E9F] h-fit w-full">
        <p className="text-3xl sm:text-4xl md:text-5xl text-left ml-2 p-2 text-[#00A7E1] font-branding-bold leading-8">
          New Standard Engineering <br className="hidden sm:block" />
          Company Ltd
        </p>

        <div className="content flex flex-col sm:flex-row items-center relative top-4 w-full sm:w-fit m-2 p-3 gap-3 bg-white rounded-md">
          <div className="div1 flex p-2 items-center">
            <p className="text-2xl sm:text-3xl text-gray-400">{count}</p>
          </div>

          <div className="div2 flex p-2 text-lg sm:text-xl text-cyan-800 text-center sm:text-left">
            <p>
              The acquisition of Burjorji Pestonji & Son{" "}
              <br className="hidden sm:block" />
              re-christens the company as the New Standard Engineering.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Year1956;
