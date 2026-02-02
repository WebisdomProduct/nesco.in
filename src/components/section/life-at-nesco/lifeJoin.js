import React from "react";
import InternshipLogo from "@/assests/careers/internship.png";
import GraduatesLogo from "@/assests/careers/graduates.png";
import ProfessionalLogo from "@/assests/careers/professional.png";
import Image from "next/image";
import Link from "next/link";

function LifeJoin() {
  const careerCard = [
    {
      image: InternshipLogo,
      title: "Internships",
      link: "/internships",
    },
    {
      image: GraduatesLogo,
      title: "Fresh Graduates",
      link: "/fresh-graduates",
    },
    {
      image: ProfessionalLogo,
      title: "Experienced Professionals",
      link: "/experienced",
    },
  ];

  return (
    <section className="header_purple goal-section1 w-full flex justify-center flex-col items-center min-h-screen py-32 font-branding-medium">
      <div className="relative z-10 flex flex-col items-center w-[90%] ">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-[48px] font-branding-semibold mb-4"
        >
          Join Us
        </h2>
        <p className="text-[22px] text-center px-20  mb-10">
          At Nesco, we believe in fostering talent across all stages of your career. Whether you are an intern eager to learn, a fresh graduate ready to take on new challenges, or an experienced professional looking to grow, we offer a wide range of opportunities to help you thrive.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {careerCard.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 min-h-[22rem]"
            >
              <div className="md:w-[14rem] md:h-[14rem] w-[60%] h-[12rem] flex items-center justify-center mb-4">
                <Link href={data.link}>
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
              <p className="mt-4 text-center text-2xl font-branding-semibold">
                <Link href={data.link}>{data.title}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LifeJoin;
