import React from "react";
import Image from "next/image";

// Import profile image
import watermark from "@/assests/nesco-business-page/nesco-events/76.jpg";
import profileImage from "@/assests/nesco-business-page/nesco-events/75.png";

function EventProfile() {
  return (
    <section className="w-full min-h-auto bg-white py-2 sm:py-6 md:py-10 relative overflow-hidden">
      {/* Watermark - 76 image in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full opacity-20">
          <Image
            src={watermark}
            alt="76 Watermark"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="container px-2 sm:px-4 md:px-8 lg:px-12 mx-auto relative z-10">
        {/* Main heading */}
        {/* <h2
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] font-bold mb-8 sm:mb-10 md:mb-12"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Meet the people who make it possible.
        </h2> */}

        {/* Profile container */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Text content - LEFT SIDE - Lowered position */}
          <div className="md:w-[55%] w-full md:order-1 order-2 md:mt-14 lg:mt-18">
            <h3
              className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-bold mb-1"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Balachandran Nambisan
            </h3>
            <p
              className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] text-gray-700 mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Head - Nesco Events
            </p>

            <div className="space-y-4">
              <p
                className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Balachandran Nambisan is a seasoned leader in strategic brand and
                experiential marketing, with over two decades of expertise spanning luxury, banking, real
                estate, and media. He has been
                instrumental in
                enhancing brand equity and driving consumer
                engagement for globally renowned brands.
              </p>

              <p
                className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                As the former Chief Business Officer at Laqshya Live
                Experiences, Balu spearheaded new business
                development, luxury experiences, and live event
                portfolios. He also shaped the Laqshya Luxury
                brand through impactful collaborations with names
                like Abu Jani Sandeep Khosla, Gauri Khan Designs,
                and Manchester City.
              </p>

              <p
                className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                His impressive portfolio includes partnerships with
                Bentley, Porsche, Moët & Chandon, and Jaguar
                Land Rover, delivering bespoke experiences for elite
                audiences. Balu's standout projects include the icon
                in the Sky lighting spectacle and the Laqshya Luxury
                World Mental Wellness Day anthem.
              </p>
            </div>
          </div>

          {/* Image container - RIGHT SIDE - Position unchanged */}
          <div className="md:w-[45%] w-full md:order-2 order-1">
            <div className="aspect-[3/4] w-full relative rounded-md overflow-hidden shadow-lg">
              <Image
                src={profileImage}
                alt="Balachandran Nambisan"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventProfile;