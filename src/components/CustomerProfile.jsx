import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerProfile() {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/customer-profile/',) // Adjust API endpoint as needed
        setProfile(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (err) {
        setError('Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = { username, email };

    try {
      await axios.put('/api/customer/update_profile/', updatedData); // Adjust API endpoint as needed
      setProfile({ ...profile, username, email }); // Update the profile in state
      alert('Profile updated successfully');
    } catch (err) {
      setError('Error updating profile');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Customer Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default CustomerProfile;
