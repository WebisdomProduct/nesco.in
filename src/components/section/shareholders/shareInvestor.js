import React, { useEffect, useState } from "react";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";

function ShareInvestor() {
  const { getQuery } = useGetQuery();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.shareholder.contacts}`,
      onSuccess: (res) => {
        setData(res?.data || []);
        setLoading(false);
      },
      onFail: (err) => {
        console.error("Failed to fetch contacts data:", err);
        setLoading(false);
      },
    });
  }, []);

  // Helper function to render address details
  const renderAddress = (address) => (
    <>
      {address.address1 && <p>{address.address1}</p>}
      {address.address2 && <p>{address.address2}</p>}
      {address.address3 && <p>{address.address3}</p>}
      {address.full_address && <p>{address.full_address}</p>}
      {address.phone && <p>{address.phone}</p>}
      {address.mobile && <p>{address.mobile}</p>}
      {address.tel && <p>{address.tel}</p>}
      {address.fax && <p>{address.fax}</p>}
      {address.email && <p>{address.email}</p>}
      {address.CIN && <p>{address.CIN}</p>}
    </>
  );

  return (
    <div className="goal-section1 flex flex-col justify-center items-center header_purple mt-0 lg:mt-10">
      <div className="py-8 w-[90%]">
        <p className="font-branding-semibold text-4xl sm:text-5xl text-blue-800 m-auto my-6 text-center">
          Investor Contacts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
          {data.map((contact, index) => (
            <div
              className="bg-white p-3 justify-between flex flex-col w-full"
              key={index}
            >
              <div className="w-full h-full bg-gray-200">
                {contact.title && (
                  <h3 className="md:text-2xl text-xl px-5 py-3 xl:py-2 xl:h-[145px] bg-blue-200 text-blue-900 font-branding-semibold flex items-center">
                    {contact.title}
                  </h3>
                )}

                {/* Handle "address" option */}
                {contact.option === "address" && (
                  <div className="pt-5 pb-10 pl-3 text-md md:text-xl lg:text-2xl font-branding-medium text-black flex flex-col gap-6">
                    {/* Company Address */}
                    {contact.option2 === "company" && contact.company && (
                      <div>
                        {contact.company.name && (
                          <p className="font-branding-semibold">
                            {contact.company.name}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Profile with Address (Officer Name & Designation) */}
                    {contact.option2 === "profile2" && contact.profile2 && (
                      <div>
                        {contact.profile2.name && (
                          <p className="font-branding-semibold">
                            {contact.profile2.name}
                          </p>
                        )}
                        {contact.profile2.position && (
                          <p className="text-sm md:text-md lg:text-xl">
                            {contact.profile2.position}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Address Details */}
                    {(contact.address?.center || contact.address) && (
                      <div className="text-md md:text-xl lg:text-xl">
                        {contact.address.center && (
                          <p className="font-branding-semibold text-md md:text-xl lg:text-2xl">
                            {contact.address.center}
                          </p>
                        )}
                        {contact.address && renderAddress(contact.address)}
                      </div>
                    )}
                  </div>
                )}

                {/* Handle "profile" option (Multiple profiles) */}
                {contact.option === "profile" &&
                  contact.profile &&
                  contact.profile.length > 0 && (
                    <div className="pt-5 pb-10 px-3 flex flex-col gap-5">
                      {contact.profile.map((d, i) => (
                        <div className="w-full bg-gray-200" key={i}>
                          <h3 className=" text-md md:text-xl lg:text-2xl font-branding-semibold flex items-center">
                            {d.name}
                          </h3>
                          <div className=" text-md md:text-xl lg:text-xl font-branding-medium text-black flex flex-col">
                            {d.position && (
                              <p className="text-sm md:text-md lg:text-xl">
                                {d.position}
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
