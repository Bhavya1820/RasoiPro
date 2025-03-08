import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Eye,
  Target,
  Box,
  ShoppingCart,
  Users,
  CreditCard,
  Smartphone,
  BarChart3,
  UtensilsCrossed,
  MapPin,
  Gift,
} from "lucide-react";

const Cards = () => {
  const content = [
    {
      title: "Inventory Management",
      text: "Real-time stock tracking to reduce waste.",
      icon: <Box size={42} className="text-yellow-400" />,
    },
    {
      title: "Order Management",
      text: "Efficient order tracking and timely delivery.",
      icon: <ShoppingCart size={42} className="text-blue-400" />,
    },
    {
      title: "Staff Management",
      text: "Optimized employee scheduling and attendance tracking.",
      icon: <Users size={42} className="text-green-400" />,
    },
    {
      title: "Payment Integration",
      text: "Secure multi-channel payment solutions.",
      icon: <CreditCard size={42} className="text-purple-400" />,
    },
    {
      title: "Waiter App",
      text: "Empower staff with order tracking tools.",
      icon: <Smartphone size={42} className="text-orange-400" />,
    },
    {
      title: "Reporting & Analytics",
      text: "Generate real-time reports on sales and customer behavior.",
      icon: <BarChart3 size={42} className="text-red-400" />,
    },
    {
      title: "Table Orders",
      text: "Manage reservations & track orders easily.",
      icon: <UtensilsCrossed size={42} className="text-red-400" />,
    },
    {
      title: "Multi-location Support",
      text: "Oversee multiple outlets from one dashboard.",
      icon: <MapPin size={42} className="text-green-400" />,
    },
    {
      title: "Loyalty Program",
      text: "Reward customers with offers & discounts.",
      icon: <Gift size={42} className="text-yellow-400" />,
    },
  ];

  const [offsetY, setOffsetY] = useState(0);

  // Track the scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * -0.1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 md:px-8 py-16">
      {/* Background Image with Parallax */}
      <img
        src="https://ik.imagekit.io/jncw2kb8u/blake-wisz-Kx3o6_m1Yv8-unsplash.jpg?updatedAt=1741245052645"
        alt="Blog Background"
        className="absolute inset-0 w-full h-[2700px] lg:h-[1500px] md:h-[2000px] object-fit md:object-cover"
        style={{
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-md"></div>

      {/* Why Choose Us Section */}
      <div className="relative max-w-7xl w-full px-6 py-16 text-white text-center">
        <h1 className="poppins-bold text-4xl font-extrabold text-orange-500 mb-10">
          WHY CHOOSE US
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 border border-gray-500 rounded-xl p-6 shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300 flex items-center gap-4"
            >
              {feature.icon}
              <div>
                <h2 className="poppins-semibold text-xl font-semibold text-white">
                  {feature.title}
                </h2>
                <p className="poppins-medium text-gray-300">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
