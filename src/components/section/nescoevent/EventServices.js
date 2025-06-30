import React from "react";
import Image from "next/image";

// Import service background image
import microphoneImg from "@/assests/nesco-business-page/nesco-events/70.jpg";

function EventServices() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={microphoneImg}
          alt="Professional microphone setup"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Text content overlay */}
      <div className="relative z-10 h-full flex items-center justify-start px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-2xl text-white">
          <h2 
            className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold leading-tight mb-6"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Where Every<br />
            Detail<br />
            Matters
          </h2>
        </div>
      </div>
    </section>
  );
}

export default EventServices;