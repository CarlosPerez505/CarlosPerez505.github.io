import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-8"></div>
                <h2 className="text-4xl font-bold text-blue-500 mb-4">Loading</h2>
                <p className="text-xl text-gray-300">Preparing your experience...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;