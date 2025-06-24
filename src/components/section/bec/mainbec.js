"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
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

  const Children = [
    {
      comp: (<BecHero />),
      classCss: "section",
    },
    {
      comp: (<BecDescription />),
      classCss: "section",
    },
    {
      comp: (<BecHalls />),
      classCss: "section",
    },
    {
      comp: (<BecDisplay />),
      classCss: "section",
    },
    {
      comp: (<BecStats />),
      classCss: "section",
    },
    {
      comp: (<BecFacilities />),
      classCss: "section",
    },
    {
      comp: (<BecAmenities />),
      classCss: "section",
    },
    {
      comp: (<BecProfile />),
      classCss: "section",
    },
    {
      comp: (<BecEnquiries />),
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper activeSlide={activeSlide} className="overflow-x-hidden">
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainBec;