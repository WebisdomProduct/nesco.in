"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL = "https://nesco-backend-1.onrender.com/api/v1/mentors";
const MENTOR_ID = "697dffdbd64c9ff144fd47be";

function IndabratorProfile() {
  const [mentor, setMentor] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/${MENTOR_ID}`)
      .then((res) => res.json())
      .then(setMentor)
      .catch(console.error);
  }, []);

  if (!mentor) return null;

  const visibleText = expanded
    ? mentor.noteText
    : mentor.noteText.slice(0, 1);

  return (
    <div className="w-full lg:min-h-screen bg-white pt-8 lg:pt-12 pb-20">
      <div className="w-[90%] mx-auto lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-[5vh]">

          {/* TEXT */}
          <div className="w-full lg:w-[50%] space-y-[2vh]">
            <h3
              className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {mentor.name}
            </h3>

            <p
              className="text-[clamp(1.4rem,3vw,1.8rem)] text-gray-600"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {mentor.designation}
            </p>

            <p
              className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-blue-800"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {mentor.noteTitle}
            </p>

            {visibleText.map((para, i) => (
              <p
                key={i}
                className="text-[clamp(1.15rem,2.5vw,1.6rem)] text-gray-700"
                style={{ fontFamily: "BrandingMedium" }}
              >
                {para}
              </p>
            ))}

            {mentor.noteText.length > 1 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-800 font-semibold underline"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-[50%] relative h-[80vh]">
            <Image
              src={mentor.mentorImage}
              alt={mentor.name}
              fill
              className="object-contain scale-[1.3]"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default IndabratorProfile;
