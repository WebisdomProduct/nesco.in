import React from "react";
import singleDanger from "@/assests/sustainability/singleDanger.png";
import doubleDanger from "@/assests/sustainability/doubleDanger.png";
import Image from "next/image";

function SustainabilityIssues() {
  return (
    <section className="goal-section flex flex-col justify-center items-center bg-[#b6d6ef] py-12">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-3xl font-branding-semibold mb-10">
          Material ESG Issues
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-gray-400 text-xl text-left">
            <thead>
              <tr className="bg-violet-900 text-[#b6d6ef] text-2xl text-center">
                <th scope="col" className="w-[15%] h-[20%]"></th>
                <th scope="col" className="py-2 px-2">
                  Environmental
                </th>
                <th scope="col">Social</th>
                <th scope="col">Governance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-gray-400">
                <td className="text-center flex flex-col items-center justify-center py-5">
                  <div className="overflow-hidden w-[80px] flex items-center justify-center">
                    <Image src={doubleDanger} alt="High Risk" className="" />
                  </div>
                  <span className="font-branding-semibold mt-5 text-gray-800 ">
                    High
                  </span>
                </td>
                <td className="border-2 border-gray-400 p-3">
                  <ul className="list-[circle] pl-5 list-outside lg:ml-5">
                    <li className="pb-3">Energy & Emission</li>
                    <li className="pb-3">Water & Waste</li>
                    <li>Green Buildings</li>
                  </ul>
                </td>
                <td className="border-2 border-gray-400 p-3">
                  <ul className="list-[circle] pl-5 list-outside lg:ml-5">
                    <li className="pb-3">Customer Centricity</li>
                    <li className="pb-3">Health, Safety & Well-being</li>
                    <li>Operational Excellence & Innovation</li>
                  </ul>
                </td>
                <td className="border-2 border-gray-400 p-3">
                  <ul className="list-[circle] pl-5 list-outside lg:ml-5">
                    <li className="pb-3">Ethics and Governance</li>
                    <li>Risk Management</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-2 border-gray-400">
                <td className="text-center flex flex-col items-center justify-center py-5">
                  <div className="overflow-hidden w-[70px] flex items-center justify-center">
                    <Image
                      src={singleDanger}
                      alt="Medium High Risk"
                      className=""
                    />
                  </div>
                  <span className="font-branding-semibold mt-5 text-gray-800 px-20">
                    Medium High
                  </span>
                </td>
                <td className="border-2 border-gray-400"></td>
                <td className="border-2 border-gray-400 p-3">
                  <ul className="list-[circle] pl-5 list-outside lg:ml-5">
                    <li className="pb-3">Sustainable Supply Chain</li>
                    <li className="pb-3">
                      Human Capital Management Employees <br /> & Contractual
                      Workforce
                    </li>
                    <li>Societal Impact</li>
                  </ul>
                </td>
                <td className="border-2 border-gray-400 p-3">
                  <ul className="list-[circle] pl-5 list-outside lg:ml-5">
                    <li className="pb-3">Human Rights</li>
                    <li>Compliance</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityIssues;
