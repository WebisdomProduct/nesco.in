"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/* ================= FALLBACK IMAGES ================= */

import profileImage from "@/assests/nesco-business-page/nesco-food-elements/31.png";
import profileImage1 from "@/assests/nesco-business-page/nesco-reality-elements/21.png";

/* ================= CONFIG ================= */

const API_URL = "https://nesco-backend-j567.onrender.com/api/v1/mentors";

// Sourav + Rishabh IDs
const MENTOR_IDS = [
  "697dfc2bd64c9ff144fd36f9",
  "697dfd69d64c9ff144fd36fe",
];

/* ================= COMPONENT ================= */

function HospitalityProfile() {
  const [expandedProfiles, setExpandedProfiles] = useState({});
  const [profiles, setProfiles] = useState([]);

  /* ================= FALLBACK DATA ================= */

  const fallbackProfiles = [
    {
      id: 1,
      name: "Saurav Banerjee",
      title: "Corporate Executive Chef",
      belief:
        "Belief: For me the team comes first and commitment to hard work is our tool to achieve any goal.",
      description: [
        `Chef Saurav Banerjee is our Corporate Executive Chef. He has a rich background spanning across diverse cuisines and experience in renowned kitchens. An alumnus of the Oberoi, Chef Saurav started restaurants and a long and very successful stint with "The Oberoi Group of Hotels".`,
        `He is passionate about creating unique culinary experiences and is dedicated to inspiring our team towards culinary excellence. He has served one and many distinguished guests from the highest echelons of all walks of life.`,
        "Chef Banerjee is excited to showcase high levels of creativity and expertise for our guests and take our gastronomy to the next level.",
      ],
      image: profileImage,
    },
    {
      id: 2,
      name: "Rishab Doshi",
      title: "Head- Special Project",
      belief: null,
      description: [
        "Rishab Doshi is a dynamic professional with diverse and extensive experience across the Finance, Real Estate, and Hospitality sectors.",
        "He currently serves as Co-Head of Food, Liaison, Way-Side Amenities, and Corporate Strategy at Nesco.",
        "Rishab continues to seek innovative avenues to accelerate Nesco’s growth by introducing new revenue streams.",
      ],
      image: profileImage1,
    },
  ];

  /* ================= FETCH CMS ================= */

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const responses = await Promise.all(
          MENTOR_IDS.map((id) =>
            fetch(`${API_URL}/${id}`).then((res) => res.json())
          )
        );

        const cmsProfiles = responses.map((mentor, index) => ({
          id: index + 1,
          name: mentor.name || fallbackProfiles[index].name,
          title: mentor.designation || fallbackProfiles[index].title,
          belief: mentor.noteTitle || fallbackProfiles[index].belief,
          description:
            mentor.noteText?.length > 0
              ? mentor.noteText
              : fallbackProfiles[index].description,
          image: mentor.mentorImage || fallbackProfiles[index].image,
        }));

        setProfiles(cmsProfiles);
      } catch (err) {
        console.warn("Mentor CMS unavailable — using fallback profiles");
        setProfiles(fallbackProfiles);
      }
    };

    fetchMentors();
  }, []);

  /* ================= TOGGLE ================= */

  const toggleReadMore = (id) => {
    setExpandedProfiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ================= UI ================= */

  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12">
      {profiles.map((profile, index) => {
        const isExpanded = expandedProfiles[profile.id];
        const visibleDescription = isExpanded
          ? profile.description
          : profile.description.slice(0, 1);

        return (
          <div key={profile.id}>
            <div
              className={`w-[90%] mx-auto lg:mt-20 ${
                index !== 0 ? "mt-16 pt-16 border-t border-gray-200" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">

                {/* TEXT */}
                <div className="w-full lg:w-[50%] space-y-[2vh]">
                  <h3
                    className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
                    style={{ fontFamily: "BrandingSemibold" }}
                  >
                    {profile.name}
                  </h3>

                  <p
                    className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
                    style={{ fontFamily: "BrandingMedium" }}
                  >
                    {profile.title}
                  </p>

                  {profile.belief && (
                    <p
                      className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold text-blue-800"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      {profile.belief}
                    </p>
                  )}

                  <div className="space-y-[2vh]">
                    {visibleDescription.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[22px] text-justify text-gray-900"
                        style={{ fontFamily: "BrandingMedium" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {profile.description.length > 1 && (
                    <button
                      onClick={() => toggleReadMore(profile.id)}
                      className="mt-4 text-blue-800 font-semibold underline underline-offset-4 hover:text-blue-600 transition"
                      style={{ fontFamily: "BrandingSemibold" }}
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>

                {/* IMAGE */}
                <div className="w-full lg:w-[50%] relative h-[65vh] sm:h-[75vh] lg:h-[85vh] flex items-start justify-center">
                  <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HospitalityProfile;
