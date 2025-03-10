import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const report_iamge = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <section className="bg-black py-10 overflow-hidden">
        <div className="container px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-07%20161635.png?updatedAt=1741344563218"
              alt="RasoiPro Reports 1"
              className="w-full h-70 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-down-right"
            />
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-10%20112355.png?updatedAt=1741586112441"
              alt="RasoiPro Reports 2"
              className="w-full h-70 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-down-left"
            />
          </div>
          <div className="mt-4 md:mt-8">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-10%20112732.png?updatedAt=1741586316917"
              alt="Zakya Reports 3"
              className="w-full h-auto rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default report_iamge;
