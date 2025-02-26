"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEleven from "@/assests/history/historyEleven.png";
import historyXII from "@/assests/history/historyXII.jpg";

const Year1992 = () => {
  const [year1992InView, setYear1992InView] = React.useState(false);

  const { ref: year1992Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1992InView(inView),
  });

  return (
    <motion.div
      ref={year1992Observer}
      initial={{ opacity: 0, y: 50 }}
      animate={year1992InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year1992 relative  flex flex-col sm:mt-[20%] md:mt-[15%] p-auto"
      data-year="1992"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1992InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="imgDiv flex relative z-10 sm:top-0 md:top-10 lg:top-0 sm:left-1/2 md:left-1/3 lg:left-1/3 w-full md:w-[60%] lg:w-[50%]"
      >
        <Image
          src={historyXII}
          alt="Historical Image"
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year1992InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contentDiv bg-blue-900 flex flex-col sm:w-[80%] md:w-[60%] lg:w-[40%] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh] sm:left-[10%] md:left-[5%] lg:left-[10%] gap-2 p-4 overflow-hidden"
      >
        {/* Year Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="yearDiv flex w-fit h-fit sm:mt-48 md:mt-48 lg:mt-48 sm:bottom-6"
        >
          <p className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl text-blue-500 font-branding-bold">
            1992
          </p>
        </motion.div>

        {/* Icon Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="iconDiv flex w-fit mt-2 "
        >
          <Image
            src={historyEleven}
            alt="Historical Image"
            width={300}
            height={200}
            className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="textDiv relative flex flex-wrap mt-2 text-white p-2"
        >
          <p className="text-xl sm:text-md md:text-lg lg:text-2xl text-white font-poppins">
            The 200,000 square feet Bombay Exhibition Center<br></br>
            develops into the largest center<br></br>
            for exhibitions in the private sector in India.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year1992;
