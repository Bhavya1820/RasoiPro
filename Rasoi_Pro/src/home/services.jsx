import React from "react";
import { motion } from "framer-motion";
import { FaMoneyCheckDollar, FaBagShopping } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdPayment } from "react-icons/md";

const services = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 bg-white text-gray-900 overflow-hidden">
        <motion.h1
          className="poppins-bold text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover what RasoiPro can do for your store
        </motion.h1>

        {/* Section 1 */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/blake-wisz-tE6th1h6Bfk-unsplash.jpg?updatedAt=1740836338404"
            alt="Shop Assistant"
            className="w-full md:min-h-120 rounded-lg shadow-xl border-4 border-yellow-500 object-cover transition-transform duration-500 hover:scale-105"
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
            <div className="border-b border-gray-300 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Enhance Shop Management for Efficiency
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Improve shop operations by streamlining inventory, sales, and
                customer interactions for better efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <FaMoneyCheckDollar className="text-yellow-500 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Smooth Payments
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Hassle-free and secure transactions.
                  </p>
                </div>
              </div>
              <div className="">
                <FaBagShopping className="text-yellow-500 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Convenient Shopping
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Quick checkouts & easy navigation.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Section 2 */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-gray-300 pb-6">
              <h2 className="poppins-semibold text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Elevate Your POS Experience with Insights
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Use personalized reports to gain deep insights into sales,
                inventory, and customer trends for smarter decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="poppins-medium text-4xl sm:text-5xl font-bold text-yellow-500">
                  25%
                </h3>
                <p className="poppins-regular text-gray-500 text-lg">
                  Reduction in inventory holding costs.
                </p>
              </div>
              <div>
                <h3 className="poppins-medium text-4xl sm:text-5xl font-bold text-yellow-500">
                  15%
                </h3>
                <p className="poppins-regular text-gray-500 text-lg">
                  Shorter queues & happier customers.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/portrait-of-smiling-asian-girl-barista-standing-near-coffee-brewing-kit-making-filter-in-cafe-1.jpg?updatedAt=1740807092223"
            alt="Shop Assistant"
            className="hidden md:block w-full md:min-h-120 rounded-lg shadow-xl border-4 border-yellow-500 object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </section>

        {/* Section 3 */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
          <motion.img
            src="https://ik.imagekit.io/jncw2kb8u/clay-banks-Ox6SW103KtM-unsplash.jpg?updatedAt=1740836516320"
            alt="Shop Assistant"
            className="hidden md:block w-full md:min-h-120 rounded-lg shadow-xl border-4 border-yellow-500 object-cover transition-transform duration-500 hover:scale-105"
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
                Sales & Inventory with Seamless Automation
              </h2>
              <p className="poppins-regular text-gray-600 text-lg">
                Automate your sales and inventory processes to reduce manual
                effort and minimize errors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="">
                <MdManageAccounts className="text-yellow-500 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Effortless Order Management
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Track, process, and fulfill orders.
                  </p>
                </div>
              </div>
              <div className="">
                <MdPayment className="text-yellow-500 text-4xl sm:text-5xl" />
                <div>
                  <h3 className="poppins-medium text-lg sm:text-xl text-gray-700">
                    Fast & Secure Transactions
                  </h3>
                  <p className="poppins-regular text-gray-500">
                    Speed up checkout.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </section>
      </div>
    </>
  );
};

export default services;
