import React from "react";
import MentorImage from "@/assests/Home/SirImage.png";
import Image from "next/image";

function LeadershipMentor() {
  return (
    <section className="header_white goal-section1 bg-primary text-white flex justify-center items-center pb-20 xl:pb-0 xl:pt-20 pt-[10rem] xl:h-screen ">
      <div className="flex flex-col lg:flex-row w-[90%] xl:justify-center justify-between gap-10 items-center lg:items-start">
        <div className="lg:w-[55%]">
          <p className="md:text-2xl text-xl font-branding-medium xl:leading-[3rem] text-justify md:-mt-4">
            A fearless pioneer, Sumant Patels crystal-clear vision had been
            instrumental in shaping the Nesco Group. A mechanical engineer from
            the University of Pennsylva nia, USA and a business graduate from
            the prestigious Wharton School, he returned to India in 1960 and
            suUC-cessfully founded the engineering heavyweights-GMM and
            Indabrator, in the decades that followed, Sumant's eye on the big
            picture emboldened teams to innovative-ly face challenges in each
            new sector. As the architect of Nescos diversification, he created a
            state-of-the-art IT Park with unique offerings. His foresight
            established in dia's largest exhibition venue in the private sector,
            also known as the BEC. His wisdom guided our growth at Nesco and led
            the progress of many charitable ventures he was passionate about.
          </p>
        </div>
        <div className="flex flex-col h-full lg:items-end items-center justify-center lg:w-[45%]">
          <div>
            <div className="w-full max-w-[650px]">
              <Image
                src={MentorImage}
                alt="Mentor"
                width={650}
                height={300}
                className=""
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-4xl font-branding-semibold ">
                Sumant J. Patel
              </h3>
              <p className=" mt-1 font-branding-medium text-xl">
                (15th August 1935 – 17th November 2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor;
