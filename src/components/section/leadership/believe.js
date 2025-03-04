import React from "react";
import chessImage from "@/assests/leadership/24.png";
import Image from "next/image";
import LeaderIcon from "@/assests/leadership/Leader.png";

function believe() {
  return (
    <section className="w-full goal-section1 relative flex flex-col items-center py-10">
      <div className=" pt-16 items-center w-[90%] mx-auto ">
        <div className=" text-primary flex justify-center items-center">
          <p
            style={{ fontFamily: "BrandingSemibold" }}
            className="text-[#1e3a8a] text-4xl md:text-5xl font-branding-semibold font-bold text-center xl:w-[50%] lg:w-[70%] md:w-[80%]"
          >
            We believe in people & people believe in us.
          </p>
        </div>
        <div className="flex relative mt-10">
          <div className=" flex lg:flex-row flex-col xl:items-start items-center w-full gap-10 overflow-hidden">
            <div className="relative h-[600px] lg:w-[35%] w-full">
              <Image
                src={chessImage}
                alt="Chess Image"
                className="object-cover w-full h-full "
                priority
              />
            </div>

            <div className="text-justify xl:w-[50%] lg:w-[45%] w-full md:mt-0 mt-10 flex flex-col gap-5 md:text-2xl text-xl font-poppins z-10">
              <p className="leading-10">
                Leadership at Nesco is more than just man-agement, it is a
                principle. Our founder, J. V. Patelwas a first-generation
                industrialist in in dependent, India anda peerless entrepreneur.
                He carved a niche for himself in the industrial and business
                realm by dint of technical know-how, meticulousness, diligence
                and leadership. The investiture of his beliefs in our teams is
                what takes us forward as a company. Across our diverse
                industries, our capabilities at Nesco are expanding. As
                businesses grow. the focus of our leadership grows on converting
                the credo of Bellieve into action,
              </p>
            </div>
          </div>
          <div className="absolute -right-20 hidden lg:block">
            <Image
              src={LeaderIcon}
              alt="icon"
              className="w-full lg:h-[40rem] object-cover -mt-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default believe;
