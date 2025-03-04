import React from "react";
import materiality from "@/assests/sustainability/materiality.png";
import Image from "next/image";

function SustainablityStrategy() {
  return (
    <div className="goal-section1 flex justify-center items-center flex-col ">
      <div className="my-10 text-center w-[90%]">
        <div className="text-left ">
          <h1 className="text-3xl font-bold px-5 py-3 bg-[#bfe9e2] text-gray-900 inline-block text-center ">
            {" "}
            Materiality shaping our business strategy
          </h1>
        </div>

        <div className="md:flex mt-16">
          <div className="basis-[60%] text-justify  md:mb-0 mb-8">
            <p className="lg:text-[21px] md:text-[16px] text-[14px] w-[93%] ">
              {" "}
              Nesco undertook a Materiality Assessment to identify key ESG
              issues relevant to its operations and stakeholders. This included
              obtaining inputs from internal and external stakeholders based on
              our engagements. The material issues identified in the process
              have been prioritized which has helped Nesco to allocate resources
              effectively and strategically address critical issues that
              resonate with both internal objectives and external stakeholder
              expectations. Nesco has defined KPIs and a roadmap to drive
              impacts for these material topics and the leadership team has been
              tasked with the implementation of these priorities. Nesco is
              integrating these ESG priorities into its operations through
              comprehensive policies, regular monitoring, and continuous
              improvement initiatives. Stakeholder engagement on these material
              priorities is at the core of our approach, ensuring alignment with
              external expectations while fostering transparency and
              accountability.
            </p>
          </div>
          <div className="basis-[40%]">
            <Image
              src={materiality}
              alt="stakeholder"
              className=" border-[4px] border-green-200 w-[99%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainablityStrategy;
