import { React, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const front = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      duration:"600",
      name: "Free",
      price: { monthly: "$0", yearly: "$0" },
      description:
        "Essential features for a businesses managed by a single owner.",
      features: [
        "1 Register",
        "1 User",
        "1 Branch",
        "50 POS transactions",
        "50 Marketplace orders",
        "20 Purchase Orders & Bills",
        "Inventory Management",
        "Customer Management",
        "Sales Management",
        "Real-time Reports & Dashboards",
        "Shopify Integration (1 store)",
        "1500 API calls per day",
      ],
    },
    {
      duration:"1200",
      name: "Standard",
      price: { monthly: "$799", yearly: "$7,990" },
      description: "Key features for businesses that are getting started.",
      features: [
        "1 Register",
        "3 Users",
        "1 Branch",
        "Unlimited POS transactions",
        "500 Marketplace orders",
        "500 Purchase Orders & Bills",
        "Barcode Generation",
        "Price Lists",
        "Customizable & Scheduled Reports",
        "Advanced Purchase Management",
        "Shopify Integration (1 store)",
        "2500 API calls per day",
      ],
    },
    {
      duration:"1800",
      name: "Professional",
      price: { monthly: "$1,599", yearly: "$15,990" },
      description: "Powerful features for businesses that are expanding.",
      features: [
        "3 Registers",
        "10 Users",
        "1 Branch",
        "Unlimited POS transactions",
        "500 Marketplace orders",
        "2500 Purchase Orders & Bills",
        "Composite Items",
        "Session & Cash Tracking",
        "Automation - E-Mail Alerts, Field Updates",
        "Shopify Integration (2 stores)",
        "5000 API calls per day",
      ],
    },
  ];

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

        <div className="flex flex-col md:flex-row bg-transparent justify-center gap-8 px-4"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-sm transition-all duration-1000 ease-linear hover:scale-105 hover:shadow-xl flex flex-col items-center text-center overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={plan.duration}
              data-aos-easing="ease-in-sine"
            >
              <h2 className="poppins-semibold text-2xl font-semibold uppercase tracking-wide text-black mb-4">
                {plan.name}
              </h2>
              <h3 className="poppins-bold text-5xl font-extrabold text-black my-4">
                {isYearly ? plan.price.yearly : plan.price.monthly}
              </h3>
              <p className="poppins-regular text-gray-700 mb-6 px-2">
                {plan.description}
              </p>
              <button className="poppins-semibold w-full bg-gradient-to-r from-orange-500 to-orange-300 text-black py-3 rounded-full font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all">
                Get Started
              </button>

              <h3 className="poppins-medium mt-8 text-lg font-semibold text-black">
                Features:
              </h3>
              <ul className="poppins-regular mt-4 text-black text-sm space-y-3 text-left w-full px-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default front;
