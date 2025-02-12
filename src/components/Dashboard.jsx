import { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const [res, setRes] = useState("");
  const api = useAxios();
  const token = localStorage.getItem("authTokens"); 
  
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser({
        user_id: decoded.user_id,
        username: decoded.username,
        full_name: decoded.full_name,
        image: decoded.image,
      });
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/user-dashboard/");
        setRes(response.data.response); 
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    if (token) {
      fetchData(); 
    }
  }, [api, token]); 

  return (
    <div className="min-h-screen flex">
      <nav className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2"><a href="/" className="block p-2 rounded hover:bg-gray-700">Home</a></li>
          <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-gray-700">Orders</a></li>
          <li className="mb-2"><a href="/cars" className="block p-2 rounded hover:bg-gray-700">Cars</a></li>
          <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-gray-700">Reports</a></li>
        </ul>
      </nav>

      <main className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center border-b pb-3 mb-5">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
          <span className="text-lg font-medium">Hello, {user.username}!</span>
        </div>

        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          <strong>{res}</strong>
        </div>

        <h2 className="text-xl font-semibold mb-3">Section Title</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Header</th>
                <th className="p-2 border">Header</th>
                <th className="p-2 border">Header</th>
                <th className="p-2 border">Header</th>
              </tr>
            </thead>
            <tbody>
              {/* Table data goes here */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
