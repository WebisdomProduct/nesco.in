"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

// Import all Realty components
import RealtyHero from "./RealtyHero";
import RealtyIntro from "./RealtyIntro";
import RealtySpaces from "./RealtySpaces";
import RealtyCollaboration from "./RealtyCollaboration";
import RealtyStats from "./RealtyStats";
import RealtyInitiative from "./RealtyInitiative";
import RealtyAmenities from "./RealtyAmenities";
import RealtyProfile from "./RealtyProfile";
import RealtyEnquiries from "./RealtyEnquiries";

function MainRealty() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Pagewrapper activeSlide={activeSlide}>
      <RealtyHero />
      <RealtyIntro />
      <RealtySpaces />
      <RealtyCollaboration />
      <RealtyStats />
      <RealtyInitiative />
      <RealtyAmenities />
      <RealtyProfile />
      <RealtyEnquiries />
    </Pagewrapper>
  );
}

export default MainRealty;