import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function IndabratorEnquiries() {
  return (
    <div className="relative w-full min-h-[260px] sm:min-h-[320px] overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-blue-800" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="relative w-full md:w-[460px] lg:w-[520px] ml-4 sm:ml-8 md:ml-12">
          
          {/* Hover Card */}
          <div className="group relative bg-white transition-all duration-200 hover:bg-blue-800 shadow-lg">

            {/* Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-800 group-hover:bg-white transition-colors duration-200" />

            <div className="py-8 px-8 sm:px-10 md:px-12">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 group-hover:text-white mb-6 sm:mb-8 transition-colors duration-200"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                For Enquiries
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MdEmail className="w-5 h-5 mr-4 mt-1 text-blue-800 group-hover:text-white transition-colors duration-200" />
                  <span
                    className="text-base sm:text-lg text-blue-800 group-hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "BrandingMedium" }}
                  >
                    Machines related: indabrator.sales@nesco.in <br />
                    Spares & abrasive related: indabrator.spares@nesco.in
                  </span>
                </div>

                <div className="flex items-center">
                  <MdPhone className="w-5 h-5 mr-4 text-blue-800 group-hover:text-white transition-colors duration-200" />
                  <span
                    className="text-base sm:text-lg text-blue-800 group-hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "BrandingMedium" }}
                  >
                    +91 99099 44443
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default IndabratorEnquiries;
