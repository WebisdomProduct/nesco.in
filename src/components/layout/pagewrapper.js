"use client"
import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

function Pagewrapper({children, activeSlide}) {

  return (
    <div>
      <Navbar activeSlide={activeSlide} />
      {children}
      <Footer />
    </div>
  );
}

export default Pagewrapper;
