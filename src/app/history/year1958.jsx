"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Year1958 = () => {
  const [year1958InView, setYear1958InView] = React.useState(false);

  const { ref: year1958Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1958InView(inView),
  });

  return (
    <motion.div
      ref={year1958Observer}
      className="year1958 mt-16 flex flex-col gap-4 relative items-center justify-center w-full max-w-4xl m-auto"
      data-year="1958"
      initial={{ opacity: 0, y: 50 }}
      animate={year1958InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={year1958InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="topDiv flex relative items-center justify-center m-4 border-b-2 border-cyan-300 w-full"
      >
        <p className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] text-cyan-400 font-bold">
          1958
        </p>
      </motion.div>
      <motion.div
        animate={year1958InView ? { opacity: 1, y: 0 } : {}}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bottomDiv m-4 flex flex-col sm:flex-row items-center justify-center"
      >
        <p className="text-center sm:text-left sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-400 max-w-lg">
          The Company launches its public issue, which is quickly oversubscribed.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Year1958;
