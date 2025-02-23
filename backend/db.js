import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define MongoDB connection URL
const mongoURL = process.env.MONGODB_localURL; // ✅ Ensure correct environment variable

// Setup mongoose connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true, // ✅ Recommended for compatibility
  useUnifiedTopology: true, // ✅ Avoids deprecation warnings
});

const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
  console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

// Export for ES Module
export default db;
