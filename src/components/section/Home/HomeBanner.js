import Banner from "@/components/common/MainBanner/Banner";
import React from "react";
import BannerImage from "@/assests/mainBanner/image.jpg";
import BannerImage1 from "@/assests/mainBanner/image11.png";
import BannerImage3 from "@/assests/mainBanner/image3.jpg";
import BannerImage4 from "@/assests/mainBanner/image4.jpg";
import BannerImage5 from "@/assests/mainBanner/image5.jpg";
import Model from "@/assests/mainBanner/Model.png";
import hexaImage1 from "@/assests/mainBanner/hexa1.png";
import hexaImage2 from "@/assests/mainBanner/hexa2.png";
import hexaImage3 from "@/assests/mainBanner/hexa3.png";
import hexaImage4 from "@/assests/mainBanner/hexa4.png";
import hexaImage5 from "@/assests/mainBanner/hexa5.png";
import hexaLogo1 from "@/assests/mainBanner/f1.png";
import hexaLogo2 from "@/assests/mainBanner/e1.png";
import hexaLogo3 from "@/assests/mainBanner/b1.png";
import hexaLogo4 from "@/assests/mainBanner/i11.png";
import hexaLogo5 from "@/assests/mainBanner/r1.png";

function HomeBanner() {
  // slider data
  const SliderData = [
    {
      image: Model,
      description: "We bring extraordinary flavours to your table.",
      // hexaImage:
    },
    {
      image: BannerImage,
      description: "We bring extraordinary flavours to your table.",
      hexaImage: hexaImage1,
      hexaLogo: hexaLogo1,
      // hexalogo:
    },
    {
      image: BannerImage1,
      description:
        "Curating extravagant and breathtaking experiences from concept to execution",
      hexaImage: hexaImage2,
      hexaLogo: hexaLogo2,
    },
    {
      image: BannerImage3,
      description:
        "A premier venue that hosts a diverse array of events, trade shows, conferences and exhibitons.",
      hexaImage: hexaImage3,
      hexaLogo: hexaLogo3,
    },
    {
      image: BannerImage4,
      description:
        "manufactures abrasives & shot blasting machine for industries like automotive and aerospace since 1975",
      hexaImage: hexaImage4,
      hexaLogo: hexaLogo4,
    },
    {
      image: BannerImage5,
      description:
        "Renowned for leasing premium office spaces tailored to the needs of IT compaines.",
      hexaImage: hexaImage5,
      hexaLogo: hexaLogo5,
    },
  ];

  return (
    <div className="w-full">
      <Banner SliderData={SliderData} />
    </div>
  );
}

export default HomeBanner;
