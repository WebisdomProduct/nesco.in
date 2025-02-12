import Image from "next/image";
import React from "react";
import awardsImage from "@/assests/sustainability/53.png";

function SustainabilityImage() {
  return (
    <div className="w-full h-[50vh]">
      <Image src={awardsImage} className="w-full h-full" alt="awardsImage" />
    </div>
  );
}

export default SustainabilityImage;
