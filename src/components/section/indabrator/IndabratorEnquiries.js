
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function BecEnquiries() {
  return (
    <section className="relative bg-[#0e129f] w-full min-h-[300px] lg:min-h-[400px]">
      {/* Desktop Layout - Split design */}
      <div className="hidden lg:block">
        {/* White content box */}
        <div className="absolute left-0 top-0 bottom-0 right-2/3 bg-white">
          {/* Blue accent border on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#0e129f]"></div>
          
          <div className="pl-12 pr-8 py-12 h-full flex flex-col justify-center">
            <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-800 mb-8 tracking-wide">
              For Enquiries
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-600">
                <MdEmail className="w-5 h-5 mr-4 text-gray-400" />
                <span className="text-lg font-medium">sales@indabrator.com</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MdPhone className="w-5 h-5 mr-4 text-gray-400" />
                <span className="text-lg font-medium">+91 99099 44443</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Full width white background */}
      <div className="lg:hidden bg-white w-full min-h-[300px]">
        {/* Blue accent border on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-[#0e129f]"></div>
        
        <div className="pl-6 sm:pl-8 md:pl-12 pr-4 sm:pr-6 md:pr-8 py-8 sm:py-10 md:py-12 h-full flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 tracking-wide">
            For Enquiries
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center text-gray-600">
              <MdEmail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-gray-400 flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium break-all">contact@nescoreality.in</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MdPhone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-gray-400 flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium">022 66450123</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecEnquiries;