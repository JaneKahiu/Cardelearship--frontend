import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
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

      {/* Hero Section with Background Image */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center pt-32 text-center relative z-10"
        style={{
          backgroundImage: "url('/images/06j63xy8rg851.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our Car Dealership
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white z-10 animate__animated animate__fadeIn animate__delay-2s">
          Find your perfect car with us today!
        </p>
        <a
          href="#ourservices"
          className="mt-8 px-6 py-3 bg-white text-black text-lg rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          Explore Our Services
        </a>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Car Sales</h3>
            <p>
              We offer a wide selection of new and pre-owned cars, helping you find the perfect vehicle for your needs and budget.
            </p>
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Car Financing</h3>
            <p>
              Our flexible financing options make it easier for you to drive home in the car you want with affordable rates.
            </p>
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-black hover:text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Car Maintenance</h3>
            <p>
              Keep your vehicle in top shape with our expert maintenance services, from oil changes to complex repairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
