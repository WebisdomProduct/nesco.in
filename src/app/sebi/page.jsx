import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import SebiBanner from '@/components/section/sebi/sebiBanner';

export default function Page() {
  return (
    <>
      <Navbar activeSlide={1} />
      <div style={{ marginTop: "90px" }}>
        <SebiBanner />
        <iframe 
          src="https://nesco.in/test_disclosures.php" 
          style={{ width: "100%", height: "100vh", border: "none", display:"block" , overflow:"inherit" }} 
        />
      </div>
      <Footer />
    </>
  );
}
