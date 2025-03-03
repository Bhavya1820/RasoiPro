import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const feedbacks = [
    {
      text: "We had used three different software solutions before Zakya, and each transition took almost 20 days, employee training took 2-3 days, and we had to prepare a minimum of 40-50 customer bills to get accustomed to the system. With Zakya's seamless transition and user-friendly interface, training became unnecessary. Our employees started using Zakya effortlessly from the moment of implementation.",
      customerImage:
        "https://ik.imagekit.io/jncw2kb8u/client1.jpg?updatedAt=1738850173431",
      customerName: "Rohit Singh",
      position: "Co-founder, Fresh Mills",
    },
    {
      text: "Zakya not just facilitated digitization by making it a paperless environment but has also contributed to making it ownerless. Now, my business is not solely dependent on me. Within the first month and a half of setting up our first store, we were able to witness an exceptional 500% increase in month-on-month turnover, and now we have opened our second store too.",
      customerImage:
        "https://ik.imagekit.io/jncw2kb8u/client2.jpg?updatedAt=1738850172982",
      customerName: "Mohit Sharma",
      position: "Co-founder, Wanaw Enterprises",
    },
    {
      text: "We were in search of a robust, user-friendly, and reliable software for our Pooja store. Zakya exceeded my expectations, and met all our business requirements. I strongly recommend Zakya for any business who's looking for a scalable software that keeps growing along with your business. With just your inventory data, you can get your business up and running on Zakya in less than 10 minutes.",
      customerImage:
        "https://ik.imagekit.io/jncw2kb8u/client1.jpg?updatedAt=1738850173431",
      customerName: "Harsh Aggarwal",
      position: "Co-founder, Wanaw Enterprises",
    },
    {
      text: "Apart from Zakya's powerful forecasting and real-time monitoring that helps me as a business owner, I love Zakya's user interface. It is simple and easy to understand for anyone. I say this because all the operations at our retail store are managed by staff with very little tech expertise. Zakya has made it easy for them to adapt on the go without any need for extensive training.",
      customerImage:
        "https://ik.imagekit.io/jncw2kb8u/client2.jpg?updatedAt=1738850172982",
      customerName: "Himanshu Sharma",
      position: "Founder, Pashoo Pakshee",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div  data-aos="fade-right" className="max-w-5xl mx-auto p-6 mt-10 overflow-hidden">
      <h2 className="poppins-bold text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-center md:text-left">
        What Our Clients Say: See Our Financial Impact
      </h2>

      <div className="bg-gray-100 p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-lg min-h-[250px] md:min-h-[300px] lg:h-[380px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:w-2/3 flex flex-col justify-center"
          >
            <p className="text-6xl text-orange-400 font-semibold">66</p>
            <p className="poppins-medium text-gray-700 text-lg mt-4 leading-relaxed text-center md:text-left">
              {feedbacks[current].text}
            </p>
            <div className="mt-6 text-center md:text-left">
              <p className="poppins-semibold text-gray-900 text-lg">
                {feedbacks[current].customerName}
              </p>
              <p className="poppins-light text-gray-500 text-sm">
                {feedbacks[current].position}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.img
          key={current}
          src={feedbacks[current].customerImage}
          alt={feedbacks[current].customerName}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-9 rounded-full transition-all ${
              current === index ? "bg-orange-400 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
