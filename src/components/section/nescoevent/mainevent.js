"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";

// Import all Nesco Event components
import EventHero from "./EventHero";
import EventIntro from "./EventIntro";
import EventServices from "./EventServices";
import EventStats from "./EventStats";
import EventDisplay from "./EventDisplay";
import EventDisplay2 from "./EventDisplay2";
import EventProfile from "./EventProfile";
import EventEnquiries from "./EventEnquiries";

function MainEvent() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Pagewrapper activeSlide={activeSlide} className="overflow-x-hidden">
      <EventHero />
      <EventIntro />
      <EventServices />
      <EventStats />
      <EventDisplay />
      <EventDisplay2 />
      <EventProfile />
      <EventEnquiries />
    </Pagewrapper>
  );
}

export default MainEvent;