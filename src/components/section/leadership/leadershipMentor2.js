import React from "react";
import MentorImage from "@/assests/Home/mentorNew/krishna.png";
import backgroundImage from "@/assests/Home/mentorNew/KrishnaBack.jpg";
import Image from "next/image";

function LeadershipMentor2() {
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
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col h-full w-full items-center">
          <div className="flex flex-col lg:w-[50%] w-1/2 h-full xl:justify-end justify-center items-center z-10 relative">
            <Image
              src={MentorImage}
              alt="Mentor"
              width={650}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="relative lg:w-[50%] h-full flex flex-col lg:justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <div className=" mt-4">
              <h2 className="text-[2rem] font-branding-semibold text-[#C3F0FB]">
                Krishna S. Patel
              </h2>
              <p className="mt-1 font-branding-medium text-[1rem] mb-4 text-white">
                Chairman & Managing Director
              </p>
            </div>

            <hr className=" bg-white border-1 border-white mb-4 " />
            <div className="relative">
              <div className="space-y-2 mt-2 text-justify">
                <p className="font-branding-medium text-white">
                  A dynamic peoples leader, Krishna Patel is adept at spotting
                  and implementing future trends in any industry even as he
                  hones in on new business opportunities and verticals. An
                  alumnus of The Pennsylvania State University, USA and Kingston
                  University, UK, he is passionate about bringing a global
                  perspective to the workings of Nesco. Krishna began his career
                  in Corporate Strategywith Fisher Hamilton in Pittsburgh, USA.
                  His experience taught him the value of a services backbone. He
                  has guided the corporate expansion of Bombay Exhibition Center
                  and introduced the fast-gaining service verticals of
                  hospitality and events.A technology enthusiast, Krishna keeps
                  up-to-date with the latest industry trends, introducing new
                  technologies and global industry norms to ourworld at Nesco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor2;
