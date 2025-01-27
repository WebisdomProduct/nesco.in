import React from "react";
import GoalImage from "@/assests/Home/Goal.jpg";
function Goal() {
  return (
    <div className="w-full relative flex flex-col items-center my-10">
      <div className="w-full absolute bg-[#D2EFFF] top-0 left-0 h-[30%] z-0"></div>
      <div className="w-[60%] flex flex-col items-center justify-center z-10">
        <div className=" text-primary">
          <p className="text-center text-3xl font-bold leading-[3rem] mt-6">
            One goal. 8 decades
          </p>
          <p className="text-3xl border-b-2 border-b-primary pb-3 leading-[3rem] font-medium text-center">
            Infinite possibilities
          </p>
        </div>
        <div className="mt-10 flex justify-center flex-col items-center">
          <div>
            <img src={GoalImage.src} alt="Goal image" className="" />
          </div>
          <p className="mt-8 text-2xl font-bold">
            In 1939, we set out on our goal to make India
          </p>
          <p className="text-2xl mt-2 font-bold">stand out on the world map.</p>

          <p className="text-justify mt-8 text-lg">
            From designing and manufacturing engineering solutions, the Nesco
            Group has diversified into multiple industries including
            Exhibitions, Real Estate, Hospitality, Events and Entertainment. Our
            inspirational growth over the last eight decades only shows how a
            vision can empower limitless possibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Goal;
