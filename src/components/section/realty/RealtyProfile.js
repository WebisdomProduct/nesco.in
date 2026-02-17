'use client';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '@/apis';

function RealityProfile() {
  const MENTOR_ID = '69673271ec4b200ef09d7715';
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/v1/mentors/${MENTOR_ID}`);
        if (!res.ok) throw new Error('Failed to fetch mentor data');
        const data = await res.json();
        setMentor(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading mentor info...</p>;
  if (!mentor) return <p className="text-center mt-10">Mentor not found</p>;

  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${mentor.backgroundImage || '/assests/nesco-business-page/bec-elements/back.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="z-20 relative bg-blue-50  lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col lg:items-start items-center h-full w-full px-5 py-10">

          {/* Mentor Image */}
          <div className="flex flex-col lg:w-[40%] w-full h-[15%] lg:justify-end justify-center z-10 relative mb-6 lg:mb-0">
            <img
              src={mentor.mentorImage || '/assests/nesco-business-page/bec-elements/49.png'}
              alt={mentor.name || 'Mentor'}
              className="w-full h-full rounded"
            />
          </div>

          {/* Mentor Info */}
          <div className="relative lg:w-[50%] h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <h2
              className="
                 text-[28px] leading-[32px] text-blue-800 font-bold
md:text-[48px] md:leading-[44px]
              "
            >
              {mentor.name}
            </h2>

            <p
              className="
               text-gray-700  text-[18px] leading-[22px]
md:text-[26px] md:leading-[26px]  mt-4 mb-4

              "
            >
              {mentor.designation}
            </p>

            {mentor.noteTitle && (
              <h3
                className="
                    font-semibold
                text-[24px] 
                md:text-[28px] 
                "
              >
                {mentor.noteTitle}
              </h3>
            )}

            <div className="space-y-3 mt-3">
              {mentor.noteText && Array.isArray(mentor.noteText) ? (
                mentor.noteText.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="
                     text-[20px] leading-[26px]
md:text-[22px] md:leading-[32px]
                    "
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-[16px] leading-[26px]">
                  No message available.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RealityProfile;
