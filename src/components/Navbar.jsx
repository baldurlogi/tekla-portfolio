import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navClasses = ({ isActive }) => [
  'hover:text-neutral-700 transition-colors font-bold',
  isActive && 'text-neutral-700'
]
  .filter(Boolean)
  .join(' ');

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      setVisible(isScrollingUp || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window
  }, [prevScrollPos]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`
        w-full py-6 px-4 fixed top-0 left-0 right-0 bg-[#f8f0e4]
        transition-transform duration-300 z-50
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className='flex items-center justify-between max-w-6xl mx-auto relative'>
        {/* Logo or Name */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-widest uppercase z-20"
        >
          TEKLA
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="z-20 md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#f8f0e4] z-[10] md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={closeMenu}
        >
          <nav className="bg-[#f8f0e4] flex flex-col items-center justify-center h-screen gap-8 text-lg uppercase tracking-wide text-neutral-400">
            <NavLink to="/" className={navClasses}>Home</NavLink>
            <NavLink to="/gallery" className={navClasses}>Gallery</NavLink>
            <NavLink to="/bridal" className={navClasses}>Bridal</NavLink>
            <NavLink to="/blog" className={navClasses}>Blog</NavLink>
            <NavLink to="/about" className={navClasses}>About</NavLink>
            <NavLink to="/contact" className={navClasses}>Contact</NavLink>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wide text-neutral-400">
          <NavLink to="/" className={navClasses}>Home</NavLink>
          <NavLink to="/gallery" className={navClasses}>Gallery</NavLink>
          <NavLink to="/bridal" className={navClasses}>Bridal</NavLink>
          <NavLink to="/blog" className={navClasses}>Blog</NavLink>
          <NavLink to="/about" className={navClasses}>About</NavLink>
          <NavLink to="/contact" className={navClasses}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;