import React from "react";
import InternshipLogo from "@/assests/careers/internship.png";
import GraduatesLogo from "@/assests/careers/graduates.png";
import ProfessionalLogo from "@/assests/careers/professional.png";
import Image from "next/image";

function LifeJoin() {
  const careerCard = [
    {
      image: InternshipLogo,
      title: "Internships",
    },
    {
      image: GraduatesLogo,
      title: "Fresh Graduates",
    },
    {
      image: ProfessionalLogo,
      title: "Experienced Professionals",
    },
  ];

  return (
    <section className="header_purple goal-section1 w-full flex justify-center flex-col items-center py-20 pt-24  font-branding-medium">
      <div className="relative z-10 flex flex-col items-center w-[90%] md:gap-10 gap-4">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-branding-semibold"
        >
          Join Us
        </h2>
        <p className="md:text-3xl text-xl text-justify">
          At Nesco, we believe in fostering talent across all stages of your
          career. Whether you are an intern eager to learn, a fresh graduate
          ready to take on new challenges, or an experienced professional
          looking to grow, we offer a wide range of opportunities to help you
          thrive.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 w-full">
          {careerCard.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="md:w-[20rem] md:h-[20rem] w-[60%] overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover -mt-1"
                />
              </div>
              <p className="mt-5 text-center text-xl">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LifeJoin;
