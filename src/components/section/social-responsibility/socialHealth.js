import React from "react";
import bannerImage from "@/assests/social/31.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialHealth() {
  const title = "Powering Healthcare";

  const SliderData = [
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
  ];

  return (
    <section className="w-full mt-5 ">
      <SocialBanner1 SliderData={SliderData} title={title} />
    </section>
  );
}

export default SocialHealth;
