import React, { useState } from "react";


import bannerImage from "@/assests/social/12.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";
import { createPortal } from "react-dom";
// import Cards from "@/components/common/cards/Cards";

function SocialInfra() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const title = "Powering Infrastructure";

  const SliderData = [
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      bImage: bannerImage,
      name: "Water Supply System",
      position: "Karamsad",
      description:
        "Our focus on boosting public infrastructure is continually expanding. We are hard at work in villages that lack basic hygiene facilities, bringing them water and sanitation.\
        In Karamsad, we installed a modern water supply system to revolutionise the long distances and costs people endure in the transportation of water. Our contribution transformed life in the neighbourhoods, finally bringing in household water connections which were a dream to the community.",
    },
    {
      title1: "J.V. Patel Community Hall",
      title2: "V.V. Nagar",
      link: "",
      name: "J.V. Patel Community Hall",
      position: "V.V. Nagar",
      bImage: bannerImage,
      description:
        "Places for congregation and commingling are essential for any healthy, thriving community. Vallabh Vidhyanagar got their first multi-purpose community hall thanks to Nesco. The J. V. Patel Community Hall was built under the banner of Pragati Mandal, so that citizens could enjoy the benefit of an affordable venue for community events. The hall is open for any type of social gathering, celebrations, exhibitions and public meetings. The meetings of the city council or Vallabh Vidhyanagar Nagar Palika are occasionally held here.\
",
    },
    {
      title1: "Toilet Block",
      title2: "Karamsad",
      link: "",
      name: "Toilet Block",
      position: "Karamsad",
      bImage: bannerImage,
      description:
        "We built toilets for migrant families and those who lived outside the village limits when it was made apparent that these areas were grossly lacking in sanitation or hygiene facilities.",
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
    <section className="goal-section1" id="infra">
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

export default SocialInfra;
