import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    model: '',
    make: '',
    minPrice: '',
    maxPrice: '',
    location: '',
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log('Search parameters:', searchParams);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="w-full p-4 bg-black text-white fixed top-0 left-0 z-50 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wider">
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              CarDealership
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0`}
          >
            <Link to="/cars" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              Cars
            </Link>
            <a href="#ourservices" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              Our Services
            </a>
            <a href="#about" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              About Us
            </a>
            <Link to="/contactus" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              Contact Us
            </Link>
            <Link to="/signup" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              Sign Up
            </Link>
            <Link to="/login" className="block lg:inline text-white hover:text-gray-300 transition duration-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center pt-32 text-center relative z-10"
        style={{
          backgroundImage: "url('/images/06j63xy8rg851.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10">
          Welcome to Our Car Dealership
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white z-10">
          Find your perfect car with us today!
        </p>
        <a
          href="#ourservices"
          className="mt-8 px-6 py-3 bg-white text-black text-lg rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          Explore Our Services
        </a>
      </div>

      {/* Car Search Section */}
      <div className="py-10 bg-gray-100 flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Search for Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={searchParams.model}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              name="make"
              placeholder="Make"
              value={searchParams.make}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={searchParams.location}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <button
            onClick={handleSearch}
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div id="ourservices" className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide">
            Our Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-black">
            We offer a wide range of services including car sales, maintenance, and financing options to ensure you have the best car buying experience.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-16 md:py-24 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">About Us</h2>
          <p className="mt-4 text-base md:text-lg">
            We are a trusted car dealership with years of experience, offering a wide variety of vehicles and excellent customer service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;