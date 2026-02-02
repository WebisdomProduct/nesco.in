import React from "react";

const stories = [
  {
    image: "https://nesco.in/assets/images/media/stories/story-img/IX9A8716%20%202-min.jpg",
    title:
      "NESCO & WEVIO organized - Technology Transfer Meet between Indian Companies and South Korean Delegation",
    description:
      "Tech Connect Global – the Official Technology Trading Event between India and Korea organised by NESCO Ltd and WEVIO Global Inc in Mumbai generated 11 MOUs between Indian manufacturers and South Korean Tech Companies for transfer of the latest technology to Indian establishments and other two MOUs for Government.",
  },
  {
    image: "https://nesco.in/assets/images/media/stories/story-img/IGBC%20Award%20Photo%202-min.jpg",
    title: "IGBC Award",
    description:
      "Indian Green Building Council awarded Platinum ranking to Tower 04, Nesco IT Park under LEED India Core and Shell rating system. Certification and Award was accepted by Mr. Dipesh R. Singhania (CFO & Head Legal) and Mr. Sasidharan Nair (Head – Projects) at a ceremony held in Hyderabad by The Confederation of Indian Industry.",
  },
];

export default function MainStories() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[90%] mx-auto max-w-7xl flex flex-col gap-16">
        {stories.map((story, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row${idx % 2 === 1 ? " md:flex-row-reverse" : ""} items-center gap-8`}>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={story.image}
                alt={story.title}
                className="rounded-lg shadow-lg max-h-96 object-cover"
                style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center${idx === 1 ? ' text-white bg-[#1a2992] p-8 rounded-lg' : ''}">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'BrandingSemibold' }}>
                {story.title}
              </h3>
              <p className="text-lg font-branding-medium">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}