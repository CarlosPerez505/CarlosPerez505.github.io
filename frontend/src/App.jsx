import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import BlogList from './blog/BlogList';
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
                {/* Navbar */}
                <NavBar theme={theme} toggleTheme={toggleTheme} />

                {/* Main content container */}
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Portfolio theme={theme} />} />
                        <Route path="/blog" element={<BlogList theme={theme} />} />
                    </Routes>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
