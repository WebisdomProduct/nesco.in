// Navbar.js
"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const NavData = [
    { title: "About", route: "/about" },
    { title: "Businesses", route: "/businesses" },
    { title: "Investors", route: "/investors" },
    { title: "Media", route: "/media" },
    { title: "Careers", route: "/careers" },
    { title: "Contact", route: "/contact" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverStates, setHoverStates] = useState(
    Array(NavData.length).fill(false)
  );

  const logo = {
    title: "nesco",
    imagePath: "",
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const banner = document.querySelector(".banner-section");
    if (banner) {
      observer.observe(banner);
    }

    return () => {
      if (banner) {
        observer.unobserve(banner);
      }
    };
  }, []);

  return (
    <nav
      className={`py-6 md:px-16 px-8 flex items-center justify-between w-full z-[900] fixed transition-all duration-300 overflow-hidden ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      {!isScrolled && (
        <div
          className="fixed top-0 left-0 py-6 md:px-16 px-8  w-full h-20 shadow-2xl shadow-black"
          style={{
            background: "black",

            opacity: ".1",
          }}
        ></div>
      )}
      {/* Logo */}
      <div className="z-[999]">
        <span className="text-white lg:text-4xl text-3xl font-extrabold font-branding-light">
          {logo ? logo.title : "nesco"}
        </span>
      </div>

      {/* Desktop NavBar */}
      <div className="hidden lg:flex items-center z-10">
        <ul className="flex items-center ">
          {NavData.map((data, index) => (
            <li
              key={index}
              className={`text-white border-r border-white last:border-none xl:px-7 lg:px-5 flex justify-center w-full `}
            >
              <button
                className={`${
                  hoverStates[index] && "boxAnimation relative overflow-hidden"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {data.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="h-[30px] w-[200px] xl:w-[250px] relative">
          <input
            type="text"
            className="w-full h-full rounded-full pl-6 pr-12"
          />
          <span className="inline-block absolute top-1/2 -translate-y-1/2 right-5">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center z-10" onClick={toggleSidebar}>
        <FaBars className="text-white text-3xl" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#403092] p-8 transition-transform transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end items-center mb-8">
          <FaTimes
            className="text-white text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col gap-6">
          {NavData.map((data, index) => (
            <li key={index} className="text-white text-xl">
              {data.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
