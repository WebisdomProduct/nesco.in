"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";

const API =
  "https://nesco-backend-j567.onrender.com/api/v1/our_impact/csr/social_schema";

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

    <div className="pt-[40px]">
    <section className="w-full mt-5 goal-section1 mb-20" id="healthcare">

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

    </section >
    </div>
  );
}

export default SocialHealth;
