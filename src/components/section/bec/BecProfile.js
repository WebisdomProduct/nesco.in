'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { apiBaseUrl } from '@/apis';
function BecProfile() {
  const MENTOR_ID = '69660dd75ce58ab68a311b91'; // Replace with actual mentor ID
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/v1/mentors/${MENTOR_ID}`);
        console.log(res);
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
    <div className="w-full lg:h-screen flex items-center bg-white px-[2vw] lg:px-[5vw] mt-10 lg:mt-0">
      <div className="w-full max-w-[95vw] mx-auto h-full flex">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">

          {/* Text Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] space-y-[2vh]">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: 'BrandingSemibold' }}
            >
              {mentor.name}
            </h3>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: 'BrandingMedium' }}
            >
              {mentor.designation}
            </p>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold"
              style={{ fontFamily: 'BrandingSemibold' }}
            >
              {mentor.noteTitle}
            </p>
            <div
              className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed"
              style={{ fontFamily: 'BrandingMedium' }}
            >
              {mentor.noteText && Array.isArray(mentor.noteText)
                ? mentor.noteText.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                : <p>No note available.</p>
              }
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-[45%] xl:w-[50%] relative h-[60vh] sm:h-[70vh] lg:h-full">
            {/* Background Image (optional) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={mentor.backgroundImage || '/assests/nesco-business-page/bec-elements/back.png'}
                alt="Background"
                fill
                className="object-cover rounded-lg shadow-lg scale-105 lg:scale-105 lg:translate-y-8 xl:translate-y-16"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 50vw"
              />
            </div>
            {/* Mentor Profile Image (not background) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[80%] lg:w-[80%] h-[75%] sm:h-[70%] lg:h-[70%]">
              <Image
                src={mentor.mentorImage || '/assests/nesco-business-page/bec-elements/49.png'}
                alt={mentor.name}
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 36vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BecProfile;
