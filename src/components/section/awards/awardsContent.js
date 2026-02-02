import React, { useState } from "react";

// Awards data (same as before)
const awards = [
  {
    id: 1,
    title: "HONOURED WITH THE ‘DREAM COMPANIES TO WORK FOR’ AWARD 2023",
    image: "https://nesco.in/resources/images/honoured-awards-2023-new.jpg",
    modalImages: [
      "https://nesco.in/resources/images/honoured-awards-2023-new.jpg",
      "https://nesco.in/resources/images/food-court.jpg"
    ],
    summary: "Nesco Limited has been recognized and awarded as one of the ‘Dream Companies to work for’ by World HRD Congress 2023.",
    modalContent: (
      <>
        <p className="italic text-sky-600 mb-2">Nesco Limited has been recognized and awarded as one of the ‘Dream Companies to work for’ by World HRD Congress 2023.</p>
        <p>The award was presented to Nesco CHRO, Dr. Ashish Pinto, during a glittering ceremony at Taj Lands End, Mumbai, on 16th February 2023. The World HRD Congress is a leading organization that recognizes companies for their efforts to create a positive work environment and support the growth and development of their employees. Nesco Limited was selected for this recognition based on a comprehensive evaluation process that considered a range of factors, including employee satisfaction, work-life balance, and opportunities for professional development.</p>
        <p className="mt-2">At Nesco, we believe that our employees are the cornerstone of our success, and we are committed to creating a work environment that supports their growth and well-being. We are proud to have a workplace culture with these core values and believe this culture is a key factor in our success. We are honoured to receive the recognition and award “Dream Companies to work for” from the World HRD Congress. This recognition demonstrates our enduring commitment to promote a collaborative, flexible and compassionate work environment for our employees.</p>
        <p className="mt-2">The award was presented to Nesco CHRO, during a glittering ceremony at Taj Lands End, Mumbai, on 16th February 2023.</p>
      </>
    ),
  },
  {
    id: 2,
    title: "FOOD CONNOISSEURS INDIA AWARDS – BEST CUSTOMER EXPERIENCE IN FOOD COURT",
    image: "https://nesco.in/resources/images/food-court.jpg",
    modalImages: ["https://nesco.in/resources/images/food-court.jpg"],
    summary: "NESCO FOODS – INDIC & DAILY DELI got awarded in the category of 'Best Customer Experience- Food Court' at the glittering ceremony of the Food Connoisseurs India Awards - West India Edition.",
    modalContent: (
      <>
        <p>The Food Connoisseurs India Awards – West India Edition is where the best of the F&B industry come together to raise a toast to those who deserve. This award is for everyone who has elevated the levels of the F&B industry while remaining true to the core of customer service and customer satisfaction, irrespective of the size, scale, capital, or business model. This recognition is based on certain parameters for mapping the success story of a brand. This process entailed a five-week long thorough research and deliberation to recognize the best in the category. The winners were finalized based on the documents submitted along with a questionnaire.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>1500+ Attendees</li>
          <li>10+ Sessions</li>
          <li>40+ Speakers</li>
          <li>30+ Exhibitors</li>
          <li>100+ Awards</li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li><b>Date:</b> 15th February,2023</li>
          <li><b>Venue:</b> NESCO CENTRE, Bombay Exhibition Centre, Mumbai</li>
          <li><b>Food Partner:</b> Maggi Professional</li>
          <li><b>Supported By:</b> FHRAI</li>
          <li><b>Beverage Partner:</b> Maggi Professional</li>
          <li><b>Hotel Education Knowledge Partner:</b> Ajeenkya DY Patil University</li>
          <li><b>Organised By:</b> Industry Live</li>
          <li><b>Telecast Partner:</b> Zee Business</li>
          <li><b>Radio Partner:</b> Red FM</li>
          <li><b>Hospitality Partner:</b> Nesco Foods</li>
          <li><b>Merch Partner:</b> Bira 91</li>
          <li><b>Associate Partner:</b> Celcius Logistics Solutions Pvt Ltd</li>
          <li><b>Media Partner:</b> HospiBuz, World of Hospitality & Better Kitchens magazine India</li>
          <li><b>Supporting Association:</b> Indian Culinary Forum, West India Culinary Association, All India</li>
          <li><b>Food Processors’ Association:</b> AIFPA & Hotel and Restaurant Association Western India</li>
          <li><b>Digital OOH Partner:</b> Tagtalk</li>
          <li><b>Gift Partner:</b> VAHDAM India</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "BOMBAY EXHIBITION CENTRE (BEC) AWARDED FOR SUPPORT EXTENDED TO INTIMASIA 2023",
    image: "https://nesco.in/resources/images/BEC-awards.jpg",
    modalImages: ["https://nesco.in/resources/images/BEC-awards.jpg"],
    summary: "The absolute confluence of Retailers, Distributors and Intimate Wear brands spread across India, Intimasia 2023, is celebrated as the leading B2B trade fair in India.",
    modalContent: (
      <>
        <p>The absolute confluence of Retailers, Distributors and Intimate Wear brands spread across India, Intimasia 2023, is celebrated as the leading B2B trade fair in India. INTIMASIA is the biggest show in this market segment bringing brands, manufacturers, suppliers, retailers, and all affiliated businesses under one roof. It is a comprehensive tradeshow on garment and textile machinery. The show is targeted to address the interests of those who wish to reach out to the textile and garment industries in India. Acting as the definitive gateway to provide excellent quality, one-step buying/selling and sourcing platform, the exhibition showcased products, services and technologies correlated to the complete production chain. Strategically stationed and tastefully timed, this event tapped India’s highest spending community, Mumbai. Held at the Bombay Exhibition Centre, Intimasia 2023 welcomed an impressive 15000 people from various cities across the financial capital city.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>200 exhibitors showcasing their products</li>
          <li>15,000 retailers, distributors, and agents from across India</li>
          <li>500+ delegates</li>
          <li>100,000 sq. ft. area hosting 3-days of exhibition</li>
          <li>Sea of opportunities to grow your business at exponential rate</li>
          <li>Networking with over 60+ leading intimate wear brands of India</li>
          <li>Vibrant Live Fashion Shows</li>
          <li>B2B interaction for exhibitors and visitors</li>
        </ul>
        <p className="mt-2">The Bombay Exhibition Centre (BEC) was deservedly awarded by Mr. Yusuf Dohadwala (M.D.) for their invaluable support which helped in making the exhibition a success.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "RECOGNITION AS ONE OF THE TOP 10 BRANDS IN REAL ESTATE – 2023",
    image: "https://nesco.in/resources/images/top-brand-ceo.png",
    modalImages: ["https://nesco.in/resources/images/top-brand-ceo.png"],
    summary: "CEO Insights proudly presented Krishna Patel, Chairman & Managing Director - Nesco as one of the Top 10 Brands in Real Estate – 2023.",
    modalContent: (
      <>
        <p>CEO Insights proudly presented Krishna Patel, Chairman & Managing Director - Nesco as one of the Top 10 Brands in Real Estate – 2023. This is an annual recognition that showcases exceptional brands in the real estate industry which have been at the forefront of engendering satisfied and loyal customers, while setting benchmarks across several parameters.</p>
        <a href="https://www.ceoinsightsindia.com/leader/krishna-patel-the-name-behind-driving-growth-and-opportunities-at-nesco-cid-6092.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold mt-4 inline-block">Know More</a>
      </>
    ),
  },
  {
    id: 5,
    title: "AWARDED ESG CERTIFICATE & AWARD FOR LEADERSHIP IN BOARD DIVERSITY",
    image: "https://nesco.in/resources/images/ESG-india-2022.png",
    modalImages: ["https://nesco.in/resources/images/ESG-india-2022.png"],
    summary: "Nesco Limited has emerged as the winner and was conferred the Best Board Diversity Award in the Governance category based on the 2020-21 data.",
    modalContent: (
      <>
        <p className="italic text-sky-600 mb-2">Recognizing excellent practices in board diversity including board members with different ethnic, educational and cultural backgrounds</p>
        <p>Nesco Limited has emerged as the winner and was conferred the Best Board Diversity Award in the Governance category based on the 2020-21 data. This prestigious award was presented by the ESG Risk Assessments & Insights Limited, a wholly owned subsidiary of Acuité Ratings & Research Limited.</p>
        <p className="mt-2">The ESG ratings provide an ESG scorecard facilitating informed decision-making helping investors choose ESG investments based on a company or industry’s sustainability performance.</p>
        <p className="mt-2">Apart from other diversification factors related to ethnicity, education and culture, our Board of Directors comprise of 25% women, against the regulatory requirement of one female director. This makes Nesco Limited stand out from the rest of the companies.</p>
      </>
    ),
  },
  {
    id: 6,
    title: "NESCO TOWER 3 & 4 AWARDED IGBC AWARD – 2019",
    image: "https://nesco.in/resources/images/awards-2019.jpg",
    modalImages: ["https://nesco.in/resources/images/awards-2019.jpg"],
    summary: "Nesco Tower 3 & 4, Nesco IT Park was awarded Platinum Green Certification by Indian Green Building Council under the LEED India Green Core and Shell rating system.",
    modalContent: (
      <>
        <p>Indian Green Building Council was formed in the year 2001 as a part of the Confederation of Indian Industry (CII). The vision of the IGBC is, “To enable a sustainable built environment for all and facilitate India to be one of the global leaders in the sustainable built environment by 2025”.</p>
        <p>A wide array of services are available through the council, such as green building rating programs, certification services, and training programs. The objective is to encourage the creation of environment-friendly buildings through architectural design, water efficiency, efficient waste disposal, energy efficiency, sustainable buildings, and occupant comfort.</p>
        <p className="mt-2">Green building rating offers a range of practices and solutions that reduce environmental impacts. It is an integrated approach that considers the life cycle impacts of the resources used. Its rating systems are voluntary, consensus-guided, and based on the market. It combines ancient architectural practices with modern technological innovations in a scheme based on the five elements of nature (Panchabhutas). Applicable to all five climatic zones of the country, the IGBC rating program has become both National by Choice and Global by Performance.</p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-[300px] border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Certification Level</th>
                <th className="border px-2 py-1">Recognition</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Certified</td><td className="border px-2 py-1">Good Practices</td></tr>
              <tr><td className="border px-2 py-1">Silver</td><td className="border px-2 py-1">Best Practices</td></tr>
              <tr><td className="border px-2 py-1">Gold</td><td className="border px-2 py-1">Outstanding Performance</td></tr>
              <tr><td className="border px-2 py-1">Platinum</td><td className="border px-2 py-1">National Excellence</td></tr>
              <tr><td className="border px-2 py-1">Super Platinum</td><td className="border px-2 py-1">Global Leadership</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc ml-6 mt-2">
          <li><b>Nesco Location:</b> Goregaon East, Mumbai</li>
          <li><b>Area:</b> 8 Acre, Nesco Tower 3 – 8,50,000 SF and Nesco Tower 4 – 17,00,000 SF</li>
          <li><b>Building Use:</b> 24x7 x 365 Days</li>
          <li><b>Water Management:</b> 75 ltrs of water per SFT per annum</li>
        </ul>
        <b>Energy Efficiency</b>
        <ul className="list-disc ml-6">
          <li>3 degree temperature difference between inside and outside achieved</li>
          <li>Met 98% of standard requirements specified for green building</li>
          <li>Current electricity consumption of 11 units per sft per annum</li>
        </ul>
        <b>Resource management</b>
        <ul className="list-disc ml-6">
          <li>Part of 65 acre of estate with diversity of flora and fauna</li>
        </ul>
      </>
    ),
  },
];


export default function AwardsContent() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "BrandingSemibold" }}>
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 font-branding-medium">
            Here's a glimpse at some of our recent accomplishments that highlight areas of excellence and the areas where we will continue to enhance our performance.
          </p>
        </div>
        <div className="space-y-16">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "BrandingSemibold" }}>
                  {award.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-branding-medium">
                  {award.summary}
                </p>
                <button
                  className="mt-6 px-6 py-2 bg-primary text-white rounded font-bold hover:bg-blue-900 transition w-max"
                  onClick={() => setOpenModal(award.id)}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" style={{overflowY: 'auto'}}>
            <div className="bg-white rounded-2xl w-full max-w-6xl min-h-[320px] max-h-[75vh] p-0 relative flex flex-col shadow-2xl overflow-y-auto" style={{marginTop: '40px', marginBottom: '40px'}}>
              <button
                className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black z-20"
                onClick={() => setOpenModal(null)}
                aria-label="Close"
                tabIndex={0}
              >
                &times;
              </button>
              <div className="flex flex-row w-full items-start gap-12 p-8 pt-12">
                {/* Content left */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "BrandingSemibold" }}>
                    {awards.find((a) => a.id === openModal)?.title}
                  </h3>
                  <div className="text-gray-700 font-branding-medium text-base space-y-2">
                    {awards.find((a) => a.id === openModal)?.modalContent}
                  </div>
                </div>
                {/* Image(s) right, larger and centered */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-[340px] max-w-[45%]">
                  {awards.find((a) => a.id === openModal)?.modalImages?.map((img, idx) => (
                    <img key={idx} src={img} alt="Award" className="mb-4 rounded object-contain max-h-[340px] w-full" style={{marginLeft: 'auto'}} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "BrandingSemibold" }}>
            We Love Celebrating Our Achievements
          </h3>
          <p className="text-lg text-gray-700 font-branding-medium leading-relaxed">
            We love celebrating our achievements as every accolade is a testament of the contributions we make to society and the pride our employees take in being part of Nesco – an established brand with diversified business interests.
          </p>
        </div>
      </div>
    </section>
  );
}
