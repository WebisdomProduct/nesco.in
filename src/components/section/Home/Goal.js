import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const API_BASE = "https://nesco-backend-j567.onrender.com/api/v1/homepage/goal";

export default function Goal() {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    try {
      const res = await axios.get(API_BASE);
      setGoals(res.data.data);
    } catch (error) {
      console.error("Failed to fetch goals:", error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  if (!goals.length) return null;

  return (
    <section className="w-full lg:h-screen h-full bg-gray-200 pb-10 flex flex-col justify-center min-h-[800px]">
      {goals.map((goal) => (
        <div
          key={goal._id}
          className="grid md:grid-cols-2 justify-between gap-10 md:gap-0 pt-16 items-center w-[90%] mx-auto goal-section1"
        >
          {/* Image Section */}
          <div className="relative h-[400px] md:h-[700px] mt-12">
            <Image
              src={goal.image}
              alt={`${goal.heading1} illustration`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div>
            <div>
              <h1
                style={{ fontFamily: "BrandingSemibold" }}
                className="
                  text-[#1e3a8a]
                  font-bold
                  text-[48px] leading-[56px]
                  md:text-[48px] md:leading-[60px]
                  lg:text-[48px] lg:leading-[60px]
                  md:pt-28
                  text-center lg:text-left
                "
              >
                {goal.heading1}
              </h1>

              <h2
                className="
                  text-[#1e3a8a]
                  mt-3
                  font-medium
                  text-[48px] leading-[56px]
                  md:text-[48px] md:leading-[60px]
                  lg:text-[48px] lg:leading-[60px]
                  text-center lg:text-left
                "
              >
                {goal.heading2}
              </h2>
            </div>

            <div className="space-y-4 mt-8">
              <h2
                className="
                  text-black
                  font-semibold
                  text-[28px] leading-[36px]
                  md:text-[28px] md:leading-[40px]
                "
              >
                {goal.heading3}
              </h2>

              <p
                className="
                  text-gray-700
                  font-medium
                  text-[18px] leading-[28px]
                  md:text-[18px] md:leading-[30px]
                "
              >
                {goal.paragraphDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
