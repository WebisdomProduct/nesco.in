import Pagewrapper from "@/components/layout/pagewrapper";
import React from "react";
import HomeBanner from "./HomeBanner";
import Goal from "./Goal";
import Mentor from "./Mentor";
import Service from "./Service";

function MainHome() {
  return (
    <Pagewrapper>
      <HomeBanner />
      <Goal />
      <Mentor />
      <Service />
    </Pagewrapper>
  );
}

export default MainHome;
