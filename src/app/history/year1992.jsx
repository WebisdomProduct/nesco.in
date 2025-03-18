"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEleven from "@/assests/history/historyEleven.png";
import historyXII from "@/assests/history/historyXII.jpg";



const Year1992 = () => {
  const [year1992InView, setYear1992InView] = useState(false);
  const [count, setCount] = useState(1000);
  const { ref: year1992Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1992InView(inView),
  });
    useEffect(() => {
        if (year1992InView) {
          const interval = setInterval(() => {
            setCount((prevCount) => {
              const nextCount = prevCount + 5;
              if (nextCount >= 1992) {
                clearInterval(interval);
                return 1992; // Stop exactly at 1992
              }
              return nextCount;
            });
          }, 10); // Fast counting interval
    
          return () => clearInterval(interval);
        }
      }, [year1992InView]);

  return (
    <motion.div
      ref={year1992Observer}
      className="year1992 mt-[25vh] flex flex-col sm:flex-col p-6 md:ml-6"
      initial={{ opacity: 0, x: 50 }}
      animate={year1992InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="1992"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-[#001F9C] p-12 sm:left-0 md:left-[15%] lg:left-[20%] lg:h-[70vh] md:top-[3vh] lg:top-[10vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1992InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-8xl text-cyan-500 left-2 sm:left-0 top-2 sm:top-0 lg:top-[2vh] m-2"
            >
              {count}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year1992InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-cyan-500 w-full"
              ></motion.div>
            </motion.p>

            {/* Icon Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={year1992InView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="iconDiv relative  flex w-full sm:w-[70%] md:w-[70%] lg:w-[50%]  sm:left-0 lg:top-[5vh] left-4"
            >
              <Image
                src={historyEleven}
                alt="Icon"
                width={780}
                height={280}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1992InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[80%] left-0 sm:left-0 lg:top-[10vh] p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                The 200,000 square feet Bombay Exhibition Center develops into
                the largest center for exhibitions in the private sector in
                India.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6  right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%]  "
          initial={{ opacity: 0, x: 50 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyXII}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700/50"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Year1992;
