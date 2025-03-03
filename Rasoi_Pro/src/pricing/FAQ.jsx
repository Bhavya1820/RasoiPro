import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      duration:"800",
      question:
        "I am just starting with adapting technology for my business. Is Zakya for me?",
      answer: [
        "Yes, Zakya is definitely for you. Zakya is easy-to-use and adapt to. It's specially built for growing retail businesses with less to no tech expertise to manage their store more efficiently. You can try the free trial of the product before buying.",
      ],
    },
    {
      duration:"1000",
      question: "Can I get a demo of Zakya?",
      answer: [
        "Yes, we would be happy to demonstrate Zakya through a web-conference at your convenience. The demo is a one-hour session. To schedule your personal session, please contact sales@zakya.com.",
      ],
    },
    {
      duration:"1200",
      question: "Can I get a free trial of the product?",
      answer: [
        "Yes, there's a 15-day free trial version of Zakya that you can try. The free trial includes all the features of the Premium plan.",
      ],
    },
    {
      duration:"1400",
      question: "What happens after my trial ends?",
      answer: [
        "Once your trial ends, your account will be moved to the Free plan.",
      ],
    },
    {
      duration:"1600",
      question: "How long can I use the Free plan?",
      answer: [
        "Zakya's Free plan is indefinitely free. It does, however, include feature limitations that can be overcome with the paid plan.",
      ],
    },
    {
      duration:"1800",
      question: "What are my payment options?",
      answer: [
        "We accept payments via Visa, MasterCard, American Express, and PayPal. We also accept payment via bank transfer or check transfer for yearly subscriptions. For more details, please contact sales@zakya.com.",
      ],
    },
    {
      duration:"2000",
      question:
        "Can I get my money back if I'm not satisfied with the product?",
      answer: [
        "If you're not satisfied with the product you can cancel your subscription at any time and we'll refund your purchase amount in full. For more information, read our complete refund policy here.",
      ],
    },
    {
      duration:"2200",
      question: "Is my data safe?",
      answer: [
        "Yes, your data is safe and secure. Our facilities feature stringent 24/7/365 security with video monitoring, biometric access, and advanced fire, flood, and theft monitoring systems. Our network security system employs the latest encryption and intrusion detection and prevention technologies.",
      ],
    },
    {
      duration:"2400",
      question: "How do I reach your support team?",
      answer: [
        "You can contact us by phone at 1800 102 9944 (toll free), WhatsApp at 7305654908, or email at support@zakya.com. Our support team is available from 7:30 AM to 11:00 PM, Monday through Friday, and from 9:00 AM to 6:00 PM on the weekends to answer your questions.",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="bg-white py-16 px-6 sm:px-12 lg:px-20 mt-10 overflow-hidden">
        {/* Heading */}
        <div data-aos="fade-down" className="text-center mb-12 overflow-hidden">
          <h2 className="poppins-bold text-4xl md:text-6xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="poppins-medium text-lg md:text-2xl text-gray-600 mt-5 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-gray-100 max-w-4xl mx-auto space-y-6 p-8 md:p-12 rounded-2xl shadow-2xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={faq.duration}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center text-lg md:text-xl font-medium bg-white transition border-b border-gray-300 hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex gap-4 items-center">
                  <span className="text-gray-700 font-semibold">Q:</span>
                  <span className="text-gray-900">{faq.question}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xl">
                    {openIndex === index ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </span>
                </div>
              </button>
              <div
                className={`px-6 py-4 text-gray-700 text-md text-left transition-all duration-500 ease-in-out transform ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100 scale-100"
                    : "max-h-0 opacity-0 scale-95 overflow-hidden"
                }`}
              >
                {faq.answer.map((ans, i) => (
                  <p
                    key={i}
                    className="mb-3 leading-relaxed poppins-regular text-gray-600"
                  >
                    {ans}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
