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
          Streamline Your Staff Management with{" "}
          <span className="text-orange-500">Rasoi Pro</span>
        </motion.h1>


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
                Attendance & Time Tracking
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Monitor employee check-ins and check-outs with accuracy. Keep
                records of working hours for better payroll management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <FaClipboardList className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Accurate Attendance Tracking
                </h3>
                <p className="poppins-regular text-gray-500">
                  Precise employee attendance tracking.
                </p>
              </div>
              <div>
                <FaChartLine className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Efficient Payroll Management
                </h3>
                <p className="poppins-regular text-gray-500">
                  Streamline payroll with accuracy.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20141956.png?updatedAt=1741423830673"
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
                Role-Based Access Control
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Assign specific roles and permissions to employees, ensuring
                secure and efficient operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <HiUsers className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Operational Efficiency & Security
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Restricted access ensures security.
                  </p>
                </div>
              </div>
              <div className="">
                <RiUserSettingsLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Audit & Monitoring Controls
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Employee activity tracking system.
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
                Performance Insights
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Gain valuable insights into staff productivity and efficiency to
                improve overall restaurant operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <RiBarChartBoxLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Monitor Staff Performance
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Track work hours & performance.
                  </p>
                </div>
              </div>
              <div className="">
                <HiChartPie className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Optimize Workflow Efficiency
                  </h3>
                  <p className="poppins-regular text-gray-600">
                    Optimize staff productivity efficiently.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20141956.png?updatedAt=1741423830673"
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
