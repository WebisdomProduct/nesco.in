import Banner from "@/components/common/MainBanner/Banner";
import React from "react";
import BannerImage from "@/assests/mainBanner/image.jpg";
import BannerImage1 from "@/assests/mainBanner/image11.png";
import BannerImage3 from "@/assests/mainBanner/image3.jpg";
import BannerImage4 from "@/assests/mainBanner/image4.jpg";
import BannerImage5 from "@/assests/mainBanner/image5.jpg";
import Model from "@/assests/mainBanner/Model.png";

function HomeBanner() {
  // slider data
  const SliderData = [
    {
      image: Model,
      description: "We bring extraordinary flavours to your table.",
    },
    {
      image: BannerImage,
      description: "We bring extraordinary flavours to your table.",
    },
    {
      image: BannerImage1,
      description:
        "Curating extravagant and breathtaking experiences from concept to execution",
    },
    {
      image: BannerImage3,
      description:
        "A premier venue that hosts a diverse array of events, trade shows, conferences and exhibitons.",
    },
    {
      image: BannerImage4,
      description:
        "manufactures abrasives & shot blasting machine for industries like automotive and aerospace since 1975",
    },
    {
      image: BannerImage5,
      description:
        "Renowned for leasing premium office spaces tailored to the needs of IT compaines.",
    },
  ];

  return (
    <div className="w-full">
      <Banner SliderData={SliderData} />
    </div>
  );
}

export default HomeBanner;
