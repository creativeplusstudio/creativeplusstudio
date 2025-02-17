import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ServiceDropdown } from "./ServiceDropdown";
import Logo from "../assets/Logo.png";
import Name from "../assets/name.png";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleLinkClick = () => setIsOpen(false);
  const toggleDropdown = (state) => setIsDropdownOpen(state);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-orange-200 text-slate-900 py-4 p-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/#home" onClick={handleLinkClick}>
            <img src={Logo} alt="CreativePlusStudio Logo" className="w-16 h-7 sm:w-12 sm:h-12" loading="lazy" />
          </a>
          <a href="/#home" onClick={handleLinkClick}>
            <img src={Name} alt="CreativePlusStudio Brand Name" className="h-6 sm:h-8" loading="lazy" />
          </a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} className="hover:scale-105 transition-transform">
            {isOpen ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
          </button>
        </div>

        <ul className={`absolute md:relative top-16 right-4 md:top-auto md:right-auto bg-slate-100 md:bg-transparent shadow-lg md:shadow-none p-6 md:p-2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 border border-black rounded-full transition-all duration-500 ease-in-out transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 md:translate-y-0 md:opacity-100"}`}>
          <li><a href="/#home" onClick={handleLinkClick} className="hover:text-orange-500 transition-colors duration-300">Home</a></li>

          <li className="relative"
              onMouseEnter={() => !isTouch && toggleDropdown(true)}
              onMouseLeave={() => !isTouch && toggleDropdown(false)}>
            <button
              aria-label="Services Menu"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => isTouch && setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-orange-500 transition-colors duration-300">
              Services
            </button>
            {isDropdownOpen && <ServiceDropdown />}
          </li>

          <li><a href="/about" onClick={handleLinkClick} className="hover:text-orange-500 transition-colors duration-300">About</a></li>
          <li><a href="/contact" onClick={handleLinkClick} className="hover:text-orange-500 transition-colors duration-300">Contact Us</a></li>
          <li className="md:hidden"><Button text="Book a Consultant" /></li>
        </ul>

        <div className="hidden md:block">
          <Button text="Book a Consultant" 
          onClick={() => navigate('/contact')}/>
        </div>
      </div>
    </nav>
  );
}