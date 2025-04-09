import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/Doctors', label: 'Doctors' },
    { to: '/Service', label: 'Service' },
    { to: '/Specialists', label: 'Specialists' },
    { to: '/About', label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-primary': '' } fixed top-0 z-50 w-full transition-colors duration-300`}>
      <nav className=" text-white">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
       
            <div className="flex items-center space-x-4">
              <i className="fas fa-hospital-alt text-3xl text-highlight animate-pulse-slow"></i>
              <NavLink to="/" className="text-2xl font-bold">
                KHA Health
              </NavLink>
            </div>

         
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    `${isActive ? 'text-[18px] font-bold' : 'hover:text-highlight transition-colors duration-200 font-medium'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
             
            </div>

            {/* Right-side Buttons & Mobile Menu Toggle */}
            <div className="flex items-center space-x-6">
              <span className="theme-slider">
                <i className="fas fa-sun sun"></i>
              </span>

              <button className="px-5 py-2 bg-highlight hover:bg-highlight-light text-white rounded-lg transition-all duration-300 transform hover:scale-105 hidden md:flex items-center">
                <i className="fas fa-user-circle mr-2"></i> Patient Login
              </button>

              <button
                onClick={() => setMenuVisible(!menuVisible)}
                className="lg:hidden text-white text-2xl"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menuVisible ? 'block' : 'hidden'
        } lg:hidden mt-4 pb-4 bg-body text-body transition-all transform duration-300`}
        style={{ maxHeight: menuVisible ? '300px' : '0', overflow: 'hidden' }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="block py-3 hover:text-highlight border-b border-custom"
          >
            {link.label}
          </NavLink>
        ))}

        <div className="pt-4">
          <button className="w-full px-4 py-3 bg-highlight hover:bg-highlight-light text-white rounded-lg transition-colors flex items-center justify-center">
            <i className="fas fa-user-circle mr-2"></i> Patient Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
