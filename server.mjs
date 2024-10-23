import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import blogRoutes from './api/routes/blogRoutes.mjs';

const app = express();
const PORT = 5000;

// General middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Mount the blog routes
app.use('/blogs', blogRoutes);

// Error-handling middleware (must be at the end)
app.use((err, req, res, next) => {
    console.error('Error:', err.message); // Log the error
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
