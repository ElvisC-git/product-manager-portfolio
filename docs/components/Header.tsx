
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

interface NavLinkData {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface HeaderProps {
  navLinks: NavLinkData[];
}

const Header = ({ navLinks }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when the mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const baseLinkClass = "relative transition-colors duration-300 ease-in-out";
  const inactiveLinkClass = "text-[#0B172A]/70 hover:text-indigo-600";
  const activeLinkClass = "text-indigo-600 font-normal";

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center">
        <div className="relative flex items-center group" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `py-2 text-base font-normal ${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          {/* Underline base */}
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          {/* Underline pulse */}
          <div className="absolute bottom-0 left-0 h-0.5 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 underline-pulse-sweep"></div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#0B172A] transition-colors duration-300 hover:text-indigo-600"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        id="mobile-menu"
        className={`absolute top-24 left-0 right-0 z-50 origin-top transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
      >
        <div className="mx-6 sm:mx-8 rounded-b-lg bg-white/90 backdrop-blur-md shadow-xl border border-slate-200/50">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `block rounded-md px-4 py-3 text-center text-base font-normal transition-colors duration-300 ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-[#0B172A]/80 hover:bg-slate-100 hover:text-indigo-600'}`}
                onClick={() => setIsMenuOpen(false)}
                end={link.path === '/'}
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;