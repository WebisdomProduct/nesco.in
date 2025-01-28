"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logo = {
    title: "nesco",
    imagePath: "",
  };

  const NavData = [
    { title: "About", route: "/about" },
    { title: "Buisnesses", route: "/buisnesses" },
    { title: "Investors", route: "/investors" },
    { title: "Media", route: "/media" },
    { title: "Careers", route: "/careers" },
    { title: "Contact", route: "/contact" },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="bg-[#403092] py-8 md:px-16 px-8 flex items-center justify-between w-full z-[999] fixed">
      {/* Logo */}
      <div>
        <span className="text-white lg:text-4xl text-3xl font-extrabold font-branding-light">
          {logo ? logo.title : "nesco"}
        </span>
      </div>

      {/* Desktop NavBar */}
      <div className="hidden lg:flex items-center">
        <ul className="flex items-center xl:gap-10 lg:gap-3">
          {NavData.map((data, index) => (
            <li
              key={index}
              className="text-white border-r border-white last:border-none pr-5"
            >
              {data.title}
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="h-[30px] w-[200px] xl:w-[250px] relative">
          <input type="text" className="w-full h-full rounded-full" />
          <span className="inline-block absolute top-1/2 -translate-y-1/2 right-5">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center" onClick={toggleSidebar}>
        <FaBars className="text-white text-3xl" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#403092] p-8 transition-transform transform  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end items-center mb-8 md:mx-6">
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
