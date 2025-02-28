"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEight from "@/assests/history/historyEight.png";

const Year1964 = () => {
  const [year1964InView, setYear1964InView] = useState(false);
  const { ref: year1964Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1964InView(inView),
  });

  return (
    <motion.div
      ref={year1964Observer}
      className="year1964 sm:mt-[2vh] md:mt-[5vh] lg:mt-[14vh] flex flex-col sm:flex-col p-6"
      initial={{ opacity: 0, x: 50 }}
      animate={year1964InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="1964"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] lg:top-[40vh]  relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-cyan-400 p-12 sm:left-0 md:left-[15%] lg:left-[20%] lg:h-[60vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1964InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-9xl font-branding-bold text-blue-700 left-2 sm:left-0  sm:top-0 lg:top-[15vh] m-2"
            >
              1964
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year1964InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-white w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1964InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  lg:top-[15vh] left-0 sm:left-0  p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Indabrator is born, on the basis
                <br /> of a joint venture signed with Wheelabrator Corporation,
                USA
                <br /> for the manufacturing of shot-blasting equipment in
                India.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6 md:top-[10vh]  right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyEight}
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

export default Year1964;
