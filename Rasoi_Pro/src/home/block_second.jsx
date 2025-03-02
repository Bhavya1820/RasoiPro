import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const block_second = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <section className="bg-black py-16">
        <div className="text-center mx-auto mb-12 overflow-hidden">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="poppins-bold text-4xl md:text-5xl lg:text-6xl text-white"
          >
            The <span className="text-yellow-400">Rasoi Pro</span> Experience
          </h2>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-10 overflow-hidden"
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300">
            <h3 className="poppins-semibold text-xl md:text-2xl text-black mb-4">
              Get on the cloud
            </h3>
            <p className="poppins-light text-lg text-black">
              Access Rasoi Pro from anywhere, and keep your business running at
              all times. All your data is stored safely and securely in the
              cloud, allowing you to access your store's information wherever
              you are.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300">
            <h3 className="poppins-semibold text-xl md:text-2xl text-black mb-4">
              Receive support when you need it
            </h3>
            <p className="poppins-light text-lg text-black">
              Need help getting started or implementing your POS? Get in touch
              with our team via email, chat, or a phone call—we are here to help
              you whenever needed.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300">
            <h3 className="poppins-semibold text-xl md:text-2xl text-black mb-4">
              It's easy (and free) to get started
            </h3>
            <p className="poppins-light text-lg text-black">
              Get started without any learning curve. Our early customers can
              vouch for Rasoi Pro being extremely simple to use. We're proud to
              offer a solution that can help you get started from day one.
            </p>
          </div>
        </div>
        {/* <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-10 flex justify-center">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300 w-full md:w-2/3 lg:w-1/2">
            <h3 className="poppins-semibold text-xl md:text-2xl text-black mb-4">It's easy (and free) to get started</h3>
            <p className="poppins-light text-lg text-black">
              Get started without any learning curve. Our early customers can vouch for Rasoi Pro being extremely simple to use. We're proud to
              offer a solution that can help you get started from day one.
            </p>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default block_second;
