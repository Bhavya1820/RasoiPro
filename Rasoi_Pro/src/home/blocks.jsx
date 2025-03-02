import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blocks = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-gradient-to-b from-black to-gray-700 text-white p-6 md:p-10 lg:p-20 h-100 overflow-hidden"
        >
          <h2 className="poppins-bold text-3xl md:text-5xl font-bold mb-4 md:p-15">
            The <span className="text-yellow-400">Rasoi Pro</span> <br />{" "}
            Experience
          </h2>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-gray-100 text-black p-6 md:p-10 lg:p-20 h-100 overflow-hidden"
        >
          <h3 className="poppins-semibold border-b border-black text-2xl font-semibold mb-2">
            Get on the cloud
          </h3>
          <p className="poppins-light text-xl">
            Access Rasoi Pro from anywhere, and keep your business running at
            all times. All your data is stored safely and securely in the cloud,
            allowing you to access your store's information wherever you are.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-black text-white md:bg-gray-100 md:text-black  p-6 md:p-10 lg:p-20 h-100 overflow-hidden"
        >
          <h3 className="poppins-semibold border-b border-white md:border-black text-2xl font-semibold mb-2">
            Receive support when you need it
          </h3>
          <p className="poppins-light text-lg text-xl">
            Need help getting started or implementing your POS? Get in touch
            with our team via email, chat, or a phone call—we are here to help
            you whenever needed.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-gradient-to-b from-gray-700 to-black text-black md:bg-black md:text-white p-6 md:p-10 lg:p-20 h-100 overflow-hidden"
        >
          <h3 className="poppins-semibold border-b border-black md:border-white text-2xl font-semibold mb-2">
            It's easy (and free) to get started
          </h3>
          <p className="poppins-light text-lg text-xl">
            Get started without any learning curve. Our early customers can
            vouch for Rasoi Pro being extremely simple to use. We're proud to
            offer a solution that can help you get started from day one.
          </p>
        </div>
      </div>
    </>
  );
};

export default blocks;
