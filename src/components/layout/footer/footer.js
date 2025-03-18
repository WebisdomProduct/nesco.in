import Image from "next/image";
import Link from "next/link";
import React from "react";
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
          link: "/philosophy",
        },
        {
          title: "History",
          link: "/history",
        },
        {
          title: "Leadership",
          link: "/leadership",
        },
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
  ];

  return (
    <div className="footer_section bg-[#081422] text-white flex flex-col justify-center items-center font-branding-medium pt-7 pb-2 z-50 relative ">
      <div className="w-[90%] xl:flex">
        <div className="md:flex justify-between xl:w-[83%] w-full md:gap-4 xl:gap-0">
          {FooterData.map((data, index) => (
            <div
              key={index}
              className="lg:max-w-[28%] md:max-w-[25%] mt-5 md:mt-0 text-left"
            >
              <Link
                href={data.titleLink}
                className="text-[#06a7e2] text-lg lg:px-3 font-branding-semibold"
              >
                {data.title}
              </Link>
              <div className="mt-3 flex flex-col gap-1.5 text-left">
                {data?.category?.map((d, h) => (
                  <Link
                    key={"key" + h}
                    href={d.link}
                    className="text-base text-white font-branding-medium transition-all lg:mx-3"
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 xl:w-[17%] xl:mt-0 mt-5 items-center font-branding-semibold">
          {FooterData2.map((data, index) => (
            <p
              className="text-[#06a7e2] text-lg xl:text-end text-center"
              key={index}
            >
              <Link href={data.link}> {data.title}</Link>
            </p>
          ))}
          <div className="flex w-full gap-3 justify-center mt-1">
            <div className="relative">
              <Link href="/contact-us">
                <Image
                  src={ContactIcon}
                  alt="Contact Icon"
                  className="w-9 h-9 object-contain"
                />
              </Link>
            </div>
            <div className="relative">
              <Link href="https://www.linkedin.com/company/nesco-ltd/">
                <Image
                  src={LinkdeinIcon}
                  alt="LinkedIn Icon"
                  className="w-9 h-9"
                />
              </Link>
            </div>
            <div className="relative">
              <Link href="https://www.instagram.com/_nesco_ltd?igsh=MW5weWhpN2FzdGd0ZA==">
                <Image
                  src={InstagramIcon}
                  alt="Instagram Icon"
                  className="w-9 h-9"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 border-t-2 w-full">
        <p className="pt-2 flex justify-center items-center leading-3 text-sm">
          © 2025 NESCO. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
