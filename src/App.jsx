// App.js
import React from 'react';
import SignupForm from './components/SignupForm';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/login';
import HomePage from './components/home';
import Cars from './components/Cars';
import ContactUs from './components/contactus';
import CustomerProfile from './components/CustomerProfile';
import MakeInquiry from './components/Makeinquiry';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login"element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/customer-profile" element={<CustomerProfile />} />
                <Route path="/makeinquiry" element={<MakeInquiry />} />
            </Routes>
        </Router>
    );
};



export default App;