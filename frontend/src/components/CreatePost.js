import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

import './CreatePost.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    status: 'published'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ align: [] }],
      ['clean']
    ]
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.title.trim()) {
      setError('Title is required');
      setLoading(false);
      return;
    }

    if (!formData.content.trim() || formData.content === '<p><br></p>') {
      setError('Content cannot be empty');
      setLoading(false);
      return;
    }

    // Validate minimum content length (backend requires at least 50 characters)
    const plainTextContent = formData.content.replace(/<[^>]*>/g, '').trim();
    if (plainTextContent.length < 50) {
      setError('Content must be at least 50 characters');
      setLoading(false);
      return;
    }

    try {
      const postData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: Math.ceil(formData.content.split(' ').length / 200) // Rough estimate
      };

      await api.post('/api/posts', postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post-header">
        <h1>Create New Post</h1>
        <button onClick={() => navigate('/dashboard')} className="btn btn-outline">
          Back to Dashboard
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter your post title..."
            className="form-input"
            maxLength="200"
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Brief description of your post (optional)"
            className="form-textarea"
            maxLength="300"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            modules={quillModules}
            placeholder="Write your story..."
            className="quill-editor"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="technology, react, javascript (comma separated)"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate('/dashboard')}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
