import React from 'react';
import Image1 from '@/assests/newsSvg/f1.jpg';
import Image2 from '@/assests/newsSvg/f2.jpg';
import Image3 from '@/assests/newsSvg/f3.jpg';
import Image4 from '@/assests/newsSvg/f4.jpg';
import Image5 from '@/assests/newsSvg/f5.jpg';
import Image6 from '@/assests/newsSvg/f6.jpg';
import { useEffect, useState } from 'react';
import { fetchStockQuote, transformQuoteData } from '@/utils/stockDataFetcher';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import Link from 'next/link';

function News() {
  const [selectedExchange, setSelectedExchange] = useState('bse');
  const [bseData, setBseData] = useState(null);
  const [nseData, setNseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const bseRaw = await fetchStockQuote('bse');
        const nseRaw = await fetchStockQuote('nse');
        setBseData(transformQuoteData(bseRaw));
        setNseData(transformQuoteData(nseRaw));
      } catch (e) {
        setError('Failed to load stock data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Annual Report Card (hardcoded)
  const newsData = [
    {
      backgroundcolor: '#f0cebf',
      color: '#654E45',
      svgImage: Image1,
      title: 'Awards and Recognitions',
      description:
        'We believe in raising the bar of Excellence at every step. Here’s a testimony of our efforts.',
      arrowColor: '#5C301E',
      href: '/awards',
      isExternal: false,
    },
    {
      backgroundcolor: '#caecff',
      color: '#403092',
      svgImage: Image2,
      title: 'Technology Transfer Meet',
      description:
        'Tech Connect Global-the Official Technology Trading Event between India and Korea organised by NESCO Ltd and WEVIO Global Inc in...',
      arrowColor: '#2F356E',
      href: '/media',
      isExternal: false,
    },
    {
      backgroundcolor: '#f6e4f6',
      color: '#75556F',
      svgImage: Image3,
      title: 'Exhibitions',
      description:
        "Nesco's upcoming hall is to be ready by 2019 July. The proposed hall will be pillarless with all the modern facilities at a size of 1.5 lakh sq ft.",
      arrowColor: '#612659',
      href: '/bombay-exhibition-center',
      isExternal: false,
    },
    {
      backgroundcolor: '#C9F2EC',
      color: '#327062',
      svgImage: Image4,
      title: <span className="text-primary">BSE</span>,
      title2: <span className="text-[#445F53]">NSE</span>,
      isStock: true,
      arrowColor: '#C2B2AB',
    },
    {
      backgroundcolor: '#edead4',
      color: '#68674D',
      svgImage: Image5,
      title: 'Annual Report',
      description: '2024-2025',
      downloadColor: '#585429',
      isAnnual: true,
      file: 'https://drive.google.com/uc?export=download&id=1eLtjlfAvHJvl9pNd1P-vMC74HwMoYQwT',
    },
    {
      backgroundcolor: '#c8dee6',
      color: '#18565A',
      svgImage: Image6,
      title: 'Introducing',
      description:
        "Nesco Foods will soon be opening two swanky new lounge bars that let patrons sample the best of the world's F&B in an ambiance of luxury and style.",
      arrowColor: '#18565A',
      href: '/hospitality',
      isExternal: true,
    },
  ];

  // ...existing code...
  return (
    <section className="header_purple w-full flex flex-col items-center py-28 goal-section1 ">
      {/* <p className="text-primary font-bold pb-3 text-3xl"> */}

      <p
        className="text-[3rem] text-primary"
        style={{
          fontFamily: 'BrandingSemibold',
        }}
      >
        In the news
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-8 w-[90%]  mt-10">
        {newsData &&
          newsData.map((data, index) => {
            // Check if it's the 3rd item (index 2) to display a custom card

            // Stock Card
            if (data.isStock) {
              return (
                <div key={index} className="">
                  <div className="h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px] p-5 shadow-lg gap-2 relative overflow-hidden">
                    <div className="absolute  top-0 left-0 w-full h-full z-0">
                      <img
                        src={data.svgImage.src}
                        alt="award"
                        className="w-full h-full z-0 object-cover"
                      />
                    </div>
                    <div className="flex flex-col my-2 md:px-10 z-10 items-center relative">
                      <div className="flex justify-between w-full mb-2">
                        <button
                          className={`text-2xl font-semibold ${selectedExchange === 'bse'
                              ? 'text-primary'
                              : 'text-[#445F53]'
                            }`}
                          onClick={() => setSelectedExchange('bse')}
                        >
                          BSE
                        </button>
                        <button
                          className={`text-2xl font-semibold ${selectedExchange === 'nse'
                              ? 'text-primary'
                              : 'text-[#445F53]'
                            }`}
                          onClick={() => setSelectedExchange('nse')}
                        >
                          NSE
                        </button>
                      </div>
                      <p
                        className="text-5xl mb-2 font-bold text-center"
                        style={{ color: data.color }}
                      >
                        {selectedExchange === 'bse'
                          ? loading || error || !bseData
                            ? '--'
                            : bseData.currentPrice
                          : loading || error || !nseData
                            ? '--'
                            : nseData.currentPrice}
                      </p>
                      <p
                        className="  text-[1.6rem] font-branding-medium leading-[2.2rem]"
                        style={{ fontFamily: 'BrandingSemibold' }}
                      >
                        {selectedExchange === 'bse'
                          ? loading || error || !bseData
                            ? '--'
                            : `${bseData.change} (${bseData.changePercent}%)`
                          : loading || error || !nseData
                            ? '--'
                            : `${nseData.change} (${nseData.changePercent}%)`}
                      </p>
                      <div className="flex w-full mt-5 text-[1.2rem] font-branding-medium leading-[2.2rem]">
                        {selectedExchange === 'bse' ? (
                          loading || error || !bseData ? (
                            '--'
                          ) : (
                            <p className="">
                              <span className="text-[#327062] font-bold mr-1">
                                Updated{' '}
                              </span>
                              {new Date().toLocaleTimeString()} |{' '}
                              {new Date().toLocaleDateString()}{' '}
                              <span className="text-[#327062] font-bold mr-1">
                                Volume{' '}
                              </span>{' '}
                              {bseData.volume}
                            </p>
                          )
                        ) : loading || error || !nseData ? (
                          '--'
                        ) : (
                          <p className="">
                            <span className="text-[#327062] font-bold mr-1">
                              Updated{' '}
                            </span>
                            {new Date().toLocaleTimeString()} |{' '}
                            {new Date().toLocaleDateString()}{' '}
                            <span className="text-[#327062] font-bold mr-1">
                              Volume{' '}
                            </span>{' '}
                            {nseData.volume}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Annual Report Card
            if (data.isAnnual) {
              return (
                <div key={index}>
                  <div
                    className=" p-5 shadow-lg gap-2 relative overflow-hidden h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px]"
                    style={{ backgroundColor: data.backgroundcolor }}
                  >
                    <div className="absolute  top-0 left-0 w-full h-full z-0">
                      <img
                        src={data.svgImage.src}
                        alt="award"
                        className="w-full h-full z-0 object-cover"
                      />
                    </div>
                    <div className="flex flex-col mt-5 md:w-[60%] justify-between h-full z-10 relative ">
                      <div>
                        <p
                          className="text-[2rem] leading-[2.2rem] mb-2"
                          style={{
                            fontFamily: 'BrandingSemibold',
                            color: data.color,
                          }}
                        >
                          {data.title}
                        </p>
                        <p
                          className="  text-[1.6rem] font-branding-medium leading-[2.2rem]"
                          style={{ fontFamily: 'BrandingSemibold' }}
                        >
                          {data.description}
                        </p>
                      </div>
                      <div className="flex w-full pb-3">
                        {data.file ? (
                          <a
                            href={data.file}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                              style={{
                                backgroundColor: data.downloadColor,
                              }}
                            >
                              <HiOutlineDownload
                                className="scale-[1.3]"
                                style={{
                                  color: data.backgroundcolor,
                                }}
                              />
                            </button>
                          </a>
                        ) : (
                          <button
                            className="w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50 cursor-not-allowed"
                            style={{
                              backgroundColor: data.downloadColor,
                            }}
                            disabled
                          >
                            <HiOutlineDownload
                              className="scale-[1.3]"
                              style={{
                                color: data.backgroundcolor,
                              }}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Default cards for other positions (with link)
            return (
              <div key={index} className="">
                {data.href ? (
                  data.isExternal ? (
                    <a
                      href={data.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className=" p-5 shadow-lg gap-1 relative overflow-hidden  h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px] cursor-pointer"
                        style={{ backgroundColor: data.backgroundcolor }}
                      >
                        <div className="absolute  top-0 left-0 w-full h-full z-0">
                          <img
                            src={data.svgImage.src}
                            alt="award"
                            className="w-full h-full z-0 object-cover"
                          />
                        </div>
                        <div className="flex flex-col mt-2 w-[100%] justify-between h-full z-10 relative">
                          <p
                            className="text-[2rem] leading-[2.2rem] mb-2"
                            style={{
                              fontFamily: 'BrandingSemibold',
                              color: data.color,
                            }}
                          >
                            {data.title}
                          </p>
                          <p className="text-left w-full text-[1.2rem] font-branding-medium leading-[1.6rem] pb-2">
                            {data.description}
                          </p>
                          <div className="flex w-full mt-5">
                            <button
                              className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                              style={{
                                backgroundColor: data.arrowColor,
                              }}
                            >
                              <FaArrowRight
                                className="text-white"
                                style={{
                                  color: data.backgroundcolor,
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link href={data.href} legacyBehavior>
                      <a>
                        <div
                          className=" p-5 shadow-lg gap-1 relative overflow-hidden  h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px] cursor-pointer"
                          style={{ backgroundColor: data.backgroundcolor }}
                        >
                          <div className="absolute  top-0 left-0 w-full h-full z-0">
                            <img
                              src={data.svgImage.src}
                              alt="award"
                              className="w-full h-full z-0 object-cover"
                            />
                          </div>
                          <div className="flex flex-col mt-2 w-[100%] justify-between h-full z-10 relative">
                            <p
                              className="text-[2rem] leading-[2.2rem] mb-2"
                              style={{
                                fontFamily: 'BrandingSemibold',
                                color: data.color,
                              }}
                            >
                              {data.title}
                            </p>
                            <p className="text-left w-full text-[1.2rem] font-branding-medium leading-[1.6rem] pb-2">
                              {data.description}
                            </p>
                            <div className="flex w-full mt-5">
                              <button
                                className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                                style={{
                                  backgroundColor: data.arrowColor,
                                }}
                              >
                                <FaArrowRight
                                  className="text-white"
                                  style={{
                                    color: data.backgroundcolor,
                                  }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  )
                ) : (
                  <div
                    className=" p-5 shadow-lg gap-1 relative overflow-hidden  h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px]"
                    style={{ backgroundColor: data.backgroundcolor }}
                  >
                    <div className="absolute  top-0 left-0 w-full h-full z-0">
                      <img
                        src={data.svgImage.src}
                        alt="award"
                        className="w-full h-full z-0 object-cover"
                      />
                    </div>
                    <div className="flex flex-col mt-2 w-[100%] justify-between h-full z-10 relative">
                      <p
                        className="text-[2rem] leading-[2.2rem] mb-2"
                        style={{
                          fontFamily: 'BrandingSemibold',
                          color: data.color,
                        }}
                      >
                        {data.title}
                      </p>
                      <p className="text-left w-full text-[1.2rem] font-branding-medium leading-[1.6rem] pb-2">
                        {data.description}
                      </p>
                      <div className="flex w-full mt-5">
                        <button
                          className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                          style={{
                            backgroundColor: data.arrowColor,
                          }}
                        >
                          <FaArrowRight
                            className="text-white"
                            style={{
                              color: data.backgroundcolor,
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default News;
