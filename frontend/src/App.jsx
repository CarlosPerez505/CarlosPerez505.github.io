import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import Login from './pages/Login';
import BlogAdmin from './pages/BlogAdmin';
import ProtectedRoute from './components/ProtectedRoute';

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
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <MainApp theme={theme} toggleTheme={toggleTheme} isLoading={isLoading} />
        </Auth0Provider>
    );
}

function MainApp({ theme, toggleTheme, isLoading }) {
    const { isLoading: authLoading } = useAuth0();

    // Check both loading states
    if (isLoading || authLoading) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
                <NavBar theme={theme} toggleTheme={toggleTheme} />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
                    <Routes>
                        <Route path="/" element={<Portfolio theme={theme} />} />
                        <Route path="/blog" element={<BlogList theme={theme} />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/blogAdmin"
                            element={
                                <ProtectedRoute>
                                    <BlogAdmin />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
