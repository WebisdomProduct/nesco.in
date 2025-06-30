"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

// Import all Hospitality components
import HospitalityHero from "./HospitalityHero";
import HospitalityIntro from "./HospitalityIntro";
import HospitalityServices from "./HospitalityServices";
import HospitalityDisplay from "./HospitalityDisplay";
import HospitalityStats from "./HospitalityStats";
import HospitalityRoot from "./HospitalityRoot";
import HospitalityFacilities from "./HospitalityFacilities";
import HospitalityProfile from "./HospitalityProfile";

function MainHospitality() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Pagewrapper activeSlide={activeSlide}>
      <HospitalityHero />
      <HospitalityIntro />
      <HospitalityServices />
      <HospitalityDisplay />
      <HospitalityStats />
      <HospitalityRoot />
      <HospitalityFacilities />
      <HospitalityProfile />
    </Pagewrapper>
  );
}

export default MainHospitality;