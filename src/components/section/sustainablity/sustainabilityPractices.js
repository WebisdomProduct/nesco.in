"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { MentorModal } from "@/components/common/cards/Cards";

function SustainabilityPractices() {

  const [cardData, setCardData] = useState([]);   // backend data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // ✅ BACKEND API
  const API = "http://localhost:8040/api/v1/our_impact/sustainablility/pratices/get";

  /* ================= FETCH DATA ================= */
  const fetchPractices = async () => {
    try {
      const res = await axios.get(API);
      setCardData(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load sustainability practices");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPractices();
  }, []);

  /* ================= MODAL ================= */
  const openModal = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="py-20 text-center text-lg">
        Loading sustainability practices...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        {error}
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="goal-section1 flex flex-col justify-center items-center mt-0 lg:mt-10">

      <div className="my-12 text-center relative w-[90%]">

        <div className="mb-14">
          <h1 className="text-3xl font-branding-semibold">
            Integrated Sustainability
          </h1>
          <h1 className="text-3xl font-branding-semibold">
            Practices for a Resilient Future
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">

          {cardData.map((data) => (

            <div
              key={data._id}
              className="flex flex-col justify-between items-center"
            >

              <div
                className="border-2 relative z-10 cursor-pointer"
                style={{ borderColor: data.color }}
                onClick={() => openModal(data)}
              >
                <Image
                  className="h-64 w-64 py-12 px-12 object-contain"
                  src={data.image1}     // S3 URL
                  alt={data.title}
                  width={300}
                  height={300}
                />

                <FaArrowRight
                  className="text-4xl text-white rounded-full p-1 absolute -bottom-4 -right-4 z-20"
                  style={{ backgroundColor: data.color }}
                />
              </div>

              <p className="text-xl font-branding-semibold w-[57%] h-[80%] mt-5 text-center">
                {data.title}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}
      {isModalOpen && (
        <MentorModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={selectedCard}
        />
      )}

    </div>
  );
}

export default SustainabilityPractices;
