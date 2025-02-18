import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/leadership/7.png";
import MentorImage2 from "@/assests/leadership/26.png";
import MentorImage3 from "@/assests/leadership/3.png";

function VisionaryLeader() {
  const CardData = [
    {
      image: MentorImage,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
    },
    {
      image: MentorImage2,
      name: "Dipesh R. Singhania",
      position: "Chief Financial Officer",
      link: "",
    },
    {
      image: MentorImage3,
      name: "Dr. Ashish J. Pinto",
      position: "Chief Human Resources Officer",
      link: "",
    },
  ];

  return (
    <section className="py-16 bg-[#E6F5FC] header_purple goal-section1">
      <h3 className="text-center text-4xl font-branding-bold">
        Our Visionary Leaders
      </h3>
      <Cards CardData={CardData} />
    </section>
  );
}

export default VisionaryLeader;
