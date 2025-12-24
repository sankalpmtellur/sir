import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Launch from './pages/Launch';
import Login from './pages/user/Login';
import Dashboard from './pages/user/Dashboard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDasboard from './pages/admin/AdminDashboard';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased text-gray-900">
                <Routes>
                    <Route path="/" element={<Launch />} />
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<AdminDasboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;