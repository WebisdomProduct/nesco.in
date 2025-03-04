import React from "react";
import InternshipLogo from "@/assests/social/39.jpg";
import GraduatesLogo from "@/assests/social/11.jpg";
import ProfessionalLogo from "@/assests/social/38.png";
import Image from "next/image";

function SocialFocus() {
  const careerCard = [
    {
      image: InternshipLogo,
      title: "Education",
      link: "#education",
    },
    {
      image: GraduatesLogo,
      title: "Infrastrucutre",
      link: "#infra",
    },
    {
      image: ProfessionalLogo,
      title: "Healthcare",
      link: "#healthcare",
    },
  ];

  return (
    <section className="goal-section1 w-full flex justify-center flex-col items-center py-20  font-branding-medium bg-[#EDEDED] relative ">
      <div className="absolute w-full bottom-0 left-0 bg-[#21409A] md:h-[30%] h-[20%]"></div>
      <div className="relative z-10 flex flex-col items-center w-[90%] md:gap-10 gap-4 mt-10">
        <h2
          style={{ fontFamily: "BrandingSemibold" }}
          className="text-[#1e3a8a] text-2xl md:text-4xl lg:text-5xl font-BrandingSemibold font-bold"
        >
          Focus Areas
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 w-full mt-5 justify-center items-center">
          {careerCard.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <a
                href={data.link}
                className="md:w-[70%] w-[90%] flex flex-col justify-center items-center"
              >
                <div className=" p-3 border-2 border-gray-300 hover:p-0 hover:scale-105 transition-all duration-150">
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="w-full h-[18rem] object-cover"
                  />
                </div>
                <p className="mt-5 text-center text-xl xl:text-white text-black">
                  {data.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialFocus;
