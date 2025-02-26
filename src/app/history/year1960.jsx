"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyFive from "@/assests/history/historyFive.png";
import historySix from "@/assests/history/historySix.png";

const Year1960 = () => {
  const [year1960InView, setYear1960InView] = React.useState(false);

  const { ref: year1960Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1960InView(inView),
  });

  return (
    <motion.div
      ref={year1960Observer}
      className="year1960 relative mt-16 flex flex-col sm:flex-row items-center p-6 w-full max-w-screen-lg mx-auto"
      data-year="1960"
      initial={{ opacity: 0, x: 50 }}
      animate={year1960InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1960InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-[#001F9C] text-white flex-1 p-6 relative w-full sm:w-[60%] h-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={year1960InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-300"
        >
          1960
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={year1960InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image
            src={historyFive}
            alt="Icon"
            width={580}
            height={280}
            className="mt-4 w-full h-auto"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={year1960InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg text-center sm:text-left"
        >
          Sumant Patel founds the Gujarat Machinery Manufacturers Ltd, which
          later becomes GMM Pfaudler Ltd.
        </motion.p>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="w-full sm:w-[60%] sm:relative sm:top-10 sm:right-2 sm:mt-6 z-0"  // Remove absolute positioning for small screens
        initial={{ opacity: 0, x: 50 }}
        animate={year1960InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Image
          src={historySix}
          alt="Historic Event"
          width={600}
          height={500}
          className="w-full h-auto object-cover relative"
        />
      </motion.div>
    </motion.div>
  );
};

export default Year1960;
