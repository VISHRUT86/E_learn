import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import db from './db.js';
import passport from './auth.js'; // ✅ Ensure lowercase 'passport' if it's default export
import personRoutes from './routes/person.routes.js';
import courseRoutes from './routes/course.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Logging middleware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
  next();
};

// Apply logging middleware globally
app.use(logRequest);

// Initialize Passport.js authentication
app.use(passport.initialize());

// Local authentication middleware
const localAuthMiddleware = passport.authenticate('local', { session: false });

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to our WebPortal...');
});

app.use('/person',  personRoutes);
app.use('/course', courseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
