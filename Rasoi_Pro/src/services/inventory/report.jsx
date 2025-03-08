import React, { useEffect } from "react";
import {
  FaChartLine,
  FaCheckCircle,
  FaDownload,
  FaUndo,
  FaUserTie,
  FaMoneyBillWave,
  FaClipboardList,
  FaBalanceScale,
  FaTable,
  FaUtensils,
} from "react-icons/fa";
import {
  MdFastfood,
  MdAccessTime,
  MdCancel,
  MdFilterList,
  MdTableRestaurant,
} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const report = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <div
        data-aos="fade-down"
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 sm:px-12 lg:px-24"
      >
        <h1 className="poppins-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-400 text-center mb-6 sm:mb-10 md:mb-12">
          Unlock Actionable Business Insights with
          <span className="text-orange-500"> Rasoi Pro</span> Reports &
          Analytics.
        </h1>

        {/* 1st Section */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text Section */}
          <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 max-w-md mx-auto lg:max-w-full">
            <h2 className="poppins-semibold text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
              Collection Report
            </h2>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li className="poppins-light flex items-center space-x-2 md:space-x-3">
                <FaChartLine className="text-orange-500 text-lg md:text-xl" />
                <span>
                  Total sales summary (cash, card, UPI, and other payment modes)
                </span>
              </li>
              <li className="poppins-light flex items-center space-x-2 md:space-x-3">
                <FaCheckCircle className="text-orange-500 text-lg md:text-xl" />
                <span>Daily, weekly, and monthly revenue breakdown</span>
              </li>
              <li className="poppins-light flex items-center space-x-2 md:space-x-3">
                <FaDownload className="text-orange-500 text-lg md:text-xl" />
                <span>Exportable reports for accounting purposes</span>
              </li>
              <li className="poppins-light flex items-center space-x-2 md:space-x-3">
                <FaUndo className="text-orange-500 text-lg md:text-xl" />
                <span>Refund and discount tracking</span>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20120119.png?updatedAt=1741329636396"
              alt="Collection Report Screenshot"
              className="hidden lg:block rounded-xl shadow-lg shadow-gold-500/20 border border-gray-700 w-full max-w-sm md:max-w-md lg:max-w-xl"
            />
          </div>
        </div>

        {/* 2nd Section */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-10 px-4 md:px-8"
        >
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20120209.png?updatedAt=1741332020753"
              alt="Order Report Screenshot"
              className="hidden lg:block rounded-xl shadow-lg shadow-gold-500/20 border border-gray-700 w-full max-w-sm md:max-w-md lg:max-w-xl"
            />
          </div>

          {/* Text Section */}
          <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 text-center sm:text-left">
            <h2 className="poppins-semibold text-2xl sm:text-3xl font-bold text-gold-400 mb-4 sm:mb-6">
              Order Reports
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <li className="poppins-light flex items-center space-x-2 sm:space-x-3">
                <MdFastfood className="text-orange-500 text-lg sm:text-xl" />
                <span>Most and least ordered items</span>
              </li>
              <li className="poppins-light flex items-center space-x-2 sm:space-x-3">
                <MdAccessTime className="text-orange-500 text-lg sm:text-xl" />
                <span>Peak ordering hours and rush periods</span>
              </li>
              <li className="poppins-light flex items-center space-x-2 sm:space-x-3">
                <MdCancel className="text-orange-500 text-lg sm:text-xl" />
                <span>Order completion and cancellation rate</span>
              </li>
              <li className="poppins-light flex items-center space-x-2 sm:space-x-3">
                <MdFilterList className="text-orange-500 text-lg sm:text-xl" />
                <span>Custom date range filtering for insights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3rd Section */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16"
        >
          <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-8 border border-gray-700">
            <h2 className="poppins-semibold text-3xl font-bold text-gold-400 mb-6">
              Waiter’s Order Collection
            </h2>
            <ul className="poppins-light space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <FaUserTie className="text-orange-500 text-xl" />
                <span>Orders handled by each waiter</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMoneyBillWave className="text-orange-500 text-xl" />
                <span>Total revenue generated per waiter</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClipboardList className="text-orange-500 text-xl" />
                <span>Average order value per waiter</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaBalanceScale className="text-orange-500 text-xl" />
                <span>Performance comparison across shifts</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20120313.png?updatedAt=1741342657682"
              alt="Waiter's Order Collection Screenshot"
              className="hidden lg:block rounded-xl shadow-lg shadow-gold-500/20 border border-gray-700 max-w-full"
            />
          </div>
        </div>

        {/* 4th Section */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16"
        >
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20161635.png?updatedAt=1741344563218"
              alt="Tablewise Collection Screenshot"
              className="hidden lg:block rounded-xl shadow-lg shadow-gold-500/20 border border-gray-700 max-w-full"
            />
          </div>
          <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-8 border border-gray-700">
            <h2 className="poppins-semibold text-3xl font-bold text-gold-400 mb-6">
              Tablewise Collection
            </h2>
            <ul className="poppins-light space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <MdTableRestaurant className="text-orange-500 text-xl" />
                <span>Revenue generated per table</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaTable className="text-orange-500 text-xl" />
                <span>Most occupied tables vs. underutilized areas</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaUtensils className="text-orange-500 text-xl" />
                <span>Order frequency per table</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdFilterList className="text-orange-500 text-xl" />
                <span>Insights to improve table turnaround time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default report;
