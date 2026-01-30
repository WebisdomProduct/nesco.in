"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8040/api/v1/our_impact/csr/second_section";

function SocialPower() {
  const [data, setData] = useState({
    paragraph1: "",
    paragraph2: "",
    paragraph3: ""
  });

  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const res = await axios.get(API);

      if (res?.data?.data?.length > 0) {
        const item = res.data.data[0];

        setData({
          paragraph1: item.paragraph1 || "",
          paragraph2: item.paragraph2 || "",
          paragraph3: item.paragraph3 || ""
        });
      }
    } catch (error) {
      console.error("CSR fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return (
      <section className="goal-section1 header_white flex justify-center items-center py-20 bg-[#21409A]">
        <p className="text-white text-xl">Loading...</p>
      </section>
    );
  }

  return (
    <section className="goal-section1 header_white flex flex-col justify-center items-center py-20 bg-[#21409A]">
      <div className="w-[90%] font-branding-medium">

        {/* Heading */}
        <h1 className="flex flex-col text-secondary md:text-5xl text-2xl mb-5 text-center">
          {data.paragraph1 && (
            <span className="font-branding-bold">
              {data.paragraph1}
            </span>
          )}
          {data.paragraph2 && (
            <span className="mt-2">
              {data.paragraph2}
            </span>
          )}
        </h1>
        {/* Paragraph 3 */}
        {data.paragraph3 && (
          <p className="mt-6 md:text-2xl text-white">
            {data.paragraph3}
          </p>
        )}

      </div>
    </section>
  );
}

export default SocialPower;
