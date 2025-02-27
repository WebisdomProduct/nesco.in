"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEight from "@/assests/history/historyEight.png";

// const Year1964 = () => {
//   const [year1964InView, setYear1964InView] = React.useState(false);

//   const { ref: year1964Observer } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//     onChange: (inView) => setYear1964InView(inView),
//   });

//   return (
//     <motion.div
//       ref={year1964Observer}
//       className="year1964 flex flex-col md:flex-row relative mt-[25%] p-auto w-full"
//       data-year="1964"
//       initial={{ opacity: 0, y: 50 }}
//       animate={year1964InView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Left Content Section */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={year1964InView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="contentDiv flex relative bg-cyan-400 h-auto m-2 left-[5%] sm: w-full md:w-[60%] lg:w-[65%] p-6 "
//       >
//         {/* Year Title Inside Cyan Box */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={year1964InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="yearDiv flex flex-col  relative h-fit sm:top-1/2 md:top-[80%] lg:top-1/3 sm:left-3 md:left-[10%] lg:left-[5%] text-center"
//         >
//           {/* Increase font size for larger screens */}
//           <p className="sm:text-5xl md:text-8xl lg:text-9xl text-blue-800 font-branding-bold">
//             1964
//           </p>
//         </motion.div>

//         {/* Description Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={year1964InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.7 }}
//           className="textDiv relative flex m-2 p-2 h-fit sm:top-10 md:top-[0.05vh] lg:top-[60%] sm:right-12 md:right-1/2 lg:right-[20%] w-full"
//         >
//           <p className="sm:text-sm md:text-md lg:text-2xl text-white font-poppins">
//             Indabrator is born, on the basis<br /> of a joint venture signed
//             with Wheelabrator Corporation, USA<br /> for the manufacturing of
//             shot-blasting equipment in India.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Right Image Section */}
//       <motion.div
//         className="imgDiv w-fit flex relative z-10 top-[5vh] md:top-[6vh] lg:top-[5vh] sm:right-0 md:right-[5%] lg:right-[10%]"
//       >
//         <Image
//           src={historyEight}
//           alt="Historic Event"
//           width={500}
//           height={300}
//           className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

const Year1964 = () => {
  const [year1964InView, setYear1964InView] = useState(false);
  const { ref: year1964Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1964InView(inView),
  });

  return (
    <motion.div
      ref={year1964Observer}
      className="year1964 sm:mt-[2vh] md:mt-[5vh] lg:mt-[14vh] flex flex-col sm:flex-col p-6"
      initial={{ opacity: 0, x: 50 }}
      animate={year1964InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] lg:top-[40vh]  relative "
        >
          <div className="contentDiv flex flex-col relative gap-4 bg-cyan-400 p-12 sm:left-0 md:left-[15%] lg:left-[20%] lg:h-[60vh]">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={year1964InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-7xl lg:text-9xl font-branding-bold text-blue-700 left-2 sm:left-0  sm:top-0 lg:top-[15vh] m-2"
            >
              1964
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={year1964InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  lg:top-[15vh] left-0 sm:left-0  p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Indabrator is born, on the basis
                <br /> of a joint venture signed with Wheelabrator Corporation,
                USA
                <br /> for the manufacturing of shot-blasting equipment in
                India.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="imgDiv flex relative z-20 sm:mt-6 md:top-[10vh]  right-0 flex-col sm:w-full md:w-[50%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={year1964InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={historyEight}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Year1964;
