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
      className="year1957Div mt-[3%] w-full relative p-4 flex flex-col sm:flex-row-reverse m-4 transition-all ease-in-out duration-300 hover:translate-y-1"
      data-year="1957"
      initial={{ opacity: 0, y: 50 }}
      animate={year1957InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        className="iconDiv h-fit w-full sm:w-1/2 mt-4 sm:m-6 relative flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={year1957InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={historyFour}
          alt="Top Image"
          width={1000}
          height={500}
          className="w-full h-auto max-w-[1000px]"
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1957InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="year absolute z-50 top-1/2 sm:left-[8vh] md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2"
        >
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-white font-branding-bold">
            19
          </p>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-cyan-400 font-branding-bold">
            57
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year1957InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="contentDiv flex-1 flex flex-col sm:flex-row justify-center items-center p-2"
      >
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={year1957InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rightContent flex relative  text-left sm:text-center w-full max-w-md p-8  sm:w-[90%] "
        >
          <p className="text-right sm:text-center text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
            New Standard Engineering collaborates with B&S Massey Ltd to
            become the first manufacturer in India for forging hammers & presses.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year1957;
