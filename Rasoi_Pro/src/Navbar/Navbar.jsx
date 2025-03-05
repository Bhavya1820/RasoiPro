import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // if (window.innerWidth >= 768) {
      // Only for desktop
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // setIsOpen(false);
        setIsDropdownOpen(null);
      }
      // }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="relative bg-black poppins-medium shadow-md p-4 overflow-visible">
      <div className="container text-white mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/rasoinavbar.png?updatedAt=1740657833135"
              alt="Logo"
              className="h-10 w-25"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-block text-white font-medium text-center inline-flex items-center hover:text-blue-500 hover:cursor-pointer"
              type="button"
            >
              Services
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-gray-900 rounded-lg shadow-md w-60 z-50">
                <ul className="py-2 text-md text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/inventorymanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Inventory Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ordermanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Order Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/staffmanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Staff Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paymentintegration"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Payment Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reportinganalytics"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reporting & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/multilocationsupport"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Multi-location Support
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/customer" className="hover:text-blue-500">
            Customers
          </Link>
        </div>

        {/* Profile Section */}
        <div className="hidden md:block"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden flex flex-col text-white items-center mt-2 space-y-4"
        >
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-block text-white font-medium text-center inline-flex items-center hover:text-blue-500 hover:cursor-pointer"
              type="button"
            >
              Services
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-gray-900 rounded-lg shadow-md w-50 z-50">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/inventorymanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Inventory Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ordermanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Order Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/staffmanagement"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Staff Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paymentintegration"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Payment Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reportinganalytics"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reporting & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/multilocationsupport"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Multi-location Support
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/pricing" className="block py-2 hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/customer" className="block py-2 hover:text-blue-500">
            Customers
          </Link>
          <div className="py-2">Profile Section</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
