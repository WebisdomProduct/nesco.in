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
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainBec() {
  // const [activeSlide, setActiveSlide] = useState(0);

  const Children = [
    {
      comp: <BecHero />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecDescription />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecHalls />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecDisplay />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecStats />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecFacilities />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecAmenities />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecProfile />
        </AnimateOnScroll>
      ),
      classCss: "header_purple section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <BecEnquiries />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainBec;
