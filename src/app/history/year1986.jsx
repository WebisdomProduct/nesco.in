// components/historyYears/Year1986.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyTen from "@/assests/history/historyTen.png";

const Year1986 = () => {
  const [year1986InView, setYear1986InView] = React.useState(false);

  const { ref: year1986Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1986InView(inView),
  });

  return (
    <motion.div
      ref={year1986Observer}
      className="relative flex flex-col md:flex-row-reverse items-center md:items-start w-full mt-[4vh]"
      data-year="1986"
      initial={{ opacity: 0, y: 50 }}
      animate={year1986InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Blue Background Strip */}
      <div className="absolute top-[3%] md:left-4 lg:left-10 w-[90%] h-[70%] bg-blue-800 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50 z-0 m-4" />
      
      {/* Image Container */}
      <motion.div 
        className="relative z-10 w-fit mt-2 top-6 md:right-12 lg:right-[10vh]" 
        initial={{ opacity: 0, x: 50 }}
        animate={year1986InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Image 
          src={historyTen} 
          alt="Historic Event" 
          layout="responsive" 
          width={400} 
          height={300} 
          className="w-full max-w-full object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700/50"
        />
      </motion.div>
      
      {/* Text Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1986InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bg-white shadow-md p-6 md:p-8 w-[80%] md:w-[45%] lg:w-[40%] top-[55%] left-[10%] md:top-[50%] md:left-[45%] lg:left-[52%] z-50"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">1986</p>
        <p className="text-sm md:text-md lg:text-lg text-gray-600 font-light leading-relaxed">
          New Standard Engineering diversifies into realty and the Group welcomes a new sector.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Year1986;
