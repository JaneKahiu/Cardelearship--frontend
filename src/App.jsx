// App.js
import React from 'react';
import RegisterPage from './components/RegisterPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/home';
import Cars from './components/Cars';
import ContactUs from './components/contactus';
import CustomerProfile from './components/CustomerProfile';
import MakeInquiry from './components/Makeinquiry';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';



const App = () => {
    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/login"element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/customer-profile" element={<CustomerProfile />} />
                <Route path="/makeinquiry" element={<MakeInquiry />} />
                <Route path="/userdashboard" element={<Dashboard />} />
            </Routes>
            </AuthProvider>
        </Router>
    );
};



export default App;