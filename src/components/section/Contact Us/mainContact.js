import Pagewrapper from "@/components/layout/pagewrapper";
import React from "react";
import Contact from "./contact";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainContact() {
  const Children = [
    {
      comp: <Contact />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainContact;
