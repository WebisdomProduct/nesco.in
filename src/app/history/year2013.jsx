// components/historyYears/Year2013.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyXIII from "@/assests/history/historyXIII.jpg";

const Year2013 = () => {
  const [year2013InView, setYear2013InView] = React.useState(false);

  const { ref: year2013Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2013InView(inView),
  });

  return (
    <motion.div
      ref={year2013Observer}
      initial={{ opacity: 0, y: 50 }}
      animate={year2013InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year2013 flex flex-col relative  mt-[40%] md:mt-[2%] lg:mt-[2%]"
      data-year="2013"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year2013InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="contentDiv bg-[#001F9C] flex relative w-[50%] md:w-[55%] left-[8%] sm:top-[0vh] md:top-[5vh] lg:top-[50vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year2013InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="yearDiv flex relative sm:top-[15vh] md:top-[15vh] lg:top-[27vh] left-2 w-fit h-fit"
        >
          <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
            2013
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year2013InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="textDiv flex relative w-full h-fit md:top-[30vh] lg:top-[45vh] sm:right-[40%] md:right-[35%] lg:right-[26%] p-2"
        >
          <p className="sm:text-md md:text-lg lg:text-xl text-white">
            Launched Nesco IT Park,<br></br> Tower 03 (6.6 lakh sq. ft. area
            <br></br> licensed to Marquee MNC clients)
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year2013InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh]"
      >
        <Image
          src={historyXIII}
          alt="Historical Image"
          width={700}
          height={500}
          className="md:w-[50%] lg:w-[50%] h-auto object-cover relative"
        />
      </motion.div>
    </motion.div>
  );
};

export default Year2013;