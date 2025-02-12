import React from "react";
import { FaArrowDown } from "react-icons/fa";

function ShareUnclaimed() {
  return (
    <div className="dividendDiv bg-gray-300 p-4 ">
      <div className="w-full flex flex-col items-center">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 m-auto my-6 justify-center text-center lg:w-[80%] md:w-[85%]">
          Unclaimed Dividends
        </p>

        <p className="justify-center text-justify w-auto text-2xl sm:text-xl px-12 font-branding-medium lg:w-[80%] md:w-[85%]">
          Pursuant to Sections 124(5) of the Companies Act, 2013, read with
          rules framed thereunder, the Company is required to transfer the
          amount of dividend remained unpaid/unclaimed for a period of seven
          years from the date of transfer to the Investor Education and
          Protection Fund (IEPF).
        </p>
      </div>
      <div className="tableDiv m-6 sm:m-4 px-2 py-4">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-max border-separate bg-white m-auto text-center border border-gray-300">
            <thead>
              <tr>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  FINANCIAL YEAR
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  DIVIDEND %
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  UNCLAIMED DIVIDEND <br />
                  <span className="text-xs">(AMOUNT IN RS.)</span>
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  LAST DATE FOR CLAIMING <br />
                  <span className="text-xs">UNPAID DIVIDEND</span>
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  DUE DATE FOR TRANSFER TO IEPF
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  SHAREHOLDER WISE DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  year: "2015-16",
                  dividend: "10",
                  unclaimed: "40000",
                  lastDate: "25-01-2027",
                  dueDate: "25-01-2030",
                },
                {
                  year: "2016-17",
                  dividend: "12",
                  unclaimed: "50000",
                  lastDate: "10-02-2028",
                  dueDate: "10-02-2031",
                },
              ].map((data, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2 text-sm sm:text-xs">{data.year}</td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.dividend}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.unclaimed}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.lastDate}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.dueDate}
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                      <FaArrowDown />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShareUnclaimed;
