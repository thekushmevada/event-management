import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">EventElevate</h2>
          <p className="text-sm">"Raising Moments, Elevating Experiences"</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-white hover:underline">Terms of Service</Link>
          <Link to="/contact" className="text-white hover:underline">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
