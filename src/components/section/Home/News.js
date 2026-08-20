'use client';
import React, { useEffect, useState } from 'react';
import Image1 from '@/assests/newsSvg/f1.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import Link from 'next/link';
import { apiBaseUrl } from '@/apis';
const API_URL = `${apiBaseUrl}/api/v1/news`;

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExchange, setSelectedExchange] = useState('bse');

  // Stock card data (fixed)
  const stockCard = {
    backgroundcolor: '#C9F2EC',
    color: '#327062',
    svgImage: Image1,
    isStock: true,
    arrowColor: '#C2B2AB',
  };

  // Fetch news from API
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setNewsData(data);
      } catch (e) {
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading news...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <section className="header_purple w-full flex flex-col items-center py-28 goal-section1">
      <p
        className="text-[48px] text-primary"
        style={{ fontFamily: 'BrandingSemibold' }}
      >
        In the News
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] mt-10">
        {/* Stock Card */}
        <div className="">
          <div className="h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px] p-5 shadow-lg gap-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img
                src={stockCard.svgImage.src}
                alt="stock"
                className="w-full h-full object-cover z-0"
              />
            </div>
            <div className="flex flex-col my-2 md:px-10 z-10 items-center relative">
              <div className="flex justify-between w-full mb-2">
                <button
                  className={`text-2xl font-semibold ${selectedExchange === 'bse' ? 'text-primary' : 'text-[#445F53]'
                    }`}
                  onClick={() => setSelectedExchange('bse')}
                >
                  BSE
                </button>
                <button
                  className={`text-2xl font-semibold ${selectedExchange === 'nse' ? 'text-primary' : 'text-[#445F53]'
                    }`}
                  onClick={() => setSelectedExchange('nse')}
                >
                  NSE
                </button>
              </div>
              {/* Price/Change placeholders */}
              <p
                className="text-5xl mb-2 font-bold text-center"
                style={{ color: stockCard.color }}
              >
                --
              </p>
              <p
                className="text-[1.6rem] font-branding-medium leading-[2.2rem]"
                style={{ fontFamily: 'BrandingSemibold' }}
              >
                --
              </p>
            </div>
          </div>
        </div>

        {/* Other cards from API */}
        {newsData.map((data) => {
          return (
            <div key={data._id}>
              {data.href ? (
                data.isExternal ? (
                  <a href={data.href} target="_blank" rel="noopener noreferrer">
                    <NewsCard data={data} />
                  </a>
                ) : (
                  <Link href={data.href} legacyBehavior>
                    <a>
                      <NewsCard data={data} />
                    </a>
                  </Link>
                )
              ) : (
                <NewsCard data={data} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Reusable card component
const NewsCard = ({ data }) => {
  const isDownloadCard = data.file && !data.href;

  return (
    <div
      className="p-5 shadow-lg gap-1 relative overflow-hidden h-[400px] md:h-[350px] sm:h-[400px] lg:h-[300px]"
      style={{ backgroundColor: data.backgroundColor || '#ffffff' }}
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}
      <div className="flex flex-col mt-2 w-[100%] justify-between h-full z-10 relative">
        <p
          className="text-[2rem] leading-[2.2rem] mb-2"
          style={{
            fontFamily: 'BrandingSemibold',
            color: data.color || '#000000',
          }}
        >
          {data.title}
        </p>
        {data.description && (
          <p className="text-left w-full text-[1.2rem] font-branding-medium leading-[1.6rem] pb-2">
            {data.description}
          </p>
        )}
        <div className="flex w-full mt-5">
          {/* Download Button */}
          {isDownloadCard ? (
            <a href={data.file} download target="_blank" rel="noopener noreferrer">
              <button
                className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                style={{ backgroundColor: data.downloadColor || '#000000' }}
              >
                <HiOutlineDownload
                  className="scale-[1.3]"
                  style={{ color: data.backgroundColor || '#ffffff' }}
                />
              </button>
            </a>
          ) : data.href ? (
            // Arrow button for links
            <button
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
              style={{ backgroundColor: data.arrowColor || '#000000' }}
            >
              <FaArrowRight
                className="text-white scale-[1.2]"
                style={{ color: data.backgroundColor || '#ffffff' }}
              />
            </button>
          ) : (
            // If no file or href, just disabled arrow
            <button
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50 cursor-not-allowed"
              disabled
              style={{ backgroundColor: data.arrowColor || '#000000' }}
            >
              <FaArrowRight
                className="text-white scale-[1.2]"
                style={{ color: data.backgroundColor || '#ffffff' }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
