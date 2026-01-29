import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./Launch";
import Readme from "./Readme";
import UserLogin from "./User/pages/Login";
import UserDashboard from "./User/pages/Dashboard";
import Inventory from "./User/pages/Inventory";
import Students from "./User/pages/Students";
import AdminLogin from "./Admin/pages/Login";
import AdminDashboard from "./Admin/pages/Dashboard";
import SportsRoom from "./Admin/pages/SportsRoom";
import Gym from "./Admin/pages/Gym";
import Pool from "./Admin/pages/Pool";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/readme" element={<Readme />} />

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/students" element={<Students />} />
        <Route path="/user/inventory" element={<Inventory />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/sportsroom" element={<SportsRoom />} />
        <Route path="/admin/gym" element={<Gym />} />
        <Route path="/admin/pool" element={<Pool />} />
      </Routes>
    </Router>
  );
}

export default App;
