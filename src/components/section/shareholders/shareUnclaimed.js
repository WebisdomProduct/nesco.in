'use client';
import { apiUrls } from '@/apis';
import useGetQuery from '@/hooks/getQuery.hook';
import React, { useEffect, useMemo, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

function ShareUnclaimed() {
  const { getQuery } = useGetQuery();
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  // Function to format date
  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.shareholder.unclaimed}`,
      onSuccess: res => {
        setGetData(res?.data || []);
        setTimeout(() => setLoading(false), 2000);
      },
      onFail: err => {
        console.error('Failed to fetch announcements data:', err);
      },
    });
  }, []);

  const transformedData = useMemo(() => {
    return Array.isArray(getData)
      ? getData.map(item => ({
          lastDate: formatDate(item.lastDate.split('T')[0]), // Format lastDate
          dueDate: formatDate(item.dueDate.split('T')[0]), // Format dueDate
          year: `${+item.year}-${+item.year + 1}`,
          dividend: item.dividend,
          unclaimedAmount: item.unclaimedAmount,
          file: item.file,
        }))
      : [];
  }, [getData]);

  return (
    <div className="dividendDiv goal-section1 bg-gray-300 flex justify-center items-center flex-col py-10 header_purple">
      <div className="flex flex-col items-center w-[90%] gap-5 md:gap-10">
        <div className="flex flex-col items-center">
          <p className="font-branding-semibold text-4xl sm:text-6xl text-primary my-6 justify-center text-center">
            Unclaimed Dividends
          </p>

          <p className="justify-center  text-3xl sm:text-2xl font-branding-medium">
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
                {transformedData.map((data, index) => (
                  <tr key={index} className=" w-full font-branding-semibold">
                    <td className="px-4 py-2">{data.year}</td>
                    <td className="px-4 py-2">{data.dividend}</td>
                    <td className="px-4 py-2" colSpan={2}>
                      {data.unclaimedAmount}
                    </td>
                    <td className="px-4 py-2" colSpan={2}>
                      {data.lastDate} {/* Formatted lastDate */}
                    </td>
                    <td className="px-4 py-2">
                      {data.dueDate} {/* Formatted dueDate */}
                    </td>
                    <td className="px-4 py-2 flex justify-center items-center">
                      <div className="flex justify-center items-center w-10 h-10">
                        <a
                          href={data.file}
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
