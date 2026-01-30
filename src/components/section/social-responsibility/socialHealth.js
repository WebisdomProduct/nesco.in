"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";

const API =
  "http://localhost:8040/api/v1/our_impact/csr/social_schema";

const MAIN_TITLE = "Powering Healthcare";

function SocialHealth() {
  const title = "Powering Healthcare";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sliderData, setSliderData] = useState([]);

  // ============================
  // FETCH DATA
  // ============================
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${API}/main-title/${MAIN_TITLE}`
      );

      setSliderData(res.data.data || []);
    } catch (error) {
      console.log("Error fetching healthcare data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ============================
  // MODAL
  // ============================
  const openModal = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full mt-5 goal-section1" id="healthcare">

      <SocialBanner1
        SliderData={sliderData}
        title={title}
        onReadMore={openModal}
      />

      {isModalOpen && (
        <MentorModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={selectedCard}
        />
      )}

    </section>
  );
}

export default SocialHealth;
