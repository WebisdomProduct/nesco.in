import React, { useState } from 'react';
import chessImage from '@/assests/social/42.png';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";

// Import PDFs
const pdf23_24 = '/assets/social/CSR-annual-action-plan for-FY-2023-24.pdf';
const pdf24_25 = '/assets/social/CSR-annual-action-plan-for-FY-2024-25.pdf';
const pdf25_26 = '/assets/social/CSR-action-plan-2025-26.pdf';

function SocialCSR() {
  const buttonData = [
    {
      title: 'Composition of CSR',
      buttonColor: '#5A9448',
      buttonColor1: '#518642',
      link: 'https://nescodoucmentsandpdfs.s3.ap-south-1.amazonaws.com/composition.pdf',
    },
    {
      title: 'CSR Policy',
      buttonColor: '#43AD97',
      buttonColor1: '#3D9B89',
      link: 'https://nescodoucmentsandpdfs.s3.ap-south-1.amazonaws.com/csr.pdf',
    },
    {
      title: 'Proposed Action Plan',
      buttonColor: '#4E53A4',
      buttonColor1: '#474B92',
      isDropdown: true,
      subItems: [
        { label: "CSR annual action plan for FY 2023-24", link: pdf23_24 },
        { label: "CSR annual action plan for FY 2024-25", link: pdf24_25 },
        { label: "CSR annual action plan for FY 2025-26", link: pdf25_26 },
      ]
    },
  ];

  const [isEnter, setIsEnter] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section className="goal-section1 w-full relative flex flex-col justify-center items-center md:py-10 xl:py-0 xl:h-screen">
      <div className="py-12 items-center w-[90%] mx-auto">
        <div className="mt-10 flex lg:flex-row flex-col justify-between items-center w-full gap-5">
          <div className=" lg:w-[60%] w-full md:mt-0 mt-10 flex flex-col gap-5  font-poppins">
            <div className="text-primary flex justify-center items-center">
              <p
                style={{ fontFamily: 'BrandingSemibold' }}
                className="text-[#1e3a8a] text-[48px] md:text-5xl font-BrandingSemibold font-bold text-left w-full"
              >
                About Company's CSR
              </p>
            </div>
            <p className ="text-[20px]">
              Nesco’s Corporate Social Responsibility (CSR) initiatives are
              designed to promote sustainable development and improve the
              quality of life in the communities where we operate. Our CSR
              efforts focus on key areas such as Education, Health,
              Infrastructure, Sanitation, and Environmental Sustainability. We
              are committed to creating long-term value by investing in local
              communities and addressing their most pressing needs. The CSR
              Committee ensures that our initiatives are effectively implemented
              through strategic planning, efficient execution, and continuous
              monitoring. <br /> <br />
              Through these programs, Nesco aims to make a significant and
              positive impact, enhancing both social welfare and environmental
              sustainability.
            </p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5 items-start">
              {buttonData.map((data, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <button
                    className={`px-6 py-4 text-xl font-branding-semibold text-white rounded-lg relative overflow-hidden w-full text-left flex justify-between items-center`}
                    style={{
                      backgroundColor: data.buttonColor1,
                    }}
                    onMouseEnter={() => setIsEnter(index)}
                    onMouseLeave={() => setIsEnter(null)}
                    onClick={() => {
                      if (data.isDropdown) setOpenDropdown(!openDropdown);
                    }}
                    aria-label={data.title}
                  >
                    {!data.isDropdown ? (
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full block"
                      >
                        <div
                          className={`absolute h-full top-0 left-0 z-10 rounded-lg transition-all duration-200 ${isEnter === index ? 'w-full' : 'w-1/2'
                            }`}
                          style={{
                            backgroundColor: data.buttonColor,
                          }}
                        ></div>
                        <span className="z-20 relative">{data.title}</span>
                      </a>
                    ) : (
                      <>
                        <div
                          className={`absolute h-full top-0 left-0 z-10 rounded-lg transition-all duration-200 ${isEnter === index ? 'w-full' : 'w-1/2'
                            }`}
                          style={{
                            backgroundColor: data.buttonColor,
                          }}
                        ></div>
                        <span className="z-20 relative">{data.title}</span>
                        <FaChevronDown className={`z-20 relative transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`} />
                      </>
                    )}
                  </button>

                  {/* Dropdown Items */}
                  {data.isDropdown && openDropdown && (
                    <div
                      className="flex flex-col w-full mt-2 rounded-lg overflow-hidden transition-all duration-300 z-30"
                      style={{ backgroundColor: data.buttonColor }}
                    >
                      {data.subItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-white text-base hover:bg-white/20 transition-colors border-b last:border-b-0 border-white/20"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative md:h-[500px] h-[400px] lg:w-[40%] w-full">
            <Image
              src={chessImage}
              alt="Chess Image"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialCSR;
