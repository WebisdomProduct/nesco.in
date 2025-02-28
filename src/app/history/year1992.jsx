"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEleven from "@/assests/history/historyEleven.png";
import historyXII from "@/assests/history/historyXII.jpg";

// const Year1992 = () => {
//   const [year1992InView, setYear1992InView] = React.useState(false);

//   const { ref: year1992Observer } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//     onChange: (inView) => setYear1992InView(inView),
//   });

//   return (
//     <motion.div
//       ref={year1992Observer}
//       initial={{ opacity: 0, y: 50 }}
//       animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="year1992 relative  flex flex-col sm:mt-[20%] md:mt-[15%] p-auto"
//       data-year="1992"
//     >
//       {/* Image Section */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="imgDiv flex relative z-10 sm:top-0 md:top-10 lg:top-0 sm:left-1/2 md:left-1/3 lg:left-1/3 w-full md:w-[60%] lg:w-[50%]"
//       >
//         <Image
//           src={historyXII}
//           alt="Historical Image"
//           width={800}
//           height={500}
//           className="w-full h-auto object-cover"
//         />
//       </motion.div>

//       {/* Content Section */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="contentDiv bg-blue-900 flex flex-col sm:w-[80%] md:w-[60%] lg:w-[40%] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh] sm:left-[10%] md:left-[5%] lg:left-[10%] gap-2 p-4 overflow-hidden"
//       >
//         {/* Year Text */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="yearDiv flex w-fit h-fit sm:mt-48 md:mt-48 lg:mt-48 sm:bottom-6"
//         >
//           <p className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl text-blue-500 font-branding-bold">
//             1992
//           </p>
//         </motion.div>

//         {/* Icon Image Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="iconDiv flex w-fit mt-2 "
//         >
//           <Image
//             src={historyEleven}
//             alt="Historical Image"
//             width={300}
//             height={200}
//             className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
//           />
//         </motion.div>

//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={year1992InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.7, delay: 1 }}
//           className="textDiv relative flex flex-wrap mt-2 text-white p-2"
//         >
//           <p className="text-xl sm:text-md md:text-lg lg:text-2xl text-white font-poppins">
//             The 200,000 square feet Bombay Exhibition Center<br></br>
//             develops into the largest center<br></br>
//             for exhibitions in the private sector in India.
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

const Year1992 = () => {
  const [year1992InView, setYear1992InView] = useState(false);
  const { ref: year1992Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1992InView(inView),
  });

  return (
    <motion.div
      ref={year1992Observer}
      className="year1992 mt-[25vh] flex flex-col sm:flex-col p-6"
      initial={{ opacity: 0, x: 50 }}
      animate={year1992InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="1992"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-[#001F9C] p-12 sm:left-0 md:left-[15%] lg:left-[20%] lg:h-[70vh] md:top-[3vh] lg:top-[10vh] transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1992InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-8xl text-cyan-500 left-2 sm:left-0 top-2 sm:top-0 lg:top-10 m-2"
            >
              1992
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={year1992InView ? { opacity: 1, width: "90%" } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-2 h-[2px] bg-cyan-500 w-full"
              ></motion.div>
            </motion.p>

            {/* Icon Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={year1992InView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="iconDiv relative  flex w-full sm:w-[70%] md:w-[70%] lg:w-[50%]  sm:left-0 lg:top-[10vh] left-4"
            >
              <Image
                src={historyEleven}
                alt="Icon"
                width={780}
                height={280}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1992InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[80%] left-0 sm:left-0 lg:top-[15vh] p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                The 200,000 square feet Bombay Exhibition Center develops into
                the largest center for exhibitions in the private sector in
                India.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6  right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%]  "
          initial={{ opacity: 0, x: 50 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyXII}
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

export default Year1992;
