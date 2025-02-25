import React from "react";
import chessImage from "@/assests/social/42.png";
import Image from "next/image";
function SocialCSR() {
  const buttonData = [
    {
      title: "Composition of CSR",
      buttonColor: "#5A9448",
    },
    {
      title: "CSR Policy",
      buttonColor: "#43AD97",
    },
    {
      title: "Proposed Action Plan",
      buttonColor: "#4E53A4",
    },
  ];

  return (
    <section className="goal-section1 w-full relative flex flex-col justify-center items-center md:py-10 xl:py-0 xl:h-screen">
      <div className=" py-12 items-center w-[90%] mx-auto">
        <div className="mt-10 flex lg:flex-row flex-col justify-between items-center w-full gap-5">
          <div className="text-justify lg:w-[60%] w-full md:mt-0 mt-10 flex flex-col gap-5 md:text-2xl font-poppins">
            <div className=" text-primary flex justify-center items-center">
              <p
                style={{ fontFamily: "BrandingSemibold" }}
                className="text-[#1e3a8a] text-2xl md:text-5xl font-BrandingSemibold font-bold text-left w-full"
              >
                About Company's CSR
              </p>
            </div>
            <p>
              Nesco&#39;s Corporate Social Responsibility (CSR) initiatives are
              designed to promote sustainable development and improve the
              quality of life in the communities where we operate. Our CSR
              efforts focus on key areas such as Education, Health,
              Infrastructure, Sanitation, and Environmental Sustainability. We
              are committed to creating long-term value by investing in local
              communities and addressing their most pressing needs. The CSR
              Committee ensures that our initiatives are effectively, and
              continuous monitoring.
            </p>
            <p className="">
              Through these programs, Nesco aims to make a significant and
              positive impact, enhancing both social welfare and environmental
              sustainability
            </p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
              {buttonData.map((data, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 text-xl font-branding-semibold text-white rounded-lg`}
                  style={{
                    backgroundColor: data.buttonColor,
                  }}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>
          <div className="relative md:h-[500px] h-[400px] lg:w-[40%] w-full">
            <Image
              src={chessImage}
              alt="Chess Image"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialCSR;
