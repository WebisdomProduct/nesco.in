import React from "react";
import CommitmentImage from "@/assests/careers/commitment.png";
import Image from "next/image";

function LifeCommitment() {
  return (
    <section className="header_color_black goal-section1 w-full lg:h-screen h-full pb-10 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 justify-between gap-10 pt-24 xl:items-start items-center w-[90%] mx-auto">
        <div className="">
          <div className="">
            <h2
              style={{ fontFamily: "BrandingSemibold" }}
              className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-branding-semibold font-bold"
            >
              Our Commitment
            </h2>
          </div>
          <div className="space-y-4 mt-8">
            <p className="md:text-xl lg:text-3xl text-justify font-branding-medium">
              At Nesco, our mission is to enhance and enrich lives through every
              product, service, and experience we create. This commitment
              extends to our employees as well, where we provide meaningful work
              and foster personal growth.
            </p>
            <p className="md:text-xl lg:text-3xl text-justify font-branding-medium pt-5">
              Inspired by our founder, J.V. Patel, who established scholarships
              for the children of factory workers, we prioritize social
              responsibility and encourage a sense of purpose in every team
              member.Join us, and be part of a legacy dedicated to making a
              difference.
            </p>
          </div>
        </div>
        <div className="relative h-auto w-auto ">
          <Image
            src={CommitmentImage}
            alt="Two People shaking hand"
            className="md:w-full md:h-full aspect-square"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default LifeCommitment;
