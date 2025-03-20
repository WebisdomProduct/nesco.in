"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mid from "@/assests/history/mid.png";
import historyTwo from "@/assests/history/historyTwo.png";

const Year1939 = () => {
  const [year1939InView, setYear1939InView] = React.useState(false);
  const [count, setCount] = useState(1000);

  const { ref: year1939Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1939InView(inView),
  });

  useEffect(() => {
    if (year1939InView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 5;
          if (nextCount >= 1939) {
            clearInterval(interval);
            return 1939; // Stop exactly at 1939
          }
          return nextCount;
        });
      }, 8); // Fast interval for smooth counting

      return () => clearInterval(interval);
    }
  }, [year1939InView]);

  return (
    <motion.div
      ref={year1939Observer}
      className="year1939Div w-full flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 m-4 ml-auto md:w-[85%] "
      data-year="1939"
      initial={{ opacity: 0, y: 50 }}
      animate={year1939InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      {/* Image + Year Number */}
      <div className="iconDiv w-full md:w-[60%] relative">
        <Image
          src={mid}
          alt="Top Image"
          width={1800}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="year absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.p
            className="text-[80px] md:text-[140px] lg:text-[180px] text-white font-branding-bold"
          >
            {count}
          </motion.p>
        </div>
      </div>

      {/* Text + Image */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={year1939InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <div className="text-left w-full max-w-sm md:max-w-md lg:max-w-lg ">
          <Image
            src={historyTwo}
            alt="History Image"
            width={300}
            height={300}
            className="w-full md:w-[80%] lg:w-[60%] h-auto object-cover lg:ml-14 "
            priority
          />
          <p className="text-gray-600 mt-6 sm:text-lg md:text-xl lg:text-xl leading-relaxed text-center w-[60%] ml-16">
            The founder, Shri. J.V. Patel manifests his vision as the Standard Engineering Company (SEC).
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Year1939;
