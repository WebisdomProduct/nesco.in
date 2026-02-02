"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Year1958 = () => {
  const [year1958InView, setYear1958InView] = React.useState(false);
  const [count, setCount] = useState(1000);

  const { ref: year1958Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1958InView(inView),
  });

  useEffect(() => {
    if (year1958InView) {
      const interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + 5;
          if (next >= 1958) {
            clearInterval(interval);
            return 1958;
          }
          return next;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [year1958InView]);

  return (
    <motion.div
      ref={year1958Observer}
      data-year="1958"
      className="year1958 relative flex flex-col gap-8 items-center mb-20 justify-center w-full max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={year1958InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >

      <div className="w-full">
        {/* YEAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={year1958InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full flex justify-center border-b-2 border-cyan-300 bg-[#060E9F] py-6"
        >
          <p className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] text-cyan-400 font-bold leading-none">
            {count}
          </p>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          animate={year1958InView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-[#060E9F] px-6 py-6"
        >
          <p className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white max-w-2xl mx-auto">
            The Company launches its public issue, which is quickly oversubscribed.
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Year1958;
