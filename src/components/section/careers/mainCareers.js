"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import CareerBanner from "./careerBanner";
import CareerPassion from "./careerPassion";
import CareerCulture from "./CareerCulture";
import CareerCommitment from "./careerCommitment";
import CareerTeam from "./CareerTeam";
import CareerVoice from "./careerVoice";
import CareerJoin from "./careerJoin";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainCareers() {
  const Children = [
    {
      comp: <CareerBanner />,
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerPassion />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black pt-0 lg:pt-10",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerCulture />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerCommitment />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerTeam />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerVoice />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <CareerJoin />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainCareers;
