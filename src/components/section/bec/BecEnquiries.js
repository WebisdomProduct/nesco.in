import React from "react";
import Image from "next/image";

// Import contact icons
import contactIcon from "@/assests/nesco-business-page/bec-elements/49.jpg";

function BecEnquiries() {
  return (
    <section className="py-16 px-[5%] bg-white border-t-[5px] border-[#f9d342] w-full">
      <div className="w-[90%] mx-auto">
        <h2 
          className="text-[1.8rem] font-bold mb-8"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          For Enquiries
        </h2>
        <div className="flex flex-col gap-4">
          <p className="flex items-center text-[1rem]">
            <span className="w-5 h-5 mr-3">
              <Image
                src={contactIcon}
                alt="Email Icon"
                width={20}
                height={20}
              />
            </span>
            <span style={{ fontFamily: "BrandingMedium" }}>info@bombayexhibitioncenter.in</span>
          </p>
          <p className="flex items-center text-[1rem]">
            <span className="w-5 h-5 mr-3">
              <Image
                src={contactIcon}
                alt="Phone Icon"
                width={20}
                height={20}
              />
            </span>
            <span style={{ fontFamily: "BrandingMedium" }}>022 66450123</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BecEnquiries;