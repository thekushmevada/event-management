import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuthenticated, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-white text-2xl font-bold mb-4 md:mb-0">
          <Link to="/">Event Management</Link>
        </div>
        <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/events" className="text-white hover:underline">Events</Link>
          <Link to="/services" className="text-white hover:underline">Services</Link>
          <Link to="/about-us" className="text-white hover:underline">About Us</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          {/* <li><Link to="/auth" className="text-white hover:underline">Login</Link></li> */}
          
          
          {isAuthenticated ? (
            <li><button onClick={logout} className="text-white hover:underline focus:outline-none">Logout</button></li>
          ) : (
            <li><Link to="/auth" className="text-white hover:underline">Login</Link></li>
          )}
         
          
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
