import Image from "next/image";
import React from "react";
import stakeholder from "@/assests/sustainability/stakeholder.png";
import materiality from "@/assests/sustainability/materiality.png";

function SustainabilityTerms() {
  return (
    <>
      <div className="my-20 lg:mx-32 md:mx-10 mx-6  text-center">
        <div className="text-right md:mr-24">
          <h1 className="text-3xl font-bold px-5 py-3 bg-[#c2ddf7] text-gray-900 inline-block text-center ">
            {" "}
            Stakeholder Engagement & Management
          </h1>
        </div>

        <div className="md:flex mt-16">
          <div className="basis-[40%] md:mb-0 mb-8">
            <Image
              src={stakeholder}
              alt="stakeholder"
              className=" border-[3px] border-sky-200 w-[99%]"
            />
          </div>
          <div className="basis-[60%] text-justify ">
            <p className="lg:text-[21px] md:text-[16px] text-[14px] w-[93%] md:ml-10 sm:pl-0 pl-3">
              {" "}
              Nesco believes that stakeholder engagement is a cornerstone of our
              commitment to sustainability through transparency and
              accountability. We have identified our stakeholders which
              encompass shareholders and investors, local communities,
              employees, suppliers, business partners, government and regulatory
              authorities, and customers. Acknowledging the importance of these
              stakeholders in achieving our sustainability goals, we actively
              engage with them to ensure that their voices are heard. We
              proactively invest in understanding expectations, address concerns
              and gather performance feedback to incorporate them into our
              decision-making processes. Recognizing stakeholder management as
              crucial to fostering trust and Recognizing stakeholder management
              as crucial to fostering trust and facilitating better
              decision-making, Nesco has developed a policy and engagement
              framework for its key stakeholders. Customers are further
              categorized into occupiers and their employees, exhibition
              organizers, exhibitors, visitors, and Indabrator clients. This
              segmentation facilitates targeted engagement and actions tailored
              to each group's needs. These are complemented by effective
              grievance management mechanisms to address and resolve stakeholder
              concerns promptly and fairly
            </p>
          </div>
        </div>
      </div>

      <div className="my-20 lg:mx-32 md:mx-10 mx-6 text-center">
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
              issues rele vant to its operations and stakeholders. This included
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
    </>
  );
}

export default SustainabilityTerms;
