import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const API_BASE = "http://localhost:8040/api/v1/homepage/goal";

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

  if (!goals.length) return null; // or a loading state

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
                className="text-[#1e3a8a] text-4xl md:text-5xl lg:text-6xl font-bold md:pt-28 text-center lg:text-left"
              >
                {goal.heading1}
              </h1>
              <h2 className="text-[#1e3a8a] mt-3 text-4xl md:text-5xl lg:text-6xl font-medium text-center lg:text-left">
                {goal.heading2}
              </h2>
            </div>
            <div className="space-y-4 mt-8">
              <h2 className="text-2xl md:text-3xl text-black font-semibold">
                {goal.heading3}
              </h2>
              <p className="text-gray-700 text-[19px] font-medium">
                {goal.paragraphDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
