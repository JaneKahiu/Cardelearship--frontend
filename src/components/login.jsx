import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });

      // Handle successful login (e.g., redirect to dashboard)
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login errors
      setError(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 mt-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transform hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
