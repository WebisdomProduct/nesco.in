import React, { useState } from "react";

const archives = [
  {
    year: 2018,
    stories: [
      {
        title: "India's acclaimed music festival for folk fusion.",
        date: "Jun 09, 2018",
        image: "https://nesco.in/assets/images/media/stories/story-img/News4.jpg",
        description: "This year, Paddy Fields celebrates Jugalbandi, an ode to the classicism of folk fusion. The event will be held over 6th and 7th October, 2018.",
        download: "#",
        share: "#",
      },
      {
        title: "India's largest IT event held at the BEC",
        date: "May 17, 2018",
        image: null,
        download: "#",
        share: "#",
      },
      {
        title: "The BEC is a star venue!",
        date: "Feb 02, 2018",
        image: null,
        download: "#",
        share: "#",
      },
    ],
  },
];

export default function MediaArchive() {
  const [selectedYear, setSelectedYear] = useState(2018);
  const currentArchive = archives.find((a) => a.year === selectedYear);

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="w-[90%] mx-auto max-w-4xl">
        <div className="flex gap-8 mb-8">
          <span className="font-bold text-lg border-b-2 border-primary pb-1 cursor-pointer">Current Stories</span>
          <div className="relative">
            <select
              className="font-bold text-lg border-b-2 border-primary pb-1 bg-transparent appearance-none cursor-pointer"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {archives.map((a) => (
                <option key={a.year} value={a.year} className="text-black">
                  {a.year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {currentArchive.stories.map((story, idx) => (
            <div key={idx} className="border-b py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {story.image && (
                  <img src={story.image} alt={story.title} className="w-24 h-16 object-cover rounded-md" />
                )}
                <div>
                  <div className="text-xl font-branding-medium text-gray-800">{story.title}</div>
                  <div className="text-gray-500 text-sm mt-1">{story.date}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={story.download} className="text-blue-500" title="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
                  </svg>
                </a>
                <a href={story.share} className="text-blue-500" title="Share">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0h-7.5m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0h-7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
