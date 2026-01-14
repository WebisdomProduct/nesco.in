"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { apiBaseUrl } from "@/apis";
const API_URL = `${apiBaseUrl}/api/v1/directors`;

/* ================= MODAL ================= */
const MentorModal = ({ isOpen, onClose, data }) => {
  const modalRef = useRef(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const resize = () => setMobileView(window.innerWidth < 1024);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  if (!isOpen || !data) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={mobileView ? "90%" : "60%"}
    >
      <div ref={modalRef}>
        <h2 className="text-2xl font-branding-semibold text-primary">
          {data.name}
        </h2>
        <p className="text-gray-700 mb-5">{data.position}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Description */}
          <div className="flex flex-col gap-4 text-gray-800">
            {data.description?.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Image */}
          {data.image && (
            <Image
              src={data.image}
              alt={data.name}
              width={400}
              height={400}
              className="rounded-lg object-cover object-top max-h-96"
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

/* ================= MAIN COMPONENT ================= */
function BoardOfDirector() {
  const [cardData, setCardData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const res = await fetch(API_URL);
        const apiData = await res.json();

        /* ✅ MAP BACKEND DATA */
        const mappedData = apiData.map((item) => ({
          image: item.image,              // S3 URL
          name: item.name,
          position: item.position,
          description: item.description,  // ARRAY (important)
        }));

        setCardData(mappedData);
      } catch (err) {
        console.error("Failed to fetch directors:", err);
      }
    };

    fetchDirectors();
  }, []);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full pt-24 pb-10 bg-[#EDEDED] header_purple goal-section1"
      id="board"
    >
      <h3 className="text-center text-4xl font-branding-bold pb-5">
        Board of Directors
      </h3>

      {/* ================= CARDS ================= */}
      <div className="w-full flex justify-center py-3">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] xl:w-[85%]">
          {cardData.map((data, index) => (
            <div key={index} className="flex justify-center">
              <div
                className="flex flex-col gap-1 w-[19rem] py-3 px-3 border-2 border-gray-200 cursor-pointer"
                onClick={() => openModal(data)}
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  width={300}
                  height={300}
                  className="h-[14.5rem] object-cover object-top grayscale hover:grayscale-0 transition-all"
                />

                <div className="flex justify-between mt-2">
                  <span className="font-branding-semibold text-[1.1rem]">
                    {data.name}
                  </span>
                  <FaArrowRightLong className="text-primary text-lg" />
                </div>

                <p className="text-[12px]">{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <MentorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedCard}
      />
    </div>
  );
}

export default BoardOfDirector;
