import {useState, useEffect} from 'react';
const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/user-dashboard/") 
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p className="text-center mt-10">Loading...</p>;
return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-4">
          Hello {user?.username}, welcome to your dashboard!
        </h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <p className="text-gray-600">You have no new notifications.</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
