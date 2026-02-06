'use client';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '@/apis';

function LeadershipMentor2() {
  const MENTOR_ID = '696617521c94e13a225d98cb';
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const MAX_PARAGRAPHS = 2;

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

  const noteTextArray = Array.isArray(mentor.noteText) ? mentor.noteText : [];
  const showReadMore = noteTextArray.length > MAX_PARAGRAPHS;
  const visibleText = expanded
    ? noteTextArray
    : noteTextArray.slice(0, MAX_PARAGRAPHS);

  return (
    <section
      id="krishna"
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${mentor.backgroundImage || '/assests/Home/mentorNew/KrishnaBack.jpg'})`,
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
              src={mentor.mentorImage || '/assests/Home/mentorNew/3.png'}
              alt={mentor.name || 'Mentor'}
              className="w-full h-auto rounded"
            />
          </div>

          {/* Mentor Info */}
          <div className="relative lg:w-[50%] h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <h2
              className="
              text-[28px] leading-[32px] text-cyan-400 font-bold
md:text-[48px] md:leading-[44px]

              "
            >
              {mentor.name}
            </h2>

            <p
              className="
               text-[18px] leading-[22px] text-gray-400
md:text-[26px] md:leading-[26px]

              "
            >
              {mentor.designation}
            </p>

             
              <h3
                className="  text-gray-100 text-[20px] leading-[22px] font-bold
md:text-[26px] md:leading-[26px]

                "
              >
          {mentor.noteTitle && mentor.noteTitle !== 'null' ? mentor.noteTitle : ''}

              </h3>
            

            <div className="space-y-3 mt-3">
              {visibleText.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="
                  text-[18px] leading-[26px] text-gray-100
md:text-[22px] md:leading-[32px]
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {showReadMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="
                  mt-6 self-start
                  text-blue-500 font-semibold uppercase
                  border-b-2 border-blue-500
                  hover:opacity-80 transition mb-10
                "
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor2;
