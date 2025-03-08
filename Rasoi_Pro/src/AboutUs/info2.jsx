import React from "react";
import { motion } from "framer-motion";

const info2 = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Struggle",
      desc: "Aman faced difficulties managing his restaurant operations efficiently.",
    },
    {
      year: "2020",
      title: "The Idea",
      desc: "Determined to solve the issue, he started working on an affordable POS system.",
    },
    {
      year: "2021",
      title: "Development",
      desc: "Long nights of coding and refining to make it user-friendly.",
    },
    {
      year: "2022",
      title: "Launch & Success",
      desc: "Rasoi Pro is now empowering restaurants across the industry.",
    },
  ];
  return (
    <>
      <section className="bg-black text-white min-h-screen flex items-center justify-center p-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image with Animation
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="hidden md:block rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://ik.imagekit.io/jncw2kb8u/young-confident-businessman-looking-camera.jpg?updatedAt=1741173400974"
              alt="Founder Aman Sharma"
              className="md:w-[600px] lg:w-[400px] h-[700px] object-cover rounded-xl"
            />
          </motion.div> */}

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center overflow-hidden"
          >
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="poppins-bold text-6xl text-gray-300 font-bold">
                Our Legacy
              </h2>
              <p className="poppins-light mt-4 text-gray-300 max-w-2xl mx-auto">
                From a struggling restaurant owner to a tech entrepreneur, Aman
                Sharma built Rasoi Pro to simplify restaurant management.
              </p>
            </motion.div>

            {/* Timeline Section */}
            <div className="relative overflow-hidden">
              <div className="border-l-4 border-orange-500 absolute left-1/2 transform -translate-x-1/2 top-0 h-full"></div>
              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 mx-auto relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="poppins-medium text-2xl font-semibold text-white">
                      {milestone.title}
                    </h3>
                    <p className="poppins-regular text-md text-gray-300 mt-2">
                      {milestone.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-16 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg backdrop-blur-md max-w-3xl mx-auto text-center border border-orange-500 overflow-hidden"
            >
              <p className="poppins-medium text-xl italic text-white">
                "I wanted to build a solution that empowers restaurant owners
                and simplifies their daily operations."
              </p>
              <span className="poppins-light block text-orange-500 mt-4 font-semibold">
                - Abhishek Sharma, Founder
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default info2;
