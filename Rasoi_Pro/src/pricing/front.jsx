import { React, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const front = () => {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 py-16 px-4 text-white overflow-hidden">
        <div
          data-aos="fade-down"
          className="max-w-6xl mx-auto text-center overflow-hidden"
        >
          <h1 className="poppins-bold text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-transparent bg-clip-text">
            We want your business to be profitable
          </h1>

          <div className="poppins-light flex justify-center items-center mb-12">
            <span className="text-white">Monthly</span>
            <label className="relative inline-flex items-center mx-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-16 h-8 bg-gray-700 rounded-full peer peer-checked:bg-orange-400 relative">
                <div
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-all ${
                    isYearly ? "translate-x-8" : ""
                  }`}
                ></div>
              </div>
            </label>
            <span className="text-white">Yearly (Save 20%)</span>
          </div>
        </div>

        <div data-aos="fade-down" className="poppins-medium bg-gradient-to-r from-orange-400 to-orange-500 text-black text-center p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
          <h4 className="text-2xl font-semibold text-gold-500">
            {isYearly
              ? "Plans Start from ₹4,999 Annually"
              : "Plans Start from ₹499 Monthly"}
          </h4>
          <Link to="/contactus">
            <button className="poppins-semibold mt-5 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gold-400">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default front;
