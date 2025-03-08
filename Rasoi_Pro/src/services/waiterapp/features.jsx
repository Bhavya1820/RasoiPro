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
          Enhance Your Table Service with <br />
          <span className="text-orange-500">Rasoi Pro</span>
          Waiter App
        </motion.h1>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20165629.png?updatedAt=1741433308650"
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
                Instant Order Taking
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Waiters can take orders directly on the app, ensuring accuracy
                and speed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <MdUpdate className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Order Accuracy
                </h3>
                <p className="poppins-regular text-gray-500">
                  Minimizes errors in order-taking.
                </p>
              </div>
              <div>
                <MdOutlineInventory className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Faster Service
                </h3>
                <p className="poppins-regular text-gray-500">
                  Speeds up the ordering process.
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
                Real-Time Kitchen Updates
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Orders are instantly sent to the kitchen, reducing wait times.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <FaClipboardList className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Faster Order Processing
                </h3>
                <p className="poppins-regular text-gray-500">
                  Orders reach the kitchen instantly.
                </p>
              </div>
              <div>
                <FaChartLine className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Improved Customer Experience
                </h3>
                <p className="poppins-regular text-gray-500">
                  Reduced wait times enhance satisfaction.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20170157.png?updatedAt=1741433562825"
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
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20163711.png?updatedAt=1741432100193"
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
                Table Management
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Easily assign and track orders for different tables.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <HiUsers className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Table-Specific Order Assignment
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Assign orders to designated tables.
                  </p>
                </div>
              </div>
              <div className="">
                <RiUserSettingsLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Real-Time Order Tracking
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Monitor order progress instantly.
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
                Order Modifications.
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Make changes to orders instantly without hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <RiBarChartBoxLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Instant Order Modifications
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Modify orders quickly without delays.
                  </p>
                </div>
              </div>
              <div className="">
                <HiChartPie className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Hassle-Free Updates
                  </h3>
                  <p className="poppins-regular text-gray-600">
                    Change orders smoothly with ease.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20165629.png?updatedAt=1741433308650"
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
