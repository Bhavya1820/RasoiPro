import React, {useEffect} from "react";
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

const report2 = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Collection Report */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 w-full max-w-md sm:max-w-full">
              <h2 className="poppins-semibold text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
                Collection Report
              </h2>
              <ul className="poppins-light space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex items-center space-x-3">
                  <FaChartLine className="text-orange-500 text-xl" />
                  <span>
                    Total sales summary (cash, card, UPI, and other payment
                    modes)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-orange-500 text-xl" />
                  <span>Daily, weekly, and monthly revenue breakdown</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaDownload className="text-orange-500 text-xl" />
                  <span>Exportable reports for accounting purposes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUndo className="text-orange-500 text-xl" />
                  <span>Refund and discount tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Order Reports */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 w-full max-w-md sm:max-w-full">
              <h2 className="poppins-semibold text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
                Order Reports
              </h2>
              <ul className="poppins-light space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex items-center space-x-3">
                  <MdFastfood className="text-orange-500 text-xl" />
                  <span>Most and least ordered items</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdAccessTime className="text-orange-500 text-xl" />
                  <span>Peak ordering hours and rush periods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdCancel className="text-orange-500 text-xl" />
                  <span>Order completion and cancellation rate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdFilterList className="text-orange-500 text-xl" />
                  <span>Custom date range filtering for insights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Waiter’s Order Collection */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 w-full max-w-md sm:max-w-full">
              <h2 className="poppins-semibold text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
                Waiter’s Order Collection
              </h2>
              <ul className="poppins-light space-y-3 md:space-y-4 text-base md:text-lg">
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
          </div>

          {/* Tablewise Collection */}
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="flex flex-col items-center"
          >
            <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 w-full max-w-md sm:max-w-full">
              <h2 className="poppins-semibold text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
                Tablewise Collection
              </h2>
              <ul className="poppins-light space-y-3 md:space-y-4 text-base md:text-lg">
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
      </div>
    </>
  );
};

export default report2;
