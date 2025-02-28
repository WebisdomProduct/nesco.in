// components/historyYears/Year2001.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import nescoLogo from "@/assests/history/nescoLogo.png";

const Year2001 = () => {
  const [year2001InView, setYear2001InView] = React.useState(false);

  const { ref: year2001Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2001InView(inView),
  });

  return (
    <motion.div
      ref={year2001Observer}
      initial={{ opacity: 0, y: 50 }}
      animate={year2001InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year2001 flex flex-col items-center justify-center relative mt-[4vh] lg:mt-[12vh] xl:mt-[15vh] px-4"
      data-year="2001"
    >
      {/* Image Container with Hover */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year2001InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="imgDiv flex justify-center w-full max-w-[600px] relative"
      >
        <Image
          src={nescoLogo}
          alt="Historical Image"
          width={600}
          height={300}
          className="w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>

      {/* Content Container with Hover */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year2001InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contentDiv flex flex-col gap-4 w-full max-w-[90%] md:max-w-[60%] lg:max-w-[45%] p-6 border border-gray-800 bg-gray-50 shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300 mt-6 text-center"
      >
        {/* Year */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year2001InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="yearDiv"
        >
          <p className="text-3xl text-gray-600 font-semibold">2001</p>
        </motion.div>

        {/* Text Content */}
        <motion.div className="textDiv text-gray-600">
          <p className="text-lg md:text-xl leading-relaxed">
            The Company rebrands itself as <strong>Nesco Limited</strong> in light
            of further diversification and business verticals.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};



export default Year2001;