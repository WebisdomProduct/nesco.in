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
import AnimateOnScroll from "@/components/common/animateContent/animation";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainRealty() {
  const Children = [
    {
      comp: <RealtyHero />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyIntro />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtySpaces />
        </AnimateOnScroll>
      ),
      classCss: "section header_white",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyCollaboration />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyStats />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyInitiative />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyAmenities />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyProfile />
        </AnimateOnScroll>
      ),
      classCss: "header_purple section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <RealtyEnquiries />
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

export default MainRealty;
