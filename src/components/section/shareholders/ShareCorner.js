import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import CornerImage from "@/assests/shareHolder/cornerImage.jpg";

// function getFileName(fileUrl) {
//   // Ensure fileUrl is a string
//   const fileUrlString =
//     typeof fileUrl === "string" ? fileUrl : fileUrl.toString();

//   // If window is undefined (server side), use the fileUrlString directly
//   if (typeof window === "undefined") {
//     // return fileUrlString.split("/").pop();
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

function ShareCorner() {
  const ShareCornerData = [
    {
      title: "Form 10F",
      downloadFile: new URL(
        "@/assests/shareHolder/Form_10F.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form 15G and 15H ",
      downloadFile: new URL(
        "@/assests/shareHolder/FORM_15G_15_H.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Declaration Form ",
      downloadFile: new URL(
        "@/assests/shareHolder/Declaration_Form.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form ISR-1",
      downloadFile: new URL(
        "@/assests/shareHolder/Link_ISR-1_Request-form-for-Regestring-Pan-Bank-KYC.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form ISR-2",
      downloadFile: new URL(
        "@/assests/shareHolder/Link_ISR-2_Bank_verification_for_Sign).pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form SH-13 ",
      downloadFile: new URL(
        "@/assests/shareHolder/Link_SH-13_Reg_of_Nomination_and_ISR-3_Opt-Out_.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form ISR-3 ",
      downloadFile: new URL("@/assests/shareHolder/ISR3.pdf", import.meta.url)
        .href,
    },
    {
      title: "Form ISR-4",
      downloadFile: new URL("@/assests/shareHolder/ISR4.pdf", import.meta.url)
        .href,
    },
    {
      title: "SH-14",
      downloadFile: new URL("@/assests/shareHolder/SH14.pdf", import.meta.url)
        .href,
    },
    {
      title: "Notice to Shareholders KYC updation",
      downloadFile: new URL(
        "@/assests/shareHolder/Notice_to_Shareholders_-_KYC_Updation.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Smart ODR Details",
      downloadFile: new URL(
        "@/assests/shareHolder/Smart-ODR-Details.pdf",
        import.meta.url
      ).href,
    },
    {
      title: "Form ISR-5",
      downloadFile: new URL("@/assests/shareHolder/ISR-5.pdf", import.meta.url),
    },
  ];

  // const enhancedData = ShareCornerData.map((item) => ({
  //   ...item,
  //   downloadName: getFileName(item.downloadFile),
  // }));

  return (
    <div className="goal-section1 flex flex-col items-center h-[80vh] my-10 header_purple mt-10 lg:mt-20">
      <p className="font-branding-semibold text-4xl sm:text-5xl text-blue-800 my-6 justify-center text-center w-[90%]">
        Shareholder's Corner
      </p>

      <div className="flex w-[90%] overflow-y-auto ">
        <div className="w-[25%] overflow-hidden hidden md:flex">
          <Image
            src={CornerImage}
            alt="Building image"
            className="h-full object-cover object-center"
          />
        </div>
        <div className="overflow-y-auto flex md:w-[75%] w-full">
          <table className="table-auto text-left w-full p-8 overflow-auto">
            <tbody>
              {ShareCornerData.map((data, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2">{data.title}</td>
                  <td className="px-4 py-2 text-right">
                    <a
                      href={data.downloadFile}
                      // download={data.downloadName}
                      className="inline-block"
                      target="_blank"
                    >
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
    </div>
  );
}

export default ShareCorner;
