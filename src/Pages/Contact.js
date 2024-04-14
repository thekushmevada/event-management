import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">Send Message</button>
        </form>
        
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            title="Google Maps"
            className="w-full h-96"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.508651735603!2d-74.00628558459748!3d40.71277607933176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25987a4d5ae9b%3A0xa77e5372e208f94b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1648770534373!5m2!1sen!2s"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
