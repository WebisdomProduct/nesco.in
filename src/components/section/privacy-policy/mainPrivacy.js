import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import PrivacyPolicy from "./privacy";

function MainPrivacy() {
  const Children = [
    {
      comp: <PrivacyPolicy />,
      classCss: "overflow-hidden header_purple",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainPrivacy;
