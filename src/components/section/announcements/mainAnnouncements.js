import React from "react";

import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import AnnouncementBanner from "./announcementBanner";
import AnnouncementFilter from "./announcementFilter";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function MainAnnouncements() {
  const Children = [
    {
      comp: <AnnouncementBanner />,
      classCss: "",
    },
    {
      comp: (
        <AnimateOnScroll>
          <AnnouncementFilter />
        </AnimateOnScroll>
      ),
      classCss: "",
    },
  ];
  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainAnnouncements;
