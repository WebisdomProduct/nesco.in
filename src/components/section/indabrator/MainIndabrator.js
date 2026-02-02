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
import AnimateOnScroll from "@/components/common/animateContent/animation";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainIndabrator() {
  const Children = [
    {
      comp: <IndabratorHero />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorIntro />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorServices />
        </AnimateOnScroll>
      ),
      classCss: "section header_white",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorDisplay />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorStats />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorUnits />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorUnitss />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorProfile />
        </AnimateOnScroll>
      ),
      classCss: "header_purple ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <IndabratorEnquiries />
        </AnimateOnScroll>
      ),
      classCss: "header_purple ",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainIndabrator;
