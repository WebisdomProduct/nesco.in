import React from "react";

export default function MediaContent() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[90%] mx-auto max-w-4xl">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Our Advertisements
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
            <img
              src="https://nesco.in/assets/images/media/our-advertisement/our-advertis-01.jpg"
              alt="Nesco Advertisement"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
