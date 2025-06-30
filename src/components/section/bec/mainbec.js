"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import AnimateOnScroll from "@/components/common/animateContent/animation";

// Import all BEC components
import BecHero from "./BecHero";
import BecDescription from "./BecDescription";
import BecHalls from "./BecHalls";
import BecDisplay from "./BecDisplay";
import BecStats from "./BecStats";
import BecFacilities from "./BecFacilities";
import BecAmenities from "./BecAmenities";
import BecProfile from "./BecProfile";
import BecEnquiries from "./BecEnquiries";

function MainBec() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Pagewrapper activeSlide={activeSlide} className="overflow-x-hidden">
      <BecHero />
      <BecDescription />
      <BecHalls />
      <BecDisplay />
      <BecStats />
      <BecFacilities />
      <BecAmenities />
      <BecProfile />
      <BecEnquiries />
    </Pagewrapper>
  );
}

export default MainBec;