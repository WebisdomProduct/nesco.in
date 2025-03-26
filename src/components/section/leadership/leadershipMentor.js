import React from "react";
import MentorImage from "@/assests/Home/mentorNew/2.png";
import backgroundImage from "@/assests/Home/mentorNew/SumanBack.jpg";
import Image from "next/image";

function LeadershipMentor() {
  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden lg:h-screen "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full  goal-section1">
        <div className="flex lg:flex-row flex-col lg:items-start items-center h-full w-full">
          <div className="flex flex-col lg:w-[50%] w-1/2 h-full xl:justify-end justify-center z-10 relative">
            <Image
              src={MentorImage}
              alt="Mentor"
              width={650}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="relative lg:w-[50%] h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <div className=" mt-4">
              <h2 className="text-[2rem] font-branding-semibold text-[#0638A5]">
                Sumant J. Patel
              </h2>
              <p className="mt-1 font-branding-medium text-[1rem] mb-4">
                (15th August 1935 – 17th November 2021)
              </p>
            </div>

            <hr className=" bg-black border-1 border-black mb-4" />
            <div className="relative">
              <div className="space-y-2 mt-2 text-justify">
                <p className="font-branding-medium">
                  A fearless pioneer, Sumant Patels crystal-clear vision had
                  been instrumental in shaping the Nesco Group. A mechanical
                  engineer from the University of Pennsylva nia, USA and a
                  business graduate from the prestigious Wharton School, he
                  returned to India in 1960 and suUC-cessfully founded the
                  engineering heavyweights-GMM and Indabrator, in the decades
                  that followed, Sumant's eye on the big picture emboldened
                  teams to innovative-ly face challenges in each new sector. As
                  the architect of Nescos diversification, he created a
                  state-of-the-art IT Park with unique offerings. His foresight
                  established in dia's largest exhibition venue in the private
                  sector, also known as the BEC. His wisdom guided our growth at
                  Nesco and led the progress of many charitable ventures he was
                  passionate about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor;
