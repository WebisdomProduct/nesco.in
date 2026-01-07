'use client';
import { React, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import historyXIII from '@/assests/history/historyXIII.jpg';

const Year2013 = () => {
  const [year2013InView, setYear2013InView] = useState(false);
  const [count, setCount] = useState(1000);
  const { ref: year2013Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: inView => setYear2013InView(inView),
  });

  useEffect(() => {
    if (year2013InView) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const nextCount = prevCount + 5;
          if (nextCount >= 2013) {
            clearInterval(interval);
            return 2013; // Stop exactly at 2013
          }
          return nextCount;
        });
      }, 10); // Fast counting interval

      return () => clearInterval(interval);
    }
  }, [year2013InView]);

  return (
    <motion.div
      ref={year2013Observer}
      className="year2013 min-h-screen flex flex-col justify-center p-6 md:ml-4"
      initial={{ opacity: 0, x: 50 }}
      animate={year2013InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="2013"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year2013InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative"
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-[#001F9C] p-12 sm:left-0 md:left-[15%] lg:left-[20%] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year2013InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-9xl font-poppins  text-cyan-500 left-2 sm:left-0  sm:top-0 m-2"
            >
              {count}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year2013InView ? { opacity: 1, width: '90%' } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-cyan-500 w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year2013InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%] left-0 sm:left-0 p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Launched Nesco IT Park, Tower 03 (6.6 lakh sq. ft. area licensed
                to Marquee MNC clients)
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6 right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={year2013InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyXIII}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700/50"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Year2013;
