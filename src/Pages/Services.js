import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'We create modern and responsive websites that leave a lasting impression.',
      image: 'https://via.placeholder.com/300x200',
      link: '/services/web-design',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our strategic digital marketing solutions.',
      image: 'https://via.placeholder.com/300x200',
      link: '/services/digital-marketing',
    },
    {
      id: 3,
      title: 'Graphic Design',
      description: 'Bring your brand to life with our creative and eye-catching graphic designs.',
      image: 'https://via.placeholder.com/300x200',
      link: '/services/graphic-design',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-800">{service.description}</p>
              <Link to={service.link} className="block mt-4 text-blue-600 hover:underline">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
