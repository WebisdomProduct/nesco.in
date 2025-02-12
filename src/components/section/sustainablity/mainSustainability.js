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
function MainSustainability() {
  const Children = [
    {
      comp: <SustainabilityBanner />,
      classCss: "",
    },
    {
      comp: <SustainabilityFeatures />,
      classCss: "",
    },
    {
      comp: <SustainablityText />,
      classCss: "",
    },
    {
      comp: <SustainabilityTerms />,
      classCss: "",
    },
    {
      comp: <SustainabilityIssues />,
      classCss: "",
    },
    {
      comp: <SustainabilityGovernance />,
      classCss: "",
    },
    {
      comp: <SustainabilityPerformance />,
      classCss: "",
    },
    {
      comp: <SustainabilityPractices />,
      classCss: "",
    },
    {
      comp: <SustainabilityImage />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainSustainability;
