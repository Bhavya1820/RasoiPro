import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    businesstype: "",
    services: [],
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChangeform = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelection = (option) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(option)
        ? prev.services.filter((item) => item !== option)
        : [...prev.services, option],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setResponseMessage("Phone number must be exactly 10 digits!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/submit", formData);
      if (res.data.error === "Email already exists") {
        setResponseMessage(
          "Email already exists. Please use a different email."
        );
        return;
      }

      alert("Form submitted successfully!"); // Alert added here

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        businesstype: "",
        services: [],
        message: "",
      });
    } catch (error) {
      setResponseMessage(error.response?.data?.error || "An error occurred!");
    }
  };

  return (
    <div className="bg-black text-white flex flex-col items-center py-12 px-4">
      <h2 className="text-4xl font-semibold mb-4 text-center">
        Your Feedback and Inquiries Matter
      </h2>
      <p className="text-gray-400 mb-8 text-lg text-center max-w-3xl">
        Your feedback matters to us. Feel free to share your inquiries!
      </p>
      <form onSubmit={handleSubmit} className="p-6 rounded-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-lg">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.fullName}
              onChange={handleChangeform}
            />
          </div>
          <div>
            <label className="block mb-2 text-lg">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.email}
              onChange={handleChangeform}
            />
          </div>
          <div>
            <label className="block mb-2 text-lg">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.phoneNumber}
              onChange={handleChangeform}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Business Type</label>
          <select
            name="businesstype"
            value={formData.businesstype}
            onChange={handleChangeform}
            className="w-full p-3 rounded bg-gray-700 text-white"
          >
            <option value="">-- Choose an option --</option>
            <option value="hotel">Hotel</option>
            <option value="motel">Motel</option>
            <option value="restaurant">Restaurant</option>
            <option value="store">Store</option>
          </select>
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 text-lg">Services</label>
          <div
            className="w-full bg-gray-700 p-3 text-white rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {formData.services.length > 0
              ? formData.services.join(", ")
              : "-- Choose an option --"}
          </div>
          {isOpen && (
            <div className="absolute w-full bg-gray-700 mt-2 rounded shadow-md max-h-60 overflow-auto">
              {options.map((option) => (
                <div
                  key={option}
                  className={`p-2 cursor-pointer hover:bg-gray-600 flex items-center ${
                    formData.services.includes(option) ? "bg-gray-500" : ""
                  }`}
                  onClick={() => handleSelection(option)}
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(option)}
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
          <label className="block mb-2 text-lg">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            className="w-full p-3 rounded bg-gray-700 text-white h-40"
            value={formData.message}
            onChange={handleChangeform}
          ></textarea>
        </div>
        {responseMessage && (
          <p className="text-center mb-4 text-lg text-red-500">
            {responseMessage}
          </p>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-400 transition duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
