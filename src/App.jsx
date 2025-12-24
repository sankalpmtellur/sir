import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Launch from './pages/Launch';
import Login from './pages/user/Login';
import Dashboard from './pages/user/Dashboard';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased text-gray-900">
                <Routes>
                    <Route path="/" element={<Launch />} />
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;