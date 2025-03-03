import { motion } from "framer-motion";
import { FaCoins, FaPeopleRoof, FaShareNodes } from "react-icons/fa6";

const cards = () => {
  const cards= [
    {
      icon: <FaCoins />,
      title: "Sell better",
      text: "Sell beyond your physical store with a powerful mobile app that allows customers to order even when your store is not open.",
    },
    {
      icon: <FaPeopleRoof />,
      title: "Manage your entire business",
      text: "Inventory, sales and billing, customers, suppliers, credit payments, and more, all on one platform.",
    },
    {
      icon: <FaShareNodes />,
      title: "Join the digital revolution",
      text: "Zakya helps your business transform digitally and go where your customers are.",
    },
  ]
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:px-20 lg:px-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >
          <h1 className="poppins-medium text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-800 text-transparent bg-clip-text drop-shadow-lg">
          You’ve done everything to build your business. <br /> We help you take the next big step.
        </h1>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl text-center flex flex-col items-center hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-gold text-5xl mb-4">{item.icon}</div>
              <h2 className="poppins-medium text-xl font-bold mb-2">{item.title}</h2>
              <p className="poppins-regular text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default cards;
