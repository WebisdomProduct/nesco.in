import React from "react";
import Image from "next/image";

// Import profile image
// Note: Using the same image for both as requested until the new photo is shared
import profileImage from "@/assests/nesco-business-page/nesco-reality-elements/18.jpg";
import profileImage1 from "@/assests/nesco-business-page/nesco-reality-elements/20-min.png";

function RealtyProfile() {
  const profiles = [
    {
      id: 1,
      name: "Dharmesh Joshi",
      title: "Head- Special Project",
      // Dharmesh has a specific belief quote
      belief: "Belief: Action is better than Words. Quit talking and lets start Doing!",
      description: [
        "Dharmesh is a multifaceted professional with good understanding of various industries.",
        "With techno-commercial experience and working with top management, enables him to add value in Corporate Strategy & Infrastructure projects. Dharmesh is very passionate about whatever he does. Currently handling Special Projects, he is involved in Nesco's various Divisions. Dharmesh enjoys reading, music and spending his time with family.",
      ],
      image: profileImage,
    },
    {
      id: 2,
      name: "Rishab Doshi",
      title: "Head- Special Project",
      // Rishab does not have a belief quote in the provided text, so we leave it null
      belief: null, 
      description: [
        "Rishab Doshi is a dynamic professional with diverse and extensive experience across the Finance, Real Estate, and Hospitality sectors. A Chartered Accountant (CA), Chartered Financial Analyst (CFA), and holder of a General LLB, Rishab has built a robust career working with prominent international private equity firms such as Blackstone and Lakeshore.",
        "He currently serves as Co-Head of Food, Liaison, Way-Side Amenities, and Corporate Strategy at Nesco. As the youngest member of Nesco’s leadership team, Rishab has played a key role in driving the exponential growth of Nesco Foods. He has been instrumental in advancing the company’s hospitality vision—developing vibrant culinary ecosystems that seamlessly integrate innovation, and exceptional guest experiences across dining venues and large-scale events.",
        "Rishab continues to seek innovative avenues to accelerate Nesco’s growth by introducing new revenue streams and expanding strategic initiatives. Outside of work, he enjoys playing and watching football, spending quality time with his family, and traveling.",
      ],
      image: profileImage1, // Placeholder image as requested
    },
  ];

  return (
    <div className="w-full lg:min-h-screen bg-white pt-8 lg:pt-12 pb-20">
      {profiles.map((profile, index) => (
        <div key={profile.id}>
          {/* Add a separator/spacing for the second profile onwards */}
          <div
            className={`w-[90%] mx-auto lg:mt-20 ${
              index !== 0 ? "mt-16 pt-16 border-t border-gray-200" : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Text Content - Left side */}
              <div className="w-full lg:w-[60%]">
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-left"
                  style={{ fontFamily: "BrandingSemibold" }}
                >
                  {profile.name}
                </h3>
                <p
                  className="text-xl sm:text-2xl lg:text-3xl text-[#666] mb-12 text-left"
                  style={{ fontFamily: "BrandingMedium" }}
                >
                  {profile.title}
                </p>

                {/* Only render Belief section if it exists */}
                {profile.belief && (
                  <p
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10 text-left leading-tight"
                    style={{ fontFamily: "BrandingSemibold" }}
                  >
                    {profile.belief}
                  </p>
                )}

                <div className="space-y-10">
                  {profile.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-xl sm:text-2xl lg:text-3xl leading-loose text-justify"
                      style={{ fontFamily: "BrandingMedium" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Container - Right side */}
              <div className="w-full lg:w-[40%] flex items-center justify-end">
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-contain" // Changed to object-cover if you want it to fill the box fully, keep contain to show full photo
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

export default RealtyProfile;