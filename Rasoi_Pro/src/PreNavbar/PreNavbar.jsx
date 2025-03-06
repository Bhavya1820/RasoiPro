import React from "react";
import { Link } from "react-router-dom";
import { MdCallEnd } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const PreNavbar = () => {
  return (
    <>
      <header className="hidden md:flex md:flex-wrap justify-between items-center p-2 mx-5 bg-white">
        {/* Contact Section */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm w-full md:w-auto">
          <div className="flex items-center gap-1">
            <MdCallEnd className="text-gray-500 text-base" />
            <Link to="tel:+91-8968881110" className="text-gray-800 hover:text-blue-500">
            +91-8968881110
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsapp className="text-green-500 text-base" />
            <Link to="https://wa.link/b9farw" className="text-gray-800 hover:text-blue-500">
            +91-8968881110
            </Link>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 w-full md:w-auto">
          <div className="text-gray-800">Searching</div>
          <Link to="/contactus" className="text-gray-800 hover:text-blue-500">
            Contact Us
          </Link>
          <Link to="/aboutus" className="text-gray-800 hover:text-blue-500">
            About Us
          </Link>
        </div>
      </header>
    </>
  );
};

export default PreNavbar;
