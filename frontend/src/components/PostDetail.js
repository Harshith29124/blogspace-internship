import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(`https://blogspace-internship.onrender.com/api/posts/${id}`);
      setPost(response.data.data);
    } catch (err) {
      setError('Post not found');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('authToken');
        await axios.delete(`https://blogspace-internship.onrender.com/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        navigate('/dashboard');
      } catch (err) {
        alert('Failed to delete post');
      }
    }
  };

  const canEdit = user && post && (user.id === post.author._id || user.role === 'admin');

  if (loading) return <div className="loading-spinner">Loading post...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!post) return <div className="error-message">Post not found</div>;

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <button onClick={() => navigate(-1)} className="btn btn-outline">
          ← Back
        </button>
        
        {canEdit && (
          <div className="post-actions">
            <Link to={`/edit-post/${post._id}`} className="btn btn-outline">
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>

      <article className="post-content">
        <header className="post-meta">
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-info">
            <div className="author-info">
              <img 
                src={`https://ui-avatars.com/api/?name=${post.author.name}&background=6366f1&color=fff`} 
                alt={post.author.name}
                className="author-avatar"
              />
              <div>
                <span className="author-name">{post.author.name}</span>
                <span className="post-date">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            
            <div className="post-stats">
              <span className={`status ${post.status}`}>{post.status}</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div 
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default PostDetail;
