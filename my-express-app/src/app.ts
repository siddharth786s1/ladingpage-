import express from 'express';
import mongoose from 'mongoose'; // Import mongoose
import { setRoutes } from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

// --- Database Connection ---
const MONGO_URI = 'mongodb://localhost:27017/internHiringDB'; // Replace with your MongoDB connection string

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));
// --- End Database Connection ---

// Middleware
app.use(express.json());

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});