import React from "react";
import Image from "next/image";

// Import profile image
import watermark from "@/assests/nesco-business-page/nesco-events/76.jpg";
import profileImage from "@/assests/nesco-business-page/nesco-events/75.png";

function EventProfile() {
  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12 relative overflow-hidden">
      {/* Watermark - 76 image in background */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full opacity-80">
          <Image
            src={watermark}
            alt="76 Watermark"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div> */}

      <div className="w-[90%] mx-auto lg:mt-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Text Content - Left side */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center pr-8">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Balakrishnan Balram
            </h3>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Head - Nesco Events
            </p>

            <div className="space-y-[2vh]">
              <p
                className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left "
                style={{ fontFamily: "BrandingMedium" }}
              >
                Balakrishnan Balram is a seasoned leader in strategic brand
                and experiential marketing, with over two decades of expertise
                spanning luxury, banking, real estate, and media. He has been
                instrumental in enhancing brand equity and driving consumer
                engagement for globally renowned brands.
              </p>

              <p
                className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left "
                style={{ fontFamily: "BrandingMedium" }}
              >
                As the former Chief Business Officer at Laqshya Live
                Experiences, Balakrishnan Balram spearheaded new business development, luxury
                experiences, and live event portfolios. He also shaped the
                Laqshya Luxury brand through impactful collaborations with names
                like Abu Jani Sandeep Khosla, Gauri Khan Designs, and Manchester
                City.
              </p>

              <p
                className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left "
                style={{ fontFamily: "BrandingMedium" }}
              >
                His impressive portfolio includes partnerships with Bentley,
                Porsche, Moët & Chandon, and Jaguar Land Rover, delivering
                bespoke experiences for elite audiences. Balu's standout
                projects include the icon in the Sky lighting spectacle and the
                Laqshya Luxury World Mental Wellness Day anthem.
              </p>
            </div>
          </div>

          {/* Image Container - Right side */}
          <div className="w-full lg:w-1/2 relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute w-full h-full ">
              <Image
                src={watermark}
                alt="Background"
                fill
                className="object-cover rounded-lg shadow-lg lg:translate-y-8 xl:translate-y-16"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 50vw"
              />
            </div>
            <div className="relative h-[400px] lg:h-full w-full rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Balachandran Nambisan"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventProfile;
