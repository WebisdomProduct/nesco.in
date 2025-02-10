import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/Home/Mentor.png";

function BoardOfDirector() {
  const CardData = [
    {
      image: MentorImage,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
    },
    {
      image: MentorImage,
      name: "Mrs. Sudha S. Patel",
      position: "Non Executive Non Independent Director",
      link: "",
    },
    {
      image: MentorImage,
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
      image: MentorImage,
      name: "Dr. Ramakrishnan Ramamurthi",
      position: "Independent Director",
      link: "",
    },
    {
      image: MentorImage,
      name: "Mr. Arun L. Todarwal",
      position: "Independent Director",
      link: "",
    },
  ];

  return (
    <section className="py-16 bg-[#EDEDED]">
      <h3 className="text-center text-4xl font-branding-bold">
        Board of Directors
      </h3>
      <Cards CardData={CardData} />
    </section>
  );
}

export default BoardOfDirector;
