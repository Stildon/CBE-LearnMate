import React from 'react';

const Mascot = ({ width = 120, height = 120, emotion = 'happy' }) => (
    <svg width={width} height={height} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        <defs>
            <linearGradient id="bodyGradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4FACFE" />
                <stop offset="1" stopColor="#00F2FE" />
            </linearGradient>
        </defs>

        {/* Antenna */}
        <line x1="100" y1="20" x2="100" y2="40" stroke="#2C3E50" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="15" r="12" fill="#FF6B6B">
            <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Ears */}
        <ellipse cx="30" cy="100" rx="15" ry="25" fill="#FFB347" />
        <ellipse cx="170" cy="100" rx="15" ry="25" fill="#FFB347" />

        {/* Main Body Head */}
        <rect x="40" y="40" width="120" height="110" rx="40" fill="url(#bodyGradient)" stroke="#2C3E50" strokeWidth="4" />

        {/* Screen/Face */}
        <rect x="55" y="60" width="90" height="70" rx="25" fill="white" />

        {/* Eyes */}
        <circle cx="80" cy="85" r="10" fill="#2C3E50">
            <animate attributeName="ry" values="10;1;10" dur="4s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="120" cy="85" r="10" fill="#2C3E50">
            <animate attributeName="ry" values="10;1;10" dur="4s" repeatCount="indefinite" begin="0s" />
        </circle>

        {/* Cheeks */}
        <circle cx="65" cy="105" r="6" fill="#FF6B6B" opacity="0.6" />
        <circle cx="135" cy="105" r="6" fill="#FF6B6B" opacity="0.6" />

        {/* Mouth */}
        <path d="M85 110 Q 100 120 115 110" stroke="#2C3E50" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Arms (waving) */}
        <path d="M40 120 Q 20 140 10 110" stroke="#2C3E50" strokeWidth="8" strokeLinecap="round" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 40 120" to="-10 40 120" dur="1s" repeatCount="indefinite" values="0 40 120; -15 40 120; 0 40 120" />
        </path>
        <path d="M160 120 Q 180 140 170 160" stroke="#2C3E50" strokeWidth="8" strokeLinecap="round" fill="none" />

    </svg>
);

export default Mascot;
