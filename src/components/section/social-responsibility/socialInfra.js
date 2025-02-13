import React from "react";
import bannerImage from "@/assests/social/12.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialInfra() {
  const title = "Powering Infrastructure";

  const SliderData = [
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
  ];

  return (
    <section className="">
      <SocialBanner1 SliderData={SliderData} title={title} />
    </section>
  );
}

export default SocialInfra;
