import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const response = await api.get('/api/posts/user/my-posts');
      setPosts(response.data.data);
    } catch (err) {
      setError('Failed to load your posts');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/api/posts/${postId}`);
        fetchUserPosts(); // Refresh posts
      } catch (err) {
        setError('Failed to delete post');
      }
    }
  };

  if (loading) return <div className="loading-spinner">Loading your posts...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name}!</h1>
        <Link to="/create-post" className="btn btn-primary">
          <span>+</span> Create New Post
        </Link>
      </div>

      <div className="posts-section">
        <h2>Your Posts ({posts.length})</h2>
        
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>You haven't created any posts yet.</p>
            <Link to="/create-post" className="btn btn-outline">
              Write your first post
            </Link>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post._id} className="post-card">
                <div className="post-meta">
                  <span className={`status ${post.status}`}>{post.status}</span>
                  <span className="date">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-stats">
                  <span>{post.readTime} min read</span>
                  {post.tags && <span>{post.tags.length} tags</span>}
                </div>
                
                <div className="post-actions">
                  <Link to={`/post/${post._id}`} className="btn btn-small">
                    View
                  </Link>
                  <Link to={`/edit-post/${post._id}`} className="btn btn-small btn-outline">
                    Edit
                  </Link>
                  <button 
                    onClick={() => deletePost(post._id)}
                    className="btn btn-small btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
