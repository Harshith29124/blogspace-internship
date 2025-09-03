import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Welcome to BlogSpace</h1>
        <p>Share your thoughts, stories, and insights with the world</p>
        
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
          <Link to="/register" className="btn btn-outline">
            Create Account
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3>Write & Share</h3>
          <p>Create beautiful blog posts with our intuitive editor</p>
        </div>
        
        <div className="feature-card">
          <h3>Connect</h3>
          <p>Join a community of writers and readers</p>
        </div>
        
        <div className="feature-card">
          <h3>Discover</h3>
          <p>Find amazing content from talented authors</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
