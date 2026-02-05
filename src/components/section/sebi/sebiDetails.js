import { apiUrls } from "@/apis";
import useGetQuery from "@/hooks/getQuery.hook";
import React, { useEffect, useMemo, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";

function SebiDetails() {
  const { getQuery } = useGetQuery();

  const [loading, setLoading] = useState(false);
  const [sebiData, setSebiData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // Sorting order for quaters (Q1 at top)
  const quater_ORDER = { q1: 1, q2: 2, q3: 3, q4: 4 };

  /* ================= FETCH ================= */
  useEffect(() => {
    setLoading(true);
    getQuery({
      url: apiUrls.sebi,
      onSuccess: (res) => {
        setSebiData(res?.data || []);
        setLoading(false);
      },
      onFail: (err) => {
        console.error("SEBI API error:", err);
        setLoading(false);
      },
    });
  }, []);

  /* ================= MERGE & GLOBAL SORTING ================= */
  const mergedData = useMemo(() => {
    const titleMap = new Map();

    sebiData.forEach((item) => {
      if (!titleMap.has(item.title)) {
        titleMap.set(item.title, {
          ...item,
          documentLink: [...(item.documentLink || [])],
          documentPdf: [...(item.documentPdf || [])],
          documentAll: JSON.parse(JSON.stringify(item.documentAll || [])),
          pdfTables: JSON.parse(JSON.stringify(item.pdfTables || [])),
          addressTables: [...(item.addressTables || [])],
          positionTable: [...(item.positionTable || [])],
        });
        return;
      }

      const existing = titleMap.get(item.title);
      existing.documentLink.push(...(item.documentLink || []));
      existing.documentPdf.push(...(item.documentPdf || []));

      // Merge Address and Position Tables
      item.addressTables?.forEach((table) => {
        if (!existing.addressTables.find((t) => t.tableAddressTitle === table.tableAddressTitle)) {
          existing.addressTables.push(table);
        }
      });
      item.positionTable?.forEach((table) => {
        if (!existing.positionTable.find((t) => t.tablePositionTitle === table.tablePositionTitle)) {
          existing.positionTable.push(table);
        }
      });

      // Merge documentAll (Year blocks)
      item.documentAll?.forEach((doc) => {
        const yearBlock = existing.documentAll.find((d) => d.year === doc.year);
        if (yearBlock) {
          doc.documentfields.forEach((f) => {
            if (!yearBlock.documentfields.find((ex) => ex.documentName === f.documentName)) {
              yearBlock.documentfields.push(f);
            }
          });
        } else {
          existing.documentAll.push(doc);
        }
      });

      // Merge pdfTables (Year blocks)
      item.pdfTables?.forEach((table) => {
        const yearBlock = existing.pdfTables.find((t) => t.pdfYear === table.pdfYear);
        if (yearBlock) {
          table.fields.forEach((f) => {
            if (!yearBlock.fields.find((ex) => ex.pdfName === f.pdfName)) {
              yearBlock.fields.push(f);
            }
          });
        } else {
          existing.pdfTables.push(table);
        }
      });
    });

    titleMap.forEach((item) => {
      // 1. Sort Yearly Blocks Descending
      item.documentAll.sort((a, b) => b.year.localeCompare(a.year));
      item.pdfTables.sort((a, b) => b.pdfYear.localeCompare(a.pdfYear));

      // 2. Sort documentAll fields by Date Descending
      item.documentAll.forEach((block) => {
        block.documentfields.sort((a, b) => new Date(b.documentDate) - new Date(a.documentDate));
      });

      // 3. Sort pdfTables fields: quaters first (Q1→Q4), then by date descending
      item.pdfTables.forEach((block) => {
        block.fields.sort((a, b) => {
          const aKey = a.quater?.toLowerCase();
          const bKey = b.quater?.toLowerCase();

          if (aKey && bKey) {
            return (quater_ORDER[aKey] ?? 99) - (quater_ORDER[bKey] ?? 99);
          }
          if (aKey) return -1; // quater first
          if (bKey) return 1;  // quater first
          return new Date(b.pdfDate) - new Date(a.pdfDate); // fallback: date descending
        });
      });
    });

    return Array.from(titleMap.values());
  }, [sebiData]);

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getDate()} ${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;
  };

  /* ================= RENDER CONTENT ================= */
  const renderTableContent = (item) => {
    return (
      <div className="bg-[#F3F3F3] p-6 space-y-10">

        {/* ========= ADDRESS BLOCKS ========= */}
        {item.addressTables?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item.addressTables.map((table, idx) => (
              <div key={idx} className="bg-white border border-gray-300 shadow-sm">
                <div className="bg-[#D9D9D9] py-2.5 px-6 border-b border-gray-300">
                  <h4 className="font-bold uppercase text-[15px]">{table.tableAddressTitle}</h4>
                </div>
                <div className="p-7 space-y-4 text-gray-900 text-[15px]">
                  {table.fields?.map((field, fIdx) => (
                    <div key={fIdx}>
                      <p className="font-bold text-[17px] mb-0.5">{field.data?.name}</p>
                      <p className="mb-2">{field.data?.position}</p>
                      <p className="leading-relaxed mb-4 whitespace-pre-line">{field.data?.full_address}</p>
                      <p>Email: <a href={`mailto:${field.data?.email}`} className="text-blue-700 underline font-medium">{field.data?.email}</a></p>
                      <p>Phone: {field.data?.phone}</p>
                      <p>Fax: {field.data?.fax}</p>
                      <p className="pt-2 uppercase font-semibold text-xs text-gray-500">CIN: {field.data?.cin}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========= POSITION BLOCKS ========= */}
        {item.positionTable?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item.positionTable.map((table, idx) => (
              <div key={idx} className="bg-white border border-gray-300 shadow-sm">
                <div className="bg-[#D9D9D9] py-2.5 px-6 border-b border-gray-300">
                  <h4 className="font-bold uppercase text-[15px]">{table.tablePositionTitle}</h4>
                </div>
                <table className="w-full text-left text-[15px]">
                  <tbody>
                    {table.fields?.map((field, fIdx) => (
                      <tr key={fIdx} className="border-b last:border-0">
                        <td className="p-4 border-r border-gray-200 w-1/2">{field.name1}</td>
                        <td className="p-4 font-bold">{field.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* ========= GRID ONLY FOR documentLink (Businesses) ========= */}
        {item.documentLink?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.documentLink.map((link, idx) => (
              <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-gray-200 p-5 flex items-center gap-4 group shadow-sm">
                <span className="text-[17px] text-gray-800 underline group-hover:text-blue-700 font-medium">
                  {link.DocumentName}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* ========= VERTICAL LISTS FOR ALL OTHER DOCS ========= */}
        <div className="space-y-8">

          {/* 1. Policies (documentPdf) */}
          {item.documentPdf?.length > 0 && (
            <div className="space-y-3">
              {item.documentPdf.map((pdf, idx) => (
                <a key={idx} href={pdf.documentPdfFile} target="_blank" rel="noopener noreferrer"
                  className="bg-white border border-gray-200 p-5 flex items-center gap-4 group shadow-sm">
                  <FaRegFilePdf className="text-red-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-[17px] text-gray-800 underline group-hover:text-blue-700 font-medium">
                    {pdf.DocumentPdfName}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* 2. Yearly Reporting (documentAll) */}
          {item.documentAll?.map((year) => (
            <div key={year.year}>
              <h4 className="font-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3 text-md">{year.year}</h4>
              <div className="space-y-3">
                {year.documentfields.map((doc) => (
                  <div key={doc._id} className="bg-white border border-gray-200 p-5 flex flex-col gap-1 group shadow-sm">
                    <span className="text-[15px] font-bold text-gray-800">{formatDate(doc.documentDate)}</span>
                    <a href={doc.documentFile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <FaRegFilePdf className="text-red-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-[17px] text-gray-800 underline group-hover:text-blue-700">{doc.documentName}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 3. Quaterly Reports (pdfTables) */}
          {item.pdfTables?.map((year) => (
            <div key={year.pdfYear}>
              <h4 className="font-bold py-2 px-6 bg-[#D6D6D6] uppercase mb-3 text-md">{year.pdfYear}</h4>
              <div className="space-y-3">
                {year.fields.map((pdf) => (
                  <div key={pdf._id} className="bg-white border border-gray-200 p-5 flex items-center gap-6 group shadow-sm">
                    {/* Quater or fallback date */}
                    <span className="min-w-[100px] text-[15px] font-bold text-gray-800 uppercase">
                      {pdf.quater || (pdf.pdfDate ? formatDate(pdf.pdfDate) : "N/A")}
                    </span>
                    <a href={pdf.pdfFile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 flex-1">
                      <FaRegFilePdf className="text-red-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-[17px] text-gray-800 underline group-hover:text-blue-700 font-medium">{pdf.pdfName}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center min-h-screen py-10 bg-white">
      {loading ? (
        <div className="py-20 text-gray-400 font-semibold animate-pulse">Loading...</div>
      ) : (
        <div className="lg:w-[80%] w-[95%]">
          {mergedData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={`border-2 border-gray-200 px-6 py-5 flex justify-between items-center cursor-pointer transition-colors ${openIndex === index ? "bg-gray-50 border-blue-900/20" : "bg-white"
                  }`}
                onClick={() => handleToggle(index)}
              >
                <p className="text-gray-800 font-bold uppercase text-[17px] tracking-tight">{item.title}</p>
                <span className={`transition-transform duration-300 text-3xl font-light text-blue-900 ${openIndex === index ? "rotate-45" : ""}`}>+</span>
              </div>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[30000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="border-2 border-gray-200 border-t-0">
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
