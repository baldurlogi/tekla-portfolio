import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navClasses = ({ isActive }) => [
  'hover:text-neutral-700 transition-colors font-bold',
  isActive && 'text-neutral-700'
]
  .filter(Boolean)
  .join(' ');

const Navbar = () => {
  return (
    <header className="w-full py-6 px-4 flex items-center justify-between max-w-6xl mx-auto">
      {/* Logo or Name */}
      <Link
        to="/"
        className="text-xl font-semibold tracking-widest uppercase"
      >
        TEKLA
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wide text-neutral-400">
        <NavLink to="/" className={navClasses}>Home</NavLink>
        <NavLink to="/gallery" className={navClasses}>Gallery</NavLink>
        <NavLink to="/bridal" className={navClasses}>Bridal</NavLink>
        <NavLink to="/blog" className={navClasses}>Blog</NavLink>
        <NavLink to="/about" className={navClasses}>About</NavLink>
        <NavLink to="/contact" className={navClasses}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;