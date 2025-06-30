"use client";
import React, { useEffect, useRef, useState } from "react";
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
import searchSuggestions from "@/utils/seachData";
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
        { title: "Bombay Exhibition Center", route: "/bombay-exhibition-center" },
        { title: "Nesco Realty", route: "/realty" },
        { title: "Hospitality", route: "/hospitality" },
        { title: "Nesco Events", route: "/nescoevent" },
        { title: "Engineering", route: "/indrabrator" },
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
        { title: "", route: "" },
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
  const [hoverStyle, setHoverStyle] = useState({ height: 0, opacity: 0 });
  const [isClosed, setIsClosed] = useState(false);
  const [textWhite, setTextWhite] = useState(false);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null); // State to track expanded mobile menu
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const logo = {
    imagePath: Nescologo,
    link: "/",
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = searchSuggestions.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMouseEnter = (index) => {
    if (isAnimating) return;

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

  const handleDropdownEnter = () => {
    // No need to do anything special on enter
  };

  const handleDropdownLeave = () => {
    setIsAnimating(true);
    setIsOpen(null);

    // Reset after animation would complete

    setIsAnimating(false);
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

    // Check screen size
    const checkScreenSize = () => {
      const isMobileOrTablet = window.innerWidth <= 1024; // Adjust breakpoint as needed

      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.id === "sectionTrigger") {
          trigger.kill();
        }
      });

      // Get all sections we want to observe
      const sectionsToObserve = isMobileOrTablet
        ? document.querySelectorAll("section") // All sections on mobile/tablet
        : document.querySelectorAll(".header_purple"); // Only purple sections on desktop

      sectionsToObserve.forEach((section) => {
        ScrollTrigger.create({
          id: "sectionTrigger", // Add identifier so we can kill these later
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActivePurpleSection(section),
          onLeave: () => setActivePurpleSection(null),
          onEnterBack: () => setActivePurpleSection(section),
          onLeaveBack: () => setActivePurpleSection(null),
        });
      });
    };

    // Initial setup
    checkScreenSize();

    // Update on resize
    window.addEventListener("resize", checkScreenSize);

    // White Header Section (keep existing)
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

    // Footer Section (keep existing)
    ScrollTrigger.create({
      trigger: ".footer_section",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        if (window.innerWidth <= 768) setIsFooter(true);
      },
      onLeave: () => {
        if (window.innerWidth <= 768) setIsFooter(false);
      },
      onEnterBack: () => {
        if (window.innerWidth <= 768) setIsFooter(true);
      },
      onLeaveBack: () => {
        if (window.innerWidth <= 768) setIsFooter(false);
      },
    });

    // Black Text Sections (keep existing)
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
      window.removeEventListener("resize", checkScreenSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getTextColor = () => {
    if (activePurpleSection) return "text-white border-white";
    if (textWhite && !(isOpen === 4 || isOpen === 5))
      return "text-white border-white";
    if (isFooter) return "text-white border-white";
    if (isOpen !== null && !(isOpen === 4 || isOpen === 5))
      return "text-white border-white";
    if (isOpen === 0) return "text-white border-white";
    if (activeSlide === 0) return "text-black border-black";
    if (isHeaderWhite) return "text-white border-white";
    if (textBlack) return "text-black border-black";
    if (isScrolled) return "text-black border-black";
    return "text-white border-white";
  };

  useEffect(() => {
    const buttonColorElements = document.querySelectorAll(".buttonColor");
    const color = activeSlide === 0 ? "#06A7E5" : "#FFFFFF";

    buttonColorElements.forEach((element) => {
      element.style.color = color;
    });
    getTextColor();
  }, [
    activeSlide,
    activePurpleSection,
    textWhite,
    isOpen,
    isFooter,
    textBlack,
    isHeaderWhite,
    isScrolled,
  ]);

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

  useEffect(() => {
    if (isOpen !== null && NavData[isOpen]?.subMenu?.length > 0) {
      const isThirdItemHovered =
        hoverStates[3] &&
        hoverStates.every((state, i) => (i === 3 ? state : !state));

      setHoverStyle({
        height: !isThirdItemHovered
          ? NavData[isOpen].subMenu.length * 64 + 60
          : NavData[isOpen].subMenu.length * 60 + 60,
        opacity: 0,
      });
    } else {
      setHoverStyle({ height: 0, opacity: 0 });
    }
  }, [isOpen, hoverStates]);

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
      // className={`py-6 md:px-6 px-8 flex items-center justify-between w-full z-[999] fixed transition-all duration-50 ${changeNavbar()} ${changeNavbar1()}`}
      className={`py-6 md:px-6 px-8 flex items-center justify-between w-full z-[999] fixed top-0 transition-all duration-200 ${changeNavbar()} ${changeNavbar1()}`}
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
      <div
        className={`hidden xl:flex items-center z-[60] relative justify-end`}
      >
        <ul className="flex items-center ">
          {NavData.map((data, index) => (
            <li
              key={index}
              className={`${getTextColor()} border-r font-branding-medium text-[1.1rem] last:border-none xl:px-6 lg:px-5 `}
              // className={`${getTextColor()} border-r font-branding-medium text-[1.1rem] last:border-none xl:px-6 lg:px-5 ${
              //   isOpen !== null
              //     ? "animate-dropdown-open"
              //     : "animate-dropdown-close"
              // }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link
                href={data.route}
                key={index}
                className={`${
                  hoverStates[index] && "boxAnimation relative overflow-hidden"
                } w-full`}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className=" w-[200px] relative" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full h-10 pl-4 pr-10 rounded-full bg-opacity-20 ${
                isScrolled || textBlack
                  ? "bg-gray-200 text-black"
                  : "bg-white text-white"
              } focus:outline-none`}
              value={searchQuery}
              onChange={handleSearchChange}
              onClick={() => setShowSearchResults(true)}
            />
            <span
              className={`inline-block cursor-pointer absolute top-1/2 ${
                isScrolled || textBlack ? "text-gray-700" : "text-white"
              } -translate-y-1/2 right-3`}
            >
              <GoSearch
                className={`text-[20px] ${getTextColor()}`}
                strokeWidth={1}
              />
            </span>

            {/* Search results dropdown */}
            {showSearchResults && (
              <div className="absolute top-12 right-0 w-fit bg-white shadow-lg rounded-md z-50">
                <ul className="py-2">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                      >
                        <Link
                          href={result.route}
                          className="text-gray-800 block"
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery("");
                          }}
                        >
                          {result.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500 italic">
                      No results found
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
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
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span
            className={`inline-block absolute top-1/2 -translate-y-1/2 right-5`}
          >
            <FaSearch />
          </span>

          {/* Mobile search results */}
          {searchQuery && searchResults.length > 0 && (
            <div className="absolute top-10 left-0 w-full bg-white shadow-lg rounded-md z-50 mt-2">
              <ul className="py-2">
                {searchResults.map((result, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={result.route}
                      className="text-gray-800 block"
                      onClick={() => {
                        setSearchQuery("");
                        toggleSidebar();
                      }}
                    >
                      {result.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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

      <div
        className="absolute left-0 w-full -mt-24 bg-black bg-opacity-90 z-40 transition-all duration-300 overflow-hidden  hidden xl:block"
        style={{
          top: "100%",
          height: hoverStyle.height,
        }}
      ></div>
      {isOpen !== null &&
        NavData.map((data, index) => {
          if (index === isOpen && data.subMenu.length > 0) {
            return (
              <div
                key={index}
                className="absolute left-0 w-full pt-4 bg-transparant transition-all bg-opacity-90 z-40 duration-300 overflow-hidden hidden xl:block"
                // className={`absolute top-0 pt-20 left-0 w-full bg-black bg-opacity-90 z-40 overflow-hidden lg:flex
                // ${
                //   isOpen !== null
                //     ? "animate-dropdown-open"
                //     : "animate-dropdown-close"
                // }`}
                style={{
                  top: "100%",
                  // height: hoverStyle.height,
                }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="w-full flex justify-end">
                  <ul className="flex flex-col gap-6 lg:gap-4 w-[60%] pl-5 py-5">
                    {data.subMenu.map((subData, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-xl text-white opacity-0 animate-text-appear"
                        style={{ animationDelay: `${subIndex * 0.1}s` }}
                      >
                        <Link
                          href={subData.route}
                          className="hover:text-secondary transition-all duration-200"
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
          return null;
        })}
    </nav>
  );
}

export default Navbar;
