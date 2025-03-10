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

const Report2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <h1 className="poppins-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-400 text-center mb-6 sm:mb-10 md:mb-12">
        Unlock Actionable Business Insights with
        <span className="text-orange-500"> Rasoi Pro</span> Reports & Analytics.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Reusable Report Card Component */}
        {reportData.map((report, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration={`${1500 + index * 500}`}
            className="flex justify-center"
          >
            <div className="bg-gray-900 shadow-lg shadow-gold-500/20 rounded-2xl p-6 md:p-8 border border-gray-700 w-full max-w-md sm:max-w-full">
              <h2 className="poppins-semibold text-xl sm:text-2xl md:text-3xl font-bold text-gold-400 mb-4 md:mb-6">
                {report.title}
              </h2>
              <ul className="poppins-light space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg">
                {report.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const reportData = [
  {
    title: "Collection Report",
    items: [
      {
        icon: <FaChartLine className="text-orange-500 text-xl" />,
        text: "Total sales summary (cash, card, UPI, and other payment modes)",
      },
      {
        icon: <FaCheckCircle className="text-orange-500 text-xl" />,
        text: "Daily, weekly, and monthly revenue breakdown",
      },
      {
        icon: <FaDownload className="text-orange-500 text-xl" />,
        text: "Exportable reports for accounting purposes",
      },
      {
        icon: <FaUndo className="text-orange-500 text-xl" />,
        text: "Refund and discount tracking",
      },
    ],
  },
  {
    title: "Order Reports",
    items: [
      {
        icon: <MdFastfood className="text-orange-500 text-xl" />,
        text: "Most and least ordered items",
      },
      {
        icon: <MdAccessTime className="text-orange-500 text-xl" />,
        text: "Peak ordering hours and rush periods",
      },
      {
        icon: <MdCancel className="text-orange-500 text-xl" />,
        text: "Order completion and cancellation rate",
      },
      {
        icon: <MdFilterList className="text-orange-500 text-xl" />,
        text: "Custom date range filtering for insights",
      },
    ],
  },
  {
    title: "Waiter’s Order Collection",
    items: [
      {
        icon: <FaUserTie className="text-orange-500 text-xl" />,
        text: "Orders handled by each waiter",
      },
      {
        icon: <FaMoneyBillWave className="text-orange-500 text-xl" />,
        text: "Total revenue generated per waiter",
      },
      {
        icon: <FaClipboardList className="text-orange-500 text-xl" />,
        text: "Average order value per waiter",
      },
      {
        icon: <FaBalanceScale className="text-orange-500 text-xl" />,
        text: "Performance comparison across shifts",
      },
    ],
  },
  {
    title: "Tablewise Collection",
    items: [
      {
        icon: <MdTableRestaurant className="text-orange-500 text-xl" />,
        text: "Revenue generated per table",
      },
      {
        icon: <FaTable className="text-orange-500 text-xl" />,
        text: "Most occupied tables vs. underutilized areas",
      },
      {
        icon: <FaUtensils className="text-orange-500 text-xl" />,
        text: "Order frequency per table",
      },
      {
        icon: <MdFilterList className="text-orange-500 text-xl" />,
        text: "Insights to improve table turnaround time",
      },
    ],
  },
];

export default Report2;
