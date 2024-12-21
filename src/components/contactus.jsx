import { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message via an API call if needed
    alert(`Message sent: ${message}`);
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}

      <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-black via-gray-800 to-black rounded-xl shadow-xl mt-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h1>

        {/* Contact Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            We are here to assist you. Reach out to us through any of the following:
          </p>

          <div className="space-y-4 text-center">
            <p className="text-gray-700">
              <span className="font-semibold text-black">Email:</span> info@example.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Phone:</span> +1234567890
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Instagram:</span> @example_instagram
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Facebook:</span> @examplefacebook
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              rows="5"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
