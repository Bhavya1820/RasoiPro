import { React, useEffect } from "react";
import Report_iamge from "./report_iamge";
import AOS from "aos";
import "aos/dist/aos.css";

const reports = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="mx-auto text-center">
          <h1
            className="poppins-bold text-5xl md:text-7xl text-[#FFD700] mb-4 drop-shadow-lg overflow-hidden"
            style={{ textShadow: "2px 2px 8px rgba(255, 215, 0, 0.5)" }}
            data-aos="fade-down"
          >
            Powerful Reports
          </h1>
          <h3
            data-aos="fade-down"
            className="poppins-semibold text-2xl md:text-3xl text-gray-300 mb-6 opacity-90 overflow-hidden"
          >
            Know what's going on with your store
          </h3>
          <p
            data-aos="fade-down"
            className="poppins-regular text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed overflow-hidden"
          >
            Rasoi Pro provides deep insights into your business with detailed
            reports on
            <span className="text-[#FFD700] font-semibold">
              {" "}
              sales, inventory, receivables, payments,
            </span>{" "}
            and more.
          </p>
        </div>
      </section>
      <Report_iamge></Report_iamge>
    </>
  );
};

export default reports;
