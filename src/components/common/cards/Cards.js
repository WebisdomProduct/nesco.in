import Image from "next/image";
import React, { useState, useRef, useEffect } from "react"; // Import useRef and useEffect
import { FaArrowRightLong } from "react-icons/fa6";
import MentorImage from "@/assests/leadership/6-1.jpg";
import MentorImage2 from "@/assests/leadership/7-1.jpg";
import MentorImage3 from "@/assests/leadership/9-1.jpg";
import MentorImage4 from "@/assests/leadership/16-1.jpg";
import MentorImage5 from "@/assests/leadership/27-1.jpg";
import MentorImage6 from "@/assests/leadership/28-1.jpg";

// Modal Component
export const MentorModal = ({ isOpen, onClose, data }) => {
  const modalRef = useRef(null); // Create a ref for the modal

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicked outside
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Use mousedown for clicks
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, [isOpen, onClose]); // Re-run effect when isOpen or onClose changes

  if (!isOpen || !data) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
      {" "}
      {/* Added onClick to the backdrop to also close modal if clicked on backdrop */}
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-6xl w-full relative"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {/* Added ref to the modal content and stopPropagation to prevent backdrop click from closing when clicking inside modal */}
        <button
          onClick={onClose}
          className="absolute top-2git right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <div
          className={`grid gap-8 ${
            data.image ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-branding-semibold">{data.name}</h2>
            <p className="text-gray-700">{data.position}</p>
            <p className="text-gray-800">{data.description}</p>
          </div>

          {data.image && (
            <div className="flex justify-center items-center">
              <Image
                src={data.image}
                alt={data.name}
                className="rounded-lg object-cover max-h-96"
                width={400}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Cards({ CardData }) {
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
    <div className="w-full  py-4 flex justify-center">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[90%]">
        {CardDatas?.map((data, index) => (
          <div
            key={index}
            className="flex justify-center"
            onClick={() => openModal(data)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex flex-col gap-1 w-[20rem] py-4 px-4 border-gray-500  border-2 h-full items-center ">
              <Image
                src={data.image}
                alt="Mentor"
                className="h-[13rem] w-[13rem] object-cover object-top filter grayscale contrast-125 hover:filter-none transition-all duration-300"
              />

              <p className="flex justify-between mt-2 w-full">
                <span className="font-branding-semibold text-xl inline-block w-full text-left">
                  {data.name}
                </span>
                <span className="flex items-center">
                  <button className="text-primary text-lg mr-1">
                    <FaArrowRightLong />
                  </button>
                </span>
              </p>
              <p className="font-poppins text-left w-full">{data.position}</p>
            </div>
          </div>
        ))}
      </div>
      <MentorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedCard}
      />
    </div>
  );
}

export default Cards;
