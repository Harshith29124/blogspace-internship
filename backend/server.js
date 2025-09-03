const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS - UPDATED TO INCLUDE NETLIFY URL
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://68b6a41a2a53753299346d9b--tangerine-cupcake-145674.netlify.app'
  ],
  credentials: true
}));

// Route files
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/admin', require('./routes/admin'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'BlogSpace API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
