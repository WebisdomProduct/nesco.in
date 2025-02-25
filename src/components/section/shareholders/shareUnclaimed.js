import React from "react";
import { FaArrowDown } from "react-icons/fa";

function ShareUnclaimed() {
  // function getFileName(fileUrl) {
  //   // Ensure fileUrl is a string
  //   const fileUrlString = fileUrl;
  //   // If window is undefined (server side), use the fileUrlString directly
  //   if (typeof window === "undefined") {
  //     return fileUrlString.split("/").pop();
  //   }

  //   let location = window.location.origin;
  //   const urlObj = new URL(fileUrlString, location);
  //   const fileNameWithHash = urlObj.pathname.split("/").pop();
  //   const parts = fileNameWithHash.split(".");
  //   // If the file name doesn't contain a dot (unexpected), return the full name
  //   if (parts.length < 2) return fileNameWithHash;
  //   const originalName = parts[0];
  //   const extension = parts[parts.length - 1];
  //   return `${originalName}.${extension}`;
  // }

  const tableData = [
    {
      financialYear: "2023-2024",
      dividend: "300",
      unclaimedDividend: "40,45,230.00",
      lastDate: "20-Aug-31",
      dueDate: "07-Sep-31",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2023-2024-Unclaimed-Dividend-31-12-2024.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2022-2023",
      dividend: "225",
      unclaimedDividend: "13,87,914.50",
      lastDate: "09-Aug-30",
      dueDate: "05-Sep-30",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2022-2023-Unclaimed-Dividend.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2021-2022",
      dividend: "150",
      unclaimedDividend: "11,27,513.00",
      lastDate: "13-Aug-29",
      dueDate: "14-Sep-29",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2021-2022-Unclaimed-Dividend.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2020-2021",
      dividend: "126",
      unclaimedDividend: "13,42,926.00",
      lastDate: "17-Sep-28",
      dueDate: "15-Oct-28",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2020-2021-Unclaimed-Dividend.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2019-2020",
      dividend: "125",
      unclaimedDividend: "41,14,437.00",
      lastDate: "02-May-27",
      dueDate: "29-May-27",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2019-2020-Unclaimed-Dividend.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2018-2019",
      dividend: "125",
      unclaimedDividend: "19,67,672.00",
      lastDate: "11-Sep-26",
      dueDate: "07-Oct-26",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2018-2019-Unclaimed-Dividend.pdf",
        import.meta.url
      ).href,
    },
    {
      financialYear: "2017-2018",
      dividend: "115",
      unclaimedDividend: "21,61,279.00",
      lastDate: "14-Sep-25",
      dueDate: "10-Oct-25",
      downloadFile: new URL(
        "@/assests/shareHolder/unclaimed/2017-2018-Unclaimed-Dividend-31-12-2024.pdf",
        import.meta.url
      ).href,
    },
  ];

  return (
    <div className="dividendDiv goal-section1 bg-gray-300 flex justify-center items-center flex-col py-10 header_purple">
      <div className="flex flex-col items-center w-[90%] gap-5 md:gap-10">
        <div className="flex flex-col items-center">
          <p className="font-branding-semibold text-4xl sm:text-6xl text-primary my-6 justify-center text-center">
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
        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="table-auto border-separate w-full m-auto text-center bg-gray-300">
              <thead className=" font-branding-semibold">
                {/* First Row: Main Headers */}
                <tr className="">
                  <th className="bg-primary  text-white px-4 py-2 " rowSpan="2">
                    FINANCIAL YEAR
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " rowSpan="2">
                    DIVIDEND %
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " colSpan="2">
                    UNCLAIMED DIVIDEND
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " colSpan="2">
                    LAST DATE FOR CLAIMING
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " rowSpan="2">
                    DUE DATE FOR TRANSFER TO IEPF
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " rowSpan="2">
                    SHAREHOLDER-WISE DETAILS
                  </th>
                </tr>
                {/* Second Row: Sub Headers */}
                <tr>
                  <th className="bg-primary  text-white px-4 py-2 " colSpan="2">
                    (AMOUNT IN RS.)
                  </th>
                  <th className="bg-primary  text-white px-4 py-2 " colSpan="2">
                    UNPAID DIVIDEND
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-500">
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
                      <div className="flex justify-center items-center w-10 h-10">
                        <a
                          href={data.downloadFile}
                          // download={getFileName(data.downloadFile)}
                          className="inline-block"
                          target="_blank"
                        >
                          <button className=" bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                            <FaArrowDown />
                          </button>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareUnclaimed;
