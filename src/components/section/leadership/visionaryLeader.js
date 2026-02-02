import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/leadership/7-1.jpg";
import MentorImage2 from "@/assests/leadership/26-1.jpg";
import MentorImage3 from "@/assests/leadership/3-1.jpg";

function VisionaryLeader() {
  const CardData = [
    {
      image: MentorImage,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
      description: `A dynamic people's leader, Krishna Patel is adept at spotting and implementing future trends in any industry even as he hones in on new business opportunities and verticals.An alumnus of The Pennsylvania State University, USA and Kingston University, UK, he is passionate about bringing a global perspective to the workings of Nesco. Krishna began his career in Corporate\n
      
      Strategy with Fisher Hamilton in Pittsburgh, USA. His experience taught him the value of a services backbone. He has guided the corporate expansion of Bombay Exhibition Center and introduced the fast-gaining service verticals of hospitality and events.A technology enthusiast, Krishna keeps up-to-date with the latest industry trends, introducing new technologies and global industry norms to our world at Nesco.`,
    },
    {
      image: MentorImage2,
      name: "Dipesh R. Singhania",
      position: "Chief Financial Officer",
      link: "",
      description: `A multifaceted administrator and controller, Dipesh Singhania is the resident expert at financial and legal due diligence, risk management and corporate governance. His value-driven nature complements his skill in pursuing strategic and sustainable financial growth for the company.\n
      
      Dipesh is a qualified Chartered Accountant, Certified Public Accountant, Certified Information Systems Auditor and Certified Internal Auditor. He brings with himself the experience garnered from roles in ITeS, consulting, automobiles and FMCG.`,
    },
    {
      image: MentorImage3,
      name: "Dr. Ashish J. Pinto",
      position: "Chief Human Resources Officer",
      link: "",
      description: `A strong proponent of business success and a believer of building strong human capital assets, Ashish has been entrusted with envisioning the HR road map and charting out the people strategy by implementing and aligning it with the groups business objectives.\n
      
      Ashish holds a PhD in Engagement Practices from Symbiosis International University and an MBA in HR from NMIMS and has over 25 years of experience of working in the areas of Talent Acquisition, Talent Management, Organization wide HR transformation and Capability development across various industries like IT, HR Consulting, Media & Manufacturing.`,
    },
  ];

  return (
    <section className="py-10 bg-[#E6F5FC] header_purple goal-section1">
      <h3 className="text-center text-4xl font-branding-bold pb-5">
        Our Visionary Leaders
      </h3>
      <Cards CardData={CardData} />
    </section>
  );
}

export default VisionaryLeader;
