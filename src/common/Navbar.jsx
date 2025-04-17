import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Teaching', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Smart Plus', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="w-full top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="w-[95%] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo4.png" alt="Bohdi Park" className="h-9" />
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
            <button className="ml-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 hover:scale-105 transition-transform duration-300">
              Quick Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
