"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimateOnScroll({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -80% 0px" });

  useEffect(() => {
    const elements = ref.current?.querySelectorAll(".goal-section1");
    elements?.forEach((el) => {
      el.style.opacity = inView ? "1" : "0";
      el.style.transform = inView ? "translateY(0px)" : "translateY(150px)";
      el.style.transition = "opacity 1s ease-out, transform 0.8s ease-out";
    });
  }, [inView]);

  return <div ref={ref}>{children}</div>;
}

export default AnimateOnScroll;
