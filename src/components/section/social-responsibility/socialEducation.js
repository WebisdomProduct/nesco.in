import React from "react";
import bannerImage from "@/assests/social/34.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialEducation() {
  const title = "Powering Education";

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
    <section className="goal-section1" id="education">
      <SocialBanner1 SliderData={SliderData} title={title} />
    </section>
  );
}

export default SocialEducation;
