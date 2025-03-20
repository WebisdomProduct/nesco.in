import React, { useState } from "react";
import bannerImage from "@/assests/social/31.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";
import { createPortal } from "react-dom";



function SocialHealth() {
  const title = "Powering Healthcare";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const SliderData = [
    {
      title1: "J.V. Patel Surgical ICU ",
      title2: "Shree Krishna Hospital, Karamsad",
      link: "",
      name: "J.V. Patel Surgical ICU ",
      position: "Shree Krishna Hospital, Karamsad",
      bImage: bannerImage,
      description:
        "The Karamsad region was in dire need of updated medical facilities. Realising this need, we offered our support to the Charotar Arogya Mandal to set up the area’s first surgical ICU. Incidentally, J. V.  Patel himself was closely associated with H. M. Patel in setting up the Charotar Arogya Mandal decades ago. Now functioning as a modern medical complex with close to 1,000 beds, the facility offers comprehensive and affordable healthcare services round the clock.",
    },
  ];

  const openModal = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(false);
    setIsModalOpen(null);
  };

  return (
    <section className="w-full mt-5 goal-section1" id="healthcare">
      <SocialBanner1
        SliderData={SliderData}
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
