import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import InstagramIcon from "@/assests/footer/i1.png";
import LinkdeinIcon from "@/assests/footer/f2.png";
import ContactIcon from "@/assests/footer/p1.png";

function Footer() {
  const FooterData = [
    {
      title: "About",
      titleLink: "",
      category: [
        {
          title: "Overview",
          link: "/overview",
        },
        {
          title: "Philosophy",
          link: "",
        },
        {
          title: "History",
          link: "",
        },
        {
          title: "Leadership",
          link: "/leadership",
        },
        // {
        //   title: "Sustainability",
        //   link: "",
        // },
      ],
    },
    {
      title: "Businesses",
      titleLink: "",
      category: [
        {
          title: "Bombay Exhibition Center",
          link: "",
        },
        {
          title: "Nesco Realty",
          link: "",
        },
        // {
        //   title: "Events ",
        //   link: "",
        // },
        {
          title: "Hospitality ",
          link: "",
        },
        {
          title: "Nesco Events",
          link: "",
        },
        {
          title: "Engineering",
          link: "",
        },
      ],
    },
    {
      title: "Investors",
      titleLink: "",
      category: [
        // {
        //   title: "Overview",
        //   link: "",
        // },
        // {
        //   title: "Social Responsibility ",
        //   link: "",
        // },
        {
          title: "Announcements ",
          link: "/announcements",
        },
        {
          title: "Financials",
          link: "/financials",
        },
        {
          title:
            "Disclosures under Regulation 46 of SEBI (LODR) Regulations, 2015 & other statutory information Financials ",
          link: "/sebi",
        },
        {
          title: "Shareholder Services ",
          link: "/shareholders",
        },
        {
          title: "Stock Information ",
          link: "/stock",
        },
      ],
    },
    {
      title: "Our Impact",
      titleLink: "",
      category: [
        // {
        //   title: "Overview",
        //   link: "",
        // },
        // {
        //   title: "Social Responsibility ",
        //   link: "",
        // },
        {
          title: "Corporate Social Responsibility",
          link: "/social-responsibility",
        },
        {
          title: "Sustainability",
          link: "/sustainability",
        },
      ],
    },
  ];

  const FooterData2 = [
    {
      title: "Life At Nesco",
      link: "life-at-nesco ",
    },
    // {
    //   title: "Contact",
    //   link: "/contact-us",
    // },
  ];

  return (
    <div className="footer_section bg-[#081422] text-white flex flex-col justify-center font-branding-medium py-10 z-50 relative ">
      <div className="w-[90%] xl:flex">
        <div className="md:flex justify-between xl:w-[83%] w-full md:gap-6 xl:gap-0">
          {FooterData.map((data, index) => (
            <div className="lg:max-w-[28%] md:max-w-[25%] mt-10 md:mt-0 text-left">
              <Link
                href={data.titleLink}
                className="text-[#246F8E] text-4xl lg:px-5 font-branding-semibold"
              >
                {data.title}
              </Link>
              <div className="mt-10 flex flex-col gap-3 text-left">
                {data.category.map((d, h) => (
                  <Link
                    href={d.link}
                    className="text-2xl text-white font-branding-medium transition-all lg:mx-5"
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 xl:w-[17%] xl:items-start xl:mt-0 mt-10 items-center font-branding-semibold">
          {FooterData2.map((data, index) => (
            <p
              className="text-[#246F8E] text-4xl xl:text-end text-center"
              key={index}
            >
              <Link href={data.link}> {data.title}</Link>
            </p>
          ))}
          <div className="flex w-full gap-8 justify-center mt-6">
            <div className="relative">
              <Link href="/contact-us">
                <Image
                  src={ContactIcon}
                  alt="Linkdein Icon"
                  className="w-10 h-10 object-contain"
                />
              </Link>
            </div>
            <div className="relative">
              <Image
                src={LinkdeinIcon}
                alt="Linkdein Icon"
                className="w-10 h-10"
              />
            </div>
            <div className="relative">
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t-2 ">
        <p className="pt-8 pb-3 flex justify-center items-center">
          &copy; 2025 NESCO. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
