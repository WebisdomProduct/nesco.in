"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "@/components/common/animateContent/animation";
import LifeBanner from "./lifeBanner";
import LifePassion from "./lifePassion";
import LifeCulture from "./lifeCulture";
import LifeCommitment from "./lifeCommitment";
import LifeTeam from "./lifeTeam";
import LifeVoice from "./lifeVoice";
import LifeJoin from "./lifeJoin";

function MainLife() {
  const Children = [
    {
      comp: <LifeBanner />,
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifePassion />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black pt-0 lg:pt-10",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifeCulture />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifeCommitment />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifeTeam />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifeVoice />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LifeJoin />
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

export default MainLife;
