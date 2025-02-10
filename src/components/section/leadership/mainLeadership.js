"use client";
import React, { useEffect } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

import LeadershipBanner from "./leadershipBanner";
import Believe from "./believe";
import LeadershipMentor from "./leadershipMentor";
import LeadershipMentor2 from "./leadershipMentor2";
import BoardOfDirector from "./boardOfDirector";
import VisionaryLeader from "./visionaryLeader";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainLeadership() {
  const Children = [
    {
      comp: <LeadershipBanner />,
      classCss: "section ",
    },
    {
      comp: <Believe />,
      classCss: "section ",
    },
    {
      comp: <LeadershipMentor />,
      classCss: "",
    },
    {
      comp: <LeadershipMentor2 />,
      classCss: "",
    },
    {
      comp: <BoardOfDirector />,
      classCss: "",
    },
    {
      comp: <VisionaryLeader />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainLeadership;
