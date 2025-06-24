import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/Indabrator-Elements/65.jpg";

function IndabratorProfile() {
  return (
    <section className="w-full min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="container px-6 sm:px-10 md:px-16 lg:px-24 mx-auto">
        {/* Main heading */}
        <h2
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] font-bold mb-8 sm:mb-10 md:mb-12"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Meet the people who make it possible.
        </h2>

        {/* Profile container */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Image container - fixed aspect ratio */}
          <div className="md:w-[40%] w-full">
            <div className="aspect-[3/4] w-full relative rounded-md overflow-hidden shadow-lg">
              <Image
                src={profileImage}
                alt="Dr. Pawan Kumar Singh"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="md:w-[60%] w-full">
            <h3
              className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-bold mb-1"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dr Pawan Kumar Singh
            </h3>
            <p
              className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] text-gray-700 mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Vice-President- Sales & Operations
            </p>

            <div className="mb-6">
              <p
                className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-bold mb-2"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                Belief:{" "}
                <span className="font-normal">
                  "Shape the sustainable future by creating unprecedented value
                  and opportunity for our customers, employees, investors, and
                  ecosystem partners."
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <p
                className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Dr. Pawan Kumar Singh is heading the Indabrator division as
                Vice-President- Sales & Operations. In his role, he oversees and
                leads Nesco's Manufacturing unit (Indabrator), with
                responsibilities spanning across Sales and Operations.
              </p>

              <p
                className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                His expertise extends to various aspects of business management,
                including P&L management in multi-plant operations within heavy
                engineering, industrial/mechanical equipment, components,
                automotive manufacturing, and machine building segments. Dr.
                Singh has worked with several multinational companies in these
                roles.
              </p>

              <p
                className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                He has has a proven track record in Operational Excellence and
                Efficiencies, Value Engineering, Sustainability, Safety,
                Quality, Delivery & Cost (S2QDC), and, notably, New
                Product/Process Introduction. Well-versed in B2B Sales, Business
                Development & Strategy, Customer and Market Expansion &
                Retention, Financials including EBIT, Purchase, Project
                Management, and Supply Chain management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndabratorProfile;
