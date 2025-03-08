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

const features = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 bg-white text-gray-900 overflow-hidden">
        <motion.h1
          className="poppins-bold text-4xl sm:text-5xl md:text-6xl text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Streamline Your Table Orders with{" "}
          <span className="text-orange-500">Rasoi Pro</span>
        </motion.h1>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-06%20180757.png?updatedAt=1741264946099"
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
                Streamline Table Orders with Ease
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Take and manage table orders effortlessly, ensuring accurate and
                efficient service. Enhance the dining experience with a seamless
                ordering system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <MdUpdate className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Effortless Order Management
                </h3>
                <p className="poppins-regular text-gray-500">
                  Simplifies taking and managing orders.
                </p>
              </div>
              <div>
                <MdOutlineInventory className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Enhanced Dining Experience
                </h3>
                <p className="poppins-regular text-gray-500">
                  Ensures accuracy and efficient service
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
                Fast & Error-Free Table Ordering
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Reduce wait times and minimize mistakes with our intuitive table
                order system. Improve staff efficiency and keep your customers
                happy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <FaClipboardList className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Faster Order Processing
                </h3>
                <p className="poppins-regular text-gray-500">
                  Reduces wait times for orders.
                </p>
              </div>
              <div>
                <FaChartLine className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Error-Free Transactions
                </h3>
                <p className="poppins-regular text-gray-500">
                  Minimizes mistakes in orders.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20140958.png?updatedAt=1741423217216"
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
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20141411.png?updatedAt=1741423526950"
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
                Boost Efficiency with Table Order Automation
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Speed up order processing, prevent delays, and enhance
                coordination between waitstaff and kitchen for a flawless dining
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <HiUsers className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Minimized Service Delays
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Reduce wait times significantly.
                  </p>
                </div>
              </div>
              <div className="">
                <RiUserSettingsLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Seamless Kitchen Operations
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Optimize meal preparation workflow.
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
                Seamless Table Order Experience
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                From order placement to kitchen preparation, our system ensures
                every table receives the right meal at the right time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <RiBarChartBoxLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Efficient Order Management
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Streamlines order processing seamlessly.
                  </p>
                </div>
              </div>
              <div className="">
                <HiChartPie className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Accurate Meal Delivery
                  </h3>
                  <p className="poppins-regular text-gray-600">
                    Ensures timely and correct serving.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-06%20180757.png?updatedAt=1741264946099"
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

export default features;
