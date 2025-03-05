import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const front = ({ Url, Text1, Text2 }) => {
  const isMedium = useMediaQuery({ minWidth: 768 });
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
        {isMedium ? (
          <motion.img
            src={Url}
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
        ) : (
          <div className="absolute w-full h-full bg-black will-change-transform"></div>
        )}

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
          <motion.h2
            className="poppins-bold text-2xl sm:text-3xl md:text-6xl font-extrabold leading-snug mt-2 sm:mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            {Text1}
          </motion.h2>
          <motion.p
            className="poppins-regular mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg md:text-2xl max-w-lg sm:max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          >
            {Text2}
          </motion.p>
          <motion.button
            className="poppins-regular mt-5 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold text-base sm:text-lg rounded-full shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
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

export default front;
