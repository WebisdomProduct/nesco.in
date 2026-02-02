"use client";
import React, { useEffect } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

import LeadershipBanner from "./leadershipBanner";
import Believe from "./believe";
import LeadershipMentor from "./leadershipMentor";
import LeadershipMentor2 from "./leadershipMentor2";
import LeadershipMentor3 from "./leadershipMentor3";
import LeadershipMentor4 from "./leadershipMentor4";
import BoardOfDirector from "./boardOfDirector";
import VisionaryLeader from "./visionaryLeader";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainLeadership() {
  const Children = [
    {
      comp: <LeadershipBanner />,
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Believe />
        </AnimateOnScroll>
      ),
      classCss: "section ",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LeadershipMentor />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <LeadershipMentor2 />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },

    {
      comp: (
        <AnimateOnScroll>
          <BoardOfDirector />
        </AnimateOnScroll>
      ),
      classCss: "",
    },
    // {
    //   comp: (
    //     <AnimateOnScroll>
    //       <VisionaryLeader />
    //     </AnimateOnScroll>
    //   ),
    //   classCss: "",
    // },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainLeadership;
