import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navigationMenu.css";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Events", href: "events" },
    { label: "Downloads", href: "#downloads" },
    { label: "Contact", href: "#contact" },
    { label: "Result", href: "#result" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
                KRITI UTSAV
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-purple-700 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-purple-50 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
              KRITI UTSAV
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-purple-50 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-8 px-4">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-purple-700 font-medium text-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-purple-900 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium text-lg w-full">
                Login
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
