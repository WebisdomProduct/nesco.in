import React from "react";

function ShareInvestor() {
  const contacts = [
    {
      title: "REGISTRAR & TRANSFER AGENT",
      content: `Link Intime India Private Limited
        Nesco Limited
        C-101, 247 Park,
        LBS Marg, Vikhroli West,
        Mumbai 400083.
        Phone: +91 22 4918 6270
        Fax: +91 22 4098 6060
        Email: rnt.helpdesk@linkintime.co.in`,
    },
    {
      title: "INVESTOR GRIEVANCES REDRESSAL",
      content: `Ms. Shalini Kamath
        (Company Secretary & Compliance Officer)
        NESCO Center,
        Western Express Highway,
        Goregaon (East), Mumbai 400063
        Tel: +91 22 66450123
        Mobile: 9137500282
        Email: companysecretary@nesco.in`,
    },

    {
      title: "REGISTERED OFFICE ADDRESS",
      content: `NESCO Center,
        Western Express Highway,
        Goregaon (East),
        Mumbai 400063.
        Phone: +91 22 66450123
        Mobile: 9137500282`,
    },
    {
      title: "KEY MANAGERIAL PERSONNEL",
      content: `Mr. Krishna S. Patel
        (Chairman and Managing Director)
        Email: companysecretary@nesco.in
        
        Mr. Dipesh R. Singhania
        (Chief Financial Officer)
        Email: dipesh.singhania@nesco.in
        
        Ms. Shalini Kamath
        (Company Secretary & Compliance Officer)
        Email: companysecretary@nesco.in`,
    },

    {
      title: "SECRETARIAL OFFICE",
      content: `Ms. Shalini Kamath
        (Company Secretary & Compliance Officer)
        NESCO Center,
        Western Express Highway,
        Goregaon (East), Mumbai 400063
        Tel: +91 22 66450123
        Mobile: 9137500282
        Email: companysecretary@nesco.in`,
    },

    {
      title: "REGISTRAR & TRANSFER AGENT",
      content: `Link Intime India Private Limited
        Unit: Nesco Limited
        C-101, 247 Park,
        LBS Marg, Vikhroli West,
        Mumbai 400083.
        Phone: +91 22 4918 6270
        Fax: +91 22 4098 6060
        Email: rnt.helpdesk@linkintime.co.in`,
    },
  ];
  return (
    <>
      <div className=" py-8 px-4">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 m-auto my-6 justify-center text-center">
          Investor Contacts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mx-12 ">
          {contacts.map((data, index) => (
            <div
              className="bg-white p-4 justify-between flex flex-col w-full "
              key={index}
            >
              <div className="w-full h-full bg-gray-200 ">
                <h3 className="text-lg p-3 bg-blue-300 text-blue-900 font-branding-medium">
                  {data.title}
                </h3>
                <p className=" whitespace-pre-line p-3 text-sm md:text-md lg:text-xl font-branding-medium text-gray-700">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShareInvestor;
