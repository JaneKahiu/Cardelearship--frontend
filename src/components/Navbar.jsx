import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">CarDealership</Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/cars" className="text-white hover:text-gray-300">Cars</Link>
          <Link to="/contactus" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
