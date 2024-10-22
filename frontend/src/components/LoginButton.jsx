import React from 'react';

const LoginButton = ({ onClick, children, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
};

export default LoginButton;
