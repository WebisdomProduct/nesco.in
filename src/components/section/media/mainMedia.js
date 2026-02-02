"use client";
import React from "react";

import Pagewrapper from "@/components/layout/pagewrapper";
import MediaBanner from "./mediaBanner";
import MediaStories from "./MediaStories";
import MainStories from "./MainStories";
import MusicFestival from "./MusicFestival";
import MediaArchive from "./MediaArchive";
import OurAdvertisements from "./OurAdvertisements";


function MainMedia() {
  return (
    <Pagewrapper>
      <MediaBanner />
      <MainStories />
      <MusicFestival />
      <MediaStories />
      <MediaArchive />
      <OurAdvertisements />
    </Pagewrapper>
  );
}

export default MainMedia;
