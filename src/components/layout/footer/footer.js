import Link from "next/link";
import React from "react";

function Footer() {
  const FooterData = [
    {
      title: "About Us",
      titleLink: "/about",
      category: [
        {
          title: "Overview",
          link: "",
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
        {
          title: "Sustainability",
          link: "",
        },
      ],
    },
    {
      title: "Businesses",
      titleLink: "",
      category: [
        {
          title: "Exhibitions ",
          link: "",
        },
        {
          title: "MICE ",
          link: "",
        },
        {
          title: "Events ",
          link: "",
        },
        {
          title: "Hospitality ",
          link: "",
        },
        {
          title: "Real Estate ",
          link: "",
        },
        {
          title: "Engineering ",
          link: "",
        },
      ],
    },
    {
      title: "Investors ",
      titleLink: "",
      category: [
        {
          title: "Overview",
          link: "",
        },
        {
          title: "Social Responsibility ",
          link: "/social-responsibility",
        },
        {
          title: "Announcements ",
          link: "/announcements",
        },
        {
          title:
            "Disclosures under Regulation 46 of SEBI (LODR) Regulations, 2015 & other statutory information Financials ",
          link: "",
        },
        {
          title: "Stock Information ",
          link: "/stock",
        },
        {
          title: "Shareholder Services ",
          link: "shareholders",
        },
      ],
    },
  ];

  const FooterData2 = [
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
  ];

  return (
    <div className="footer_section bg-[#081422] text-white flex justify-center font-branding-medium md:py-20 py-10 z-50 relative ">
      <div className="w-[80%] lg:flex">
        <div className="md:flex justify-between xl:w-[70%] lg:w-[80%]">
          {FooterData.map((data, index) => (
            <div className="md:max-w-[30%] mt-10 md:mt-0">
              <Link href={data.titleLink} className="text-[#246F8E] text-4xl">
                {data.title}
              </Link>
              <div className="mt-10 flex flex-col gap-3">
                {data.category.map((d, h) => (
                  <Link href={d.link} className="text-2xl">
                    {d.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 xl:w-[30%] lg:w-[20%] lg:items-end lg:mt-0 mt-10">
          {FooterData2.map((data, index) => (
            <p className="text-[#246F8E] text-4xl text-center" key={index}>
              <Link href={data.link}> {data.title}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
