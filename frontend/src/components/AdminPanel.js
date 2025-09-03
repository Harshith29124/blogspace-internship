import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminPanel.css';

const AdminPanel = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchUsers();
      fetchPosts();
    }
  }, [user]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('https://blogspace-internship.onrender.com/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('https://blogspace-internship.onrender.com/api/admin/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.put(`https://blogspace-internship.onrender.com/api/admin/users/${userId}/role`, 
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchUsers(); // Refresh users
    } catch (error) {
      alert('Failed to update user role');
    }
  };

  const deletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('authToken');
        await axios.delete(`https://blogspace-internship.onrender.com/api/admin/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchPosts(); // Refresh posts
      } catch (error) {
        alert('Failed to delete post');
      }
    }
  };

  if (user?.role !== 'admin') {
    return <div className="error-message">Access denied. Admin only.</div>;
  }

  if (loading) return <div className="loading-spinner">Loading admin data...</div>;

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <span className="stat-number">{users.length}</span>
        </div>
        <div className="stat-card">
          <h3>Total Posts</h3>
          <span className="stat-number">{posts.length}</span>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
        <button 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Post Management
        </button>
      </div>

      {activeTab === 'users' && (
        <div className="users-section">
          <h2>User Management</h2>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${user.role}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          onClick={() => updateUserRole(user._id, 'admin')}
                          className="btn btn-small btn-primary"
                          disabled={user.role === 'admin'}
                        >
                          Make Admin
                        </button>
                        <button 
                          onClick={() => updateUserRole(user._id, 'user')}
                          className="btn btn-small btn-outline"
                          disabled={user.role === 'user'}
                        >
                          Make User
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'posts' && (
        <div className="posts-section">
          <h2>Post Management</h2>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post._id}>
                    <td>
                      <Link to={`/post/${post._id}`} className="post-link">
                        {post.title}
                      </Link>
                    </td>
                    <td>{post.author.name}</td>
                    <td>
                      <span className={`status-badge ${post.status}`}>
                        {post.status}
                      </span>
                    </td>
                    <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button 
                        onClick={() => deletePost(post._id)}
                        className="btn btn-small btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
