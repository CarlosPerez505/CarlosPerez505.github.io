import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import BlogList from './components/BlogList.jsx';
import BlogPost from './components/BlogPost.jsx';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import Login from "@/pages/Login.jsx";
import BlogAdmin from "@/pages/blogAdmin.jsx"; // Import AdminPage

function App() {
    const [theme, setTheme] = useState('dark');
    const [isLoading, setIsLoading] = useState(true);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust this time as needed

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

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

                        {/* Route for Admin Page */}
                        <Route path="/admin" element={<AdminPage />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/blogAdmin" element={<BlogAdmin />} />

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
