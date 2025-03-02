import React from "react";
import { motion } from "framer-motion";

const frontText = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 bg-gradient-to-b from-black to-gray-900 text-white h-150 md:h-200 lg:h-165">
        <motion.h4
          className="poppins-medium text-base text-xl md:text-2xl font-light tracking-wider uppercase bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to the Future of Restaurant Management
        </motion.h4>
        <motion.h2
          className="poppins-bold text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug mt-2 sm:mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          Effortless Billing, Smart Inventory,
          <br className="hidden md:block" /> and Seamless Restaurant Management
        </motion.h2>
        <motion.p
          className="poppins-regular mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        >
          Running a restaurant is effortless with{" "}
          <span className="text-yellow-400 font-semibold">Rasoi Pro</span>. From
          quick billing to smart inventory tracking, we help you streamline
          operations, enhance customer experience, and boost profits—all in one
          powerful POS.
        </motion.p>
        <motion.button
          className="poppins-regular mt-5 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-base sm:text-lg rounded-full shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          Get Started
        </motion.button>
      </div>
    </>
  );
};

export default frontText;
