import React from "react";
import { FaBullseye, FaEye, FaFlag } from "react-icons/fa";
import { motion } from "framer-motion";

const our = () => {
  const sections = [
    {
      icon: <FaBullseye className="text-orange-500 text-4xl" />, // Mission Icon
      title: "Our Mission",
      description:
        "Empowering restaurants with a seamless POS system that enhances efficiency, streamlines operations, and maximizes growth.",
    },
    {
      icon: <FaEye className="text-orange-500 text-4xl" />, // Vision Icon
      title: "Our Vision",
      description:
        "To revolutionize the restaurant industry with cutting-edge technology, making management effortless and success inevitable.",
    },
    {
      icon: <FaFlag className="text-orange-500 text-4xl" />, // Goal Icon
      title: "Our Goal",
      description:
        "Delivering an intuitive, feature-rich POS system that simplifies workflows and elevates customer satisfaction.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6 sm:px-10 flex flex-col items-center">
        <h2 className="poppins-bold text-4xl sm:text-5xl lg:text-6xl text-gray-300 mt-6 sm:mt-10 mb-6 sm:mb-8 uppercase tracking-widest text-center">
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-300 p-5 sm:p-6 rounded-2xl shadow-lg border border-gold text-center hover:shadow-gold transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {section.icon}
              </div>
              <h3 className="poppins-bold text-xl sm:text-2xl text-gray-700 mb-2">
                {section.title}
              </h3>
              <p className="poppins-regular text-gray-700 text-sm sm:text-base">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default our;
