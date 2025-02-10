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

function MainHome() {
  const Children = [
    {
      comp: <HomeBanner />,
      classCss: "section ",
    },
    {
      comp: <Goal />,
      classCss: "section goal-section",
    },
    {
      comp: <Mentor />,
      classCss: "section",
    },
    {
      comp: <Service />,
      classCss: "section",
    },
    {
      comp: <Life />,
      classCss: "section",
    },
    {
      comp: <News />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainHome;
