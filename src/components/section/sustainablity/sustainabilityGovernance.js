import React from "react";
import Icon1 from "@/assests/sustainability/icon11.png";
import Icon2 from "@/assests/sustainability/icon22.png";
import Icon3 from "@/assests/sustainability/icon33.png";
import Image from "next/image";

function SustainabilityGovernance() {
  return (
    <div className="goal-section1 flex justify-center mt-20">
      <div className="text-center w-[90%]">
        <h1 className="text-3xl text-[#39c2ab] mb-8 font-branding-bold">
          ESG Governance Structure
        </h1>
        <p className="lg:text-[21px] md:text-[16px] text-[14px] text-justify font-medium text-black mb-20">
          Nesco&#39;s Risk Committee of the Board ensures oversight of our
          sustainability initiatives. The committee evaluates our policies and
          practices to meet regulatory requirements and assesses the impact of
          Nesco&#39;s operations on the environment and communities. In
          addition, it helps drive Nesco&#39;s sustainability ambitions by
          identifying opportunities for improvements for reducing the
          Company&#39;s environmental footprint and enhancing positive socially
          responsible outcomes. In consultation with the Board, we have
          developed a robust policy framework and are progressively
          incorporating material ESG topics into the business and our ERM
          process.
        </p>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mb-14 xl:gap-10 gap-20">
          <div className=" relative">
            <div className="py-8 bg-[#9ACC5B] w-full px-2 rounded-full transform -translate-y-1/2 absolute overflow-hidden">
              <p className="text-3xl text-white font-branding-bold">Environment</p>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-20 h-20  rounded-full flex justify-center items-center border-2 border-white">
                <div className="w-16 h-16 rounded-full flex justify-center items-center text-5xl text-[#9ACC5B] bg-white font-branding-semibold">
                  E
                </div>
              </div>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-30 xl:px-4 px-2 bg-[#8BBC53] h-32 right-0 flex justify-center items-center ">
                <Image
                  src={Icon1}
                  alt="icon1"
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
            <div className="w-full h-full  px-8">
              <div className="text-justify px-8 text-xl pb-20 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center">
                <p>
                  Nesco is committed to reducing its environmental impact by
                  adopting renewable energy, minimizing waste, and conserving
                  natural resources. We invest in green technologies, promote
                  energy efficiency, and ensure compliance with environmental
                  regulations to foster sustainability across our operations.
                </p>
                <p className=" absolute bottom-8 w-[100px] h-[8px] bg-[#8BBC53] rounded-full my-5"></p>
                <p className=" w-[100px] h-[8px] rounded-full my-5"></p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <div className="py-8 bg-[#69bbef] w-full px-2 rounded-full transform -translate-y-1/2 absolute overflow-hidden">
              <p className="text-3xl text-white font-branding-bold">Social</p>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-20 h-20  rounded-full flex justify-center items-center border-2 border-white">
                <div className="w-16 h-16 rounded-full flex justify-center items-center text-5xl text-[#69bbef] bg-white font-branding-bold">
                  S
                </div>
              </div>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-30 xl:px-4 px-2 bg-[#4BA7D0] h-32 right-0 flex justify-center items-center ">
                <Image
                  src={Icon3}
                  alt="icon3"
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
            <div className="w-full h-full  px-8">
              <div className="text-justify px-8 text-xl pb-20 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center h-full">
                <p>
                  Nesco focuses on social responsibility by promoting fair labor
                  practices, ensuring employee safety, and engaging with local
                  communities. We strive to create an inclusive workplace,
                  support economic growth through ethical sourcing, and deliver
                  high levels of customer satisfaction.
                </p>
                <p className=" absolute bottom-8 w-[100px] h-[8px] bg-[#48cfde] rounded-full my-5"></p>
                <p className=" w-[100px] h-[8px] rounded-full my-5"></p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="py-8 bg-[#3F89B0] w-full px-2 rounded-full transform -translate-y-1/2 absolute overflow-hidden">
              <p className="text-3xl text-white font-branding-bold">Governance</p>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-20 h-20  rounded-full flex justify-center items-center border-2 border-white">
                <div className="w-16 h-16 rounded-full flex justify-center items-center text-5xl text-[#3F89B0] bg-white font-branding-bold">
                  G
                </div>
              </div>
              <div className="absolute transform -translate-y-1/2 top-1/2 w-30 xl:px-4 px-2 bg-[#347A9E] h-32 right-0 flex justify-center items-center ">
                <Image
                  src={Icon2}
                  alt="icon2"
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
            <div className="w-full h-full px-8">
              <div className="text-justify px-8 text-xl pb-20 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center h-full">
                <p>
                  Nesco adheres to strong corporate governance, ensuring
                  transparency, accountability, and ethical decision-making. Our
                  governance framework ensures that sustainability is integrated
                  into our operations, with effective oversight by the Board and
                  clear policies to mitigate risks and maintain stakeholder
                  trust.
                </p>
                <p className=" absolute bottom-8 w-[100px] h-[8px] bg-[#3F89B0] rounded-full my-5"></p>
                <p className=" w-[100px] h-[8px] rounded-full my-5"></p>
              </div>
            </div>
          </div>
          {/* <div className="text-center bg-gray-200 pb-14 rounded-3xl w-[90%] h-[95%]">
            <div className="py-10 bg-[#69bbef] w-[122%] px-2 rounded-[65px] mb-5 relative right-7">
              <p className="text-2xl text-white">Social</p>
            </div>
            <p className="text-justify px-8 text-[15px]">
              Nesco focuses on social responsibility by promoting fair labor
              practices, ensuring employee safety, and engaging with local
              communities. We strive to create an in clusive workplace, support
              economic growth through ethical sourcing, and de liver high levels
              of customer satisfaction.
            </p>
          </div>
          <div className="text-center  bg-gray-200 pb-14 rounded-3xl w-[90%] h-[95%]">
            <div className="py-10 bg-[#48cfde] w-[122%] px-2 rounded-[65px] mb-5 relative right-7">
              <p className="text-2xl text-white">Governance</p>
            </div>
            <p className="text-justify px-8 text-[15px]">
              Nesco adheres to strong corporate gov ernance, ensuring
              transparency, account ability, and ethical decision-making. Our
              governance framework ensures that sus tainability is integrated
              into our opera tions, with effective oversight by the Board and
              clear policies to mitigate risks and maintain stakeholder trust.
            </p>
          </div> */}
        </div>
        <div>
          <button className="bg-[#07af8b] text-white p-3 mb-20 text-xl static">
            {" "}
            Refer to Section Policies on BRSR
          </button>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityGovernance;
