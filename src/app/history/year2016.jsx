// components/historyYears/Year2016.js
"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyXIV from "@/assests/history/historyXIV.png";

const Year2016 = () => {
  const [year2016InView, setYear2016InView] = useState(false);
  const { ref: year2016Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2016InView(inView),
  });

  return (
    <motion.div
      ref={year2016Observer}
      className="year2016 md:mt-[10vh] lg:mt-[25vh] flex flex-col sm:flex-col p-6"
      initial={{ opacity: 0, x: 50 }}
      animate={year2016InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="2016"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6  md:left-[6vh] lg:left-[15vh] flex-col sm:w-full md:w-[80%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={year2016InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyXIV}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year2016InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-cyan-400 p-12 sm:left-0 md:left-[15%] lg:left-[0%]  lg:h-[60vh] lg:top-[35vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year2016InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-9xl font-branding-bold text-white left-2 sm:left-0 lg:left-[30%] top-2 sm:top-0 lg:top-[10vh] m-2"
            >
              2016
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year2016InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-white w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year2016InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full  md:w-full lg:w-[70%]  sm:left-0 lg:left-[30%] lg:top-[15vh] p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                The beginning of Nesco Foods. Mumbai gains one<br></br> of the
                largest and most hygienic food<br></br> production centers in
                the non-flight category, serving 50,000 meals per day.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Year2016;
