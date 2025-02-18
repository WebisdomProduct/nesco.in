import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/leadership/6.png";
import MentorImage2 from "@/assests/leadership/7.png";
import MentorImage3 from "@/assests/leadership/9.png";
import MentorImage4 from "@/assests/leadership/16.png";
import MentorImage5 from "@/assests/leadership/27.png";
import MentorImage6 from "@/assests/leadership/28.png";

function BoardOfDirector() {
  const CardData = [
    {
      image: MentorImage2,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
    },
    {
      image: MentorImage6,
      name: "Mrs. Sudha S. Patel",
      position: "Non Executive Non Independent Director",
      link: "",
    },
    {
      image: MentorImage3,
      name: "Ms. Amrita Verma Chowdhury",
      position: "Independent Director",
      link: "",
    },
    {
      image: MentorImage,
      name: "Manish Ishwarlal Panchal",
      position: "Independent Director",
      link: "",
    },
    {
      image: MentorImage4,
      name: "Dr. Ramakrishnan Ramamurthi",
      position: "Independent Director",
      link: "",
    },
    {
      image: MentorImage5,
      name: "Mr. Arun L. Todarwal",
      position: "Independent Director",
      link: "",
    },
  ];

  return (
    <section className="py-16 pt-16 lg:pt-24 bg-[#EDEDED] header_purple goal-section1">
      <h3 className="text-center text-4xl font-branding-bold">
        Board of Directors
      </h3>
      <Cards CardData={CardData} />
    </section>
  );
}

export default BoardOfDirector;
