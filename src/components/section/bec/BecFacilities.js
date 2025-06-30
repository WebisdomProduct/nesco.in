"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import facility images for carousel
import orchardImage from "@/assests/nesco-business-page/bec-elements/40.jpg";
import cafeteriaImage from "@/assests/nesco-business-page/bec-elements/33.jpg";
import foodCourtImage from "@/assests/nesco-business-page/bec-elements/34.jpg";
import restaurantImage from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecFacilities() {
  // Facilities data
  const facilities = [
    {
      id: 1,
      name: "The Hall",
      image: orchardImage,
      description: "An expansive multi-function exhibition hall with over 25,000 sq.ft of open space. Perfect for large-scale events, exhibitions, and corporate functions. Equipped with state-of-the-art lighting systems and utility connections throughout the space."
    },
    {
      id: 2,
      name: "Orchard",
      image: orchardImage,
      description: "Flanked by open sky and trees, the Orchard is a quick and accessible haven for multi-cuisine. This food court serves up a delightful variety in both takeaway and dine-in formats for every gourmand- leisurely lunches or meals-on-the-go."
    },
    {
      id: 3,
      name: "The Pavilion",
      image: orchardImage,
      description: "A versatile indoor-outdoor space that combines the comfort of a sheltered venue with the natural ambiance of open surroundings. The Pavilion offers 12,000 sq.ft of flexible space for product launches, networking events or casual gatherings."
    },
    {
      id: 4,
      name: "Conference Center",
      image: orchardImage,
      description: "Our premium meeting space equipped with advanced audio-visual technology and comfortable seating for up to 200 attendees. The Conference Center includes breakout rooms and dedicated catering areas for productive business meetings."
    }
  ];

  // State to track current slide
  const [currentIndex, setCurrentIndex] = useState(1);

  // Navigate to previous slide
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? facilities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Navigate to next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === facilities.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Get current facility data
  const currentFacility = facilities[currentIndex];

  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      {/* Section Title with yellow top border - Reduced bottom padding */}
      <div className="px-[5%] w-full border-t-2 border-[#f9d342]  pb-2">
        <h2 
          className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* Full-height image with overlay card - Adjusted height calculation */}
      <div className="relative w-full h-[calc(100%-100px)]">
        {/* Background Image - Dynamically changes */}
        <Image
          src={currentFacility.image}
          alt={`${currentFacility.name}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          sizes="100vw"
        />

        {/* White Card Overlay - Now positioned at bottom left */}
        <div className="absolute left-[5%] bottom-0 bg-white p-5 sm:p-6 md:p-8 
                      w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] shadow-md 
                      h-auto min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px]">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 
              className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {currentFacility.name}
            </h3>
            
            {/* Carousel Indicator */}
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-black/70 border border-gray-300 px-1 py-0.5 sm:px-2 sm:py-1 rounded-sm">
                {currentIndex + 1}/{facilities.length}
              </span>
            </div>
          </div>
          
          <p 
            className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.6rem] leading-[1.6] sm:leading-[1.7] mb-16 sm:mb-20"
            style={{ fontFamily: "BrandingMedium" }}
          >
            {currentFacility.description}
          </p>
          
          {/* Carousel Navigation Controls - Positioned higher */}
          <div className="flex justify-between items-center absolute bottom-16 sm:bottom-20 md:bottom-24 left-6 sm:left-7 md:left-9 right-6 sm:right-7 md:right-8">
            <button 
              className="text-black/70 hover:text-black transition-colors"
              onClick={goToPrevious}
              aria-label="Previous facility"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            {/* Dot indicators */}
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              {facilities.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  } transition-colors`}
                  onClick={() => setCurrentIndex(index)}
                  role="button"
                  aria-label={`Go to slide ${index + 1}`}
                  tabIndex="0"
                ></div>
              ))}
            </div>
            
            <button 
              className="text-black/70 hover:text-black transition-colors"
              onClick={goToNext}
              aria-label="Next facility"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecFacilities;