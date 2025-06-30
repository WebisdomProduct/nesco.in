import React from "react";
import Image from "next/image";

// Import the pattern/decoration image
import decorativePattern from "@/assests/nesco-business-page/nesco-events/73.jpg";

function EventDisplay() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-[140%] h-[140%] relative">
          <Image
            src={decorativePattern}
            alt="Rangilo Re - Decorative Event Pattern"
            fill
            className="object-contain"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

export default EventDisplay;