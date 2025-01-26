import Banner from "@/components/common/MainBanner/Banner";
import React from "react";
import BannerImage from "@/assests/mainBanner/nescoBanner1.jpg";

function HomeBanner() {
  // slider data
  const SliderData = [
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
  ];

  return (
    <div>
      <Banner SliderData={SliderData} />
    </div>
  );
}

export default HomeBanner;
