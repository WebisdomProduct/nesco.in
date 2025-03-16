import Cards from "@/components/common/cards/Cards";
import React from "react";
import MentorImage from "@/assests/leadership/6-1.jpg";
import MentorImage2 from "@/assests/leadership/7-1.jpg";
import MentorImage3 from "@/assests/leadership/9-1.jpg";
import MentorImage4 from "@/assests/leadership/16-1.jpg";
import MentorImage5 from "@/assests/leadership/27-1.jpg";
import MentorImage6 from "@/assests/leadership/28-1.jpg";

function BoardOfDirector() {
  const initialCardData = [
    {
      image: MentorImage2,
      name: "Krishna S. Patel",
      position: "Chairman and Managing Director",
      link: "",
      description: `A dynamic people’s leader, Krishna Patel is adept at spotting and implementing future trends in any industry even as he hones in on new business opportunities and verticals. An alumnus of the Pennsylvania State University, USA and the Kingston University, UK, he is passionate about bringing a global perspective to the workings of Nesco. Krishna began his career in Corporate Strategy with Fisher Hamilton in Pittsburgh, USA. His experience taught him the value of a services backbone. He has guided the corporate expansion of Bombay Exhibition Center and introduced the fast-gaining service verticals of hospitality and events. A technology enthusiast, Krishna keeps up-to-date with the latest industry trends, introducing new technologies and global industry norms to our world at Nesco.

He is currently on the Board of Chandler and Price India Pvt. Ltd., K S Patel Finance and Investment Company Pvt. Ltd., Patel Consultancy Services Pvt. ,Ltd., Engineering Global Pte Ltd., Inaya Trade Pte Ltd and also is a founding trustee of several family trusts.`,
    },
    {
      image: MentorImage6,
      name: "Mrs. Sudha S. Patel",
      position: "Non Executive Non Independent Director",
      link: "",
      description: `Mrs. Sudha S. Patel has completed her Masters from University of Southern California, USA. She founded Sudha Garments over four decades ago to elevate the status of Indian textiles and clothing  for  exports namely to  the Australian and European markets.  She is involved in  various philanthropic activities. Mrs. Patel is serving as a trustee of Shrujan Creations in Kutch, where she  regularly interacts with the local artisans.  As the Chairperson of the CSR Committee, she has  played an active role in the establishment of  schools and creating health infrastructures  in Karamsad and Tarapur, Gujarat, as part of her Corporate Social Responsibility initiatives.

She is currently on the Board of Chandler and Price India Pvt Ltd., K S Patel Finance and Investment Company Pvt. Ltd., J V Patel Investments and Trading Co. Pvt. Ltd., Pink Pineapple Designers Pvt. Ltd., Patel Consultancy Services Pvt. Ltd. and also is a founding trustee of several family trusts.`,
    },
    {
      image: MentorImage3,
      name: "Ms. Amrita Verma Chowdhury",
      position: "Independent Director",
      link: "",
      description: `Ms. Amrita V. Chowdhury holds a B.Tech. from IIT Kanpur, MS from UC Berkeley, and MBA from Carnegie Mellon - Tepper Business School. She holds 7 US patents for semiconductor manufacturing. As the CEO and Co-Founder of Gaia, a cutting-edge global information analytics SaaS venture, Mrs. Chowdhury is steering the company in providing deep learning solutions and digital transformation advisory to a diverse clientele, including cities, governments, and large-scale enterprises.

Prior to co-founding Gaia, an entrepreneurial venture, she served as President of DY Works (Future Group), where she focused on business expansion through market research and brand strategy for her clients. She also was the Head South Asia for Harlequin (Torstar Corporation), where she catalysed growth of the India portfolio. She played a crucial role as Associate Director, Education for South Asia for Harvard Business School.

She was a Strategy Consultant and Board Advisory Consultant for various Fortune 100 clients of AT Kearney in USA and Oppeus in Australia, which largely enhanced her understanding of international business. Ms. Chowdhury started her journey in product development with Applied Materials in California, where her work led to innovations that enabled next-gen semiconductor fabrication.

She is currently on the Board of Simmonds Marshall Limited,Techcrew Solutions Private Limited, D and B Foodarts Private Limited, ZF Commercial Vehicle Control System India Limited and some of the group companies of Mahindra Group namely Mahindra Lifespace Developers Limited, Mahindra World City (Jaipur) Limited, Mahindra World City Developers Limited, Mahindra Bloomdale Developers Limited and Mahindra Happinest Developers Limited.`,
    },
    {
      image: MentorImage,
      name: "Manish Ishwarlal Panchal",
      position: "Independent Director",
      link: "",
      description: `Mr. Manish Panchal has 32 Years of rich total experience in various roles as a business leader, a strategic thinker, a Board Member and also an Author of the Book - ‘Define Your Orbit’. Mr. Panchal completed his MBA from Asian Institute of Management, Philippines in the year 2003 and a diploma in Marketing Management from Jamnalal Bajaj Institute of Management Studies.

Hehas also completed a “design thinking” program from Stanford University Graduate School of Business in the year 2020.

He served as an Executive Director at Equirus Capital and was associated with Tata Strategic Management Group as Senior Practice Head, for about 7 years at the start of his career and he achieved ‘100% pull leads’ status within 3 years.

He is currently on the Board of Kairav Chemofarbe Industries Ltd, Vashi Integrated Solutions Ltd, IL&FS Infra Asset Management Ltd, Deesha Power Solutions Pvt. Ltd,Aaji Care Home Health Services Pvt. Ltd, , Patil Rail Infrastructure Pvt. Ltd, and Zero Solarycle Pvt. Ltd. Mr. Panchalis also the Founding Trustee of Aaji Care Sevak Foundation NGO.
`,
    },
    {
      image: MentorImage4,
      name: "Dr. Ramakrishnan Ramamurthi",
      position: "Independent Director",
      link: "",
      description: `Dr. R. Ramakrishnan is the Chairman and Managing Partner of Transformia Advisors LLP and has had a successful career spanning 40+ years as a Professional Manager and Leader across  Polycab Group for 8 years as the Vice Chairman, Joint MD and Chief Executive, Bajaj Electricals  for 12 years as the President, COO and Executive Director and at Asian Paints for 17 years culminating in the position of General Manager.

In each role, Dr. Ram contributed to significant Organisational Transformation leading to Stakeholder Value Creation, Higher Revenues and Profits, Greater Teamwork and Improvement in Processes and Systems as a result of his visionary leadership, a strong strategy orientation, proven execution capabilities, team building skills, process orientation, problem solving abilities and focus on results.

He was the Chairman of the Industry and Trade Committee of the IMC Chamber of Commerce and Industry. He currently serves on the Board of The Indian Society of Advertisers and Chembur Golf Welfare Foundation.

Dr. Ram has completed his Ph.D. in Management Studies from Narsee Monjee Institute of Management Studies, Mumbai and is the recipient of the prestigious Maharashtra Sanman Award 2021 received from the Governor of Maharashtra for his contribution to Philanthropy and Corporates. He was conferred the XLRI’s Distinguished Alumnus Award – Practising Manager in 2019.`,
    },
    {
      image: MentorImage5,
      name: "Mr. Arun L. Todarwal",
      position: "Independent Director",
      link: "",
      description: `Mr. Arun L. Todarwal is a fellow member of the Institute of Chartered Accountants of India and has been practicing as a Chartered Accountant for more than 40 years. During his years of practice, he has handled various professional assignments including Management Consultancy, Statutory Audits, Internal Audits, Management and Systems Audits, Due Diligences, Taxation, International Taxation, etc. in India, Dubai, and several other countries. He is well-versed in tax matters and has travelled abroad on several occasions’ to deliver talks on Indian Taxation as well as investments in India. He has carried out professional assignments in more than 25 countries. He is also a member of the Institute of Internal Auditors, National Centre for Quality Management, Bombay Management Association and Bombay Chartered Accountants Society. His vast experience has put him on panel of Auditors with the Registrar of Co-operatives Societies and the Official Liquidator, Mumbai High Court. He is also the Global Chairman of IAPA International, a leading global association of independent accounting, audit, tax, legal, advisory, financial, immigration and technology services firms. The association has more than 200 Chartered Accountants in more than 70 countries around the world. He has been an independent director in several companies and over his tenure has helped companies in strengthening their corporate governance structure, compliances, risk assessment and plans to mitigate them as well as implementation of recommendations given by the auditors on strengthening the controls and processes of Companies.

He  serves on the Board of Sintex-Bapl Limited, Anuh Pharma Limited, Unichem Laboratories Limited, Unichem Paharmaceuticals (USA) Inc, Laxmi Organics Industries Limited,  Bharat FIH Limited,  Lakecity Ventures Private Limited, PTC Cables Private Limited and Welspun Transformation Services Limited and is the Designated Partner at Arun Todarwal & Associates LLP and Arun Todarwal & Co LLP.`,
    },
  ];

  return (
    <section className="py-16 pt-16 lg:pt-16 bg-[#EDEDED] header_purple goal-section1">
      <h3 className="text-center text-4xl font-branding-bold">
        Board of Directors
      </h3>
      <Cards CardData={initialCardData} />
    </section>
  );
}

export default BoardOfDirector;
