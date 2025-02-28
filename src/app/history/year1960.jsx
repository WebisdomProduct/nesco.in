"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyFive from "@/assests/history/historyFive.png";
import historySix from "@/assests/history/historySix.png";

const Year1960 = () => {
  const [year1960InView, setYear1960InView] = useState(false);
  const { ref: year1960Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1960InView(inView),
  });

  return (
    <motion.div
      ref={year1960Observer}
      className="year1960 mt-[8vh] flex flex-col sm:flex-col p-6 "
      initial={{ opacity: 0, x: 50 }}
      animate={year1960InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="1960"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4 ">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1960InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-sky-900 p-12 sm:left-0 md:left-[15%] lg:left-[20%] transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1960InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-8xl text-cyan-500 left-2 sm:left-0 top-2 sm:top-0 m-2"
            >
              1960
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year1960InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-cyan-500 w-full"
              ></motion.div>
            </motion.p>

            {/* Icon Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={year1960InView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="iconDiv relative  flex w-full sm:w-[70%] md:w-[70%] lg:w-[80%] top-1 sm:left-0 left-4"
            >
              <Image
                src={historyFive}
                alt="Icon"
                width={780}
                height={280}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1960InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[60%] left-0 sm:left-0  p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Sumant Patel founds the Gujarat Machinery Manufacturers Ltd,
                which later becomes GMM Pfaudler Ltd.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6 md:top-[10vh] lg:top-[15vh] right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%]  "
          initial={{ opacity: 0, x: 50 }}
          animate={year1960InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historySix}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400/50"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Year1960;
