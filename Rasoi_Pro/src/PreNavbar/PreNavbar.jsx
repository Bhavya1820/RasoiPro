import React from "react";
import { Link } from "react-router-dom";
import { MdCallEnd } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const PreNavbar = () => {
  return (
    <>
      <header className="flex flex-wrap justify-between items-center p-2 mx-5 bg-white">
        {/* Contact Section */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm w-full md:w-auto">
          <div className="flex items-center gap-1">
            <MdCallEnd className="text-gray-500 text-base" />
            <Link to="tel:18001029944" className="text-gray-800">
              1800 102 9944
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsapp className="text-green-500 text-base" />
            <Link to="https://wa.me/917305654908" className="text-gray-800">
              +91 7305654908
            </Link>
          </div>
          <Link to="#" className="text-gray-800">
            Contact Us
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 w-full md:w-auto">
          <div className="text-gray-800">Searching</div>
          <Link to="#" className="text-gray-800">
            Company
          </Link>
          <Link to="#" className="text-gray-800">
            Log In
          </Link>
        </div>
      </header>
    </>
  );
};

export default PreNavbar;
