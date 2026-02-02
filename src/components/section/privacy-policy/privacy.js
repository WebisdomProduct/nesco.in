import React from "react";
import bgImage from "@/assests/privacy-policy/pp-bg.jpg";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background image container */}
      <div className="sm:absolute inset-0 w-full h-full md:block hidden">
        <Image
          src={bgImage}
          alt="privacy policy"
          fill
          className="object-cover object-top"
          quality={100}
          priority // if this is above-the-fold image
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex justify-end md:mt-[15%] mt-0">
        <div className="flex flex-col h-full bg-white w-full md:w-[80%] lg:w-[70%] py-6 px-4 sm:py-10 sm:px-8 md:py-10 md:px-12 lg:py-10 lg:px-20 relative">
          <div className="bg-[#16206B] text-white font-bold px-4 py-4 sm:px-10 sm:py-6 md:px-20 md:py-10 rounded shadow-lg tracking-wider flex w-fit lg:absolute left-4 md:-top-10 md:-left-10 mt-16 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[69px] font-extrabold font-branding-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <div className="text-base sm:text-lg md:text-2xl mt-16 sm:mt-20 space-y-6 sm:space-y-8 md:space-y-10">
            <p className="">
              Nesco is sensitive to privacy issues on the Internet. We believe
              it is important you know how we treat the information we receive
              from you, on the Internet.
            </p>
            <p className="">
              There are times, however, when we may need information from you,
              such as your name and address. When information is needed, we will
              try (but are not obligated) to let you know at the time of
              collection, how we will use the personal information. Usually, the
              personal information we collect is used only by us to respond to
              your inquiry, process an order or allow you to access specific
              account information. Occasionally, we may make the e-mail
              addresses, of those who provide information, available to other
              reputable organizations whose products or services we think you
              may find interesting. In these cases, you will be offered an
              opportunity to limit the access of your information. In case we do
              not receive any response from you to limit the access of your
              information, it shall be deemed that you consent to such
              distribution of your information as mentioned above.
            </p>
            <p className="">
              There are times, however, when we may need information from you,
              such as your name and address. When information is needed, we will
              try (but are not obligated) to let you know at the time of
              collection, how we will use the personal information. Usually, the
              personal information we collect is used only by us to respond to
              your inquiry, process an order or allow you to access specific
              account information. Occasionally, we may make the e-mail
              addresses, of those who provide information, available to other
              reputable organizations whose products or services we think you
              may find interesting. In these cases, you will be offered an
              opportunity to limit the access of your information. In case we do
              not receive any response from you to limit the access of your
              information, it shall be deemed that you consent to such
              distribution of your information as mentioned above.
            </p>
            <p className="">
              There are times, however, when we may need information from you,
              such as your name and address. When information is needed, we will
              try (but are not obligated) to let you know at the time of
              collection, how we will use the personal information. Usually, the
              personal information we collect is used only by us to respond to
              your inquiry, process an order or allow you to access specific
              account information. Occasionally, we may make the e-mail
              addresses, of those who provide information, available to other
              reputable organizations whose products or services we think you
              may find interesting. In these cases, you will be offered an
              opportunity to limit the access of your information. In case we do
              not receive any response from you to limit the access of your
              information, it shall be deemed that you consent to such
              distribution of your information as mentioned above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
