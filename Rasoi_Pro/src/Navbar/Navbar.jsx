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
    <nav className="sticky top-0 left-0 w-full bg-black shadow-md p-4 poppins-medium z-50">
      <div className="container text-white flex justify-around items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://ik.imagekit.io/jncw2kb8u/rasoinavbar.png?updatedAt=1741614929158"
              alt="Logo"
              className="h-14 w-25"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-block text-white font-medium text-center inline-flex items-center hover:text-orange-500 hover:cursor-pointer"
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
                      to="/tableorders"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Table Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reportsandanalytics"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reporting & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/waiterapp"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Waiter App
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-orange-500">
            Pricing
          </Link>
          <Link to="/aboutus" className="hover:text-orange-500">
            Abouts Us
          </Link>
          <Link to="/contactus" className="hover:text-orange-500">
            Contact Us
          </Link>
        </div>

        {/* Profile Section */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="inline-block text-white font-medium text-center inline-flex items-center hover:text-orange-500 hover:cursor-pointer"
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
                      to="/tableorders"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Table Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reportsandanalytics"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reporting & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/waiterapp"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Waiter App
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/pricing" className="block py-2 hover:text-orange-500">
            Pricing
          </Link>
          <Link to="/aboutus" className="hover:text-orange-500">
            Abouts Us
          </Link>
          <Link to="/contactus" className="hover:text-orange-500">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
