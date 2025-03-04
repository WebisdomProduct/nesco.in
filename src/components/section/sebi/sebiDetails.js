import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

function SebiDetails() {
  const data = [
    {
      title: "BUSINESS OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title:
        "TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "COMPOSITION OF VARIOUS COMMITTEES OF THE BOARD OF DIRECTORS",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "POLICIES & CODES",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "POLICIES ON BRSR",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title:
        "CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "DETAILS OF DIRECTORS FAMILIARISATION PROGRAMMES OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title:
        "E-MAIL ADDRESS AND CONTACT DETAILS OF DESIGNATED OFFICIALS FOR GRIEVANCE REDRESSAL/ASSISTING AND HANDLING INVESTOR GREYANCESA FOR DETERMING MATERIALITY OF EVENTS",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "NOTICES OF BOARD AND SHAREHOLDERS MEETINGS",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "QUARTERLY/ANNUAL FINANCIAL RESULTS OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "ANNUAL REPORTS OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "MEMORANDUM AND ARTICLES OF ASSOCIATION",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "BUSINESS RESPONSIBILITY AND SUSTAINABILITY REPORT",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "SHAREHOLDING PATTERN OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "CORPORATE GOVERNANCE REPORTS",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "INVESTOR GRIEVANCES REPORTS",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title:
        "NEWSPAPER ADVERTISEMENTS PURSUANT TO REGULATION 47(1) OF SEN (LOOR) REGULATIONS, 2015",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "FINANCIAL STATEMENTS OF SUBSIDIARY OF THE COMPANY",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title: "SECRETARIAL COMPLIANCE REPORT",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
    {
      title:
        "DISCLOSURES UNDER REGULATION 30(8) OF SEBI (LODR) REGARLATIONS, 2015",
      description:
        "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className=" flex justify-center">
      <div className="goal-section1 lg:w-[60%] w-[90%] header_purple mt-0">
        {data.map((element, index) => (
          <div key={index} className="mb-3">
            <div
              className="border-2 border-gray-300 px-4 py-2 font-bold flex justify-between mb-0"
              onClick={() => handleToggle(index)}
            >
              <p className="text-gray-600 font-branding-semibold w-[95%]">
                {element.title}
              </p>
              <p className=" text-blue-800 cursor-pointer overflow-hidden p-0 h-6 flex justify-center items-center w-[5%]">
                <span
                  className={` transition-transform duration-300 font-bold text-3xl inline-block ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </p>
            </div>
            <div>
              <div
                className={`font-bold transition-all duration-700 ease-in-out overflow-hidden transform ${
                  openIndex === index
                    ? "opacity-100 max-h-[200px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <p className="text-gray-500 text-sm p-4 border-2 border-gray-300">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SebiDetails;
