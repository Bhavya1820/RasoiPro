import React, { useState } from "react";

const contactForm = () => {
  const options = [
    "Inventory Management",
    "Staff Management",
    "Order Management",
    "Waiter App",
    "Table Orders",
    "Payment Integration",
    "Reporting & Analytics",
    "Multi-location Support",
    "Bar Inventory",
    "Room Booking",
    "Client Panel",
    "Create Order",
    "Create Menu",
    "Create Staff",
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelection = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <>
      <div className="bg-black text-white flex flex-col items-center py-12 px-4">
        <h2 className="poppins-bold text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 mt-10 text-center">
          Your Feedback and Inquiries Matter
        </h2>
        <p className="poppins-medium text-gray-400 mb-8 text-lg md:text-2xl text-center max-w-3xl">
          Your feedback matters to us. Feel free to share your inquiries!
        </p>
        <div className="p-6 md:p-8 rounded-lg w-full max-w-4xl md:max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="poppins-medium block mb-2 text-lg md:text-xl">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full md:h-15 p-3 rounded bg-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="poppins-medium block mb-2 text-lg md:text-xl">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:h-15 p-3 rounded bg-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="poppins-medium block mb-2 text-lg md:text-xl">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full md:h-15 p-3 rounded bg-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="mb-4 mt-6">
            <label className="poppins-medium block mb-2 text-lg md:text-xl">
              Business Type
            </label>
            <select
              id="dropdown"
              value={selectedValue}
              onChange={handleChange}
              className="w-full md:h-15 p-3 rounded bg-gray-700 text-white"
            >
              <option value="">-- Choose an option --</option>
              <option value="hotel">Hotel</option>
              <option value="motel">Motel</option>
              <option value="restaurant">Restaurant</option>
              <option value="store">Store</option>
            </select>
          </div>
          <div className="mb-4 mt-6 relative">
            <label className="poppins-medium block mb-2 text-lg md:text-xl">
              Service
            </label>
            <div
              className="w-full bg-gray-700 md:h-15 p-3 text-white p-2 rounded cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOptions.length > 0
                ? selectedOptions.join(", ")
                : "-- Choose an option --"}
            </div>
            {isOpen && (
              <div className="absolute w-full bg-gray-700 mt-2 rounded shadow-md max-h-60 overflow-auto">
                {options.map((option) => (
                  <div
                    key={option}
                    className={`p-2 cursor-pointer hover:bg-gray-600 flex items-center ${
                      selectedOptions.includes(option) ? "bg-gray-500" : ""
                    }`}
                    onClick={() => handleSelection(option)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      className="mr-2"
                      readOnly
                    />
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="poppins-medium block mb-2 text-lg md:text-xl">
              Message
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full md:h-50 p-3 rounded bg-gray-700 text-white h-40 placeholder:text-gray-400"
            ></textarea>
          </div>
          <button className="w-full md:h-15 py-3 poppins-medium bg-orange-500 text-white rounded hover:bg-orange-400 transition duration-300">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default contactForm;
