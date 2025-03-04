import React from "react";

import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import FinancialsBanner from "./financialsBanner";
import FinancialResult from "./financialResult";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainFinancials() {
  const Children = [
    {
      comp: <FinancialsBanner />,
      classCss: "section",
    },
    {
      comp: (
        <AnimateOnScroll>
          <FinancialResult />
        </AnimateOnScroll>
      ),
      classCss: "section",
    },
  ];
  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainFinancials;
