import React from "react";
import PhilosophyBelieve from "./philosophyBelieve";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainPhilosophy() {
  const Children = [
    {
      comp: <PhilosophyBelieve />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainPhilosophy;
