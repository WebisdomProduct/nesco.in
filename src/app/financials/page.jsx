import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import FinancialsBanner from '@/components/section/financials/financialsBanner';

export default function Page() {
  return (
    <>
      <Navbar activeSlide={1} />
      <div style={{ marginTop: "90px" }}>
        <FinancialsBanner />
        <iframe 
          src="https://nesco.in/test_financials.php" 
          style={{ width: "100%", height: "100vh", border: "none", display: "block" }} 
        />
      </div>
      <Footer />
    </>
  );
}
