"use client";

import React, { useEffect, useState } from "react";
import { apiBaseUrl } from "@/apis";

/* ================= STATIC FALLBACKS (LOCKED) ================= */
const STATIC_FALLBACK = {
  backgroundImage: "/assests/nesco-business-page/bec-elements/back.png",
  mentorImage: "/assests/nesco-business-page/bec-elements/49.png",
};

const MENTOR_ID = "69660dd75ce58ab68a311b91";

function BecProfile() {
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/v1/mentors/${MENTOR_ID}`);
        if (!res.ok) throw new Error("Failed to fetch mentor data");
        const data = await res.json();
        setMentor(data);
      } catch (err) {
        console.error("Mentor fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading mentor info...</p>;
  }

  if (!mentor) {
    return <p className="text-center mt-10">Mentor not found</p>;
  }

  /* ================= SAFE MAPPING ================= */
  const backgroundImage =
    mentor.backgroundImage || STATIC_FALLBACK.backgroundImage;

  const mentorImage =
    mentor.mentorImage || STATIC_FALLBACK.mentorImage;

  const noteParagraphs = Array.isArray(mentor.noteText)
    ? mentor.noteText
    : [];

  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col lg:items-start items-center h-full w-full">

          {/* ================= MENTOR IMAGE ================= */}
          <div className="flex flex-col lg:w-[50%] w-full h-full lg:justify-end justify-center z-10 relative mb-6 lg:mb-0">
            <img
              src={mentorImage}
              alt={mentor.name || "Mentor"}
              className="w-full h-auto rounded"
            />
          </div>

          {/* ================= MENTOR INFO ================= */}
          <div className="relative lg:w-[50%] bg-white py-10 h-full flex flex-col justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            {/* NAME */}
            <h2
              className="
                font-extrabold text-[#0638A5] mb-4
                text-[48px] leading-[44px]
                md:text-[48px] md:leading-[38px]
              "
            >
              {mentor.name}
            </h2>

            {/* DESIGNATION */}
            <p
              className="
                italic text-gray-700 mb-4
                text-[26px] leading-[26px]
              "
            >
              {mentor.designation}
            </p>

            {/* NOTE TITLE (OPTIONAL) */}
            {mentor.noteTitle && (
              <h3
                className="
                  font-semibold
                  text-[34px] leading-[46px]
                  md:text-[28px] md:leading-[40px]
                "
              >
                {mentor.noteTitle}
              </h3>
            )}

            {/* NOTE TEXT */}
            <div className="space-y-3 mt-3">
              {noteParagraphs.length > 0 ? (
                noteParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="
                      text-[36px] leading-[36px]
                      md:text-[22px]
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

export default BecProfile;
