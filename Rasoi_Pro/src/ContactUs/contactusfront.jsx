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

const contactusfront = () => {
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
      <div className="relative flex justify-center items-center overflow-hidden w-full h-120 perspective-1000">
        <motion.img
          src="https://ik.imagekit.io/jncw2kb8u/busy-woman-doing-many-things-same-time.jpg?updatedAt=1741153583057"
          alt="Luxury Food Display"
          className="absolute w-full h-full object-cover will-change-transform"
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
        <div className="absolute w-full h-full inset-0 bg-black opacity-75 backdrop-blur-lg"></div>

        {/* Text Container */}
        <motion.div
          className="absolute flex flex-col items-start justify-center text-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 bg-transparent text-white will-change-transform w-full"
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
            className="poppins-light text-base text-md font-light tracking-wider uppercase bg-clip-text text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {`Home > Contact Us`}
          </motion.h4>
          <motion.h2
            className="poppins-medium text-2xl sm:text-3xl md:text-6xl leading-snug mt-2 sm:mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            Contact us
          </motion.h2>
        </motion.div>
      </div>
    </>
  );
};

export default contactusfront;
