// Configuration file for BlogSpace backend
const config = {
  // Database - Use environment variables only (no hardcoded credentials)
  mongoURI: process.env.MONGO_URI,
  
  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE || '7d',
  
  // Server
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // CORS
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://68b6a41a2a53753299346d9b--tangerine-cupcake-145674.netlify.app',
    'https://68b7d67c50b926e6de351b0a--tangerine-cupcake-145674.netlify.app',
    'https://tangerine-cupcake-145674.netlify.app'
  ]
};

// Validate required environment variables
if (!process.env.MONGO_URI) {
  console.warn('⚠️  WARNING: MONGO_URI not set. Falling back to local MongoDB at mongodb://127.0.0.1:27017/blogspace');
  console.warn('   Set MONGO_URI in your .env to use a specific database.');
  config.mongoURI = 'mongodb://127.0.0.1:27017/blogspace';
}

if (!process.env.JWT_SECRET) {
  console.warn('⚠️  WARNING: JWT_SECRET not set. Using default secret.');
  console.warn('   Please set JWT_SECRET environment variable for production use.');
  config.jwtSecret = 'default_jwt_secret_for_development_only_change_in_production';
}

module.exports = config;
