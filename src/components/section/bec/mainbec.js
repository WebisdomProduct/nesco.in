"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnimateOnScroll from "../../common/animateContent/animation";

// Import all BEC components
import BecHero from "./BecHero";
import BecDescription from "./BecDescription";
import BecDisplay from "./BecDisplay";
import BecFacilities from "./BecFacilities";
import BecAmenities from "./BecAmenities";
import BecProfile from "./BecProfile";
import BecEnquiries from "./BecEnquiries";

function MainBec() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Children = [
    {
      comp: <BecHero />,
      classCss: "section snap-start",
    },
    {
      comp: <BecDescription />,
      classCss: "section snap-start",
    },
    {
      comp: <BecDisplay />,
      classCss: "section snap-start",
    },
    {
      comp: <BecFacilities />,
      classCss: "section snap-start",
    },
    {
      comp: <BecAmenities />,
      classCss: "section snap-start",
    },
    {
      comp: <BecProfile />,
      classCss: "section snap-start",
    },
    {
      comp: <BecEnquiries />,
      classCss: "section snap-start",
    },
  ];

  return (
    <Pagewrapper activeSlide={activeSlide}>
      <div className="snap-y snap-mandatory">
        <ScrollSnip Children={Children} />
      </div>
    </Pagewrapper>
  );
}

export default MainBec;