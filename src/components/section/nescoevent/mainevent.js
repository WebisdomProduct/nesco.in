"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

// Import all Nesco Event components
import EventHero from "./EventHero";
import EventIntro from "./EventIntro";
import EventServices from "./EventServices";
import EventStats from "./EventStats";
import EventDisplay from "./EventDisplay";
import EventDisplay2 from "./EventDisplay2";
import EventProfile from "./EventProfile";
import EventEnquiries from "./EventEnquiries";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainEvent() {
  const Children = [
    {
      comp: <EventHero />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventIntro />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventServices />
        </AnimateOnScroll>
      ),
      classCss: "section header_white",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventStats />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventDisplay />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventDisplay2 />
        </AnimateOnScroll>
      ),
      classCss: "section header_color_black",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventProfile />
        </AnimateOnScroll>
      ),
      classCss: " header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <EventEnquiries />
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

export default MainEvent;
