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
              src="https://ik.imagekit.io/jncw2kb8u/zh_home_zakya_reports_1.jpg?updatedAt=1740826879339"
              alt="Zakya Reports 1"
              className="w-full h-auto rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-down-right"
            />
            <img
              src="https://ik.imagekit.io/jncw2kb8u/zh_home_zakya_reports_2.jpg?updatedAt=1740826879141"
              alt="Zakya Reports 2"
              className="w-full h-auto rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-down-left"
            />
          </div>
          <div className="mt-4 md:mt-8">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/zh_home_zakya_reports_4%20(1).jpg?updatedAt=1740826879498"
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
