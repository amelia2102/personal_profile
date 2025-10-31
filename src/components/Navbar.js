import React, { useState } from "react";
import { FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">MyProfile</h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
          <li><a href="#portofolio" className="hover:text-purple-600">Portofolio</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>

        <button className="flex md:flex items-center gap-2 bg-gradient-to-r from-[#755FFF] to-[#FF54B0] text-white px-4 py-2 md:px-5 md:py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
          <FaPaperPlane className="text-sm" />
          Hire Me
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#portofolio" onClick={() => setIsOpen(false)}>Portofolio</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;