'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { apiBaseUrl } from '@/apis';
function Mentor() {
  const MENTOR_ID = '6965f970a5a2758ecc55eef8';
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
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden lg:h-screen min-h-[800px]"
      style={{
        backgroundImage: `url(${mentor.backgroundImage || '/assests/Home/mentorNew/SumanBack.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col lg:items-start items-center h-full w-full">
          
          {/* Mentor Image */}
          <div className="flex flex-col lg:w-[50%] w-full h-full lg:justify-end justify-center z-10 relative mb-6 lg:mb-0">
            <img
              src={mentor.mentorImage || '/assests/Home/mentorNew/2.png'}
              alt={mentor.name || 'Mentor'}
              className="w-full h-auto rounded"
            />
          </div>

          {/* Mentor Info */}
          <div className="relative lg:w-[50%] h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <h2 className="text-[2rem] leading-10 font-bold text-[#0638A5] mb-4">
              {mentor.name}
            </h2>

            <p className="italic text-gray-700 mb-4">{mentor.designation}</p>

            <h3 className="font-semibold text-lg">{mentor.noteTitle}</h3>

            <div className="space-y-3 mt-3">
              {mentor.noteText && Array.isArray(mentor.noteText)
                ? mentor.noteText.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-7">{paragraph}</p>
                  ))
                : <p>No message available.</p>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Mentor;
