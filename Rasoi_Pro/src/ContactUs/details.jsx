import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const details = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 md:p-12 flex flex-col md:flex-row items-center shadow-xl border border-gray-800 overflow-hidden">
        {/* Left Side - Image */}
        <div
          data-aos="fade-up-right"
          className="w-full md:w-1/2 flex justify-center md:justify-start overflow-hidden"
        >
          <img
            src="https://ik.imagekit.io/jncw2kb8u/happy-and-charming-radio-host-looking-away-while-t-2024-11-14-17-13-25-utc-1.png?updatedAt=1741153879730"
            alt="Podcast Host"
            className="hidden md:block w-full sm:w-11/12 md:w-[70%] h-[600px] object-cover rounded-2xl shadow-lg md:ml-5 lg:ml-20 border-4 border-orange-500"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left overflow-hidden">
          <h3
            data-aos="fade-down"
            className="poppins-light text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3 overflow-hidden"
          >
            Contact Us
          </h3>
          <h1
            data-aos="fade-down"
            className="poppins-medium text-4xl md:text-5xl leading-tight mb-6 text-gray-100 overflow-hidden"
          >
            Reach Out for Support or Collaboration
          </h1>
          <p
            data-aos="fade-down"
            className="poppins-regular text-white text-base sm:text-lg mb-8 overflow-hidden"
          >
            Need assistance? Our team at{" "}
            <span className="text-orange-500">Rasoi Pro POS</span> is here to
            help. Let’s connect and create something amazing together.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex justify-center">
                <Link  to="tel:+91-8968881110"><FaPhoneAlt className="text-orange-500 text-2xl" /></Link>
              </div>
              <div>
                <h2 className="poppins-bold font-semibold text-xl text-gray-200">
                  Phone
                </h2>
                <Link
                  to="tel:+91-8968881110"
                  className="poppins-light text-gray-400 hover:text-orange-500 transition"
                >
                  +91-8968881110
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex justify-center">
                <FaLocationDot className="text-orange-500 text-2xl" />
              </div>
              <div>
                <h2 className="poppins-bold font-semibold text-xl text-gray-200">
                  Address
                </h2>
                <p className="poppins-light text-gray-400 text-center sm:text-left">
                  GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2500"
              className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex justify-center">
                <Link to="mailto:contact.rasoipro@gmail.com"><IoIosMail className="text-orange-500 text-2xl" /></Link>
              </div>
              <div>
                <h2 className="poppins-bold font-semibold text-xl text-gray-200">
                  Email
                </h2>
                <Link
                  to="mailto:contact.rasoipro@gmail.com"
                  className="poppins-light text-gray-400 hover:text-orange-500 transition"
                >
                  contact.rasoipro@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
