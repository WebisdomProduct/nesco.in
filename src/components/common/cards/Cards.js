"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Modal } from "antd";

// Modal Component
export const MentorModal = ({ isOpen, onClose, data, lenis }) => {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("lenis-stop"); // 🚫 Stop Lenis scroll
      document.body.style.overflow = "hidden"; // Fallback for default scroll
      lenis?.stop(); // Stop Lenis programmatically
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("lenis-stop"); // ✅ Resume Lenis
      document.body.style.overflow = "unset";
      lenis?.start(); // Start Lenis programmatically
    };
  }, [isOpen, onClose, lenis]);

  if (!isOpen || !data) return null;

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center w-full h-full justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <Modal
        open={isOpen}
        onOk={handleOk}
        onCancel={onClose}
        width={mobileView ? "90%" : "60%"}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          maxHeight: "80vh",
        }}
        footer={false}
        maskStyle={{ backdropFilter: "blur(3px)" }}
      >
        <div ref={modalRef} className="w-full -mb-3">
          <h2 className="text-2xl font-branding-semibold text-primary">
            {data.name || data.title}
          </h2>
          <p className="text-gray-700 mb-5 text-[1.1rem]">{data.position}</p>
          <div
            className={`grid gap-8 ${
              data.image ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            <div className="flex flex-col gap-4">
              <p className="text-gray-800 text-justify">{data.description}</p>
            </div>
            {data.image && (
              <div className="flex justify-end items-start">
                <Image
                  src={data.image}
                  alt={data.name}
                  className="rounded-lg object-cover max-h-96 object-top"
                  width={400}
                  height={400}
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

function Cards({ CardData, lenis }) {
  const [CardDatas, setCardDatas] = useState(CardData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="w-full py-3 flex justify-center">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[70%]">
        {CardDatas?.map((data, index) => (
          <div
            key={index}
            className="flex justify-center"
            style={{ cursor: "pointer" }}
          >
            <div
              className="flex flex-col gap-1 w-[19rem] py-3 px-3 border-gray-200 border-2 h-full items-center"
              onClick={() => openModal(data)}
            >
              <Image
                src={data.image}
                alt="Mentor"
                className="h-[14.5rem] object-cover object-top filter grayscale contrast-125 hover:filter-none transition-all duration-300"
              />
              <p className="flex justify-between mt-2 w-full">
                <span className="font-branding-semibold text-[1.1rem] inline-block w-full text-left">
                  {data.name}
                </span>
                <span className="flex items-center">
                  <button className="text-primary text-lg">
                    <FaArrowRightLong />
                  </button>
                </span>
              </p>
              <p className="font-poppins text-left w-full text-[12px]">
                {data.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MentorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedCard}
        lenis={lenis} // Pass Lenis instance to modal
      />
    </div>
  );
}

export default Cards;
