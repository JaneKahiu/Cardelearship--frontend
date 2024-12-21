import { useState } from 'react';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message via an API call if needed
    alert(`Message sent: ${message}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          We are here to assist you. Reach out to us through any of the following:
        </p>

        <div className="space-y-4 text-center">
          <p className="text-gray-700">
            <span className="font-semibold text-teal-600">Email:</span> info@example.com
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-600">Phone:</span> +1234567890
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-600">Instagram:</span> @example_instagram
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-teal-600">Facebook:</span> @examplefacebook
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
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
