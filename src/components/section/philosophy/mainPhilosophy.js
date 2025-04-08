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
      classCss: "overflow-hidden",
    },
    {
      comp: <PhilosophyForUs />,
      classCss: "header_purple overflow-hidden",
    },
    {
      comp: <PhilosophyWhat />,
      classCss: "header_purple overflow-hidden",
    },
    {
      comp: <PhilosophyVision />,
      classCss: "header_purple overflow-hidden",
    },
    {
      comp: <PhilosophyValue />,
      classCss: "header_purple overflow-hidden",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainPhilosophy;
