"use client";
import React from "react";
import SustainabilityFeatures from "./sustainabilityFeatures";
import SustainablityText from "./sustainablityText";
import SustainabilityTerms from "./sustainabilityTerms";
import SustainabilityIssues from "./sustainabilityIssues";
import SustainabilityGovernance from "./sustainabilityGovernance";
import SustainabilityPerformance from "./sustainabilityPerformance";
import SustainabilityPractices from "./sustainabilityPractices";
import SustainabilityImage from "./sustainabilityImage";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import SustainabilityBanner from "./sustainabilityBanner";
import SustainablityStrategy from "./sustainablityStrategy";
import AnimateOnScroll from "@/components/common/animateContent/animation";
function MainSustainability() {
  const Children = [
    {
      comp: <SustainabilityBanner />,
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityFeatures />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainablityText />
        </AnimateOnScroll>
      ),
      classCss: "section header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityTerms />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: <SustainablityStrategy />,
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityIssues />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityGovernance />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityPerformance />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityPractices />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SustainabilityImage />
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

export default MainSustainability;
