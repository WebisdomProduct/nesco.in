import React from "react";
import StockBanner from "./stockBanner";
import Shares from "./shares";
import Chart1 from "./Chart1";
import Quote from "./Quote";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainStock() {
  const Children = [
    {
      comp: <StockBanner />,
      classCss: "",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Shares />
        </AnimateOnScroll>
      ),
      classCss: "",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Chart1 />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
    {
      comp: (
        <AnimateOnScroll>
          <Quote />
        </AnimateOnScroll>
      ),
      classCss: "header_purple",
    },
  ];
  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainStock;
