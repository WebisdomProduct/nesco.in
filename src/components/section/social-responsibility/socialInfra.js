import React from "react";
import bannerImage from "@/assests/social/12.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialInfra() {
  const title = "Powering Infrastructure";

  const SliderData = [
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
    },
  ];

  return (
    <section className="goal-section1">
      <SocialBanner1 SliderData={SliderData} title={title} />
    </section>
  );
}

export default SocialInfra;
