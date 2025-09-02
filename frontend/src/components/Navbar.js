import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">BlogSpace</Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create-post">Write</Link>
            {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
            <button onClick={handleLogout} className="nav-button">
              Logout
            </button>
            <div className="user-info">
              <img 
                src={`https://ui-avatars.com/api/?name=${user?.name}&background=6366f1&color=fff`}
                alt={user?.name}
                className="user-avatar"
              />
              <span>Hi, {user?.name}</span>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
