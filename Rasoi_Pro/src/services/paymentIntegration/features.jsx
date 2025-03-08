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
          Streamline Your Transactions with Seamless Payment Integration in{" "}
          <span className="text-orange-500">Rasoi Pro</span>
        </motion.h1>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/patrick-tomasso-nWvWBV0sv04-unsplash.jpg?updatedAt=1741425250506"
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
                Multiple Payment Methods
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Accept credit/debit cards, UPI, digital wallets, and net banking
                for smooth transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <MdUpdate className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Multiple Payment Options
                </h3>
                <p className="poppins-regular text-gray-500">
                  Supports cards, UPI, wallets, and banking.
                </p>
              </div>
              <div>
                <MdOutlineInventory className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Seamless Transaction Experience
                </h3>
                <p className="poppins-regular text-gray-500">
                  Ensures fast and hassle-free payments.
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
                Fast & Secure Transactions
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Ensure quick, encrypted, and reliable payments with built-in
                security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <FaClipboardList className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Fast Transactions
                </h3>
                <p className="poppins-regular text-gray-500">
                  Payments are processed instantly.
                </p>
              </div>
              <div>
                <FaChartLine className="text-orange-400 text-4xl sm:text-5xl" />
                <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                  Secure Encryption
                </h3>
                <p className="poppins-regular text-gray-500">
                  Data is protected from threats.
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
                Seamless POS Integration
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Works effortlessly with your existing POS system, making
                payments smoother than ever.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <HiUsers className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Seamless POS Integration
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Easily connects with your current system.
                  </p>
                </div>
              </div>
              <div className="">
                <RiUserSettingsLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Faster Payment Processing
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Speeds up transactions for customers.
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
                Refund & Settlement Management.
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Easily handle refunds, settlements, and reconciliations with
                just a few clicks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <RiBarChartBoxLine className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Quick Refund Processing
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Process refunds instantly with ease.
                  </p>
                </div>
              </div>
              <div className="">
                <HiChartPie className="text-orange-400 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Seamless Financial Management
                  </h3>
                  <p className="poppins-regular text-gray-600">
                    Simplify settlements and reconciliations effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/table.jpg?updatedAt=1741328122723"
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
