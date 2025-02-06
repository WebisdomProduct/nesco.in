import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";

function VisionaryLeader() {
  const CardData = [
    {
      image: MentorImage,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
    },
    {
      image: MentorImage,
      name: "Dipesh R. Singhania",
      position: "Chief Financial Officer",
      link: "",
    },
    {
      image: MentorImage,
      name: "Dr. Ashish J. Pinto",
      position: "Chief Human Resources Officer",
      link: "",
    },
  ];

  return (
    <div className="py-16 bg-[#E6F5FC]">
      <h3 className="text-center text-4xl font-branding-bold">
        Our Visionary Leaders
      </h3>
      <Cards CardData={CardData} />
    </div>
  );
}

export default VisionaryLeader;
