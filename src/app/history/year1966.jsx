// components/historyYears/Year1966.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyNine from "@/assests/history/historyNine.png";

const Year1966 = () => {
  const [year1966InView, setYear1966InView] = React.useState(false);

  const { ref: year1966Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1966InView(inView),
  });

  return (
    <motion.div
      ref={year1966Observer}
      className="year1966 flex flex-col relative sm:flex-row md:flex-row w-fit mt-[20%] sm:mt-[10%] p-auto"
      data-year="1966"
      initial={{ opacity: 0, y: 50 }}
      animate={year1966InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <motion.div className="imgDiv w-fit flex relative z-10 top-[6vh] left-[5%]">
        <Image
          src={historyNine}
          alt="Historic Event"
          width={500}
          height={300}
          className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year1966InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="contentDiv relative bg-cyan-400 h-auto m-2 right-[5%]  w-[50%] md:w-[65%] z-50"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1966InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="yearDiv  flex w-fit flex-col relative h-fit sm:top-1/4 md:top-[80%] lg:top-1/3 sm:right-3 md:left-4 lg:left-3"
        >
          <p className="sm:text-2xl md:text-6xl lg:text-8xl text-white font-branding-bold">
            1966
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year1966InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="textDiv relative flex m-2 p-4 h-fit  sm:top-10 md:top-2 lg:top-[50%] sm:right-12 md:right-2 lg:right-0 w-full"
        >
          <p className="sm:text-md md:text-md lg:text-2xl text-white font-poppins">
          The New Standard Engineering Company builds India's first antenna for space communication, strengthening its decade-long association with the Department of Atomic Energy.
          </p>
        </motion.div>
      </motion.div>

      
    </motion.div>
  );
};

export default Year1966;