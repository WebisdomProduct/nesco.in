import React from "react";
import PhilosophyBelieve from "./philosophyBelieve";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import PhilosophyForUs from "./philosophyForUs";
import PhilosophyWhat from "./philosophyWhat";
import PhilosophyVision from "./philosophyVision";
import PhilosophyValue from "./philosophyValue";

function MainPhilosophy() {
  const Children = [
    {
      comp: <PhilosophyBelieve />,
      classCss: "",
    },
    {
      comp: <PhilosophyForUs />,
      classCss: "header_purple",
    },
    {
      comp: <PhilosophyWhat />,
      classCss: "header_purple",
    },
    {
      comp: <PhilosophyVision />,
      classCss: "header_purple",
    },
    {
      comp: <PhilosophyValue />,
      classCss: "header_purple",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainPhilosophy;
