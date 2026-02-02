"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import AwardsBanner from "./awardsBanner";
import AwardsContent from "./awardsContent";

function MainAwards() {
  return (
    <Pagewrapper>
      <AwardsBanner />
      <AwardsContent />
    </Pagewrapper>
  );
}

export default MainAwards;
