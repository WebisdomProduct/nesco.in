"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import Image from "next/image";
import top from "@/assests/history/top.png";
import mid from "@/assests/history/mid.png";
import historyOne from "@/assests/history/historyOne.png";
import historyTwo from "@/assests/history/historyTwo.png";
import historyThree from "@/assests/history/historyThree.png";
import historyFour from "@/assests/history/historyFour.png";
import historyFive from "@/assests/history/historyFive.png";
import historySix from "@/assests/history/historySix.png";
import historyEight from "@/assests/history/historyEight.png";
import historyNine from "@/assests/history/historyNine.png";
import historyTen from "@/assests/history/historyTen.png";
import historyEleven from "@/assests/history/historyEleven.png";
import nescoLogo from "@/assests/history/nescoLogo.png";
import historyXIV from "@/assests/history/historyXIV.png";
import historyXV from "@/assests/history/historyXV.png";
import XVI from "@/assests/history/XVI.png";
import XVII from "@/assests/history/XVII.png";
import XIX from "@/assests/history/XIX.png";
import historySeven from "@/assests/history/historySeven.jpg";
import historyXII from "@/assests/history/historyXII.jpg";
import historyXIII from "@/assests/history/historyXIII.jpg";
import XVIII from "@/assests/history/XVIII.jpg";
import XX from "@/assests/history/XX.jpg";
import XXI from "@/assests/history/XXI.png";
import { IoEllipseOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Timeline = ({ years }) => {
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
    <div className="sideProgress flex flex-col fixed  items-center mt-[7%] ml-auto sm:w-auto md:w-auto lg:w-[13%] p-4 rounded-lg">
      <ul className="relative pl-4">
        {years.map((year, index) => (
          <li key={index} className="flex items-center space-x-2 mb-4">
            <span
              className={`w-3 h-3 rounded-full transition-all ${
                year.toString() === activeYear
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-500"
              }`}
            ></span>
            <p
              className={`text-xl font-branding-semibold transition-all ${
                year.toString() === activeYear
                  ? "text-black font-bold"
                  : "text-gray-600"
              }`}
            >
              {year}
            </p>
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
  const [year1939InView, setYear1939InView] = useState(false);
  const [year1952InView, setYear1952InView] = useState(false);

  const controls = useAnimation();

  const { ref: upperObserver } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setUpperInView(inView),
  });

  const { ref: bottomObserver } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setBottomInView(inView),
  });

  const { ref: year1939Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1939InView(inView),
  });

  const { ref: year1952Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1952InView(inView),
  });

  useEffect(() => {
    if (year1952InView) {
      controls.start({ count: 1952 });
    }
  }, [year1952InView, controls]);


  return (
    <div className="historyDiv max-w-full m-2 flex flex-col overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Timeline years={years} />

      <div className="rightSectionContainer w-fit h-fit mt-[11%] m-2  right-2 ml-[15%]">
        <div
          ref={upperObserver}
          className="upperDiv  w-fit md:w-[87%] flex flex-col p-5  mb-3 relative h-auto md:left-2 lg:left-[2%]  ml-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={upperInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={top}
              alt="Top Image"
              width={1500}
              height={300}
              className=" lg:w-[90%]  h-auto object-cover relative"
            />
          </motion.div>

          <motion.div
            className="sideContentDiv  flex flex-col  relative bg-sky-500 text-justify p-8 
                 left-[35%] md:bottom-[5vh] lg:bottom-[45vh]    sm:w-[40%] md:w-[65%] lg:w-[65%] 
                 z-50 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-gray-600"
            initial={{ opacity: 0, x: 100 }}
            animate={upperInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <div className="header flex relative w-fit  h-fit">
              <p className="lg:text-6xl sm:text-2xl font-branding-medium p-2  text-left text-sky-900">
                Every journey begins with a single step. Introducing the man
                behind the legacy.
              </p>
            </div>
            <br></br>
            <br></br>
            <p className="font-branding-medium p-2 lg:text-2xl text-white sm:text-md md: text-md">
              {" "}
              Shri. J. V. Patel, or Jethabhai as he was fondly called, grew up
              in an India that was not industrially advanced. The lack of
              external inspiration only dared him to dream big and become an
              engineer. This self-made entrepreneur led projects that
              transformed and strengthened the backbone of the changed Indian
              industry.
            </p>
            <br></br>
            <br></br>
            <p className="font-branding-medium text-white p-2 lg:text-2xl sm:text-md md: text-md">
              The Standard Engineering Company was in fact founded on his belief
              in ‘indigenous’ growth. He also took several sick companies under
              his wing, which is why he was often known as the ‘Doctor of Sick
              Units’. He eventually became a full-time philanthropist,
              supporting multiple social and educational initiatives.
            </p>
          </motion.div>
        </div>

        <div ref={bottomObserver}>
          <motion.div
            className="bottomContentDiv w-fit md:w-[75%] lg:bottom-[20vh] ml-auto text-gray-500 p-4 pt-6 transition-all 
                ease-in-out duration-300 hover:-translate-y-1 mt-6 flex flex-col md:flex-row relative"
            initial={{ opacity: 0, y: 50 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Image Animation: Slides in from the left */}
            <motion.div
              className="imgDiv w-fit justify-left z-50"
              initial={{ opacity: 0, x: -50 }}
              animate={bottomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Image
                src={historyOne}
                alt="Mid Image"
                width={300}
                height={200}
                className="md:w-[95%] lg:w-[90%] h-auto object-cover relative"
              />
            </motion.div>

            <motion.div
              className="textDiv flex flex-col relative w-[50%] m-2 items-center justify-center left-[4%]"
              initial={{ opacity: 0, x: 50 }}
              animate={bottomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="md:text-2xl lg:text-4xl font-branding-semibold text-center p-2">
                ‘Your right is in action, never to its fruits, let not the
                fruits of action be your motive.’
              </p>
              <p className="text-md font-branding-semibold text-center p-2">
                The Bhagavad Gita, Chapter 2, Verse 47. A verse that was Shri.
                J.V. Patel's guiding statement in life.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={year1939Observer}
          className="year1939Div  mt-[3%] w-fit md:w-[85%] relative  p-4 items-center h-fit flex flex-col md:flex-row-reverse m-4   ml-auto"
          data-year="1939"
          initial={{ opacity: 0, y: 50 }}
          animate={year1939InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <div className="iconDiv h-fit w-fit mt-4 m-6 flex-1 relative">
            <Image
              src={mid}
              alt="Top Image"
              width={1000}
              height={500}
              className=" lg:w-[90%]  h-auto object-cover relative"
              priority
            />
            <div className="year absolute  z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2">
              <p className="text-[100px] text-white font-branding-bold  ">19</p>
              <p className="text-[100px] text-cyan-400 font-branding-bold  ">
                39
              </p>
            </div>
          </div>

          <motion.div
            className="year1939Div flex-1 flex flex-col  justify-center items-center relative h-fit p-2 "
            initial={{ opacity: 0, x: 50 }}
            animate={year1939InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="rightContent  text-left w-fit p-4 ">
              <Image
                src={historyTwo}
                alt="Top Image"
                width={300}
                height={300}
                className="md:w-[80%] lg:w-[90%]  h-auto object-cover relative"
                priority
              />
              <p className="text-left text-gray-600 mt-6 sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs">
                The founder, Shri. J.V. Patel manifests his vision as the
                Standard Engineering Company (SEC).
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={year1952Observer}
          className="1952Div mt-[3%] w-fit relative p-4 ml-auto   h-fit flex flex-col md:flex-row justify-center items-center   transition-all ease-in-out duration-300
          hover:translate-y-1   "
          data-year="1952"
          initial={{ opacity: 0, y: 50 }}
          animate={year1952InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="contentDiv p-4 sm:p-6 md:p-8 m-2 flex flex-col items-left relative h-fit"
            initial={{ opacity: 0, x: -100 }}
            animate={year1952InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {[
              "Empress Iron Works Ltd / Acme Mfg Co",
              "Ltd / Khandelwal Udyog Ltd / Glass",
              "Lined Equipment Co Ltd / Indian Furnace",
              "Co Ltd / Ceramics Mfg Co / Mapara",
              "Parekh Ltd / Electric Instruments Mfg",
              "Co Ltd / Agro Precision Co Ltd / Millars",
              "Construction Machinery Ltd",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="bg-blue-700 m-2 p-2 sm:p-3 md:p-4 text-lg sm:text-xl md:text-2xl text-white font-poppins rounded-md max-w-lg"
                initial={{ opacity: 0, x: -50 }}
            animate={year1952InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="iconDiv ml-auto flex items-center justify-center relative w-fit"
            initial={{ opacity: 0, x: 100 }}
            animate={year1952InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <IoEllipseOutline
              className="w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
              color="cyan"
              strokeWidth={1}
            />
            <span className="absolute text-blue-600 text-center w-fit flex flex-col items-center">
              <motion.p
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={year1952InView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                1952
              </motion.p>
              <motion.p
                className="w-60 sm:w-72 md:w-80 lg:w-96 p-2 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={year1952InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                By this time, SEC was taking over & reviving the fortunes of
                several struggling companies to build an engineering powerhouse.
              </motion.p>
            </span>
          </motion.div>
        </motion.div>

        <div className="1956Div mt-[3%] w-fit relative p-4 items-center h-fit flex flex-col md:flex-row m-4  transition-all ease-in-out duration-300 hover:translate-y-1 gap-10 ml-auto">
          <div
            className="iconDiv flex items-center justify-center relative h-fit w-fit mt-4 md:m-6"
            data-year="1956"
          >
            <Image
              src={historyThree}
              alt="Top Image"
              width={350}
              height={350}
              className="max-w-[350px] w-full h-auto"
            />
          </div>

          <div className="contentDiv p-6 sm:p-8 m-2 flex flex-col relative bg-blue-900 h-fit w-full">
            <p className="text-4xl sm:text-3xl md:text-5xl text-left ml-2 p-2 text-white">
              New Standard Engineering <br className="hidden sm:block" />
              Company Ltd
            </p>

            <div className="content flex flex-col sm:flex-row items-center relative top-4 w-full sm:w-fit m-2 p-3 gap-3 bg-white rounded-md">
              <div className="div1 flex p-2 items-center">
                <p className="text-3xl sm:text-4xl text-gray-400">1956</p>
              </div>

              <div className="div2 flex p-2 text-lg sm:text-xl text-cyan-800 text-center sm:text-left">
                <p>
                  The acquisition of Burjorji Pestonji & Son{" "}
                  <br className="hidden sm:block" />
                  re-christens the company as the New Standard Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="year1957Div mt-[3%] w-f relative p-4 flex flex-col md:flex-row-reverse m-4 transition-all  ease-in-out duration-300 hover:translate-y-1">
          <div
            className="iconDiv h-fit w-full md:w-1/2 mt-4 m-6 relative flex justify-center"
            data-year="1957"
          >
            <Image
              src={historyFour}
              alt="Top Image"
              width={1000}
              height={500}
              className="w-full h-auto max-w-[1000px] rounded-lg"
              priority
            />

            <div className="year absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2">
              <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-white font-branding-bold">
                19
              </p>
              <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-cyan-400 font-branding-bold">
                57
              </p>
            </div>
          </div>

          <div className="contentDiv flex-1 flex flex-col justify-center items-center p-2">
            <div className="rightContent text-left w-full max-w-md p-4">
              <p className="text-right text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
                New Standard Engineering collaborates with B&S Massey Ltd to
                become the first manufacturer in India for forging hammers &
                presses.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year1958 mt-16 flex flex-col gap-2  relative items-center justify-center w-fit m-auto "
          data-year="1958"
        >
          <div className="topDiv  flex relative items-center justify-center m-4 border-b-2 border-cyan-300 w-full">
            <p className="text-[80px] text-cyan-400">1958</p>
          </div>
          <div className="bottomDiv  m-4 flex ">
            <p className="sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs text-center text-gray-400">
              The Company launches its public issue, which is quickly
              oversubscribed.
            </p>
          </div>
        </div>

        <div
          className=" year1960 relative mt-16 flex  flex-col md:flex-row items-center  p-6 w-fit ml-auto"
          data-year="1960"
        >
          <div className="bg-[#001F9C] bottom-3 text-white flex-1 p-6 relative w-full md:w-[60%] h-full">
            <h2 className="text-5xl font-bold text-blue-300">1960</h2>
            <Image
              src={historyFive}
              alt="Icon"
              width={580}
              height={280}
              className="mt-4"
            />
            <p className="mt-4 text-lg leading-relaxed max-w-sm">
              Sumant Patel founds the Gujarat Machinery Manufacturers Ltd, which
              later becomes GMM Pfaudler Ltd.
            </p>
          </div>

          <div className="absolute md:relative md:w-[60%] top-16 md:top-10 right-2 z-10">
            <Image
              src={historySix}
              alt="Historic Event"
              width={600}
              height={500}
              className="md:w-[90%] lg:w-[80%]  h-auto object-cover relative"
            />
          </div>
        </div>

        <div
          className="year1962  flex flex-col relative md:flex-row w-fit mt-[15%] p-auto "
          data-year="1962"
        >
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={historySeven}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-[#001F9C] sm:w-[50%] md:w-[85%] lg:w-[20%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow h-auto ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-right h-fit sm:top-10 md:top-0 lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
                1962
              </p>
            </div>

            <div className="bottomContent flex flex-col  relative   sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[30%] lg:top-[70%] right-10 text-right  w-full  ">
              <p className=" sm:text-md md:text-md lg:text-xl text-cyan-500 font-poppins">
                The New Standard Engineering Company is known to have the
                largest foundry in the private sector, making specialised
                castings for the company's forging equipment product line.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year1964 flex flex-col relative md:flex-row  mt-[25%] p-auto "
          data-year="1964"
        >
          <div className="contentDiv flex  relative bg-cyan-400 h-auto m-2 left-[5%] w-[50%] md:w-[65%] ">
            <div className="yearDiv flex flex-col relative  h-fit sm:top-1/2 md:top-[80%] lg:top-1/3 sm:left-3 md:left-[10%] lg:left-[5%]  ">
              <p className="sm:text-2xl md:text-6xl lg:text-8xl text-blue-800 font-branding-bold">
                1964
              </p>
            </div>

            <div className="textDiv relative flex m-2 p-2   h-fit sm:top-10 md:top-1 lg:top-[60%] sm:right-12 md:right-1/3  lg:right-[20%]  w-full">
              <p className="sm:text-md md:text-md lg:text-2xl text-white font-poppins">
                Indabrator is born, on the basis<br></br> of a joint venture
                signed with Wheelabrator Corporation, USA<br></br> for the
                manufacturing of shot-blasting equipment in India.
              </p>
            </div>
          </div>

          <div className="imgDiv  w-fit flex relative z-10 top-[6vh] right-[5%] ">
            <Image
              src={historyEight}
              alt="Mid Image"
              width={700}
              height={400}
              className=" md:w-[90%] lg:w-[80%]  h-auto object-cover relative  "
            />
          </div>
        </div>

        <div
          className="year1966 flex flex-col relative  md:flex-row  mt-[15%] p-auto "
          data-year="1966"
        >
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={historyNine}
              alt="Mid Image"
              width={700}
              height={500}
              className=" md:w-[90%] lg:w-[80%]  h-auto object-cover relative  "
            />
          </div>
          <div className="rightDiv bg-cyan-500 sm:w-[50%] md:w-[70%] lg:w-[5%] flex flex-col justify-center relative right-[9%] lg:top-[30vh] md:top-[10vh] flex-grow z-20 gap-0 p-6">
            <div className="yearDiv flex flex-col relative w-auto sm:left-[10%] md:left-[1%] lg:left-[2%] text-left h-fit sm:top-10 md:top-2 lg:top-[5px]">
              <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-blue-800 font-branding-bold">
                1966
              </p>
            </div>

            <div className="bottomContent  w-full flex relative p-4 rounded-lg md:top-4 lg:top-16">
              <p className="sm:text-md md:text-md lg:text-2xl text-white font-poppins">
                The New Standard Engineering Company builds India's first
                antenna for space communication, strengthening its decade-long
                association with the Department of Atomic Energy.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year1986  relative w-fit flex justify-center items-center py-10 mt-[25%] ml-auto"
          data-year="1986"
        >
          <div className="absolute top-0 left-[5%] w-[80%] h-[20vh] md:h-[25vh] lg:h-[50vh] bg-blue-900 z-0 "></div>

          <div className="relative z-10 w-[90%] md:w-[70%]">
            <Image
              src={historyTen}
              alt="Historical Image"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />

            <div className="absolute top-1/3 right-[10%] bg-white p-6 shadow-lg w-[50%] md:w-[35%]">
              <p className="text-gray-700 text-3xl font-semibold">1986</p>
              <p className="text-gray-600 mt-2">
                New Standard Engineering diversifies into realty and the Group
                welcomes a new sector.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year1992 relative flex flex-col  mt-[5%]"
          data-year="1992"
        >
          <div className="imgDiv flex relative z-10 top-10 left-1/3">
            <Image
              src={historyXII}
              alt="Historical Image"
              width={800}
              height={500}
              className="w-full md:w-[60%] lg:w-[50%] h-auto object-cover relative"
            />
          </div>

          <div className="contentDiv bg-blue-900 flex flex-col relative sm:w-[30%] md:w-[60%] lg:w-[40%] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh] sm:left-[5%] md:left-[5%] lg:left-[10%] gap-2 p-4 overflow-hidden">
            <div className="yearDiv flex w-fit h-fit mt-48 bottom-6">
              <p className="text-8xl text-blue-500">1992</p>
            </div>

            <div className="iconDiv flex w-fit">
              <Image
                src={historyEleven}
                alt="Historical Image"
                width={300}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="text relative flex flex-wrap mt-2 text-white p-2">
              <p className="text-xl leading-relaxed">
                The 200,000 square feet Bombay Exhibition Center<br></br>
                develops into the largest center<br></br>
                for exhibitions in the private sector in India.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year2001 flex flex-col relative   justify-center "
          data-year="2001"
        >
          <div className="imgDiv flex relative sm:top-6 md:top-6 lg:top-4 md:left-[3%] lg:left-[10%] ">
            <Image
              src={nescoLogo}
              alt="Historical Image"
              width={600}
              height={300}
              className=" md:w-[50%] lg:w-[30%] h-auto object-cover relative"
            />
          </div>
          <div className="contentDiv flex flex-col sm:left-[40%] md:left-[55%] gap-4  sm:w-[25vh] md:w-[35vh] lg:w-[45vh] relative p-4 sm:bottom-[22vh] lg:bottom-[25vh] border h-[25vh] border-gray-800">
            <div className="yearDiv flex relative w-fit left-2">
              <p className="text-3xl text-gray-600">2001</p>
            </div>
            <div className="textDiv flex relative left-2 text-gray-400">
              <p className=" md:text-xl lg:text-2xl">
                The Company rebrands <br></br> itself as Nesco Limited <br></br>{" "}
                in light of further diversification <br></br> and business
                verticals.
              </p>
            </div>
          </div>
        </div>

        <div className="year2013 flex flex-col relative  " data-year="2013">
          <div className="contentDiv bg-[#001F9C] flex relative w-[50%] md:w-[55%] left-[8%]  md:top-[5vh] lg:top-[50vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]  ">
            <div className="yearDiv flex relative sm: top-[15vh] md:top-[15vh] lg:top-[27vh] left-2  w-fit h-fit">
              <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
                2013
              </p>
            </div>

            <div className="textDiv flex relative w-full h-fit md:top-[30vh] lg:top-[45vh]  sm:right-[40%] md:right-[40%] lg:right-[26%] p-2">
              <p className="sm:text-md md:text-lg lg:text-xl text-white">
                Launched Nesco IT Park,<br></br> Tower 03 (6.6 lakh sq. ft. area
                <br></br> licensed to Marquee MNC clients)
              </p>
            </div>
          </div>
          <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh]">
            <Image
              src={historyXIII}
              alt="Historical Image"
              width={700}
              height={500}
              className=" md:w-[50%] lg:w-[50%]  h-auto object-cover relative"
            />
          </div>
        </div>

        <div className="year2016 flex flex-col relative   " data-year="2016">
          <div className="imgDiv flex relative left-[8%] z-10 lg:bottom-[10vh] ">
            <Image
              src={historyXIV}
              alt="Historical Image"
              width={700}
              height={500}
              className=" md:w-[50%] lg:w-[50%]  h-auto object-cover relative"
            />
          </div>
          <div className="contentDiv flex relative bg-sky-500 md:w-[45%] lg:w-[35%] left-1/2 text-left md:bottom-[50vh] lg:bottom-[80vh] md:h-[60vh] lg:h-[80vh]">
            <div className="yearDiv flex relative  md:left-[25%] lg:left-[30%] md:top-1/4 lg:top-1/3 h-fit ">
              <p className="md:text-6xl lg:text-8xl text-white font-branding-bold">
                2016
              </p>
            </div>

            <div className="textDiv flex relative  w-fit h-fit md:top-[25vh] lg:top-[50vh] right-6 ">
              <p className="md:text-lg lg:text-xl text-white">
                The beginning of<br></br> Nesco Foods. Mumbai gains one<br></br>{" "}
                of the largest and most hygienic food<br></br> production
                centers in the non-flight<br></br> category, serving<br></br>{" "}
                50,000 meals per<br></br> day.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year2017 flex flex-col relative  z-30 md:bottom-[40vh] lg:bottom-[70vh]   "
          data-year="2017"
        >
          <div className="contentDiv bg-[#001F9C] flex relative w-[55%] left-[8%]  md:top-[5vh] lg:top-[20vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]  ">
            <div className="yearDiv flex relative sm: top-[15vh] md:top-[15vh] lg:top-[27vh] md:left-2 lg:left-4  w-fit h-fit">
              <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
                2017
              </p>
            </div>

            <div className="textDiv flex relative w-fit h-fit md:top-[30vh] lg:top-[45vh]  sm:right-[40%] md:right-[40%] lg:right-[24%] p-2">
              <p className="sm:text:md md:text-lg lg:text-xl text-white">
                Nesco Events comes to life, delighting patrons with intellectual
                properties, exhibitions and private events.
              </p>
            </div>
          </div>
          <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh] ">
            <Image
              src={historyXV}
              alt="Historical Image"
              width={600}
              height={500}
              className=" md:w-[50%] lg:w-[40%]  h-auto object-cover relative"
            />
          </div>
        </div>

        <div
          className="year2017  flex flex-col relative  z-40 md:bottom-[40vh] lg:bottom-[70vh] "
          data-year="2017"
        >
          <div className="imgDiv flex relative left-[8%] z-10 lg:bottom-[10vh] ">
            <Image
              src={XVI}
              alt="Historical Image"
              width={700}
              height={500}
              className=" md:w-[50%] lg:w-[50%]  h-auto object-cover relative"
            />
          </div>
          <div className="contentDiv flex relative bg-sky-500 md:w-[45%] lg:w-[45%] left-1/2 text-left md:bottom-[25vh] lg:bottom-[98vh] md:h-[35vh] lg:h-[60vh]">
            <div className="yearDiv flex relative  md:left-1/2 lg:left-[50%] md:top-[20%] lg:top-1/4 h-fit ">
              <p className="md:text-6xl lg:text-9xl text-white font-branding-bold">
                2017
              </p>
            </div>

            <div className="textDiv flex relative  md:w-48 lg:w-72 h-fit md:top-1/2 lg:top-[40vh] lg:left-[15%] ">
              <p className="md:text-lg lg:text-xl text-white text-justify">
                Rangilo Re, started on 2017 has becpme one of the top Navratri
                destinations of Mumbai.
              </p>
            </div>
          </div>
        </div>

        <div
          className="year2017  flex flex-col relative  md:bottom-[50vh] lg:bottom-[120vh] z-50 "
          data-year="2017"
        >
          <div className="contentDiv bg-[#001F9C] flex relative w-[50%] left-[8%]  md:top-[25vh] lg:top-[60vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]  ">
            <div className="yearDiv flex relative sm: top-[15vh] md:top-[15vh] lg:top-[27vh] left-2  w-fit h-fit">
              <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
                2017
              </p>
            </div>

            <div className="textDiv flex relative w-fit h-fit md:top-[30vh] lg:top-[45vh]  sm:right-[40%] md:right-[40%] lg:right-[26%] p-2">
              <p className="sm:text:md md:text-lg lg:text-xl text-white">
                Added a premium lounge/bar “Dress Circle” towards the end of the
                year in Nesco Centre
              </p>
            </div>
          </div>
          <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh]">
            <Image
              src={XVII}
              alt="Historical Image"
              width={700}
              height={500}
              className=" md:w-[50%] lg:w-[40%]  h-auto object-cover relative"
            />
          </div>
        </div>

        <div
          className="year2019  flex flex-col relative md:flex-row md:bottom-[40vh] lg:bottom-[110vh] p-auto "
          data-year="2019"
        >
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={XVIII}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-sky-500 sm:w-[50%] md:w-[65%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-[10vh] lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
                2019
              </p>
            </div>

            <div className="bottomContent flex  relative   sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[50%] lg:top-[70%] md:right-10 lg:left-[12%] text-right  h-fit  ">
              <p className=" sm:text-md md:text-lg lg:text-2xl text-white">
                Launched Nesco IT Park,
                <br /> Tower 04 (11.20 lakh sq. ft. area licensed <br /> to
                Marquee MNC clients)
              </p>
            </div>
          </div>
        </div>

        <div
          className="year2023  flex flex-col relative md:flex-row md:bottom-[20vh] lg:bottom-[60vh] p-auto "
          data-year="2023"
        >
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={XIX}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-sky-500 sm:w-[50%] md:w-[50%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-1/4 lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
                2023
              </p>
            </div>

            <div className="bottomContent flex  relative   sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[55%] lg:top-[70%] md:right-8 lg:left-[27%] lg:w-48 text-left  h-fit  ">
              <p className=" sm:text-md md:text-lg lg:text-2xl text-white">
                Recognition as one of the Top 10 Brands in Real Estate
              </p>
            </div>
          </div>
        </div>

        <div
          className="year2023  flex flex-col relative  md:bottom-[10vh] lg:bottom-[2%] "
          data-year="2023"
        >
          <div className="contentDiv bg-[#001F9C] flex relative w-[50%] left-[8%]  md:top-[5vh] lg:top-[20vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]  ">
            <div className="yearDiv flex relative sm: top-[15vh] md:top-[15vh] lg:top-[27vh] left-2  w-fit h-fit">
              <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
                2023
              </p>
            </div>

            <div className="textDiv flex relative w-fit h-fit md:top-[30vh] lg:top-[45vh]  sm:right-[40%] md:right-[40%] lg:right-[26%] p-2">
              <p className="sm:text:md md:text-lg lg:text-xl text-white">
                Bombay Exhibition Centre (BEC) awarded for support extended to
                Intimasia 2023{" "}
              </p>
            </div>
          </div>
          <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[50vh]">
            <Image
              src={XX}
              alt="Historical Image"
              width={700}
              height={500}
              className=" md:w-[50%] lg:w-[40%]  h-auto object-cover relative"
            />
          </div>
        </div>

        <div
          className="year2023  flex flex-col relative md:flex-row md:bottom-[20vh] lg:bottom-[3%] p-auto "
          data-year="2023"
        >
          <div className="imgDiv  w-fit flex relative z-10 left-[6%]">
            <Image
              src={XXI}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-sky-500 sm:w-[50%] md:w-[65%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-1/4 lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
                2023
              </p>
            </div>

            <div className="bottomContent flex  relative   sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[55%] lg:top-[70%] md:right-8 lg:left-[27%] lg:w-72 text-left  h-fit  ">
              <p className=" sm:text-md md:text-lg lg:text-2xl text-white">
                Food Connoisseurs India Awards – Best Customer Experience in
                Food Court{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
