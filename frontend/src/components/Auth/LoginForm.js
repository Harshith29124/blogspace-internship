import React, { useState } from 'react';
import api from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      const { token, user } = response.data.data;
      login(user, token);
      navigate('/dashboard');
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back!</h2>
          <p>Sign in to continue to your account.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <button type="button" className="forgot-link">Forgot password?</button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? 'Signing in...' : 'Log In'}
          </button>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="link-button"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
