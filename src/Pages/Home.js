import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Event Management</h1>
          <p className="text-lg md:text-xl mb-6">Plan your events with ease and precision.</p>
          <Link to="/events" className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">View Events</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non convallis turpis. Ut blandit justo ac mi vestibulum, nec pulvinar velit porta. Duis dapibus tellus ut ipsum pulvinar, et condimentum lorem viverra.</p>
          <Link to="/about" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Event Planning</h3>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Venue Management</h3>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Catering Services</h3>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl mb-6">Have questions? Reach out to us!</p>
          <Link to="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Contact</Link>
        </div>
      </section>
      
      
    </div>
  );
};

export default Home;
