import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import https from 'https';
import http from 'http';
import blogRoutes from './api/routes/blogRoutes.mjs';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

// Create an Express application
const app = express();
const PORT = 5000;

// Check if HTTPS certificates exist
let useHTTPS = false;
let httpsOptions = {};
try {
    httpsOptions = {
        key: fs.readFileSync('./certs/server.key'),
        cert: fs.readFileSync('./certs/server.cert')
    };
    useHTTPS = true;
} catch (err) {
    console.warn('HTTPS certificates not found, using HTTP instead.');
}

// Apply Helmet for security headers
app.use(helmet());

// CORS Configuration - Allow both production and localhost
const corsOptions = {
    origin: ['https://cp3develops.tech', 'http://localhost:5173'], // Adjust as needed
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Apply Rate Limiting (only in production)
if (process.env.NODE_ENV === 'production') {
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: 'Too many requests from this IP, please try again later.'
    });
    app.use(limiter);
}

// General middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// JWT Middleware for admin access (e.g., /blogAdmin)
const jwtCheck = auth({
    audience: 'https://blog-api', // Replace with your API identifier from Auth0
    issuerBaseURL: 'https://dev-6vwc1vuimp18pfg1.us.auth0.com', // Replace with your Auth0 domain
    tokenSigningAlg: 'RS256'
});

// Middleware for checking admin permissions on /blogAdmin route
const checkAdminPermissions = requiredScopes('manage:blogs');

// Public route for testing
app.get('/test', (req, res) => {
    res.send('Server is working!');
});

// Public route for /blogs (no JWT required)
app.use('/blogs', blogRoutes);

// Protected route for /blogAdmin (requires 'manage:blogs' permission)
app.get('/blogAdmin', jwtCheck, checkAdminPermissions, (req, res) => {
    res.send('Welcome to the Blog Admin!');
});

// Error-handling middleware (must be at the end)
app.use((err, req, res, next) => {
    console.error('Error:', err.message); // Log the error
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start the server
if (useHTTPS) {
    https.createServer(httpsOptions, app).listen(PORT, () => {
        console.log(`Secure server is running on https://localhost:${PORT}`);
    });
} else {
    http.createServer(app).listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
