import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import StockBanner from '@/components/section/stock/stockBanner';

export default function Page() {
  return (
    <>
      <Navbar activeSlide={1} />
      <div style={{ marginTop: "90px" }}>
        <StockBanner />
        <iframe 
          src="https://nesco.in/test_stocks.php" 
          style={{ width: "100%", height: "100vh", border: "none", display: "block" }} 
        />
      </div>
      <Footer />
    </>
  );
}
