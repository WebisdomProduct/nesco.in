'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { apiBaseUrl } from '@/apis';
function LeadershipMentor2() {
  const MENTOR_ID = '696617521c94e13a225d98cb'; // ID for Krishna S. Patel
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

  if (loading) return <p className="text-center mt-10 text-white">Loading mentor info...</p>;
  if (!mentor) return <p className="text-center mt-10 text-white">Mentor not found</p>;

  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden xl:h-screen min-h-[500px]"
      style={{
        backgroundImage: `url(${mentor.backgroundImage || '/assests/Home/mentorNew/KrishnaBack.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="krishna"
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col h-full w-full items-center">
          <div className="flex flex-col lg:w-[50%] w-1/2 h-full xl:justify-end justify-center items-center z-10 relative">
            <Image
              src={mentor.mentorImage || '/assests/Home/mentorNew/3.png'}
              alt={mentor.name || 'Mentor'}
              width={650}
              height={400}
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className="relative lg:w-[50%] h-full flex flex-col lg:justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <div className="mt-4">
              <h2 className="text-[2rem] leading-10 font-branding-semibold text-[#C3F0FB]">
                {mentor.name}
              </h2>
              <p className="font-branding-medium text-[1rem] mb-4 text-white">
                {mentor.designation}
              </p>
            </div>

            <hr className="bg-white border-1 border-white mb-4" />
            <div className="relative">
              <div className="space-y-2 mt-2">
                {mentor.noteText && Array.isArray(mentor.noteText) ? (
                  mentor.noteText.map((paragraph, idx) => (
                    <p key={idx} className="font-branding-medium text-white">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="font-branding-medium text-white">No information available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor2;
