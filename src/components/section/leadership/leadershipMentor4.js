import React from 'react';
import MentorImage from '@/assests/Home/Ashish-5-removebg-preview.png';
import backgroundImage from '@/assests/Home/mentorNew/KrishnaBack.jpg';
import Image from 'next/image';

function LeadershipMentor4() {
  return (
    <section
      className="header_white flex flex-col items-center justify-center relative w-full h-full overflow-hidden xl:h-screen min-h-[500px]"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="krishna"
    >
      <div className="z-20 relative lg:w-[100%] w-[90%] flex flex-col items-center justify-center mx-auto mt-12 lg:mb-0 mb-10 h-full goal-section1">
        <div className="flex lg:flex-row flex-col h-full w-full items-center">
          <div className="flex flex-col lg:w-[50%] w-1/2 h-full xl:justify-end justify-center items-center z-10 relative">
            <Image
              src={MentorImage}
              alt="Mentor"
              width={650}
              height={400}
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className="relative lg:w-[50%] h-full flex flex-col lg:justify-center xl:pt-32 lg:pl-10 lg:pr-16">
            <div className=" mt-4">
              <h2 className="text-[2rem] leading-10 font-branding-semibold text-[#C3F0FB]">
                Dr. Ashish J. Pinto
              </h2>
              <p className=" font-branding-medium text-[1rem] mb-4 text-white">
                Chief Human Resource Officer
              </p>
            </div>

            <hr className=" bg-white border-1 border-white mb-4 " />
            <div className="relative">
              <div className="space-y-2 mt-2 ">
                <p className="font-branding-medium text-white">
                  A strong proponent of business success and a believer of
                  building strong human capital assets, Ashish has been
                  entrusted with envisioning the HR road map and charting out
                  the people strategy by implementing and aligning it with the
                  groups business objectives. Ashish holds a PhD in Engagement
                  Practices from Symbiosis International University and an MBA
                  in HR from NMIMS and has over 25 years of experience of
                  working in the areas of Talent Acquisition, Talent Management,
                  Organization wide HR transformation and Capability development
                  across various industries like IT, HR Consulting, Media &
                  Manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMentor4;
