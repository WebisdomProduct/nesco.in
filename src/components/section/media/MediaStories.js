import React, { useState } from "react";



const stories = [
  {
    title: "India's acclaimed music festival for folk fusion.",
    date: "Jun 09, 2018",
  },
  {
    title: "India's largest IT event held at the BEC",
    date: "May 17, 2018",
  },
  {
    title: "The BEC is a star venue!",
    date: "Feb 02, 2018",
  },
];

export default function MediaStories() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="w-[90%] mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" style={{ fontFamily: 'BrandingSemibold' }}>
          Current Stories
        </h2>
        <div className="space-y-8">
          {stories.map((story, idx) => (
            <div key={idx} className="border-b pb-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-branding-medium text-gray-800">{story.title}</div>
                <div className="text-gray-500 text-sm mt-1">{story.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
