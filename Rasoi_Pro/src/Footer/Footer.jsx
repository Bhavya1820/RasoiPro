import React from "react";
import { Link } from "react-router-dom";
import { MdCallEnd } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const item = [
    {
      text:"Inventory Management",
      link:"/inventorymanagement"
    },
    {
      text:"Order Management",
      link:"/ordermanagement"
    },
    {
      text:"Staff Management",
      link:"/staffmanagement"
    },
    {
      text:"Payment Integration",
      link:"/paymentintegration"
    },
    {
      text:"Reporting & Analytics",
      link:"/reportsandanalytics"
    },
    {
      text:"Waiter App",
      link:"/waiterapp"
    },
  ]
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  return (
    <>
      <footer className="poppins-regular bg-black text-white p-10 md:p-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15">
          {/* Description Section */}
          <div>
            <img
              src="https://ik.imagekit.io/jncw2kb8u/rasoinavbar.png?updatedAt=1740657833135"
              alt="Rasoi Pro Logo"
              className="w-30"
            />
            <p className="text-white mt-6 text-left lg:text-base text-sm">
              Rasoi Pro is a cutting-edge Point of Sale (POS) system designed
              for restaurants and food service businesses. It streamlines order
              management, billing, and inventory tracking for efficient
              operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-auto border-b-2 border-blue-500 pb-2 flex justify-between items-center md:block"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
            >
              Services
              <span className="md:hidden">
                {showQuickLinks ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h4>
            <ul
              className={`mt-4 space-y-3 md:block ${
                showQuickLinks ? "block" : "hidden"
              }`}
            >
              {item.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-white hover:text-blue-400 transition"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-auto border-b-2 border-blue-500 pb-2 flex justify-between items-center md:block"
              onClick={() => setShowCompany(!showCompany)}
            >
              COMPANY
              <span className="md:hidden">
                {showCompany ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h4>
            <ul
              className={`mt-4 space-y-3 md:block ${
                showCompany ? "block" : "hidden"
              }`}
            >
              {[
                "Our Story",
                "Customers",
                "Blog",
                "Privacy Policy",
                "Jumpstart",
                "Terms",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-white hover:text-blue-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact & Socials */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold border-b-2 border-blue-500 pb-2">
                CONTACT
              </h4>
              <div className="flex items-center gap-2 mt-4">
                <MdCallEnd className="text-gray-500 text-lg" />
                <Link
                  to="tel:+91-8968881110"
                  className="text-white hover:text-blue-400 transition"
                >
                  +91-8968881110
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaWhatsapp className="text-green-500 text-lg" />
                <Link
                  to="https://wa.link/b9farw"
                  className="text-white hover:text-blue-400 transition"
                >
                  +91-8968881110
                </Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold border-b-2 border-blue-500 pb-2">
                CONNECT WITH US
              </h4>
              <div className="flex space-x-4 mt-4">
                <Link
                  to="https://www.instagram.com/dodun.softsolutions"
                  className="text-pink-500 text-2xl hover:scale-110 transition"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/dodun-soft-solutions-co"
                  className="text-blue-700 text-2xl hover:scale-110 transition"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://wa.link/b9farw"
                  className="text-green-500 text-2xl hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Rasoi Pro. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
