import Image from 'next/image';
import React from 'react';
import awardsImage from '@/assests/sustainability/image.png';

function SustainabilityImage() {
  return (
    <div className="goal-section1 bg-[#2B2B76] flex justify-center items-center">
      <div className="w-[90%] my-20 flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <Image
            src={awardsImage}
            className="w-full h-full"
            alt="awardsImage"
          />
        </div>
        <div className=" md:w-1/2 overflow-hidden">
          <div className="w-full  px-10">
            <p className="text-[#04A8E3] text-3xl font-branding-bold py-3">
              Awards and Recognition
            </p>
          </div>
          <div className="w-full text-white px-10 flex flex-col my-10 gap-10">
            <p>Dream Companies to Work For 2024-World HRD Congress </p>
            <p>
              Promising Brand 2023-24- Nesco Foods Iconic Brand 2023-24-Bombay
              Exhibition Center -The Economic Times
            </p>
            <p>
              Food Connoisseurs India Awards - Best Caterers of the Year
              2024-Nesco Foods-Food Connoisseurs India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityImage;
