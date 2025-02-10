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

function MainCareers() {
  const Children = [
    {
      comp: <CareerBanner />,
      classCss: "section",
    },
    {
      comp: <CareerPassion />,
      classCss: "section",
    },
    {
      comp: <CareerCulture />,
      classCss: "section",
    },
    {
      comp: <CareerCommitment />,
      classCss: "",
    },
    {
      comp: <CareerTeam />,
      classCss: "",
    },
    {
      comp: <CareerVoice />,
      classCss: "",
    },
    {
      comp: <CareerJoin />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainCareers;
