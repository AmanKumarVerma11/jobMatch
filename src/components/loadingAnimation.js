// LoadingAnimation.js
import React from 'react';
import '../styles/loadingAnimation.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-animation">
            <div className="spinner"></div>
            <p>Generating quiz for your job role...</p>
        </div>
    );
};

export default LoadingAnimation;
