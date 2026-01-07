import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/Indabrator-Elements/66.png";

function IndabratorProfile() {
  const profiles = [
    {
      id: 1,
      name: "Dr Pawan Kumar Singh",
      title: "Vice-President- Sales & Operations",
      // Dharmesh has a specific belief quote
      belief: "Belief: Shape the sustainable future by creating unprecedented value and opportunity for our customers, employees, investors, and ecosystem partners.",
      description: [
        "Dr. Pawan Kumar Singh is heading the Indabrator division as Vice-President- Sales & Operations. In his role, he oversees and leads Nesco's Manufacturing unit (Indabrator), with responsibilities spanning across Sales and Operations.",
        "His expertise extends to various aspects of business management, including P&L management in multi-plant operations within heavy engineering, industrial/mechanical equipment, components, automotive manufacturing, and machine building segments. Dr. Singh has worked with several multinational companies in these roles.",
        "He has has a proven track record in Operational Excellence and Efficiencies, Value Engineering, Sustainability, Safety, Quality, Delivery & Cost (S2QDC), and, notably, New Product/Process Introduction. Well-versed in B2B Sales, Business Development & Strategy, Customer and Market Expansion & Retention, Financials including EBIT, Purchase, Project Management, and Supply Chain management."
      ],
      image: profileImage,
    },

  ];

  return (
    <div className="w-full lg:min-h-screen bg-white pt-8 lg:pt-12 pb-20">
      {profiles.map((profile, index) => (
        <div key={profile.id}>
          {/* Add a separator/spacing for the second profile onwards */}
          <div
            className={`w-[90%] mx-auto lg:mt-20 ${index !== 0 ? "mt-16 pt-16 border-t border-gray-200" : ""
              }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">
              {/* Text Content - Left side */}
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

                {/* Only render Belief section if it exists */}
                {profile.belief && (
                  <p
                    className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-tight"
                    style={{ fontFamily: "BrandingSemibold" }}
                  >
                    {profile.belief}
                  </p>
                )}

                <div className="space-y-[2vh]">
                  {profile.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-justify"
                      style={{ fontFamily: "BrandingMedium" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Container - Right side */}
              <div className="w-full lg:w-[50%] relative h-[65vh] sm:h-[75vh] lg:h-[85vh] flex items-center justify-center">
                <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-contain scale-[1.3]" // Changed to object-cover if you want it to fill the box fully, keep contain to show full photo
                    priority={index === 0} // Only prioritize the first image for performance
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default IndabratorProfile;
