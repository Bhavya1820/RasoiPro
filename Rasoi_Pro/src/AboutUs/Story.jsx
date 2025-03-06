import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Story = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <div className="w-full mx-auto px-6 md:px-12 py-32 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden overflow-hidden">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-20 text-gold-400 tracking-wide"
        >
          Our Legacy
        </h1>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <p
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-lg md:text-xl text-left text-gray-300 leading-relaxed overflow-hidden"
            >
              Our journey began with a vision—one rooted in ambition,
              resilience, and a desire to redefine the restaurant industry. Aman
              Sharma, a visionary entrepreneur, faced immense challenges
              managing his restaurant—balancing orders, inventory, and customer
              experience, all while navigating financial constraints. Existing
              systems were either overly complex or prohibitively expensive.
              This frustration ignited a passion to create something
              revolutionary.
            </p>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/business-man-posing.jpg?updatedAt=1741172796081"
              className="hidden md:block w-full h-full lg:max-h-120 rounded-xl shadow-2xl border-4 border-gold-500 object-fit transition-transform duration-500 hover:scale-105 overflow-hidden"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/portrait-retro-1920s-english-arabian-business-man-wearing-dark-suit-tie-flat-cap.jpg?updatedAt=1741173208572"
              className="hidden md:block w-full h-full lg:max-h-120 rounded-xl shadow-2xl border-4 border-gold-500 object-fit transition-transform duration-500 hover:scale-105 overflow-hidden"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <p
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-lg md:text-xl text-left text-gray-300 leading-relaxed overflow-hidden"
            >
              Refusing to settle, Aman embarked on a relentless journey to build
              a seamless, intelligent, and accessible POS system. Long nights,
              endless iterations, and unwavering determination transformed his
              dream into reality. His goal was clear—to craft a solution that
              simplifies operations, enhances efficiency, and empowers
              restaurant owners without exorbitant costs. Every line of code was
              written with a deep understanding of the industry’s challenges.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-24">
            <p
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-lg md:text-xl text-left text-gray-300 leading-relaxed overflow-hidden"
            >
              Today, our POS system stands as a testament to that vision—an
              elegant, intuitive, and powerful tool designed exclusively for the
              restaurant industry. It embodies innovation, efficiency, and a
              commitment to excellence. Aman’s mission is unwavering—to empower
              businesses with cutting-edge technology, giving them the freedom
              to focus on what truly matters: delivering exceptional culinary
              experiences.
            </p>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/young-confident-businessman-looking-camera.jpg?updatedAt=1741173400974"
              className="hidden md:block w-full h-full lg:max-h-120 rounded-xl shadow-2xl border-4 border-gold-500 object-fit transition-transform duration-500 hover:scale-105 overflow-hidden"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
