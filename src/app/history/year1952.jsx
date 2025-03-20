"use client";
import React, { useEffect, useState } from "react";

import { IoEllipseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Year1952 = () => {
  const [year1952InView, setYear1952InView] = useState(false);
  const [count, setCount] = useState(1000);

  const { ref: year1952Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1952InView(inView),
  });

  useEffect(() => {
    if (year1952InView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 5;
          if (nextCount >= 1952) {
            clearInterval(interval);
            return 1952; // Stop exactly at 1952
          }
          return nextCount;
        });
      }, 10); // Fast counting interval

      return () => clearInterval(interval);
    }
  }, [year1952InView]);

  return (
    <motion.div
      ref={year1952Observer}
      className="1952Div mt-[3%] w-full max-w-[1200px] mx-auto relative p-4 md:flex md:flex-row justify-center items-center transition-all ease-in-out duration-300 hover:translate-y-1 md:left-10"
      data-year="1952"
      initial={{ opacity: 0, y: 50 }}
      animate={year1952InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="contentDiv p-4 sm:p-6 md:p-8 m-2 flex flex-col items-start relative w-full md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={year1952InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {[
          "Empress Iron Works Ltd / Acme Mfg Co",
          "Ltd / Khandelwal Udyog Ltd / Glass",
          "Lined Equipment Co Ltd / Indian Furnace",
          "Co Ltd / Ceramics Mfg Co / Mapara",
          "Parekh Ltd / Electric Instruments Mfg",
          "Co Ltd / Agro Precision Co Ltd / Millars",
          "Construction Machinery Ltd",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="bg-[#0F0E80] m-2 p-2 sm:p-3 md:p-4 text-lg sm:text-xl md:text-2xl text-white font-branding-semibold rounded-md max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={year1952InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="iconDiv flex items-center justify-center relative w-full md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={year1952InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <IoEllipseOutline
          className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
          color="cyan"
          strokeWidth={1}
        />
        <span className="absolute text-sky-400 text-center w-fit flex flex-col items-center px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6">
          <motion.p
            className="text-2xl sm:text-3xl md:text-6xl lg:text-5xl 2xl:text-9xl font-branding-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={year1952InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            {count}
          </motion.p>
          <motion.p
            className="w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 p-2 sm:p-4 text-sm sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={year1952InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            By this time, SEC was taking over & reviving the fortunes of several
            struggling companies to build an engineering powerhouse.
          </motion.p>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Year1952;
