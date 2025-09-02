const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
    minlength: [50, 'Content must be at least 50 characters']
  },
  excerpt: {
    type: String,
    maxlength: [300, 'Excerpt cannot exceed 300 characters']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'published'
  },
  tags: [{
    type: String,
    trim: true
  }],
  readTime: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create excerpt if not provided
PostSchema.pre('save', function(next) {
  if (!this.excerpt && this.content) {
    // Strip HTML tags for excerpt
    const plainText = this.content.replace(/<[^>]*>/g, '');
    this.excerpt = plainText.substring(0, 150) + '...';
  }
  
  // Calculate read time (average 200 words per minute)
  const plainText = this.content.replace(/<[^>]*>/g, '');
  const wordCount = plainText.split(' ').filter(word => word.length > 0).length;
  this.readTime = Math.ceil(wordCount / 200) || 1;
  
  next();
});

// Populate author info when querying
PostSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: 'name email'
  });
  next();
});

module.exports = mongoose.model('Post', PostSchema);
