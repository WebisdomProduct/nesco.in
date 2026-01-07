import React from 'react';
import Image from 'next/image';

// Import profile image
import profileImage from '@/assests/nesco-business-page/nesco-food-elements/31.png';
import profileImage1 from "@/assests/nesco-business-page/nesco-reality-elements/21.png";

function HospitalityProfile() {
  const profiles = [
    {
      id: 1,
      name: "Saurav Banerjee",
      title: "Corporate Executive Chef",
      belief: "Belief: For me the team comes first and commitment to hard work is our tool to achieve any goal.",
      description: [
        `Chef Saurav Banerjee is our Corporate Executive Chef. He has a rich background spanning across diverse cuisines and experience in renowned kitchens. An alumnus of the Oberoi, Chef Saurav started restaurants and a long and very successful stint with "The Oberoi Group of Hotels". He is passionate about creating unique culinary experiences and is dedicated to inspiring our team towards culinary excellence. He has served one and many distinguished guests from the highest echelons of all walks of life.`,
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
        "Rishab Doshi is a dynamic professional with diverse and extensive experience across the Finance, Real Estate, and Hospitality sectors. A Chartered Accountant (CA), Chartered Financial Analyst (CFA), and holder of a General LLB, Rishab has built a robust career working with prominent international private equity firms such as Blackstone and Lakeshore.",
        "He currently serves as Co-Head of Food, Liaison, Way-Side Amenities, and Corporate Strategy at Nesco. As the youngest member of Nesco’s leadership team, Rishab has played a key role in driving the exponential growth of Nesco Foods. He has been instrumental in advancing the company’s hospitality vision—developing vibrant culinary ecosystems that seamlessly integrate innovation, and exceptional guest experiences across dining venues and large-scale events.",
        "Rishab continues to seek innovative avenues to accelerate Nesco’s growth by introducing new revenue streams and expanding strategic initiatives. Outside of work, he enjoys playing and watching football, spending quality time with his family, and traveling.",
      ],
      image: profileImage1,
    }
  ];

  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12">
      {profiles.map((profile, index) => (
        <div key={profile.id}>
          <div
            className={`w-[90%] mx-auto lg:mt-20 ${index !== 0 ? "mt-16 pt-16 border-t border-gray-200" : ""
              }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">
              {/* Text Content - Left side */}
              <div className="w-full lg:w-[50%] space-y-[2vh]">
                <h3
                  className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
                  style={{ fontFamily: 'BrandingSemibold' }}
                >
                  {profile.name}
                </h3>
                <p
                  className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
                  style={{ fontFamily: 'BrandingMedium' }}
                >
                  {profile.title}
                </p>

                {profile.belief && (
                  <p
                    className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-tight"
                    style={{ fontFamily: 'BrandingSemibold' }}
                  >
                    {profile.belief}
                  </p>
                )}

                <div className="space-y-[2vh]">
                  {profile.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-justify"
                      style={{ fontFamily: 'BrandingMedium' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Container - Right side */}
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
      ))}
    </div>
  );
}

export default HospitalityProfile;
