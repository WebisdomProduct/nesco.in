"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEight from "@/assests/history/historyEight.png";

const Year1964 = () => {
  const [year1964InView, setYear1964InView] = React.useState(false);

  const { ref: year1964Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1964InView(inView),
  });

  return (
    <motion.div
      ref={year1964Observer}
      className="year1964 flex flex-col md:flex-row relative mt-[25%] p-auto w-full"
      data-year="1964"
      initial={{ opacity: 0, y: 50 }}
      animate={year1964InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1964InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="contentDiv flex relative bg-cyan-400 h-auto m-2 left-[5%] sm: w-full md:w-[60%] lg:w-[65%] p-6 "
      >
        {/* Year Title Inside Cyan Box */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="yearDiv flex flex-col  relative h-fit sm:top-1/2 md:top-[80%] lg:top-1/3 sm:left-3 md:left-[10%] lg:left-[5%] text-center"
        >
          {/* Increase font size for larger screens */}
          <p className="sm:text-5xl md:text-8xl lg:text-9xl text-blue-800 font-branding-bold">
            1964
          </p>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="textDiv relative flex m-2 p-2 h-fit sm:top-10 md:top-[0.05vh] lg:top-[60%] sm:right-12 md:right-1/2 lg:right-[20%] w-full"
        >
          <p className="sm:text-sm md:text-md lg:text-2xl text-white font-poppins">
            Indabrator is born, on the basis<br /> of a joint venture signed
            with Wheelabrator Corporation, USA<br /> for the manufacturing of
            shot-blasting equipment in India.
          </p>
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="imgDiv w-fit flex relative z-10 top-[5vh] md:top-[6vh] lg:top-[5vh] sm:right-0 md:right-[5%] lg:right-[10%]"
      >
        <Image
          src={historyEight}
          alt="Historic Event"
          width={500}
          height={300}
          className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
        />
      </motion.div>
    </motion.div>
  );
};

export default Year1964;
