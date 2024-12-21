import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    try {
      setError(null); // Reset error before fetching
      const response = await axios.get('http://localhost:8000/api/search-cars/', {
        params: { make, model, year, min_price: minPrice, max_price: maxPrice },
      });
      setCars(response.data);
    } catch (err) {
      console.error('Error fetching cars:', err);
      setError('Failed to fetch cars. Please try again later.');
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Car Listings</h2>
      <div className="flex flex-wrap justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="w-full md:w-1/5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full md:w-1/5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full md:w-1/5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full md:w-1/5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full md:w-1/5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={fetchCars}
          className="w-full md:w-auto mt-4 md:mt-0 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {car.image && (
              <img
                src={car.image} // Use the full URL directly from the API
                alt={`${car.make} ${car.model}`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-teal-600">{car.make} {car.model}</h3>
              <p className="mt-2 text-lg text-gray-600">
                Year: {car.year} <br />
                Price: ${car.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
