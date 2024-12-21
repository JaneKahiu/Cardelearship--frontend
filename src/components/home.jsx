import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Navbar - Fixed at the top */}
      <nav className="w-full p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white fixed top-0 left-0 z-50 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wider">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">CarDealership</Link>
          </div>
          {/* Navbar links */}
          <div className="space-x-8">
            <Link to="/cars" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Cars</Link>
            <a href="#ourservices" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Our Services</a>
            <a href="#about" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">About Us</a>
            <Link to="/contactus" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Contact Us</Link>
            <Link to="/signup" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Sign Up</Link>
            <Link to="/login" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Login</Link>
          </div>
        </div>
      </nav>

      {/* Main Content with Background Image */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center pt-32 text-center relative z-10"
        style={{
          backgroundImage: "url('/images/06j63xy8rg851.jpg')", // Path to your image
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-white z-10 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our Car Dealership
        </h1>
        <p className="mt-4 text-xl text-white z-10 animate__animated animate__fadeIn animate__delay-2s">
          Find your perfect car with us today!
        </p>
        <a
  href="#ourservices"
  className="mt-8 px-6 py-3 bg-teal-500 text-white text-lg rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
>
  Explore Our Services
</a>
      </div>

      {/* Our Services Section */}
      <div id="ourservices" className="py-24 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We offer a wide range of services including car sales, maintenance, and financing options to ensure you have the best car buying experience.
          </p>
        </div>

        {/* Service Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Car Sales Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-teal-50">
            <h3 className="text-2xl font-semibold mb-4">Car Sales</h3>
            <p>
              We offer a wide selection of new and pre-owned cars, helping you find the perfect vehicle for your needs and budget.
            </p>
          </div>

          {/* Car Financing Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-teal-50">
            <h3 className="text-2xl font-semibold mb-4">Car Financing</h3>
            <p>
              Our flexible financing options make it easier for you to drive home in the car you want with affordable rates.
            </p>
          </div>

          {/* Car Maintenance Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-teal-50">
            <h3 className="text-2xl font-semibold mb-4">Car Maintenance</h3>
            <p>
              Keep your vehicle in top shape with our expert maintenance services, from oil changes to complex repairs.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-24 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold">About Us</h2>
          <p className="mt-4 text-lg">
            We are a trusted car dealership with years of experience, offering a wide variety of vehicles and excellent customer service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;