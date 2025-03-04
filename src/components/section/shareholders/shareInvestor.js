import React from "react";

function ShareInvestor() {
  const contacts = [
    {
      title: "REGISTRAR & TRANSFER AGENT",
      title1: "Link Intime India Private Limited",
      addressTitle: "Nesco Limited",
      address: {
        address1: "C-101, 247 Park,",
        address2: "LBS Marg, Vikhroli West,",
        address3: "Mumbai 400083.",
        fax: "Fax: +91 22 4098 6060",
        phone: "Phone: +91 22 4918 6270",
        email: "Email: rnt.helpdesk@linkintime.co.in",
      },
    },
    {
      title: "REGISTERED OFFICE ADDRESS",
      addressTitle: "Nesco Center",
      address: {
        address1: "Western Express Highway",
        address2: "Goregaon (East),",
        address3: "Mumbai 400063.",
        phone: "Phone: +91 22 66450123",
        mobile: "Mobile: 9137500282",
      },
    },
    {
      title: "SECRETARIAL OFFICE",
      title2: "Ms. Shalini Kamath",
      post1: "(Company Secretary & Compliance Officer)",
      addressTitle: "Nesco Center",
      address: {
        address1: "Western Express Highway",
        address2: "Goregaon (East),",
        address3: "Mumbai 400063.",
        phone: "Tel: +91 22 66450123",
        mobile: "Mobile: 9137500282",
        email: "Email: companysecretary@nesco.in",
      },
    },
    {
      title: "INVESTOR GRIEVANCES REDRESSAL",
      title2: "Ms. Shalini Kamath",
      post1: "(Company Secretary & Compliance Officer)",
      addressTitle: "Nesco Center",
      address: {
        address1: "Western Express Highway",
        address2: "Goregaon (East),",
        address3: "Mumbai 400063.",
        phone: "Tel: +91 22 66450123",
        mobile: "Mobile: 9137500282",
        email: "Email: companysecretary@nesco.in",
      },
    },
    {
      title:
        "KEY MANAGERIAL PERSONNEL FOR DETERMINING AND DISSEMINATING MATERIAL INFORMATION",
      address: {
        contact2: [
          {
            name: "Mr. Krishna S. Patel",
            post2: "(Chairman and Managing Director)",
            email: "Email: companysecretary@nesco.in",
          },
          {
            name: "Mr. Dipesh R. Singhania",
            post2: "(Chief Financial Officer)",
            email: "Email: dipesh.singhania@nesco.in",
          },
          {
            name: "Ms. Shalini Kamath",
            post2: "(Company Secretary & Compliance Officer)",
            email: "Email: companysecretary@nesco.in",
          },
        ],
      },
    },
    {
      title: "REGISTRAR & TRANSFER AGENT",
      title1: "Link Intime India Private Limited",
      addressTitle: "Unit: Nesco Limited",
      address: {
        address1: "C-101, 247 Park,",
        address2: "LBS Marg, Vikhroli West,",
        address3: "Mumbai 400083.",
        fax: "Fax: +91 22 4098 6060",
        phone: "Phone: +91 22 4918 6270",
        email: "Email: rnt.helpdesk@linkintime.co.in",
      },
    },
  ];

  // Helper function to render address details
  const renderAddress = (address) => (
    <>
      {address.address1 && <p>{address.address1}</p>}
      {address.address2 && <p>{address.address2}</p>}
      {address.address3 && <p>{address.address3}</p>}
      {address.phone && <p>{address.phone}</p>}
      {address.mobile && <p>{address.mobile}</p>}
      {address.fax && <p>{address.fax}</p>}
      {address.email && <p>{address.email}</p>}
    </>
  );

  return (
    <div className="goal-section1 flex flex-col justify-center items-center header_purple mt-0 lg:mt-10">
      <div className="py-8 w-[90%]">
        <p className="font-branding-semibold text-4xl sm:text-5xl text-blue-800 m-auto my-6 text-center">
          Investor Contacts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
          {contacts.map((data, index) => (
            <div
              className="bg-white p-3 justify-between flex flex-col w-full"
              key={index}
            >
              <div className="w-full h-full bg-gray-200">
                {data.title && (
                  <h3 className="md:text-2xl text-xl px-5 py-3 xl:py-2 xl:h-[145px] bg-blue-200 text-blue-900 font-branding-semibold flex items-center">
                    {data.title}
                  </h3>
                )}
                {(data.title1 || data.title2 || data.addressTitle) && (
                  <div
                    className={`pt-5 pb-10 pl-3 text-md md:text-xl lg:text-2xl font-branding-medium text-black flex flex-col ${
                      data.title1 || data.title2 || data.addressTitle
                        ? "gap-6 "
                        : ""
                    }`}
                  >
                    {(data.title1 || data.title2 || data.post1) && (
                      <div>
                        {data.title1 && (
                          <p className="font-branding-semibold">
                            {data.title1}
                          </p>
                        )}
                        {data.title2 && (
                          <p className="font-branding-semibold">
                            {data.title2}
                          </p>
                        )}
                        {data.post1 && (
                          <p className="text-sm md:text-md lg:text-xl">
                            {data.post1}
                          </p>
                        )}
                      </div>
                    )}
                    {(data.addressTitle || data.address) && (
                      <div className="text-md md:text-xl lg:text-xl">
                        {data.addressTitle && (
                          <p className="font-branding-semibold text-md md:text-xl lg:text-2xl">
                            {data.addressTitle}
                          </p>
                        )}
                        {data.address && renderAddress(data.address)}
                      </div>
                    )}
                  </div>
                )}
                {index === 4 && (
                  <div className="pt-5 pb-10 px-3 flex flex-col gap-5">
                    {data.address.contact2.map((d, i) => (
                      <div className="w-full bg-gray-200" key={i}>
                        <h3 className=" text-md md:text-xl lg:text-2xl font-branding-semibold flex items-center">
                          {d.name}
                        </h3>
                        <div className=" text-md md:text-xl lg:text-xl font-branding-medium text-black flex flex-col">
                          {d.post2 && (
                            <p className="text-sm md:text-md lg:text-xl">
                              {d.post2}
                            </p>
                          )}
                          {d.email && <p className="">{d.email}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareInvestor;
