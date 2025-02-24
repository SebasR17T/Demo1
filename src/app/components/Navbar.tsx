'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Acerca de', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center text-3xl font-playfair font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            <img src="/logo.png" alt="CarieCero Logo" className="h-8 mr-2" />
            CarieCero
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-blue-600 transition-all duration-300 group font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-all"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6 text-blue-600" />
            ) : (
              <FiMenu className="h-6 w-6 text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-8 space-y-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl mx-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-white hover:bg-blue-50 rounded-lg transition-all hover:pl-8 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
