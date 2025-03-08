import React from "react";
import { Link } from "react-router-dom";

const affordablePrice = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-end h-100 bg-gradient-to-b from-gray-800  to-black text-white p-6 text-center">
        <h1 className="poppins-bold text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl">
          Get <span className="text-orange-500">premium quality</span> at a
          price that fits your budget.
        </h1>
        <p className="poppins-light text-lg md:text-xl mt-4 text-gray-300 max-w-xl">
          Experience first, pay later – your satisfaction comes first!
        </p>
        <button className="poppins-medium mt-6 bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          <Link to="/pricing">Get Started Free</Link>
        </button>
      </div>
    </>
  );
};

export default affordablePrice;
