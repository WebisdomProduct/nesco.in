import { apiUrls } from "@/apis";
import useGetQuery from "@/hooks/getQuery.hook";
import React, { useEffect, useMemo, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import {
  AgmProceeding,
  Amalgamation,
  AnnualReport,
  AnnualResult,
  CorporateReport,
  Criteria,
  Details,
  FinancialStatement,
  InvestorReport,
  Memorandum,
  NewsAd,
  NoticeBoard,
  PolicyAndCode,
  PolicyAndCodeBRSR,
  SCHEDULE,
  Secretarial,
  ShareHoldingPattern,
  SrutinizerReport,
  TermsAndCondition,
  VotingResult,
} from "./sebiFile";

function SebiDetails() {
  const { getQuery } = useGetQuery();
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTitle, setCurrentTitle] = useState();

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.sebi}`,
      onSuccess: (res) => {
        setGetData(res?.data || []);
        setTimeout(() => setLoading(false), 2000);
      },
      onFail: (err) => {
        console.error("Failed to fetch announcements data:", err);
      },
    });
  }, []);

  const transformedData = useMemo(() => {
    if (!Array.isArray(getData)) return [];

    const transformed = getData.map((item) => {
      // Handle address tables if they exist
      if (Array.isArray(item.addressTables) && item.addressTables.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "addressTables",
          tables: item.addressTables.map((table) => ({
            tableAddressTitle: table.tableAddressTitle,
            fields: table.fields.map((field) => ({
              type: field.type,
              data: {
                cin: field.data?.cin || "",
                email: field.data?.email || "",
                fax: field.data?.fax || "",
                full_address: field.data?.full_address || "",
                name: field.data?.name || "",
                phone: field.data?.phone || "",
                position: field.data?.position || "",
                tel: field.data?.tel || "",
              },
              _id: field._id,
            })),
            _id: table._id,
          })),
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }

      if (Array.isArray(item.documentLink) && item.documentLink.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentLink",
          tables: item.documentLink.map((table) => ({
            DocumentName: table.DocumentName,
            link: table.link,
          })),
        };
      }
      if (Array.isArray(item.documentPdf) && item.documentPdf.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentPdf",
          tables: item.documentPdf.map((table) => ({
            DocumentPdfName: table.DocumentPdfName,
            documentPdfFile: table.documentPdfFile,
          })),
        };
      }
      if (Array.isArray(item.positionTable) && item.positionTable.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "positionTable",
          tables: item.positionTable.map((table) => ({
            tablePositionTitle: table.tablePositionTitle,
            fields: table.fields.map((field) => ({
              name1: field.name1,
              position: field.position,
            })),
          })),
        };
      }
      if (Array.isArray(item.documentAll) && item.documentAll.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentAll",
          tables: item.documentAll.map((table) => ({
            year: table.year,
            fields: table.documentfields.map((field) => ({
              _id: field._id,
              documentDate: field.documentDate,
              documentFile: field.documentFile,
              documentName: field.documentName,
            })),
          })),
        };
      }
      if (Array.isArray(item.pdfTables) && item.pdfTables.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "pdfTables",
          tables: item.pdfTables.map((table) => ({
            year: table.pdfYear,
            fields: table.fields.map((field) => ({
              _id: field._id,
              quater: field.quater,
              pdfDate: field.pdfDate,
              pdfFile: field.pdfFile,
              pdfName: field.pdfName,
            })),
          })),
        };
      }

      // Default return for items without any table data
      return {
        _id: item._id,
        title: item.title,
        option: null,
        tables: [],
      };
    });

    // Group items by title and merge their tables
    const groupedByTitle = {};
    
    transformed.forEach((item) => {
      const title = item.title;
      
      if (!groupedByTitle[title]) {
        // First occurrence of this title
        groupedByTitle[title] = {
          ...item,
          _ids: [item._id], // Keep track of all IDs
        };
      } else {
        // Merge tables from duplicate titles
        groupedByTitle[title]._ids.push(item._id);
        
        // Merge tables based on option type
        if (item.tables && item.tables.length > 0) {
          groupedByTitle[title].tables = [
            ...groupedByTitle[title].tables,
            ...item.tables
          ];
        }
      }
    });

    // Convert back to array and sort tables
    return Object.values(groupedByTitle).map(item => {
      // Sort tables by year (descending - newest first)
      if (item.tables && item.tables.length > 0) {
        item.tables.sort((a, b) => {
          const yearA = a.year || a.pdfYear || '';
          const yearB = b.year || b.pdfYear || '';
          return yearB.localeCompare(yearA);
        });

        // Sort fields within each table by date (descending - newest first)
        item.tables.forEach(table => {
          if (table.fields && table.fields.length > 0) {
            table.fields.sort((a, b) => {
              // Get the date from either documentDate or pdfDate
              const dateA = a.documentDate || a.pdfDate;
              const dateB = b.documentDate || b.pdfDate;
              
              if (!dateA && !dateB) return 0;
              if (!dateA) return 1;
              if (!dateB) return -1;
              
              return new Date(dateB) - new Date(dateA);
            });
          }
        });
      }
      
      return item;
    });
  }, [getData]);

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentTitle(transformedData[openIndex]?.title);
    }
  }, [openIndex, transformedData]);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Helper function to get file path from hardcoded data
  const getFilePath = (title, field) => {
    const titleFileMap = {
      "NEWSPAPER ADVERTISEMENTS PURSUANT TO REGULATION 47(1) OF SEBI (LODR) REGULATIONS, 2015": {
        data: NewsAd(),
        key: "fileName",
        match: "_id"
      },
      "FINANCIAL STATEMENTS OF SUBSIDIARY OF THE COMPANY": {
        data: FinancialStatement(),
        key: "fileName",
        match: "_id"
      },
      "SECRETARIAL COMPLIANCE REPORT": {
        data: Secretarial(),
        key: "fileName",
        match: "documentName"
      },
      "VOTING RESULTS": {
        data: VotingResult(),
        key: "fileName",
        match: "documentName"
      },
      "SRUTINIZER'S REPORT": {
        data: SrutinizerReport(),
        key: "fileName",
        match: "documentName"
      },
      "AGM PROCEEDINGS": {
        data: AgmProceeding(),
        key: "fileName",
        match: "documentName"
      },
      "SCHEDULE OF AND PRESENTATIONS MADE TO ANALYSTS OR INSTITUTIONAL INVESTORS": {
        data: SCHEDULE(),
        key: "fileName",
        match: "documentName"
      }
    };

    const mapping = titleFileMap[title];
    if (!mapping) return null;

    const matchValue = field[mapping.match];
    const fileData = mapping.data.find(item => item[mapping.key] === matchValue);
    return fileData?.filePath || null;
  };

  // Helper function to get PDF file path
  const getPdfFilePath = (title, fieldId) => {
    const pdfTitleMap = {
      "Investor Grievances Reports": InvestorReport(),
      "Corporate Governance Reports": CorporateReport(),
      "SHAREHOLDING PATTERN OF THE COMPANY": ShareHoldingPattern(),
      "QUARTERLY / ANNUAL FINANCIAL RESULTS OF THE COMPANY": AnnualResult(),
      "NOTICES OF BOARD AND SHAREHOLDERS MEETINGS": NoticeBoard()
    };

    const data = pdfTitleMap[title];
    if (!data) return null;

    const fileData = data.find(item => item.fileName === fieldId);
    return fileData?.filePath || null;
  };

  const renderTableContent = (item) => {
    switch (item.option) {
      case "addressTables":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3] p-4">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4 border rounded bg-white">
                <div className="">
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3">
                    {table.tableAddressTitle}
                  </h4>
                  <div className="space-y-3">
                    {table.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="border p-3 rounded">
                        <p className="font-branding-bold">{field.data.name}</p>
                        <p>{field.data.position}</p>
                        <p>{field.data.full_address}</p>
                        {field.data?.email && (
                          <p>
                            Email:{" "}
                            <a href={`mailto:${field.data.email}`} className="underline hover:text-blue-500">
                              {field.data.email}
                            </a>
                          </p>
                        )}
                        {field.data?.phone && <p>Phone: {field.data.phone}</p>}
                        {field.data?.tel && <p>Tel: {field.data.tel}</p>}
                        {field.data?.cin && <p>CIN: {field.data.cin}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "documentLink":
        return (
          <ul className="p-5 bg-[#F3F3F3] w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {item.tables.map((doc, docIndex) => (
              <li key={docIndex} className="">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 border-[#CCCCCC] border underline hover:text-blue-500 hover:bg-white transition-colors"
                >
                  {doc.DocumentName}
                </a>
              </li>
            ))}
          </ul>
        );

      case "documentPdf":
        return (
          <div className="bg-[#F3F3F3] p-4 space-y-3">
            {/* Handle hardcoded data based on title */}
            {item.title === "TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS OF THE COMPANY" && 
              TermsAndCondition().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "Policies & Codes" && 
              PolicyAndCode().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "POLICIES ON BRSR" && 
              PolicyAndCodeBRSR().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS OF THE COMPANY" && 
              Criteria().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "DETAILS OF DIRECTORS' FAMILIARISATION PROGRAMMES OF THE COMPANY" && 
              Details().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "MEMORANDUM AND ARTICLES OF ASSOCIATION" && 
              Memorandum().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }
            
            {item.title === "AMALGAMATION" && 
              Amalgamation().map((data, index) => (
                <div key={index} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={data.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{data.fileName}</span>
                  </a>
                </div>
              ))
            }

            {/* Render API data if no hardcoded match */}
            {!["TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS OF THE COMPANY",
                "Policies & Codes",
                "POLICIES ON BRSR",
                "CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS OF THE COMPANY",
                "DETAILS OF DIRECTORS' FAMILIARISATION PROGRAMMES OF THE COMPANY",
                "MEMORANDUM AND ARTICLES OF ASSOCIATION",
                "AMALGAMATION"].includes(item.title) &&
              item.tables.map((doc, docIndex) => (
                <div key={docIndex} className="border p-3 rounded bg-white hover:bg-gray-50 transition-colors">
                  <a
                    href={doc.documentPdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-left gap-3 group"
                  >
                    <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="underline group-hover:text-blue-500">{doc.DocumentPdfName}</span>
                  </a>
                </div>
              ))
            }
          </div>
        );

      case "positionTable":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3] p-4">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4 w-full bg-white rounded border">
                <div>
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3">
                    {table.tablePositionTitle}
                  </h4>
                  <table className="w-full border-collapse">
                    <tbody>
                      {table.fields.map((field, fieldIndex) => (
                        <tr key={fieldIndex} className="hover:bg-gray-50">
                          <td className="border p-2">{field.name1}</td>
                          <td className="border p-2">{field.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "documentAll":
        // Special handling for Annual Reports
        if (item.title === "ANNUAL REPORTS OF THE COMPANY") {
          const groupedReports = AnnualReport().reduce((acc, data) => {
            const existingYear = acc.find((item) => item.year === data.year);
            if (existingYear) {
              existingYear.files.push(data);
            } else {
              acc.push({ year: data.year, files: [data] });
            }
            return acc;
          }, []);

          // Sort by year descending
          groupedReports.sort((a, b) => b.year.localeCompare(a.year));

          return (
            <div className="bg-[#F3F3F3] p-4">
              {groupedReports.map((group, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3">
                    {group.year}
                  </h4>
                  <div className="space-y-2">
                    {group.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="px-4 py-2 bg-white border rounded hover:bg-gray-50 transition-colors">
                        <a
                          href={file.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 group"
                        >
                          <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                          <span className="hover:text-blue-500 underline">{file.fileName}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // For all other documentAll types - now displayed in single column
        return (
          <div className="bg-[#F3F3F3] p-4">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="mb-6">
                <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3">
                  {table.year}
                </h4>
                <div className="space-y-3 bg-white p-4 rounded border">
                  {table.fields.map((field, fieldIndex) => {
                    const formatDate = (dateString) => {
                      const date = new Date(dateString);
                      const day = date.getDate();
                      const month = date.toLocaleString("default", {
                        month: "short",
                      });
                      const year = date.getFullYear();
                      return `${day} ${month} ${year}`;
                    };

                    const filePath = getFilePath(item.title, field);

                    return (
                      <div key={fieldIndex} className="border-b pb-3 last:border-b-0 last:pb-0">
                        {field.documentDate && (
                          <div className="font-branding-bold text-sm text-gray-600 mb-1">
                            {formatDate(field.documentDate)}
                          </div>
                        )}
                        <a
                          href={filePath || field.documentFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                          <span className="hover:text-blue-500 underline break-words">{field.documentName}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case "pdfTables":
        // Display in single column with year grouping
        return (
          <div className="bg-[#F3F3F3] p-4">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="mb-6">
                <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3">
                  {table.year}
                </h4>
                <div className="space-y-3 bg-white p-4 rounded border">
                  {table.fields.map((field, fieldIndex) => {
                    const formatDate = (dateString) => {
                      const date = new Date(dateString);
                      const day = date.getDate();
                      const month = date.toLocaleString("default", {
                        month: "short",
                      });
                      const year = date.getFullYear();
                      return `${day} ${month} ${year}`;
                    };

                    const filePath = getPdfFilePath(item.title, field._id);
                    const displayDate = field.pdfDate ? formatDate(field.pdfDate) : field.quater;

                    return (
                      <div
                        key={fieldIndex}
                        className="border-b pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-[120px] flex-shrink-0">
                            <span className="text-sm font-branding-semibold text-gray-600">
                              {displayDate}
                            </span>
                          </div>
                          <div className="flex-1">
                            <a
                              href={filePath || field.pdfFile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 group hover:bg-gray-50 p-2 rounded transition-colors"
                            >
                              <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                              <span className="hover:text-blue-500 underline break-words">
                                {field.pdfName || "Download PDF"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return <p className="text-gray-500 p-4">No data available</p>;
    }
  };

  return (
    <div className="flex justify-center min-h-screen py-6">
      {loading ? (
        <div className="text-center py-10 text-lg">Loading....</div>
      ) : (
        <div className="lg:w-[80%] w-[90%]">
          {transformedData.map((item, index) => (
            <div key={item._ids ? item._ids.join('-') : item._id || index} className="mb-3">
              <div
                className="border-2 border-gray-300 px-4 py-3 font-bold flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => handleToggle(index)}
              >
                <p className="text-gray-700 font-branding-semibold w-[95%] uppercase text-sm md:text-base">
                  {item.title}
                </p>
                <div className="text-blue-800 w-[5%] flex justify-center items-center">
                  <span
                    className={`transition-transform duration-300 font-bold text-2xl md:text-3xl inline-block ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "opacity-100 max-h-[5000px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="border-2 border-gray-300 border-t-0">
                  {renderTableContent(item)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SebiDetails;