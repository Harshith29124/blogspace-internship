import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-title">BlogSpace Dashboard</h1>
          <div className="nav-right">
            <span className="welcome-text">Welcome, {user?.name}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        <div className="dashboard-content">
          <div className="success-card">
            <h2>🎉 Day 2 Complete!</h2>
            <p>Your authentication system is working perfectly!</p>
            <div className="user-info">
              <h3>User Details:</h3>
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Role:</strong> {user?.role}</p>
              <p><strong>User ID:</strong> {user?.id}</p>
            </div>
            <div className="next-steps">
              <h3>What's Next?</h3>
              <ul>
                <li>✅ User Registration & Login Complete</li>
                <li>✅ JWT Token Authentication Working</li>
                <li>✅ Protected Routes Implemented</li>
                <li>🚀 Ready for Day 3: Blog Post CRUD!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
