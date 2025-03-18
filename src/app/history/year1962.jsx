"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historySeven from "@/assests/history/historySeven.jpg";

const Year1962 = () => {
  const [year1962InView, setYear1962InView] = useState(false);
  const [count, setCount] = useState(1000);
  const { ref: year1962Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1962InView(inView),
  });
    useEffect(() => {
        if (year1962InView) {
          const interval = setInterval(() => {
            setCount((prevCount) => {
              const nextCount = prevCount + 5;
              if (nextCount >= 1962) {
                clearInterval(interval);
                return 1962; // Stop exactly at 1962
              }
              return nextCount;
            });
          }, 10); // Fast counting interval
    
          return () => clearInterval(interval);
        }
      }, [year1962InView]);

  return (
    <motion.div
      ref={year1962Observer}
      className="year1962 mt-[14vh] flex flex-col sm:flex-col p-6 md:mr-4 "
      initial={{ opacity: 0, x: 50 }}
      animate={year1962InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="1962"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        <motion.div
          className="imgDiv flex relative md:left-[15vh] lg:left-[15vh] z-20 sm:mt-6 md:top-[10vh] lg:top-[15vh] right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={year1962InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historySeven}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1962InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-10 bg-[#001F9C] p-12 sm:left-0 md:left-[15%] lg:left-[0vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-400/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1962InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-8xl font-branding-bold lg:text-9xl text-white  sm:left-0 md:left-1/4 lg:left-1/4  sm:top-0  m-2"
            >
              {count}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year1962InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-white w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1962InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  sm:left-0 md:left-1/3 lg:left-1/4   p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                The New Standard Engineering Company is known to have the
                largest foundry in the private sector, making specialised
                castings for the company's forging equipment product line.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
      </div>
    </motion.div>
  );
};

export default Year1962;
