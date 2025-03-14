import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaClipboardList,
  FaUsers,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import {
  MdUpdate,
  MdOutlineInventory,
  MdOutlinePayments,
  MdManageAccounts,
} from "react-icons/md";
import { RiUserSettingsLine, RiBarChartBoxLine } from "react-icons/ri";
import { HiUsers, HiChartPie } from "react-icons/hi";

const content = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 bg-white text-gray-900 overflow-hidden">
        <motion.h1
          className="poppins-bold text-4xl sm:text-5xl md:text-6xl text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Inventory Management with <span className="text-orange-500">Rasoi Pro</span>
        </motion.h1>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-06%20174748.png"
            alt="Real-time Stock Tracking"
            className="hidden md:block w-full rounded-xl shadow-lg border-4 border-orange-500 object-fit transition-transform duration-500 hover:scale-105"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-gray-600 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Real-time Stock Tracking
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Monitor stock levels in real-time for flawless inventory control
                and optimized business performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <MdUpdate className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Instant Updates
                </h3>
                <p className="poppins-regular text-gray-500">
                  Never miss a change in stock levels.
                </p>
              </div>
              <div>
                <MdOutlineInventory className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Effortless Management
                </h3>
                <p className="poppins-regular text-gray-500">
                  Keep track with ease and accuracy.
                </p>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Section 2 */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-gray-600 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Seamless Order Processing
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Automate and streamline your orders for a superior workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <FaClipboardList className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Fast Processing
                </h3>
                <p className="poppins-regular text-gray-500">
                  Speed up orders with precision.
                </p>
              </div>
              <div>
                <FaChartLine className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Enhanced Efficiency
                </h3>
                <p className="poppins-regular text-gray-500">
                  Eliminate delays and reduce errors.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-06%20180757.png"
            alt="Order Management"
            className="hidden md:block w-full rounded-xl shadow-lg border-4 border-orange-500 object-fit transition-transform duration-500 hover:scale-105"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </section>

        {/* Section 3 - Staff Management */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20110005.png?updatedAt=1741325521025"
            alt="Staff Management"
            className="hidden md:block w-full md:min-h-120 rounded-3xl shadow-2xl border-4 border-orange-500 object-contain transition-transform duration-500 hover:scale-105 overflow-hidden"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-gray-300 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Elevate Your Staff Management with Precision.
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Streamline operations, assign tasks, and boost productivity with
                intuitive staff management tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <HiUsers className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Effortless Coordination
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Assign roles and monitor progress seamlessly.
                  </p>
                </div>
              </div>
              <div className="">
                <RiUserSettingsLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Optimized Workforce
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Increase efficiency with smart staff management.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Section 4 - Reports & Analytics */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-gray-300 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Data-Driven Insights for Smart Decisions.
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Leverage real-time analytics and reports to optimize performance
                and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <RiBarChartBoxLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Advanced Analytics
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Gain in-depth insights to enhance decision-making.
                  </p>
                </div>
              </div>
              <div className="">
                <HiChartPie className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Performance Optimization
                  </h3>
                  <p className="poppins-regular text-gray-600">
                    Make informed business choices with detailed reports.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20141159.png?updatedAt=1741423373612"
            alt="Reports and Analytics"
            className="hidden md:block w-full md:min-h-120 rounded-3xl shadow-2xl border-4 border-orange-500 object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </section>
      </div>
    </>
  );
};

export default content;
