const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  try {
    console.log('🔌 Attempting to connect to MongoDB...');
    console.log(`   URI: ${config.mongoURI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`);
    
    const conn = await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`   Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ Database connection error:');
    console.error(`   Message: ${error.message}`);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('   This usually means MongoDB is not running or the connection string is incorrect.');
    } else if (error.message.includes('Authentication failed')) {
      console.error('   Authentication failed. Check your username/password in the connection string.');
    } else if (error.message.includes('ENOTFOUND')) {
      console.error('   Could not resolve hostname. Check your connection string.');
    }
    
    console.error('\n💡 To fix this:');
    console.error('   1. Set MONGO_URI environment variable');
    console.error('   2. Use MongoDB Atlas or another cloud MongoDB service');
    console.error('   3. Ensure the connection string is correct');
    
    process.exit(1);
  }
};

module.exports = connectDB;
