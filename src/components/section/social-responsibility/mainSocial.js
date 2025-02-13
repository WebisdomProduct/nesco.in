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

function MainSocial() {
  const Children = [
    {
      comp: <SocialBanner />,
      classCss: "section",
    },
    {
      comp: <SocialPower />,
      classCss: "section",
    },
    {
      comp: <SocialCSR />,
      classCss: "section",
    },
    {
      comp: <SocialFocus />,
      classCss: "section",
    },
    {
      comp: <SocialEducation />,
      classCss: "section",
    },
    {
      comp: <SocialInfra />,
      classCss: "section",
    },
    {
      comp: <SocialHealth />,
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
