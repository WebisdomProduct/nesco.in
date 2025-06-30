"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

// Import all Indabrator components
import IndabratorHero from "./IndabratorHero";
import IndabratorIntro from "./IndabratorIntro";
import IndabratorServices from "./IndabratorServices";
import IndabratorUnits from "./IndabratorUnits";
import IndabratorUnitss from "./indrabratorUnits2";
import IndabratorStats from "./IndabratorStats";
import IndabratorProfile from "./IndabratorProfile";
import IndabratorEnquiries from "./IndabratorEnquiries";
import IndabratorDisplay from "./IndrabratorDisplay";

function MainIndabrator() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Pagewrapper activeSlide={activeSlide} className="overflow-x-hidden">
      <IndabratorHero />
      <IndabratorIntro />
      <IndabratorServices />
      <IndabratorDisplay />
      <IndabratorStats />
      <IndabratorUnits />
      <IndabratorUnitss />
      <IndabratorProfile />
      <IndabratorEnquiries />
    </Pagewrapper>
  );
}

export default MainIndabrator;