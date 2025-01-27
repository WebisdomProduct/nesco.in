import Pagewrapper from "@/components/layout/pagewrapper";
import React from "react";
import HomeBanner from "./HomeBanner";
import Goal from "./Goal";
import Mentor from "./Mentor";
import Service from "./Service";
import Life from "./Life";
import News from "./News";

function MainHome() {
  return (
    <Pagewrapper>
      <HomeBanner />
      <Goal />
      <Mentor />
      <Service />
      <Life />
      <News />
    </Pagewrapper>
  );
}

export default MainHome;
