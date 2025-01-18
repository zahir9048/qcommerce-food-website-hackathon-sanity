"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How do we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-[115px] lg:pt-0 bg-gray-100 text-black">
      <div className="min-h-screen bg-white">
        <div
          className="w-full bg-no-repeat bg-center flex justify-center"
          style={{
            backgroundImage: "url('/unsplash.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "300px",
          }}
        >
          {/* Header Section */}
          <div className="max-w-[1320px] mx-auto px-[20px] lg:px-[60px]  flex flex-col justify-center items-center text-white text-center py-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              FAQs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="home" className="text-xl sm:text-2xl md:text-3xl">
                Home
              </a>
              <div className="flex items-center">
                <Image
                  src="/Vector.png"
                  width={10}
                  height={10}
                  alt="Vector Icon"
                />
                <a
                  href="/faq"
                  className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]"
                >
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-[1320px] mx-auto px-[20px] lg:px-[60px] py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Questions Looks Here
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-2xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQPage;
