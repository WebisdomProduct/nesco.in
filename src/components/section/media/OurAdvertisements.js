import React from "react";

const ads = [
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/our-advertis-01.jpg",
    alt: "Advertisement 1",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/our-advertis-01-open.jpg",
    alt: "Advertisement 2",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/our-advertis-02.jpg",
    alt: "Advertisement 3",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/1.jpg",
    alt: "Advertisement 4",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/3.jpg",
    alt: "Advertisement 5",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/2.jpg",
    alt: "Advertisement 6",
  },
  {
    image: "https://nesco.in/assets/images/media/our-advertisement/4.jpg",
    alt: "Advertisement 7",
  },
];

export default function OurAdvertisements() {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-24">
      <div className="w-[90%] mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8" style={{ fontFamily: 'BrandingSemibold' }}>
          Our Advertisements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {ads.map((ad, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden w-72 h-96 flex items-center justify-center">
              <img src={ad.image} alt={ad.alt} className="object-contain max-h-80 max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
