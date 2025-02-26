"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mid from "@/assests/history/mid.png";
import historyTwo from "@/assests/history/historyTwo.png";

const Year1939 = () => {
  const [year1939InView, setYear1939InView] = React.useState(false);

  const { ref: year1939Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1939InView(inView),
  });

  return (
    <motion.div
      ref={year1939Observer}
      className="year1939Div mt-[3%] w-full md:w-[85%] relative p-4 items-center h-fit flex flex-col md:flex-row-reverse m-4 ml-auto"
      data-year="1939"
      initial={{ opacity: 0, y: 50 }}
      animate={year1939InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      <div className="iconDiv h-fit w-full md:w-fit mt-4 m-6 flex-1 relative">
        <Image
          src={mid}
          alt="Top Image"
          width={1000}
          height={500}
          className="w-full lg:w-[90%] h-auto object-cover relative"
          priority
        />
        <div className="year absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2">
          <p className="text-[60px] md:text-[100px] text-white font-branding-bold">
            19
          </p>
          <p className="text-[60px] md:text-[100px] text-cyan-400 font-branding-bold">
            39
          </p>
        </div>
      </div>

      <motion.div
        className="year1939Div flex-1 flex flex-col justify-center items-center relative h-fit p-2"
        initial={{ opacity: 0, x: 50 }}
        animate={year1939InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <div className="rightContent text-left w-full md:w-fit p-4">
          <Image
            src={historyTwo}
            alt="Top Image"
            width={300}
            height={300}
            className="w-full md:w-[80%] lg:w-[90%] h-auto object-cover relative"
            priority
          />
          <p className="text-left text-gray-600 mt-6 sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs">
            The founder, Shri. J.V. Patel manifests his vision as the
            Standard Engineering Company (SEC).
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Year1939;