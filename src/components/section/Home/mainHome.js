"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import HomeBanner from "./HomeBanner";
import Goal from "./Goal";
import Mentor from "./Mentor";
import Service from "./Service";
import Life from "./Life";
import News from "./News";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "../../common/animateContent/animation";

function MainHome() {
  const Children = [
    {
      comp: <HomeBanner />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Goal />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Mentor />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Service />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Life />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <News />
        </AnimateOnScroll>
      ),
      classCss: "section ",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainHome;
