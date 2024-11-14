import React, { useState } from "react";
import us from "/us.png"

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-top justify-center w-full rounded-md border border-[#272835] bg-[#1A1B25] px-4 py-2 text-sm font-medium text-white outline-none"
      >
        <img className="w-[20px] h-[20px] object-cover mr-2" src={us} alt="" />
        United States
        <i className="text-lg ri-arrow-down-s-line"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute -right-48 -top-4 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              India
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Dubai
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              United Kingdom
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
