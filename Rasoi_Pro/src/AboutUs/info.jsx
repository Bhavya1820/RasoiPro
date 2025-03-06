import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const info = () => {
  const content = [
    {
      title: "OUR VISION",
      text: "At Rasoi Pro POS, we envision a future where restaurant management is seamless, efficient, and hassle-free. Our vision is to empower restaurants with a smart, intuitive, and technology-driven POS system that enhances operational efficiency, improves customer experiences, and drives business growth.",
      bgTitle: "bg-black text-white",
      bgText: "bg-gray-100 text-black",
    },
    {
      title: "OUR MISSION",
      text: "At Rasoi Pro POS, our mission is to empower restaurants with a seamless, efficient, and user-friendly point-of-sale system that simplifies operations and enhances customer experiences. We strive to provide cutting-edge technology that streamlines order management, inventory tracking, and payment processing, ensuring businesses run smoothly and profitably.",
      bgTitle: "bg-gray-100 text-black",
      bgText: "bg-black text-white",
    },
    {
      title: "OUR GOAL",
      text: "Rasoi Pro POS aims to revolutionize restaurant management with an intuitive, efficient, and user-friendly point-of-sale system. Our goal is to streamline order processing, billing, and inventory management, ensuring seamless operations for restaurants of all sizes. We prioritize accuracy, speed, and ease of use, enabling staff to focus on delivering exceptional dining experiences.",
      bgTitle: "bg-black text-white",
      bgText: "bg-gray-100 text-black",
    },
  ];

  useEffect(() => {
      AOS.init({ duration: 2000 }); // Initialize AOS with options
    }, []);


  return (
    <>
      <div className="bg-white px-4 py-10 md:px-10 lg:px-20 overflow-hidden">
        {/** Section Component */}
        {content.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2">
            <div
              data-aos="fade-right"
              className={`${section.bgTitle} flex items-center justify-center p-6 md:p-10 text-center md:text-left h-100 overflow-hidden`}
            >
              <h1 className="poppins-bold text-2xl font-bold">
                {section.title}
              </h1>
            </div>
            <div
              data-aos="fade-left"
              className={`${section.bgText} flex items-center p-6 md:p-10 h-100 overflow-hidden`}
            >
              <p className="poppins-medium text-base md:text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default info;
