import React from "react";
import chessImage from "@/assests/leadership/24-1.png";
import Image from "next/image";
import LeaderIcon from "@/assests/leadership/Leader.png";

function believe() {
  return (
    <section className="w-full goal-section1 relative flex flex-col items-center py-12 xl:h-screen min-h-[800px] overflow-hidden">
      <div className="pt-16 items-center w-[90%] mx-auto ">
        <div className=" text-primary flex justify-center items-center">
          <p
            style={{ fontFamily: "BrandingSemibold" }}
            className="text-[#1e3a8a] mt-8 text-4xl md:text-5xl font-branding-semibold font-bold text-center xl:w-[50%] lg:w-[70%] md:w-[80%]"
          >
            We believe in people <br></br> & people believe in us.
          </p>
        </div>
        <div className="flex relative mt-10">
          <div className=" flex lg:flex-row flex-col xl:items-start items-center w-full gap-10 overflow-hidden">
            <div className="relative lg:w-[38%] w-full top-2">
              <Image
                src={chessImage}
                alt="Chess Image"
                className=" w-full object-cover object-bottom aspect-square"
                priority
              />
            </div>

            <div className="text-justify xl:w-[45%] lg:w-[45%] w-full md:mt-0 mt-10 flex flex-col gap-5 md:text-[1.3rem] text-[1.3rem] font-poppins z-10">
              <p className="leading-9">
                Leadership at Nesco is more than just man-agement, it is a
                principle. Our founder, J. V. Patel was a first-generation
                industrialist in in dependent, India and a peerless
                entrepreneur. He carved a niche for himself in the industrial
                and business realm by dint of technical know-how,
                meticulousness, diligence and leadership. The investiture of his
                beliefs in our teams is what takes us forward as a company.
                Across our diverse industries, our capabilities at Nesco are
                expanding. As businesses grow, the focus of our leadership grows
                on converting the credo of believe into action.
              </p>
            </div>
          </div>
          <div className="absolute -right-20 hidden lg:block">
            <Image
              src={LeaderIcon}
              alt="icon"
              className="w-full lg:h-[33rem] object-cover -mt-[3.8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default believe;
