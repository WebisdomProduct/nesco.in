import React from "react";
// import "./Overview.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import Pagewrapper from "@/components/layout/pagewrapper";
import OverviewEvolve from "./OverviewEvolve";
import OverviewBanner from "./OverviewBanner";
import AnimateOnScroll from "@/components/common/animateContent/animation";

const MainOverview = () => {
  const Children = [
    {
      comp: <OverviewBanner />,
      classCss: "",
    },
    {
      comp: <OverviewEvolve />,
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
};

export default MainOverview;
