"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// 🔒 Static fallbacks (ONLY used if backend fails)
import watermarkFallback from "@/assests/nesco-business-page/nesco-events/76.jpg";
import profileFallback from "@/assests/nesco-business-page/nesco-events/75.png";

const API_URL = "https://nesco-backend-1.onrender.com/api/v1/mentors";
const MENTOR_ID = "697dfeaad64c9ff144fd3703";

function EventProfile() {
  const [expanded, setExpanded] = useState(false);
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH MENTOR ================= */
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetch(`${API_URL}/${MENTOR_ID}`);
        if (!res.ok) throw new Error("Failed to fetch mentor");
        const data = await res.json();
        setMentor(data);
      } catch (err) {
        console.error("Mentor fetch failed, using fallback");
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, []);

  if (loading) return null;
  if (!mentor) return null;

  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12 relative overflow-hidden">
      <div className="w-[90%] mx-auto lg:mt-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

          {/* ================= TEXT CONTENT ================= */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center pr-8">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {mentor.name}
            </h3>

            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              {mentor.designation}
            </p>

            {/* ================= PARAGRAPHS ================= */}
            <div className="space-y-[2vh]">
              {mentor.noteText?.[0] && (
                <p
                  className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed"
                  style={{ fontFamily: "BrandingMedium" }}
                >
                  {mentor.noteText[0]}
                </p>
              )}

              {/* COLLAPSIBLE CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="space-y-[2vh] pt-2">
                  {mentor.noteText?.slice(1).map((text, index) => (
                    <p
                      key={index}
                      className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed"
                      style={{ fontFamily: "BrandingMedium" }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* READ MORE */}
              {mentor.noteText?.length > 1 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 inline-flex items-center gap-2 text-blue-800 font-semibold transition hover:underline"
                  style={{ fontFamily: "BrandingMedium" }}
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="w-full lg:w-1/2 relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
            <div className="absolute w-full h-full">
              <Image
                src={mentor.backgroundImage || watermarkFallback}
                alt="Background"
                fill
                className="object-cover rounded-lg shadow-lg lg:translate-y-8 xl:translate-y-16"
                priority
              />
            </div>

            <div className="relative h-[400px] lg:h-full w-full rounded-lg shadow-lg">
              <Image
                src={mentor.mentorImage || profileFallback}
                alt={mentor.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EventProfile;
