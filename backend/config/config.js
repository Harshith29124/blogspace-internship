// Configuration file for BlogSpace backend
const config = {
  // Database - Use MongoDB Atlas for cloud deployment
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://username:password@cluster.mongodb.net/blogspace?retryWrites=true&w=majority',
  
  // JWT
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret_for_development_only_change_in_production',
  jwtExpire: process.env.JWT_EXPIRE || '7d',
  
  // Server
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // CORS
  allowedOrigins: [
    'http://localhost:3000',
    'https://68b6a41a2a53753299346d9b--tangerine-cupcake-145674.netlify.app',
    'https://68b7d67c50b926e6de351b0a--tangerine-cupcake-145674.netlify.app',
    'https://tangerine-cupcake-145674.netlify.app'
  ]
};

// Validate configuration
if (!process.env.MONGO_URI) {
  console.warn('⚠️  WARNING: MONGO_URI not set. Using default connection string.');
  console.warn('   Please set MONGO_URI environment variable for production use.');
  console.warn('   Example: mongodb+srv://username:password@cluster.mongodb.net/blogspace');
}

if (!process.env.JWT_SECRET) {
  console.warn('⚠️  WARNING: JWT_SECRET not set. Using default secret.');
  console.warn('   Please set JWT_SECRET environment variable for production use.');
}

module.exports = config;
