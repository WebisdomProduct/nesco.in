"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyFour from "@/assests/history/historyFour.png";

const Year1957 = () => {
  const [year1957InView, setYear1957InView] = React.useState(false);

  const { ref: year1957Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1957InView(inView),
  });

  return (
    <motion.div
      ref={year1957Observer}
      className="year1957Div w-full flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-8 px-4 sm:px-10 lg:px-20 py-6 relative transition-all ease-in-out duration-300 hover:translate-y-1"
      data-year="1957"
      initial={{ opacity: 0, y: 50 }}
      animate={year1957InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Image Container */}
      <motion.div
        className="iconDiv w-full sm:w-1/2 flex justify-center items-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={year1957InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={historyFour}
          alt="Historical Image"
          width={1000}
          height={500}
          className="w-full  sm:max-w-[80%] md:[70%] lg:w-[90%] h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          priority
        />

        {/* Year Display */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1957InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="year absolute top-1/2 left-1/3 md:left-1/4  transform -translate-x-1/2 -translate-y-1/2 flex flex-row"
        >
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-white font-branding-bold">
            19
          </p>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-cyan-400 font-branding-bold">
            57
          </p>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={year1957InView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="contentDiv w-full sm:w-full md:w-1/2 flex justify-center items-center px-4 sm:px-8 lg:px-12"
>
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={year1957InView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.7 }}
    className="w-full  p-6 sm:p-8  transition-all duration-300"
  >
    <p className="text-center text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
      <strong>New Standard Engineering</strong> collaborates with <strong>B&S Massey Ltd</strong> to become the first manufacturer in India for forging hammers & presses.
    </p>
  </motion.div>
</motion.div>

    </motion.div>
  );
};


export default Year1957;
