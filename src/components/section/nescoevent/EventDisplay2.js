import React from "react";
import Image from "next/image";

// Import the pattern/decoration image
import decorativePattern from "@/assests/nesco-business-page/nesco-events/74.jpg";

function EventDisplay() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative">
        <Image
          src={decorativePattern}
          alt="Rangilo Re - Decorative Event Pattern"
          fill
          className="object-cover w-full"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
    </section>
  );
}

export default EventDisplay;