// MakeInquiry.js
import React, { useState } from 'react';
import axios from 'axios';

function MakeInquiry() {
  const [carId, setCarId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { car: carId, message };

    try {
      await axios.post('http://localhost:8000/api/inquiries/', data);
      alert('Inquiry made successfully!');
      setCarId('');
      setMessage('');
    } catch (err) {
      alert('Error making inquiry');
    }
  };

  return (
    <div>
      <h2>Make an Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car ID:</label>
          <input
            type="text"
            value={carId}
            onChange={(e) => setCarId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
}

export default MakeInquiry;
