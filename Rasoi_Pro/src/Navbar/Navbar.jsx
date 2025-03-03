import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky bg-black poppins-medium shadow-md p-4">
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
        <div className="hidden md:flex space-x-6">
          <Link to="/features" className="hover:text-blue-500">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/customer" className="hover:text-blue-500">
            Customers
          </Link>
        </div>

        {/* Profile Section */}
        <div className="hidden md:block">Profile Section</div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col text-white items-center mt-2 space-y-4">
          <Link to="/features" className="block py-2 hover:text-blue-500">
            Features
          </Link>
          <Link to="/pricing" className="block py-2 hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/customers" className="block py-2 hover:text-blue-500">
            Customers
          </Link>
          <div className="py-2">Profile Section</div>
        </div>
      )}
    </nav>
  );
}
