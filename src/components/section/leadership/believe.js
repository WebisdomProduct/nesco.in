import React from 'react';
import chessImage from '@/assests/leadership/24-1.png';
import Image from 'next/image';
import LeaderIcon from '@/assests/leadership/Leader.png';

function believe() {
  return (
    <section className="w-full goal-section1 relative flex flex-col items-center py-12 xl:min-h-[800px] min-h-[700px] overflow-hidden">
      <div className="pt-10 items-center w-[95%] max-w-[1400px] mx-auto">
        <div className="text-primary flex justify-center items-center">
          <p
            style={{ fontFamily: 'BrandingSemibold' }}
            className="text-[#1e3a8a] mt-8 text-4xl md:text-5xl font-branding-semibold font-bold text-center xl:w-[60%] lg:w-[75%] md:w-[90%]"
          >
            We believe in people <br /> &amp; people believe in us.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-center mt-12 gap-10 xl:gap-20">
          {/* Left Image */}
          <div className="relative w-full max-w-[420px] flex-shrink-0 flex justify-center items-center">
            <Image
              src={chessImage}
              alt="Chess Image"
              className="w-full object-cover object-bottom aspect-square rounded-xl shadow-md"
              priority
            />
          </div>
          {/* Center Text */}
          <div className=" w-full max-w-[650px] flex flex-col gap-5 md:text-[1.18rem] text-[1.08rem] font-poppins z-10">
            <p className="leading-8 md:leading-9">
              Leadership at Nesco is more than just management, it is a
              principle. Our founder, J. V. Patel was a first-generation
              industrialist in independent India and a peerless entrepreneur. He
              carved a niche for himself in the industrial and business realm by
              dint of technical know-how, meticulousness, diligence and
              leadership. The investiture of his beliefs in our teams is what
              takes us forward as a company. Across our diverse industries, our
              capabilities at Nesco are expanding. As businesses grow, the focus
              of our leadership grows on converting the credo of believe into
              action.
            </p>
          </div>
          {/* Right Icon */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <Image
              src={LeaderIcon}
              alt="icon"
              className="w-[180px] xl:w-[250px] 2xl:w-[300px] h-auto object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default believe;
