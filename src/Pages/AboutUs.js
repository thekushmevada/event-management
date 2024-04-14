import React from 'react';

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Marketing Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      position: 'Lead Developer',
      image: 'https://via.placeholder.com/150',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'Project A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Project B',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Project C',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <p className="text-gray-800">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-800">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company History */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Our History</h2>
        <p className="text-lg text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
