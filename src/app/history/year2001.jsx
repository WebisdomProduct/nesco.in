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
      animate={year2001InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year2001 flex flex-col relative justify-center "
      data-year="2001"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year2001InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="imgDiv flex relative sm:top-6 md:top-6 lg:top-4 md:left-[3%] lg:left-[10%]"
      >
        <Image
          src={nescoLogo}
          alt="Historical Image"
          width={600}
          height={300}
          className="md:w-[50%] lg:w-[30%] h-auto object-cover relative"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year2001InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contentDiv flex flex-col sm:left-[40%] md:left-[55%] gap-4 sm:w-[25vh] md:w-[35vh] lg:w-[45vh] relative p-4 sm:bottom-[22vh] lg:bottom-[25vh] border h-[25vh] border-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year2001InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="yearDiv flex relative w-fit left-2"
        >
          <p className="text-3xl text-gray-600">2001</p>
        </motion.div>
        <motion.div className="textDiv flex relative left-2 text-gray-400">
          <p className="md:text-xl lg:text-2xl">
            The Company rebrands <br></br> itself as Nesco Limited <br></br>{" "}
            in light of further diversification <br></br> and business
            verticals.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year2001;