import Image from "next/image";
import React from "react";
import stakeholder from "@/assests/sustainability/stakeholder.png";

function SustainabilityTerms() {
  return (
    <div className="goal-section1 flex justify-center items-center flex-col mt-0 lg:mt-10">
      <div className="my-10 text-center w-[90%]">
        <div className="text-right md:mr-24">
          <h1 className="text-3xl font-bold px-5 py-3 bg-[#c2ddf7] text-gray-900 inline-block text-center ">
            {" "}
            Stakeholder Engagement & Management
          </h1>
        </div>

        <div className="md:flex mt-16">
          <div className="basis-[40%] md:mb-0 mb-5">
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
              concerns promptly and fairly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityTerms;
