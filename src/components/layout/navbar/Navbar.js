"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Nescologo from "@/assests/Home/nescoLogo1.png";
import Nescologo2 from "@/assests/Home/nescoLogo2.png";
import Image from "next/image";
import Link from "next/link";

function Navbar({ activeSlide }) {
  const NavData = [
    { title: "About", route: "" },
    { title: "Businesses", route: "" },
    { title: "Investors", route: "" },
    { title: "Our Impact", route: "" },
    { title: "Life at Nesco", route: "" },
    { title: "Contact", route: "/contact-us" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderWhite, setIsHeaderWhite] = useState(false);
  const [hoverStates, setHoverStates] = useState(
    Array(NavData.length).fill(false)
  );
  const [activePurpleSection, setActivePurpleSection] = useState(null); // Track active purple section
  const [isFooter, setIsFooter] = useState(false);

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
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  useEffect(() => {
    const banner = document.querySelector(".banner-section");
    const headerWhiteSection = document.querySelector(".header_white");
    const footerSection = document.querySelector(".footer_section");

    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderWhite(entry.isIntersecting);
      },
      { threshold: 0.5, rootMargin: "0px 0px 150px 0px" }
    );

    // Observe all sections with the class "header_purple"
    const purpleSections = document.querySelectorAll(".header_purple");
    const purpleObserver = new IntersectionObserver(
      (entries) => {
        let isAnyPurpleActive = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isAnyPurpleActive = true;
          }
        });

        setActivePurpleSection(isAnyPurpleActive ? entries[0].target : null);
      },
      { threshold: 0.1, rootMargin: "0px 0px 150px 0px" }
    );

    const FooterObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooter(entry.isIntersecting); // Update isPurple based on intersection
      },
      { threshold: 0.9, rootMargin: "0px 0px 150px 0px" } // Adjust rootMargin to detect footer earlier
    );

    if (banner) mainObserver.observe(banner);
    if (footerSection) FooterObserver.observe(footerSection);
    if (headerWhiteSection) headerObserver.observe(headerWhiteSection);
    purpleSections.forEach((section) => purpleObserver.observe(section));

    return () => {
      if (banner) mainObserver.unobserve(banner);
      if (headerWhiteSection) headerObserver.unobserve(headerWhiteSection);
      if (footerSection) FooterObserver.unobserve(footerSection);
      purpleSections.forEach((section) => purpleObserver.unobserve(section));
    };
  }, []);

  const getTextColor = () => {
    if (activePurpleSection) {
      return "text-white border-white"; // Apply white text for purple header
    }
    if (isFooter) {
      return "text-white border-white"; // Apply white text for purple header
    }
    if (activeSlide === 0) {
      return "text-black border-black";
    }
    if (isHeaderWhite) {
      return "text-white border-white";
    }
    if (isScrolled) {
      return "text-black border-black";
    }
    return "text-white border-white";
  };

  const getLogoColorWork = () => {
    if (activePurpleSection) {
      return "filter brightness-1"; // Apply brightness for purple header
    }
    if (isFooter) {
      return "filter brightness-1"; // Apply brightness for purple header
    }
    if (activeSlide === 0) {
      return "filter brightness-0";
    }
    if (isHeaderWhite) {
      return "filter brightness-1";
    }
    if (isScrolled) {
      return "filter brightness-0";
    }
    return "filter brightness-1";
  };

  const changeNavbar = () => {
    if (activePurpleSection) {
      return "bg-[#403092]"; // Apply purple background when a purple section is active
    }
    return ""; // Return empty string for other cases
  };
  const changeNavbar1 = () => {
    if (isFooter) {
      return "bg-[#403092]"; // Apply purple background when isPurple is true
    }
  };

  return (
    <nav
      className={`py-6 md:px-6 px-8 flex items-center justify-between w-full z-[999] fixed transition-all duration-300 overflow-hidden ${changeNavbar()} ${changeNavbar1()}`}
    >
      {!isScrolled && (
        <div className="fixed top-0 left-0 py-6 md:px-16 px-8 w-full h-20"></div>
      )}
      {/* Logo */}
      <div className="">
        <Link href={logo.link}>
          <span className="overflow-hidden absolute inline-block w-[180px] h-[60px] top-1/2 -translate-y-1/2">
            <Image
              src={Nescologo}
              alt="Nesco Logo"
              className={`w-full h-full ${getLogoColorWork()}`}
            />
          </span>
        </Link>
      </div>

      {/* Desktop NavBar */}
      <div className={`hidden xl:flex items-center z-10`}>
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
            <FaSearch className="text-[20px]" />
          </span>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="xl:hidden flex items-center z-10" onClick={toggleSidebar}>
        <FaBars className={`${getTextColor()} text-3xl`} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#403092] p-8 transition-transform transform z-20 ${
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
              <Link href={data.route}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
