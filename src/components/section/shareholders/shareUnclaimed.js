import React from "react";
import { FaArrowDown } from "react-icons/fa";

function ShareUnclaimed() {
  const tableData = [
    {
      financialYear: "2023-2024",
      dividend: "300",
      unclaimedDividend: "40,45,230.00",
      lastDate: "20-Aug-31",
      dueDate: "07-Sep-31",
    },
    {
      financialYear: "2022-2023",
      dividend: "225",
      unclaimedDividend: "13,87,914.50",
      lastDate: "09-Aug-30",
      dueDate: "05-Sep-30",
    },
    {
      financialYear: "2021-2022",
      dividend: "150",
      unclaimedDividend: "11,27,513.00",
      lastDate: "13-Aug-29",
      dueDate: "14-Sep-29",
    },
    {
      financialYear: "2020-2021",
      dividend: "126",
      unclaimedDividend: "13,42,926.00",
      lastDate: "17-Sep-28",
      dueDate: "15-Oct-28",
    },
    {
      financialYear: "2019-2020",
      dividend: "125",
      unclaimedDividend: "41,14,437.00",
      lastDate: "02-May-27",
      dueDate: "29-May-27",
    },
    {
      financialYear: "2018-2019",
      dividend: "125",
      unclaimedDividend: "19,67,672.00",
      lastDate: "11-Sep-26",
      dueDate: "07-Oct-26",
    },
    {
      financialYear: "2017-2018",
      dividend: "115",
      unclaimedDividend: "21,61,279.00",
      lastDate: "14-Sep-25",
      dueDate: "10-Oct-25",
    },
  ];

  return (
    <div className="dividendDiv goal-section1 bg-gray-300 flex justify-center items-center flex-col gap-5 md:gap-10 py-10 header_purple">
      <div className="flex flex-col items-center w-[90%]">
        <p className="font-branding-semibold text-4xl sm:text-5xl text-blue-800 my-6 justify-center text-center">
          Unclaimed Dividends
        </p>

        <p className="justify-center text-justify text-3xl sm:text-2xl font-branding-medium">
          Pursuant to Sections 124(5) of the Companies Act, 2013, read with
          rules framed there under, the Company is required to transfer the
          amount of dividend remained unpaid/unclaimed for a period of seven
          years from the date of transfer to the Investor Education and
          Protection Fund (IEPF).
        </p>
      </div>
      <div className="tableDiv w-[90%]">
        <div className="overflow-x-auto">
          <table className="table-auto border-separate  m-auto text-center bg-black">
            <thead className=" font-branding-semibold">
              {/* First Row: Main Headers */}
              <tr className="">
                <th className="bg-blue-800  text-white px-4 py-2 " rowSpan="2">
                  FINANCIAL YEAR
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " rowSpan="2">
                  DIVIDEND %
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " colSpan="2">
                  UNCLAIMED DIVIDEND
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " colSpan="2">
                  LAST DATE FOR CLAIMING
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " rowSpan="2">
                  DUE DATE FOR TRANSFER TO IEPF
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " rowSpan="2">
                  SHAREHOLDER-WISE DETAILS
                </th>
              </tr>
              {/* Second Row: Sub Headers */}
              <tr>
                <th className="bg-blue-800  text-white px-4 py-2 " colSpan="2">
                  (AMOUNT IN RS.)
                </th>
                <th className="bg-blue-800  text-white px-4 py-2 " colSpan="2">
                  UNPAID DIVIDEND
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableData.map((data, index) => (
                <tr key={index} className=" w-full font-branding-semibold">
                  <td className="px-4 py-2">{data.financialYear}</td>
                  <td className="px-4 py-2">{data.dividend}</td>
                  <td className="px-4 py-2" colSpan={2}>
                    {data.unclaimedDividend}
                  </td>
                  <td className="px-4 py-2" colSpan={2}>
                    {data.lastDate}
                  </td>
                  <td className="px-4 py-2">{data.dueDate}</td>
                  <td className="px-4 py-2 flex justify-center items-center">
                    <div className="flex justify-center items-center w-10 h-10 mt-3 bg-blue-500">
                      <button className="bg-white text-blue-500 p-2 rounded-full">
                        <FaArrowDown />
                      </button>
                    </div>
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
