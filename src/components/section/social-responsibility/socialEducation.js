"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";

const API =
  "https://nesco-backend-1.onrender.com/api/v1/our_impact/csr/social_schema";

const MAIN_TITLE = "Powering Education";

function SocialEducation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sliderData, setSliderData] = useState([]);

  const title = "Powering Education";

  // ============================
  // FETCH DATA FROM BACKEND
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
  // MODAL HANDLERS
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
      <section className="goal-section1" id="education">

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
    </div>

  );
}

export default SocialEducation;
