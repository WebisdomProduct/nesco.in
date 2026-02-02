import React from "react";

export default function MusicFestival() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[90%] mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://nesco.in/assets/images/media/stories/story-img/News4.jpg"
            alt="India's acclaimed music festival for folk fusion."
            className="rounded-lg shadow-lg max-h-96 object-cover"
            style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'BrandingSemibold' }}>
            India's acclaimed music festival for folk fusion.
          </h3>
          <p className="text-lg text-gray-700 font-branding-medium">
            This year, Paddy Fields celebrates Jugalbandi, an ode to the classicism of folk fusion. The event will be held over 6th and 7th October, 2018.
          </p>
        </div>
      </div>
    </section>
  );
}