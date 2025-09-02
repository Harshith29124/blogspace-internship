import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AllPosts.css';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/posts?page=${page}&limit=6`);
      setPosts(response.data.data);
      setPagination(response.data.pagination);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <div className="loading-spinner">Loading posts...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="all-posts-container">
      <div className="posts-header">
        <h1>All Posts</h1>
        <p>Discover stories and insights from our community</p>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <p>No posts available yet.</p>
        </div>
      ) : (
        <>
          <div className="posts-grid">
            {posts.map(post => (
              <article key={post._id} className="post-card">
                <div className="post-meta">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${post.author.name}&background=6366f1&color=fff`}
                    alt={post.author.name}
                    className="author-avatar-small"
                  />
                  <div>
                    <span className="author-name">{post.author.name}</span>
                    <span className="post-date">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <h2 className="post-title">
                  <Link to={`/post/${post._id}`}>{post.title}</Link>
                </h2>
                
                <p className="post-excerpt">{post.excerpt}</p>

                <div className="post-footer">
                  <div className="post-stats">
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-outline"
              >
                Previous
              </button>
              
              <div className="page-numbers">
                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`btn ${page === currentPage ? 'btn-primary' : 'btn-outline'}`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.pages}
                className="btn btn-outline"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllPosts;
