import SlidedownCard from "@/components/common/slidedownCard/SlidedownCard";
import React from "react";
import WorldImage from "@/assests/contact/33.png";
import Image from "next/image";

function Contact() {
  const data = [
    {
      title: "Bombay Exhibition Center",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "7045029812",
        contact: "contact@bombayexhibitioncenter.in",
        phone2: "022 6645 0123",
      },
    },
    {
      title: "Nesco Events",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "7045029812",
        contact: "contact@bombayexhibitioncenter.in",
        phone2: "022 6645 0123",
      },
    },
    {
      title: "Nesco Foods",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "7045029812",
        contact: "contact@bombayexhibitioncenter.in",
        phone2: "022 6645 0123",
      },
    },
    {
      title: "Nesco Realty",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "7045029812",
        contact: "contact@bombayexhibitioncenter.in",
        phone2: "022 6645 0123",
      },
    },
    {
      title: "Indabrator",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "7045029812",
        contact: "contact@bombayexhibitioncenter.in",
        phone2: "022 6645 0123",
      },
    },
  ];

  return (
    <div className="bg-[#0A2B72] lg:h-screen py-28 flex flex-col justify-between items-center relative overflow-hidden">
      <div className="absolute z-0 w-full h-full lg:top-0 md:top-[20%] top-[25%]">
        <Image
          src={WorldImage}
          alt="World Image"
          className="w-[90%] object-cover mx-auto "
        />
      </div>
      <div>
        <h1 className="font-branding-medium text-white text-6xl z-10 relative">
          Contact Us
        </h1>
      </div>
      <div className="w-full flex flex-col md:items-center mt-32 z-10 relative">
        <SlidedownCard data={data} />
        <div className="w-[50%] my-2 flex-col gap-4 font-branding-medium text-3xl text-white flex items-start cursor-pointer px-5 md:px-0 ">
          <p>Carrers</p>
          <p>Investors</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
