import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";

const frontImage = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth animation effect
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 10 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 10 });

  // Scroll-based zoom animation
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xRotation = (e.clientY / innerHeight - 0.5) * 15; // Tilt on Y-axis
    const yRotation = (e.clientX / innerWidth - 0.5) * -15; // Tilt on X-axis

    rotateX.set(xRotation);
    rotateY.set(yRotation);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center overflow-hidden w-full h-100 md:h-200 perspective-1000">
        <motion.img
          src="https://ik.imagekit.io/jncw2kb8u/supermarket-worker-measuring-selling-meat-customer.jpg?updatedAt=1740726577424"
          alt="Luxury Food Display"
          className="absolute w-full h-full object-fit md:object-cover will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            scale,
          }}
          initial={{ opacity: 0.85, rotateX: 0, rotateY: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Overlay for readability */}
        <div className="absolute w-full h-full inset-0 bg-black opacity-70 backdrop-blur-lg"></div>

        {/* Text Container */}
        <motion.div
          className="absolute flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 bg-transparent text-white h-150 md:h-200 lg:h-165 will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            scale,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
            <br className="hidden md:block" /> and Seamless Restaurant
            Management
          </motion.h2>
          <motion.p
            className="poppins-regular mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          >
            Running a restaurant is effortless with{" "}
            <span className="text-yellow-400 font-semibold">Rasoi Pro</span>.
            From quick billing to smart inventory tracking, we help you
            streamline operations, enhance customer experience, and boost
            profits—all in one powerful POS.
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
        </motion.div>
      </div>
    </>
  );
};

export default frontImage;
