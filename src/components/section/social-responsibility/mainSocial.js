"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import SocialBanner from "./socialBanner";
import SocialPower from "./socialPower";
import SocialCSR from "./socialCSR";
import SocialFocus from "./socialFocus";
import SocialEducation from "./socialEducation";
import SocialInfra from "./socialInfra";
import SocialHealth from "./socialHealth";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainSocial() {
  const Children = [
    {
      comp: <SocialBanner />,
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialPower />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialCSR />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialFocus />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialEducation />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialInfra />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <SocialHealth />
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

export default MainSocial;
