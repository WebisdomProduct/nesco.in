import React from "react";
import Icon1 from "@/assests/sustainability/65.png";
import Icon2 from "@/assests/sustainability/64.png";
import Icon3 from "@/assests/sustainability/63.png";
import Image from "next/image";

function SustainabilityFeatures() {
  return (
    <div className="goal-section1 flex justify-center mb-14 mt-28 lg:mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between text-center w-[90%] gap-10">
        <div className="flex flex-col items-center relative">
          <div className="absolute md:w-[70px] w-[60px] h-[60px] p-2 bg-[#eeeed4] left-0 transform -translate-y-1/2 top-5 md:-translate-x-[30%]">
            <Image
              src={Icon1}
              alt="icon1"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mb-8 bg-[#eeeed4] py-2 md:px-6 md:text-xl whitespace-nowrap font-bold text-gray-800 w-full pl-10">
            Fostering Stakeholder Trust
          </p>
          <p className="text-gray-600 text-lg text-justify ml-20 mr-4">
            {" "}
            Trust is the cornerstone of Nesco&#39;s relationships and we embrace
            ethical practices, transparency, and account ability in all our
            operations. Active en gagement with stakeholders to integrate their
            perspectives enables us to build lasting trust with all our
            stakeholders.
          </p>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="absolute md:w-[70px] w-[60px] h-[60px] p-2 bg-[#bfe9e2] left-0 transform -translate-y-1/2 top-5 md:-translate-x-[30%]">
            <Image
              src={Icon2}
              alt="icon1"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mb-8 bg-[#bfe9e2] py-2 md:px-4 md:text-xl whitespace-nowrap font-bold text-gray-800 w-full xl:pl-[3.2rem] pl-10">
            Driving Continuous Improvement
          </p>
          <p className="text-gray-600 text-lg text-justify ml-20 mr-4">
            {" "}
            Nesco sees sustainability as a catalyst for continuous improvement
            for its businesses. We set ambitious and progressive goals
            supported by financial and people resources to deliver improving
            positive outcomes. We foster innovation and efficiency with a focus
            on minimizing mizing positive impacts on society.
          </p>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="absolute md:w-[70px] w-[60px] h-[60px] p-2 bg-[#f1d2ef] left-0 transform -translate-y-1/2 top-5 md:-translate-x-[30%]">
            <Image
              src={Icon3}
              alt="icon1"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mb-8 bg-[#f1d2ef] py-2 md:px-6 md:text-xl whitespace-nowrap font-bold text-gray-800 w-full pl-10 ">
            {" "}
            Creating Long-Term Value
          </p>
          <p className="text-gray-600 text-lg text-justify ml-20 mr-4">
            Appreciating diverse and often conflicting stakeholder needs, Nesco
            leverages sustainable practices to deliver on its commitment to
            creating enduring value. By integrating sustainable practices into
            our operations, we enhance operational efficiency, reduce costs, and
            mitigate risks, safeguarding natural resources to pave the way for a
            resilient future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityFeatures;
