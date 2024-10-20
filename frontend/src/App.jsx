import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import BlogList from './components/BlogList.jsx';
import BlogPost from './components/BlogPost.jsx';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Router>
            <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
                {/* Navbar Section */}
                <NavBar theme={theme} toggleTheme={toggleTheme} />

                {/* Main Content Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
                    <Routes>
                        {/* Route for Portfolio Page */}
                        <Route path="/" element={<Portfolio theme={theme} />} />

                        {/* Route for Blog List Page */}
                        <Route path="/blog" element={<BlogList theme={theme} />} />

                        {/* Route for Individual Blog Post */}
                        <Route path="/blog/:id" element={<BlogPost />} />
                    </Routes>
                </div>

                {/* Footer Section */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
