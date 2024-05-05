import React, { useState } from "react";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Music Concert",
      date: "April 20, 2024",
      location: "City Hall",
      description: "Join us for an evening of live music performances.",
      image: "https://via.placeholder.com/300x200",
      link: "https://www.example.com/event1",
      category: "music",
    },
    {
      id: 2,
      title: "Food Festival",
      date: "May 10, 2024",
      location: "Central Park",
      description:
        "Explore a variety of delicious food options from around the world.",
      image: "https://via.placeholder.com/300x200",
      link: "https://www.example.com/event2",
      category: "food",
    },
    {
      id: 3,
      title: "Tech Conference",
      date: "June 5, 2024",
      location: "Convention Center",
      description: "Discover the latest trends and innovations in technology.",
      image: "https://via.placeholder.com/300x200",
      link: "https://www.example.com/event3",
      category: "tech",
    },
  ];

  const filteredEvents = events
    .filter((event) => {
      if (filter === "all") return true;
      return event.category === filter;
    })
    .filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 w-full md:w-1/4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="music">Music</option>
          <option value="food">Food</option>
          <option value="tech">Tech</option>
        </select>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <a
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.location}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Featured Events */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Featured Event 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Featured Event 1</h3>
              <p className="text-gray-600 mb-4">Date: April 25, 2024</p>
              <p className="text-gray-800">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </div>
          {/* Add more featured event cards here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Featured Event 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Featured Event 2</h3>
              <p className="text-gray-600 mb-4">Date: May 5, 2024</p>
              <p className="text-gray-800">
                Description: Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* Add more featured event cards here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Featured Event 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Featured Event 3</h3>
              <p className="text-gray-600 mb-4">Date: June 15, 2024</p>
              <p className="text-gray-800">
                Description: Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">News 1</h3>
              <p className="text-gray-600 mb-4">Published: April 15, 2024</p>
              <p className="text-gray-800">
                Content: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </div>
          {/* Add more news cards here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">News 2</h3>
              <p className="text-gray-600 mb-4">Published: May 1, 2024</p>
              <p className="text-gray-800">
                Content: Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          </div>
          {/* Add more news cards here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300x200"
              alt="News 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">News 3</h3>
              <p className="text-gray-600 mb-4">Published: June 10, 2024</p>
              <p className="text-gray-800">
                Content: Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
