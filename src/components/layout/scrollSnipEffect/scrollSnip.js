
"use client";
import React from "react";

function ScrollSnip({ Children }) {
  return (
    <div className="container1 font-branding-medium">
      {Children.map((data, index) => (
        <section
          key={index}
          className={`flex items-center justify-center ${data.classCss}`}
        >
          {data.comp}
        </section>
      ))}
    </div>
  );
}

export default ScrollSnip;