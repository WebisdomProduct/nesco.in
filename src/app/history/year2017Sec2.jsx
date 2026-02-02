import { React, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import XVI from '@/assests/history/XVI.png';
import XVII from '@/assests/history/XVII.png';

const Year2017Sec2 = () => {
  const [Year2017Sec2InView, setYear2017Sec2InView] = useState(false);
  const [count, setCount] = useState(1000);
  const { ref: Year2017Sec2Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: inView => setYear2017Sec2InView(inView),
  });

  useEffect(() => {
    if (Year2017Sec2InView) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const nextCount = prevCount + 5;
          if (nextCount >= 2017) {
            clearInterval(interval);
            return 2017; // Stop exactly at 2017
          }
          return nextCount;
        });
      }, 10); // Fast counting interval

      return () => clearInterval(interval);
    }
  }, [Year2017Sec2InView]);

  return (
    <motion.div
      ref={Year2017Sec2Observer}
      className="Year2017Sec2 mt-[14vh] lg:mt-[20vh] flex flex-col sm:flex-col p-6 md:mr-4 "
      initial={{ opacity: 0, x: 50 }}
      animate={Year2017Sec2InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="2017"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        <motion.div
          className="imgDiv flex relative md:left-[15vh] lg:left-[15vh] z-20 sm:mt-6  right-0 flex-col sm:w-full md:w-[60%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={Year2017Sec2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={XVI}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={Year2017Sec2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-10 bg-[#001F9C] md:top-[10vh] lg:top-[25vh] p-12 mb-20 sm:left-0 md:left-[15%] lg:left-[0vh] lg:h-[80vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={Year2017Sec2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-8xl font-branding-bold lg:text-9xl text-white  sm:left-0 md:left-1/4 lg:left-1/3  sm:top-0 lg:top-[10vh]  m-2"
            >
              {count}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={Year2017Sec2InView ? { opacity: 1, width: '90%' } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-white w-full"
              ></motion.div>
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={Year2017Sec2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  sm:left-0 md:left-1/3 lg:left-1/4 lg:top-[10vh]   p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Rangilo Re, started in 2017, has become one of the top Navratri
                destinations of Mumbai.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
      </div>
    </motion.div>
  );
};

export default Year2017Sec2;
