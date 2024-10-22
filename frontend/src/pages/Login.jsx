import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        navigate('/blogAdmin');
    };

    return (
        <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-[#1a1f2e] mb-8">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[#1a1f2e] mb-2">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-[#1a1f2e] mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1a1f2e] text-white py-3 rounded hover:bg-[#252b3b] transition-colors"
                    >
                        Sign In
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-[#1a1f2e] hover:text-[#252b3b] text-sm">
                            Forgot your password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;