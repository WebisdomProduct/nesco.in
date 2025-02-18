import React from "react";
import chessImage from "@/assests/leadership/24.png";
import Image from "next/image";
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
        <div className="mt-10 flex md:flex-row flex-col justify-between xl:items-start items-center w-full overflow-hidden">
          <div className="relative h-[550px] md:w-[50%] w-full">
            <Image
              src={chessImage}
              alt="Chess Image"
              className="object-cover w-full h-full xl:-ml-10 xl:-mt-10"
              priority
            />
          </div>

          <div className="text-justify xl:w-[50%] md:w-[45%] w-full md:mt-0 mt-10 flex flex-col gap-5 md:text-2xl text-xl font-poppins">
            <p>
              Leadership at Nesco is more than just man-agement, it is a
              principle. Our founder, J. V. Patel was a first-generation
              industrialist in in-dependent India and a peerless entrepreneur.
              He carved a niche for himself in the industrial and business realm
              by dint of technical know-how, meticulousness, diligence and
            </p>
            <p className="mt-6">
              teams is what takes us forward as a company. Across our diverse
              industries, our capabilities at Nesco are expanding. As businesses
              grow, the focus of our{" "}
            </p>
            <p>
              leadership grows on converting the credo of Believe into action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default believe;
