import React, { useState } from "react";
import bannerImage from "@/assests/social/34.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import { MentorModal } from "@/components/common/cards/Cards";
import { createPortal } from "react-dom";


function SocialEducation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const title = "Powering Education";

  const SliderData = [
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "The J. V. Patel Industrial Training Institute was set up in Karamsad on August 15, 1979. The country still had a long way to go in terms of vocational training. Total employment would just be a dream if private players were reluctant to step in.\
      J. V. Patel himself knew of the deprivations that befell the economically weak and that education was one among them. Karamsad had a large population of youth that were waiting to be active instruments to the nation. By donating five acres of private land, this Government-recognised institute began training hundreds of technicians in different trades. Over decades, new trades have been introduced and existing trades have been upgraded. Today, our graduates are given first preference by many manufacturers and multinationals in India, who vie with each other to be the year’s top recruiter.",
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "Before the impetus towards girl child education grew resounding in India, we pioneered an early initiative. The C. J. Patel Hostel at Vallabh Vidhyanagar cleared a basic barrier to the education of women – that of accessibility. At a time when several villages lacked schools and resources were scarce, the education of girls was visibly neglected in favour of that of their brothers’. The hostel encouraged girls from surrounding villages to access the superior quality of education available at Vallabh Vidhyanagar. This simple addition of infrastructure was instrumental in enabling generations of women to reach for their dreams.",
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "The establishment of factories in Karamsad provided local families with the means to a livelihood and an appetite for dreams. The children in these regions finally had access to an English education with our establishment of the C. J.i Patel English Medium School. Named in honour of Smt Chanchalbaa Patel, the school trains students from the 1st to the 12th standards and is affiliated to the Gujarat Education Board.  It follows a modern and robust curriculum with SMART Classes, computer labs and Audio-Visual Teaching Aids.",
    },

    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "The Karamsad region was fast developing as a residential hub for NRIs. This emergent demographic sought a CBSE school for their children nearby. The prevalent practice at the time was to let children travel significant distances to attend schools in V V Nagar.  We founded our second school, the Sumant Jethabhai Patel English Medium School in Karamsad. The school is affiliated with CBSE and is operational from Kindergarten to the 12th standard.",
    },

    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "Forwarding our momentum as a provider of quality education, we furthered our vision for social responsibility deep into the interiors of Gujarat. The Sumant Jethabhai Patel English Medium School was thus founded in Tarapur. The school is affiliated to the Gujarat Education Board and runs classes from Kindergarten to the 9th standard. The aim of the school is to inculcate a considerate and balanced world view among students.",
    },

    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      description:
        "Recognising their heartfelt objective, we have provided benches and ceiling fans to the Gulistane Tifla Primary School managed by the Lok-Hit Education and Charitable Trust.",
    },

    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      bImage: bannerImage,
      description:
        "For several years, we have been in the practice of offering scholarships to the children of Nesco employees. Extraordinary students from the middle-income group are supported financially towards the cause of their continued education. Each year close to a 100 scholarships are given out and nearly a thousand outstanding students have been the beneficiaries. A case in point - among the many scholars supported directly by J V Patel was the illustrious I G Patel, an RBI Governor and Director of the London School of Economics.",
    },

    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      bImage: bannerImage,
      name: "Sardar Patel Memorial",
      position: "and Trust, Karamsad, Gujarat.",
      description:
        "In memory of a 'Son of the Soil' of Karamsad, we spearheaded the efforts to establish the Sardar Patel Memorial Trust. The purpose of the Trust was to safeguard the legacy of India's Iron Man. With the ideals of Sardar Patel as its nucleus, the Trust hosts a museum and organises various programmes inspired by his life. It organises seminars, lectures, competitions, events and publishes magazines, books, audio visuals and more. The Memorial has been situated within 7 acres of land at Karamsad.",
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
    <section className="goal-section1" id="education">
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

export default SocialEducation;
