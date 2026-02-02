import React from "react";
import Image from "next/image";

// Import the pattern/decoration image
import decorativePattern from "@/assests/nesco-business-page/nesco-events/74.jpg";

function EventDisplay() {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative">
        <Image
          src={decorativePattern}
          alt="Rangilo Re - Decorative Event Pattern"
          fill
          className="object-cover w-full"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}

export default EventDisplay;
