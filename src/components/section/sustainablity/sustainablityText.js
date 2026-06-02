"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function SustainablityText() {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("https://nesco-backend-1.onrender.com/api/v1/our_impact/sustainablility/text/get")
      .then((res) => setText(res.data?.text));
  }, []);

  return (
    <div className="goal-section1 flex justify-center items-center font-medium text-gray-800 bg-gray-200">
      <div className="w-[90%] py-14 lg:text-3xl md:text-xl sm:text-lg ">
        {text}
      </div>
    </div>
  );
}

export default SustainablityText;
