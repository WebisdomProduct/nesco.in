"use client";
import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Navbar.css";
import Nescologo from "@/assests/Home/logo-blue.png";
import Nescologo2 from "@/assests/Home/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoSearch } from "react-icons/go";

function Navbar({ activeSlide }) {
  const NavData = [
    {
      title: "About",
      route: "",
      subMenu: [
        { title: "Overview", route: "/overview" },
        { title: "Philosophy", route: "/philosophy" },
        { title: "History", route: "/history" },
        { title: "Leadership", route: "/leadership" },
      ],
    },
    {
      title: "Businesses",
      route: "",
      subMenu: [
        { title: "Bombay Exhibition Center", route: "" },
        { title: "Nesco Realty", route: "" },
        { title: "Hospitality", route: "" },
        { title: "Nesco Events", route: "" },
        { title: "Engineering", route: "" },
      ],
    },
    {
      title: "Investors",
      route: "",
      subMenu: [
        { title: "Announcements", route: "/announcements" },
        { title: "Financials", route: "/financials" },
        {
          title:
            "Disclosures under Regulation 46 of SEBI (LODR) Regulations, 2015 & Other statutory information Financials",
          route: "/sebi",
        },
        { title: "Shareholder Services", route: "/shareholders" },
        { title: "Stock Information", route: "/stock" },
      ],
    },
    {
      title: "Our Impact",
      route: "",
      subMenu: [
        {
          title: "Corporate Social Responsibility",
          route: "/social-responsibility",
        },
        { title: "Sustainability", route: "/sustainability" },
      ],
    },
    { title: "Life at Nesco", route: "/life-at-nesco", subMenu: [] },
    { title: "Contact", route: "/contact-us", subMenu: [] },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderWhite, setIsHeaderWhite] = useState(false);
  const [hoverStates, setHoverStates] = useState(
    Array(NavData.length).fill(false)
  );
  const [activePurpleSection, setActivePurpleSection] = useState(null);
  const [isFooter, setIsFooter] = useState(false);
  const [textBlack, setTextBlack] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [isClosed, setIsClosed] = useState(false);
  const [textWhite, setTextWhite] = useState(false);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null); // State to track expanded mobile menu

  const logo = {
    imagePath: Nescologo,
    link: "/",
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMouseEnter = (index) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
    setIsOpen(index);
    setTextWhite(true);
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
    setTextWhite(false);
  };

  const handleMouseLeave1 = () => {
    setIsClosed(false);
    setIsOpen(null);
  };
  const handleMouseEnter1 = () => {
    setIsClosed(true);
  };

  const toggleMobileMenu = (index) => {
    if (expandedMenuIndex === index) {
      setExpandedMenuIndex(null); // Collapse if already expanded
    } else {
      setExpandedMenuIndex(index); // Expand the clicked menu
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Banner Section
    ScrollTrigger.create({
      trigger: ".banner-section",
      start: "top top",
      end: "bottom top",
      onEnter: () => setIsScrolled(false),
      onLeave: () => setIsScrolled(true),
      onEnterBack: () => setIsScrolled(false),
      onLeaveBack: () => setIsScrolled(false),
      animation: gsap.to(".navbar", { opacity: 1, duration: 0.05 }),
    });

    // Header White Section
    const WhiteHeader = document.querySelectorAll(".header_white");
    WhiteHeader.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsHeaderWhite(true),
        onLeave: () => setIsHeaderWhite(false),
        onEnterBack: () => setIsHeaderWhite(true),
        onLeaveBack: () => setIsHeaderWhite(false),
        animation: gsap.to(".navbar", { opacity: 1, duration: 0.05 }),
      });
    });
    // Footer Section
    ScrollTrigger.create({
      trigger: ".footer_section",
      start: "top bottom",
      end: "bottom center",
      onEnter: () => setIsFooter(true),
      onLeave: () => setIsFooter(false),
      onEnterBack: () => setIsFooter(true),
      onLeaveBack: () => setIsFooter(false),
    });

    // Purple Sections
    const purpleSections = document.querySelectorAll(".header_purple");
    purpleSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActivePurpleSection(section),
        onLeave: () => setActivePurpleSection(null),
        onEnterBack: () => setActivePurpleSection(section),
        onLeaveBack: () => setActivePurpleSection(null),
      });
    });

    // Purple Sections
    const blackTextSections = document.querySelectorAll(".header_color_black");
    blackTextSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setTextBlack(section),
        onLeave: () => setTextBlack(null),
        onEnterBack: () => setTextBlack(section),
        onLeaveBack: () => setTextBlack(null),
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getTextColor = () => {
    if (activePurpleSection) {
      return "text-white border-white";
    }

    if (textWhite === true && !(isOpen === 4 || isOpen === 5)) {
      return "text-white border-white";
    }
    if (isClosed) {
      return "text-white border-white";
    }
    if (isFooter) {
      return "text-white border-white";
    }
    if (isOpen && !(isOpen === 4 || isOpen === 5)) {
      return "text-white border-white";
    }
    if (isOpen === 0) {
      return "text-white border-white";
    }
    if (activeSlide === 0) {
      return "text-black border-black";
    }
    if (isHeaderWhite) {
      return "text-white border-white";
    }
    if (textBlack) {
      return "text-black border-black";
    }

    if (isScrolled) {
      return "text-black border-black";
    } else return "text-white border-white";
  };

  useEffect(() => {
    const buttonColorElements = document.querySelectorAll(".buttonColor");
    const color = activeSlide === 0 ? "#06A7E5" : "#FFFFFF";

    buttonColorElements.forEach((element) => {
      element.style.color = color;
    });
  }, [activeSlide]);

  const getLogoColorWork = () => {
    if (activePurpleSection) {
      return Nescologo2;
    }

    if (textWhite === true && !(isOpen === 4 || isOpen === 5)) {
      return Nescologo2;
    }
    if (isClosed) {
      return Nescologo2;
    }
    if (isFooter) {
      return Nescologo2;
    }
    if (activeSlide === 0 && isOpen === null) {
      return Nescologo;
    }
    if (isOpen && !(isOpen === 4 || isOpen === 5)) {
      return Nescologo2;
    }
    if (isOpen === 0) {
      return Nescologo2;
    }
    if (textBlack) {
      return Nescologo;
    }
    if (isHeaderWhite) {
      return Nescologo2;
    }
    if (isScrolled) {
      return Nescologo;
    }
    return Nescologo2;
  };

  const changeNavbar = () => {
    if (activePurpleSection) {
      return "bg-[#2b2a76]";
    }
    return "";
  };
  const changeNavbar1 = () => {
    if (isFooter) {
      return "bg-[#2b2a76]";
    }
  };

  return (
    <nav
      className={`py-6 md:px-6 px-8 flex items-center justify-between w-full z-[999] fixed transition-all duration-50 ${changeNavbar()} ${changeNavbar1()}`}
    >
      {!isScrolled && (
        <div className="fixed top-0 left-0 py-6 md:px-16 px-8 w-full h-20"></div>
      )}
      {/* Logo */}
      <div className="z-50 relative">
        <Link href={logo.link}>
          <span className="overflow-hidden absolute inline-block w-[150px] h-[50px] top-1/2 -translate-y-1/2">
            <Image
              src={getLogoColorWork()}
              alt="Nesco Logo"
              className={`w-full h-full`}
            />
          </span>
        </Link>
      </div>

      {/* Desktop NavBar */}
      <div className={`hidden xl:flex items-center z-[60] relative`}>
        <ul className="flex items-center ">
          {NavData.map((data, index) => (
            <li
              key={index}
              className={`${getTextColor()} border-r font-branding-medium text-[1.1rem] last:border-none xl:px-6 lg:px-5`}
            >
              <Link
                href={data.route}
                key={index}
                className={`${
                  hoverStates[index] && "boxAnimation relative overflow-hidden"
                } w-full`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="h-[30px] w-[200px] xl:w-[110px] relative">
          <span
            className={`inline-block cursor-pointer absolute top-1/2 ${getTextColor()} -translate-y-1/2 right-5`}
          >
            <GoSearch className="text-[20px] " strokeWidth={1} />
          </span>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="xl:hidden flex items-center z-10" onClick={toggleSidebar}>
        <FaBars className={`${getTextColor()} text-3xl`} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#403092] p-8 transition-transform transform z-[60] ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <div className="flex justify-end items-center mb-8">
          <FaTimes
            className="text-white text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* search bar  */}
        <div className="h-[30px] my-10 relative">
          <input
            type="text"
            className="w-full h-full rounded-full pl-6 pr-12"
          />
          <span className="inline-block absolute top-1/2 -translate-y-1/2 right-5">
            <FaSearch />
          </span>
        </div>
        <ul className="flex flex-col gap-6">
          {NavData.map((data, index) => (
            <li key={index} className="text-white text-xl">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMobileMenu(index)}
              >
                <Link href={data.route}>{data.title}</Link>
                {data.subMenu.length > 0 && (
                  <span>
                    {expandedMenuIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                )}
              </div>
              {expandedMenuIndex === index && data.subMenu.length > 0 && (
                <ul className="pl-4 mt-2">
                  {data.subMenu.map((subData, subIndex) => (
                    <li key={subIndex} className="text-white text-lg my-1">
                      <Link href={subData.route}>{subData.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isOpen !== null
        ? NavData.map((data, index) => {
            if (index === isOpen && data.subMenu.length > 0) {
              return (
                <div
                  className={`absolute navbarAnimation top-0 pt-20 left-0 w-full  bg-black bg-opacity-90 z-40 hidden lg:flex`}
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <div className="w-full h-full flex justify-end ">
                    <ul className="flex flex-col gap-6 lg:gap-4 w-[60%] pl-10 pr-20 py-5 text-white">
                      {data.subMenu.map((subData, subIndex) => (
                        <li key={subIndex} className=" text-xl">
                          <Link
                            href={subData.route}
                            className="hover:text-secondary text-white transition-all duration-200"
                          >
                            {subData.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
          })
        : ""}
    </nav>
  );
}

export default Navbar;
