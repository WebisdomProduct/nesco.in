import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function RealtyEnquiries() {
  return (
    <section className="relative w-full min-h-[240px] sm:min-h-[300px] overflow-hidden">
      {/* 50-50 split background (white over blue) */}
      <div className="flex flex-col h-full w-full absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-[#0e129f]"></div>
      </div>
      
      {/* White content box overlaying the split */}
      <div className="relative z-10 w-full md:w-[450px] lg:w-[500px] bg-white shadow-md m-4 sm:m-8 md:m-12">
        <div className="py-8 px-8 sm:px-10 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6 sm:mb-8">
            For Enquiries
          </h2>
          
          <div className="space-y-3 sm:space-y-5">
            <div className="flex items-center text-gray-600">
              <MdEmail className="w-5 h-5 mr-4 text-gray-500" />
              <span className="text-base sm:text-lg text-gray-500">contact@nescoreality.in</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MdPhone className="w-5 h-5 mr-4 text-gray-500" />
              <span className="text-base sm:text-lg text-gray-500">022 66450123</span>
            </div>
          </div>
        </div>
        
        {/* Blue bar on the left edge of the white box */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-[#0e129f]"></div> */}
      </div>
    </section>
  );
}

export default RealtyEnquiries;