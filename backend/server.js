const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/config');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: config.allowedOrigins,
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    database: 'Connected',
    jwt: config.jwtSecret === 'default_jwt_secret_for_development_only_change_in_production' ? 'Using default' : 'Configured'
  });
});

// Test endpoint for debugging
app.get('/test-db', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    const connectionState = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    
    res.json({
      status: 'Database Test',
      connectionState: states[connectionState],
      readyState: connectionState,
      database: mongoose.connection.name || 'Not connected',
      host: mongoose.connection.host || 'Not connected'
    });
  } catch (error) {
    res.status(500).json({
      error: 'Database test failed',
      message: error.message
    });
  }
});

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`JWT Secret: ${config.jwtSecret === 'default_jwt_secret_for_development_only_change_in_production' ? 'Using default' : 'Set'}`);
});
