import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import AnnouncementBanner from '@/components/section/announcements/announcementBanner';

export default function Page() {
  return (
    <>
      <Navbar activeSlide={1} />
      <div style={{ marginTop: "90px" }}>
        <AnnouncementBanner />
        <iframe 
          src="https://nesco.in/test_announcement.php" 
          style={{ width: "100%", height: "100vh", border: "none", display: "block" }} 
        />
      </div>
      <Footer />
    </>
  );
}
