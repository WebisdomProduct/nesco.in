import React from "react";
import MentorImage from "@/assests/leadership/29.png";
import Image from "next/image";

function LeadershipMentor2() {
  return (
    <section className="header_white goal-section1 bg-secondary flex justify-center items-center pb-20 xl:pb-0 xl:pt-20 pt-[10rem] xl:h-screen ">
      <div className="flex flex-col lg:flex-row w-[90%] xl:justify-center justify-between gap-10 items-center lg:items-start">
        <div className="flex flex-col h-full lg:items-end items-center justify-center lg:w-[45%]">
          <div>
            <div className="w-full max-w-[650px]">
              <Image
                src={MentorImage}
                alt="Mentor"
                width={650}
                height={400}
                className=""
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-4xl font-branding-semibold ">
                Krishna S. Patel
              </h3>
              <p className=" mt-1 font-branding-medium text-xl">
                Chairman & Managing Director
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[55%]">
          <p className="md:text-2xl text-xl font-branding-medium xl:leading-[3rem] leading-7 text-justify">
            A dynamic peoples leader, Krishna Patel is adept at spot-ting and
            implementing future trends in any industry even as he hones in on
            new business opportunities and verticals. An alumnus of The
            Pennsylvania State Universi ty, USA and Kingston University, UK, he
            is passionate about bringing a global perspective to the workings of
            Nesco. Krishna began his career in Corporate Strategy with Fisher
            Hamilton in Pittsburgh, USA. His experience taught him the value of
            a services backbone. He has guided the corporate expansion of Bombay
            Exhibition Center and introduced the fast-gaining service verticals
            of hospitality and events. A technology enthusiast, Krish na keeps
            up-to-date with the latest industry trends, in-troducing new
            technologies and global industry norms to ourworld at Nesco.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor2;
