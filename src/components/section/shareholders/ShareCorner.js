import React from "react";
import { FaArrowDown } from "react-icons/fa6";

function ShareCorner() {
  const ShareCornerData = [
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
    {
      title: "Form 10F",
      downloadFile: new URL("@/assests/sebi/image.png", import.meta.url).href,
    },
  ];

  return (
    <div className="flex flex-col items-center h-[80vh] my-10">
      <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 my-6 justify-center text-center">
        Shareholder's Corner
      </p>

      <div className="my-6  overflow-y-auto mb-10 lg:w-[80%] md:w-[85%] w-[90%]">
        <table className="table-auto h-full text-left w-full p-8 overflow-auto">
          <tbody>
            {ShareCornerData.map((data, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-4 py-2">{data.title}</td>
                <td className="px-4 py-2 text-right">
                  <a href={data.downloadFile} download className="inline-block">
                    <button className="mt-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                      <FaArrowDown />
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShareCorner;
