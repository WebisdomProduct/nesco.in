// components/historyYears/Year1962.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historySeven from "@/assests/history/historySeven.jpg";

const Year1962 = () => {
  const [year1962InView, setYear1962InView] = React.useState(false);

  const { ref: year1962Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1962InView(inView),
  });

  return (
    <motion.div
      ref={year1962Observer}
      className="year1962 flex flex-col h-full  relative sm:flex-row md:flex-row w-fit mt-[15%] p-auto"
      data-year="1962"
      initial={{ opacity: 0, y: 50 }}
      animate={year1962InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="imgDiv w-fit flex relative z-10 md:left-[10%] lg:left-[10%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={year1962InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Image
          src={historySeven}
          alt="Mid Image"
          width={700}
          height={500}
          className="m-auto w-full sm:w-[700px]  h-auto"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1962InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="rightDiv bg-[#001F9C] sm:w-[70%] md:w-[85%] lg:w-[20%] flex relative sm:top-[5vh] md:top-[5vh] lg:top-[30vh] flex-grow h-auto  sm:left-0 sm:mt-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1962InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="yearDiv flex flex-col sm:flex-row relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-right h-fit sm:top-10 md:top-0 lg:top-1/3 p-6"
        >
          <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
            1962
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year1962InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="bottomContent flex flex-col relative sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[30%] lg:top-[70%] right-10 text-right w-full"
        >
          <p className="sm:text-sm md:text-md lg:text-xl text-cyan-500 font-poppins">
            The New Standard Engineering Company is known to have the largest
            foundry in the private sector, making specialised castings for the
            company's forging equipment product line.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year1962;