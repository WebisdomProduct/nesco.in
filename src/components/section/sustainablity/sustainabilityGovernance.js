import React from "react";

function SustainabilityGovernance() {
  return (
    <div className="flex justify-center">
      <div className="text-center w-[80%]">
        <h1 className="text-3xl font-bold text-[#39c2ab] mb-8">
          ESG Governance Structure
        </h1>
        <p className="lg:text-[21px] md:text-[16px] text-[14px] text-justify font-medium text-black mb-20">
          Nesco&#39;s Risk Committee of the Board ensures oversight of our
          sustainability initiatives. The committee evaluates our policies and
          practices to meet regulatory requirements and assesses the impact of
          Nesco&#39;s operations on the environment and communities. In
          addition, it helps drive Nesco&#39;s sustainability ambitions by
          identifying opportunities for improvements for reducing the Compa
          ny&#39;s environmental footprint and enhancing positive socially
          responsible outcomes. In consultation with the Board, we have devel
          oped a robust policy framework and are progressively incorporating
          material ESG topics into the business and our ERM process.
        </p>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mb-14 gap-20">
          <div className=" relative">
            <div className="py-8 bg-[#85c667] w-full px-2 rounded-full transform -translate-y-1/2 absolute">
              <p className="text-2xl text-white">Environment</p>
            </div>
            <div className="w-full h-full  px-8">
              <div className="text-justify px-8 text-[15px] pb-8 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center">
                <p>
                  Nesco is committed to reducing its en vironmental impact by
                  adopting renew able energy, minimizing waste, and con serving
                  natural resources. We invest in green technologies, promote
                  energy ef ficiency, and ensure compliance with environmental
                  regulations to foster sustainability across our operations.
                </p>
                <p className=" w-[100px] h-[8px] bg-[#85c667] rounded-full my-5"></p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <div className="py-8 bg-[#69bbef] w-full px-2 rounded-full transform -translate-y-1/2 absolute">
              <p className="text-2xl text-white">Social</p>
            </div>
            <div className="w-full h-full  px-8">
              <div className="text-justify px-8 text-[15px] pb-8 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center h-full">
                <p>
                  Nesco focuses on social responsibility by promoting fair labor
                  practices, ensuring employee safety, and engaging with local
                  communities. We strive to create an in clusive workplace,
                  support economic growth through ethical sourcing, and de liver
                  high levels of customer satisfaction.
                </p>
                <p className=" w-[100px] h-[8px] bg-[#69bbef] rounded-full my-5"></p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="py-8 bg-[#48cfde] w-full px-2 rounded-full transform -translate-y-1/2 absolute">
              <p className="text-2xl text-white">Governance</p>
            </div>
            <div className="w-full h-full  px-8">
              <div className="text-justify px-8 text-[15px] pb-8 pt-20 bg-gray-200 rounded-3xl flex flex-col items-center h-full">
                <p>
                  Nesco adheres to strong corporate gov ernance, ensuring
                  transparency, account ability, and ethical decision-making.
                  Our governance framework ensures that sus tainability is
                  integrated into our opera tions, with effective oversight by
                  the Board and clear policies to mitigate risks and maintain
                  stakeholder trust.
                </p>
                <p className=" w-[100px] h-[8px] bg-[#48cfde] rounded-full my-5"></p>
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
          <button className="bg-green-700 text-white p-3 mb-14 text-sm static">
            {" "}
            Refer to Section Policies on BRSR
          </button>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityGovernance;
