"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import Image from "next/image";
import top from "@/assests/history/top.png";
import historyOne from "@/assests/history/historyOne.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Year1939 from "./year1939";
import Year1952 from "./year1952";
import Year1956 from "./year1956";
import Year1957 from "./year1957";
import Year1958 from "./year1958";
import Year1960 from "./year1960";
import Year1962 from "./year1962";
import Year1964 from "./year1964";
import Year1966 from "./year1966";
import Year1986 from "./year1986";
import Year1992 from "./year1992";
import Year2001 from "./year2001";
import Year2013 from "./year2013";
import Year2016 from "./year2016";
import Year2017 from "./year2017";
import Year2019 from "./year2019";
import Year2023 from "./year2023";
import Year2017Sec2 from "./year2017Sec2";
import Year2017Sec3 from "./year2017Sec3";
import Year2023Sec2 from "./year2023Sec2";
import Year2023Sec3 from "./year2023Sec3";
import Footer from "@/components/layout/footer/footer";

const Timeline = ({ years, isFooterVisible }) => {
  const [activeYear, setActiveYear] = useState(years[0]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-year]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveYear(entry.target.getAttribute("data-year"));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div
      className={`sideProgress  flex-col items-center 
        fixed top-[10%] right-2 md:left-auto md:right-auto md:w-auto 
        lg:w-[13%] p-4 rounded-lg z-50 hidden
        md:flex transition-opacity duration-500 ${
          isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <ul className="relative pl-4">
        {years.map((year, index) => (
          <li key={index} className="relative flex items-center space-x-2 mb-3">
            <motion.span
              className="w-3 h-3 rounded-full relative z-10"
              animate={{
                backgroundColor:
                  year.toString() === activeYear ? "#3B82F6" : "#6B7280",
                scale: year.toString() === activeYear ? 1.5 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.span>
            <motion.p
              className="text-xl font-poppins transition-all"
              animate={{
                color: year.toString() === activeYear ? "#000000" : "#6B7280",
                fontWeight: year.toString() === activeYear ? 700 : 400,
              }}
            >
              {year}
            </motion.p>

            {year.toString() === activeYear && index < years.length - 1 && (
              <motion.div
                className="absolute left-[-3] top-3 w-[2px] bg-blue-500 origin-top"
                initial={{ height: 0 }}
                animate={{ height: "40px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const page = () => {
  const years = [
    1939, 1952, 1956, 1957, 1958, 1960, 1962, 1964, 1966, 1986, 1992, 2001,
    2013, 2016, 2017, 2019, 2023,
  ];

  const [upperInView, setUpperInView] = useState(false);
  const [bottomInView, setBottomInView] = useState(false);

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const { ref: footerObserver } = useInView({
    threshold: 0.1, // Adjust threshold if needed
    triggerOnce: false,
    onChange: (inView) => setIsFooterVisible(inView),
  });

  const { ref: upperObserver } = useInView({
    threshold: 0.4,
    triggerOnce: true,
    onChange: (inView) => setUpperInView(inView),
  });

  const { ref: bottomObserver } = useInView({
    threshold: 0.4,
    triggerOnce: true,
    onChange: (inView) => setBottomInView(inView),
  });

  return (
    <>
      <Navbar />
      <div className="historyDiv header_purple max-w-full flex flex-col overflow-x-hidden overflow-y-auto scrollbar-hide">
        <Timeline years={years} isFooterVisible={isFooterVisible} />

        <div className="rightSectionContainer w-fit m-2  lg:ml-[10%]">
          <div
            ref={upperObserver}
            className="upperDiv w-fit md:w-[87%] flex flex-col relative md:left-2 lg:left-[0%] ml-auto transform translate-y-[10vh] "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={upperInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src={top}
                alt="Top Image"
                width={1200}
                height={800}
                className=" h-auto object-cover relative w-full "
              />
            </motion.div>

            <motion.div
              className="sideContentDiv flex flex-col relative bg-sky-500 transform text-justify p-8 left-0 md:left-[35%]  md:bottom-[5vh] lg:bottom-[45vh] w-full sm:w-[60%] md:w-[65%] lg:w-[65%] z-50 transition-all ease-in-out duration-300 hover:-translate-y-1 "
              initial={{ opacity: 0, x: 100 }}
              animate={upperInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <div className="header flex relative w-full">
                <p className="lg:text-4xl sm:text-3xl text-xl font-branding-medium p-2 text-left text-sky-900">
                  Every journey begins with a single step. Introducing the man
                  behind the legacy.
                </p>
              </div>
              <p className="font-branding-medium p-2 lg:text-xl text-white sm:text-lg text-md">
                Shri. J. V. Patel, or Jethabhai as he was fondly called, grew up
                in an India that was not industrially advanced. The lack of
                external inspiration only dared him to dream big and become an
                engineer. This self-made entrepreneur led projects that
                transformed and strengthened the backbone of the changed Indian
                industry.
              </p>
              <p className="font-branding-medium text-white p-2 lg:text-xl sm:text-lg text-md">
                The Standard Engineering Company was in fact founded on his
                belief in ‘indigenous’ growth. He also took several sick
                companies under his wing, which is why he was often known as the
                ‘Doctor of Sick Units’. He eventually became a full-time
                philanthropist, supporting multiple social and educational
                initiatives.
              </p>
            </motion.div>
          </div>

          <div ref={bottomObserver}>
            <motion.div
              className="bottomContentDiv w-fit md:w-[80%]  ml-auto text-gray-500 transition-all ease-in-out duration-300 hover:-translate-y-1  lg:z-10 lg:top-[-10rem] transform flex flex-col md:flex-row relative"
              initial={{ opacity: 0, y: 50 }}
              animate={bottomInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="imgDiv0 lg:w-fit justify-left z-50 w-full md:w-auto"
                initial={{ opacity: 0, x: -50 }}
                animate={bottomInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Image
                  src={historyOne}
                  alt="Mid Image"
                  width={600}
                  height={400}
                  className="md:w-[200px] lg:w-[300px] h-auto object-cover relative w-full sm:w-auto"
                />
              </motion.div>

              <motion.div
                className="flex flex-col relative w-full md:w-[50%]  items-center justify-center md:left-[4%]"
                initial={{ opacity: 0, x: 50 }}
                animate={bottomInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <p className="sm:text-3xl md:text-2xl lg:text-4xl lg:w-[95%]  font-branding-semibold text-center">
                  ‘Your right is in action, never to its fruits, let not the
                  fruits of action be your motive.’
                </p>
                <p className="text-md font-branding-semibold text-center mt-4">
                  The Bhagavad Gita, Chapter 2, Verse 47. A verse that was Shri.
                  J.V. Patel's guiding statement in life.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <Year1939 />

          <Year1952 />

          <Year1956 />

          <Year1957 />

          <Year1958 />

          <Year1960 />

          <Year1962 />

          <Year1964 />

          <Year1966 />

          <Year1986 />

          <Year1992 />

          <Year2001 />

          <Year2013 />

          <Year2016 />

          <Year2017 />

          <Year2017Sec2 />

          <Year2017Sec3 />

          <Year2019 />

          <Year2023 />

          <Year2023Sec2 />

          <Year2023Sec3 />
        </div>
      </div>
      <div ref={footerObserver}>
        <Footer />
      </div>
    </>
  );
};

export default page;
