"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import XVII from "@/assests/history/XVII.png";

const Year2017Sec3 = () => {
  const [Year2017Sec3InView, setYear2017Sec3InView] = useState(false);
  const [count, setCount] = useState(1000);
  const { ref: Year2017Sec3Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2017Sec3InView(inView),
  });

  useEffect(() => {
    if (Year2017Sec3InView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 5;
          if (nextCount >= 2017) {
            clearInterval(interval);
            return 2017; // Stop exactly at 2017
          }
          return nextCount;
        });
      }, 10); // Fast counting interval

      return () => clearInterval(interval);
    }
  }, [Year2017Sec3InView]);

  return (
    <motion.div
      ref={Year2017Sec3Observer}
      className="Year2017Sec3 sm:mt-[2vh] md:mt-[5vh] lg:mt-[5vh] flex flex-col sm:flex-col px-6 md:ml-4"
      initial={{ opacity: 0, x: 50 }}
      animate={Year2017Sec3InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="2017"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={Year2017Sec3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] lg:top-[40vh]  relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-[#001F9C] p-12 sm:left-0 md:left-[15%] lg:left-[20%] lg:h-[60vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={Year2017Sec3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-9xl font-poppins  text-cyan-500 left-2 sm:left-0  sm:top-0 lg:top-[10vh] m-2"
            >
              {count}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={Year2017Sec3InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-cyan-500 w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={Year2017Sec3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  lg:top-[12vh] left-0 sm:left-0  p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Added a premium lounge/bar “Dress Circle” towards the end of the
                year in Nesco Centre.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6 md:top-[10vh]  right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={Year2017Sec3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={XVII}
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

export default Year2017Sec3;
