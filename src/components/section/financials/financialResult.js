"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./buttonAnimation.css";

function FinancialResult() {
  const FinancialtableData = [
    {
      year: "2024-2025",
      description: "Outcome of Board Meeting 2 Aug 2024",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/OutcomeofBoardMeeting2Aug2024.pdf",
      quarter: "Q1",
    },
    {
      year: "2024-2025",
      description: "Outcome of Board Meeting 28 Oct 2024",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/OutcomeofBoardMeeting28Oct2024.pdf",
      quarter: "Q2",
    },
    {
      year: "2024-2025",
      description: "Outcome of Board Meeting Oct-Dec 2024",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Q3+Oct-Dec+(1).pdf",
      quarter: "Q3",
    },

    {
      year: "2023-2024",
      description: "Financials Results for quarter ended 30.06.2023",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Unaudited+Financial+Results+for+quarter+ended+30.06.2023.pdf",
      quarter: "Q1",
    },
    {
      year: "2023-2024",
      description: "Financials Results for quarter ended 30.09.2023",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Unaudited+Financail+Results+for+quarter+and+half+year+ended+30.09.2023.pdf",
      quarter: "Q2",
    },
    {
      year: "2023-2024",
      description: "Outcome of meeting",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Outcomeofthemeeting+(2).pdf",
      quarter: "Q3",
    },
    {
      year: "2023-2024",
      description: "Outcome of meeting",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Outcomeofmeeting.pdf",
      quarter: "Q4",
    },

    {
      year: "2022-2023",
      description: "UFR Q1 30/06/2022 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/UFR+-+Q1-+30.06.2022++-+Nesco+Limited.pdf",
      quarter: "Q1",
    },
    {
      year: "2022-2023",
      description: "UFR Q2 30/09/2022 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/UFR+-+Q2+-+30.09.2022+-+Nesco+Limited.pdf",
      quarter: "Q2",
    },
    {
      year: "2022-2023",
      description: "UFR Q3 31/12/2022 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/UFR+-+Q3+-+31.12.2022+-+Nesco+Limited.pdf",
      quarter: "Q3",
    },
    {
      year: "2022-2023",
      description: "AFR Q1 31/03/2023 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/AFR+-+Q4+-+31.03.2023+-+Nesco+Limited.pdf",
      quarter: "Q4",
    },

    {
      year: "2021-2022",
      description: "Financials",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financials.pdf",
      quarter: "Q1",
    },
    {
      year: "2021-2022",
      description: "UFR Q2 30/09/2021 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/UFR+-+Q2+-+30.09.2021+-+Nesco+Limited.pdf",
      quarter: "Q2",
    },
    {
      year: "2021-2022",
      description: "UFR Q3 31/12/2021 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/UFR+-+Q3+-+31.12.2021+-+Nesco+Limited.pdf",
      quarter: "Q3",
    },
    {
      year: "2021-2022",
      description: "AFR Q1 31/03/2022 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/AFR+-+Q4+-+31.03.2022+-+Nesco+Limited.pdf",
      quarter: "Q4",
    },

    {
      year: "2020-2021",
      description: "Financials Results 30/06/2020",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-30.06.20.pdf",
      quarter: "Q1",
    },
    {
      year: "2020-2021",
      description: "Financials Results 30/09/2020",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+30.09.20.pdf",
      quarter: "Q2",
    },
    {
      year: "2020-2021",
      description: "Financials Results 31/12/2020",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+31.12.20.pdf",
      quarter: "Q3",
    },
    {
      year: "2020-2021",
      description: "AFR Q1 31/03/2021 Nesco Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/AFR+-+Q4+-+31.03.2021+-+Nesco+Limited.pdf",
      quarter: "Q4",
    },

    {
      year: "2019-2020",
      description: "Financials Results 30/06/2019",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+30.06.19.pdf",
      quarter: "Q1",
    },
    {
      year: "2019-2020",
      description: "Financials Results 30/06/2019",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+30.09.2019.pdf",
      quarter: "Q2",
    },
    {
      year: "2019-2020",
      description: "Financials Results 30/06/2019",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+31.12.2019.pdf",
      quarter: "Q3",
    },
    {
      year: "2019-2020",
      description: "Financials Results 31/03/2020",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+31.03.2020.pdf",
      quarter: "Q4",
    },

    {
      year: "2018-2019",
      description: "Financials Results 30/06/2018",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+30.06.18.pdf",
      quarter: "Q1",
    },
    {
      year: "2018-2019",
      description: "Financials Results 13/11/2018",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results++-+13.11.18.pdf",
      quarter: "Q2",
    },
    {
      year: "2018-2019",
      description: "Financials Results 31/12/2018",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+31.12.18.pdf",
      quarter: "Q3",
    },
    {
      year: "2018-2019",
      description: "Financials Results 31/03/2019",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Results+-+31.03.2019.pdf",
      quarter: "Q4",
    },

    {
      year: "2017-2018",
      description: "Financials Results 30/06/2017",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial-Results-30.06.2017.pdf",
      quarter: "Q1",
    },
    {
      year: "2017-2018",
      description: "Financials Results 30/09/2017",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial-Results-30-09-17-Website.pdf",
      quarter: "Q2",
    },
    {
      year: "2017-2018",
      description: "Financials Results 31/12/2017",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial-Results-31.12.17.pdf",
      quarter: "Q3",
    },
    {
      year: "2017-2018",
      description: "Financials Results 31/03/2018",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial-Result-31.03.18.pdf",
      quarter: "Q4",
    },
  ];

  const AnnualtableData = [
    {
      year: "2023-2024",
      description: "65th Annual Reports 2023-2024",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/65th-Annual-Report-2023-24.pdf",
    },
    {
      year: "2023-2024",
      description: "Form MGT 7 Annual Report 2023-2024",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Form-MGT-7-Annual-Return-+2023-24.pdf",
    },

    {
      year: "2022-2023",
      description: "64th Annual Reports 2022-2023",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/64th+Annual+Report.pdf",
    },
    {
      year: "2022-2023",
      description: "Form MGT 7 Annual Report 2022-2023",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Form-MGT-7-Annual-Return-2022-23.pdf",
    },

    {
      year: "2021-2022",
      description: "63th Annual Reports 2021-2022",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Annual+Report+-+2021-22.pdf",
    },
    {
      year: "2021-2022",
      description: "Form MGT 7 Annual Report 2021-2022",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Form-MGT-7-Annual-+Return-+2021-22.pdf",
    },

    {
      year: "2020-2021",
      description: "62th Annual Reports 2020-2021",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Annual+Report+-+Nesco+Limited+-+2020-21.pdf",
    },
    {
      year: "2020-2021",
      description: "Form MGT 7 Annual Report 2020-2021",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Form-MGT-7-Annual-Return-2020-21.pdf",
    },

    {
      year: "2019-2020",
      description: "61th Annual Reports 2019-2020",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Annual+Report+-+Nesco+Limited+-+2019-20.pdf",
    },

    {
      year: "2018-2019",
      description: "60th Annual Reports 2018-2019",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Nesco+-+Annual+Report+-+2018-19.pdf",
    },

    {
      year: "2017-2018",
      description: "59th Annual Reports 2017-2018",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Annual-Report-2017-18.pdf",
    },
  ];

  const SubsidiarytableData = [
    {
      year: "2022-2023",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/NFID+Financial+Statements+2022-23.pdf",
    },
    {
      year: "2021-2022",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/NFID+Financial+Statement+-+2021-22.pdf",
    },
    {
      year: "2021-2022",
      description: "Nesco Foundation for Innovation and Development",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/NHPL+Financials+-+2021-22.pdf",
    },

    {
      year: "2020-2021",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Statements+-2020-21+-+signed.pdf",
    },
    {
      year: "2020-2021",
      description: "Nesco Foundation for Innovation and Development",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Statements+-2020-21+-+signed.pdf",
    },

    {
      year: "2019-2020",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Statements+-+NHPL+-+2019-20.pdf",
    },
    {
      year: "2019-2020",
      description: "Nesco Foundation for Innovation and Development",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Statements+-+2019-20.pdf",
    },

    {
      year: "2018-2019",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/Financial+Statements+-+2018-19.pdf",
    },
    {
      year: "2017-2018",
      description: "Nesco Hospitality Private Limited",
      url: "https://anandrathiimages.s3.ap-south-1.amazonaws.com/pdf/NHPL+Financial+FY+2017-2018.pdf",
    },
  ];

  const [visibleCheckboxes, setVisibleCheckboxes] = useState(8);
  const [visibleRows, setVisibleRows] = useState(5);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedQuarters, setSelectedQuarters] = useState([]);

  const [click, setClick] = useState("financials");

  const allYears = Array.from({ length: 8 }, (_, i) => {
    const startYear = 2024 - i;
    const endYear = startYear + 1;
    return `${startYear}-${endYear.toString()}`;
  });

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarters((prevSelected) =>
      prevSelected.includes(quarter)
        ? prevSelected.filter((q) => q !== quarter)
        : [...prevSelected, quarter]
    );
  };


  const getFilteredFinancialData = () => {
    return FinancialtableData.filter((item) => {
      const yearFilter = selectedYears.length > 0 ? selectedYears.includes(item.year) : true;
      const quarterFilter = selectedQuarters.length > 0 ? selectedQuarters.includes(item.quarter) : true;
      return yearFilter && quarterFilter;
    });
  };

  const filteredData = () => {
    if (click === "financials") {
      return getFilteredFinancialData();
    } else if (click === "annual") {
      return AnnualtableData.filter((item) =>
        selectedYears.length > 0 ? selectedYears.includes(item.year) : true
      );
    } else { // subsidiary
      return SubsidiarytableData.filter((item) =>
        selectedYears.length > 0 ? selectedYears.includes(item.year) : true
      );
    }
  }

  const handleSelectAll = () => {
    if (selectedYears.length === allYears.length) {
      setSelectedYears([]);
    } else {
      setSelectedYears(allYears);
    }
  };

  const currentFilteredData = filteredData();

  return (
    <div>
      <div className="flex justify-center mt-16 lg:mt-28 mb-10 header_purple goal-section1">
        <div className="flex items-end flex-col border-2 w-[90%] lg:px-12 px-5">
          <div className="w-full flex md:flex-row flex-col justify-between items-center z-50 gap-6 lg:w-[70%] transform md:-translate-y-1/2">
            <div
              className={`${
                click === "financials"
                  ? "bg-white text-blue-600 border-blue-600"
                  : "bg-blue-600 text-white"
              } hover:text-blue-600 hover:bg-white hover:border-blue-600 border-2 px-4 transition-all duration-300 py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("financials")}>
                Financial Results
              </button>
            </div>

            <div
              className={`${
                click === "annual"
                  ? "bg-white text-cyan-500 border-cyan-500"
                  : "bg-cyan-500 text-white"
              } hover:text-cyan-500 hover:bg-white hover:border-cyan-500 border-2 px-4 transition-all duration-300  py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("annual")}>
                Annual Reports
              </button>
            </div>

            <div
              className={`${
                click === "subsidiary"
                  ? "bg-white text-purple-500 border-purple-500"
                  : "bg-purple-500 text-white"
              } hover:text-purple-500 hover:bg-white hover:border-purple-500 border-2 px-4 transition-all duration-300 py-2 text-center font-branding-medium text-2xl`}
            >
              <button className="" onClick={() => setClick("subsidiary")}>
                Subsidiary Accounts
              </button>
            </div>
          </div>

          <div className=" my-12 flex md:flex-row flex-col justify-between w-[98%] md:w-full">
            <div className="md:w-[30%]  py-6 mt-2 mb-2 flex flex-col">
              <p className=" mt-2 font-branding-medium text-gray-500 text-2xl">
                FILTERS
              </p>
              <button
                className="mt-4 mb-2 font-branding-medium text-gray-500 text-left"
                onClick={handleSelectAll}
              >
                {selectedYears.length === allYears.length ? 'Deselect All' : 'Select All'}
              </button>

              <p className="mt-5 mb-2 font-branding-medium text-gray-500 text-left">
                YEAR
              </p>
              {allYears.slice(0, visibleCheckboxes).map((year, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    checked={selectedYears.includes(year)}
                    onChange={() => handleYearChange(year)}
                  />
                  <label className="ml-2 text-base md:text-xl font-medium text-gray-500">
                    {year}
                  </label>
                </div>
              ))}

              {click === "financials" && (
                <div className="mt-5 mb-2">
                  <p className="mb-2 text-xl text-gray-500 font-branding-medium text-left">QUARTER</p>
                  <div className="flex flex-col gap-1">
                    {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 text-gray-500 text-base md:text-xl"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                          checked={selectedQuarters.includes(quarter)}
                          onChange={() => handleQuarterChange(quarter)}
                        />
                        {quarter}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className=" md:w-[70%] py-3 col-span-3 ">
              <table className="table-auto border-separate text-left w-full ">
                <thead>
                  <tr>
                    <th className=" bg-[#2b2a76] text-gray-200 shadow-sm pl-8 py-3 text-3xl">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentFilteredData.slice(0, visibleRows).map((data, index) => (
                    <tr key={index}>
                      <td className="shadow-md pl-3 font-branding-medium text-gray-500 text-base md:text-xl">
                        <div className="flex gap-10 my-3">
                          <a href={data.url} download target="_blank" rel="noopener noreferrer" className="px-4 hover:text-blue-700">
                            {data.description} -{" "}
                            {data.year.slice(0, 5) + +data.year.slice(7)}
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="w-full justify-center items-center flex mt-10">
                {visibleRows < currentFilteredData.length ? (
                  <button
                    className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 flex justify-center items-center gap-3"
                    onClick={() => setVisibleRows((prev) => prev + 3)}
                  >
                    Load More{" "}
                    <span className="">
                      <FaArrowRight className="rotate-90" />
                    </span>
                  </button>
                ) : (
                  <button
                    className="mt-2 px-6 py-2 rounded-full text-gray-500 border-2 border-gray-500 flex justify-center items-center gap-3"
                    onClick={() => setVisibleRows(5)}
                  >
                    Load Less{" "}
                    <span className="">
                      <FaArrowRight className="-rotate-90" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialResult;