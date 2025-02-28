import React from "react";
import bannerImage from "@/assests/social/31.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialHealth() {
  const title = "Powering Healthcare";

  const SliderData = [
    {
      title1: "J.V. Patel surgical ICU at",
      title2: "Shree Krishna Hospital, Karamsad",
      link: "",
      image: bannerImage,
    },
  ];

  return (
    <section className="w-full mt-5 goal-section1" id="healthcare">
      <SocialBanner1 SliderData={SliderData} title={title} />
    </section>
  );
}

export default SocialHealth;
