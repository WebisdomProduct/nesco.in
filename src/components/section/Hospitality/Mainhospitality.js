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
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainHospitality() {
  const Children = [
    {
      comp: <HospitalityHero />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityIntro />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityServices />
        </AnimateOnScroll>
      ),
      classCss: "section header_white",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityDisplay />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityStats />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityRoot />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityFacilities />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <HospitalityProfile />
        </AnimateOnScroll>
      ),
      classCss: "header_purple ",
    },
    // {
    //   comp: (
    //     <AnimateOnScroll>
    //       <RealtyEnquiries />
    //     </AnimateOnScroll>
    //   ),
    //   classCss: "header_purple",
    // },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainHospitality;
