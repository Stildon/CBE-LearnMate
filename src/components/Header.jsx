import React, { useState, useEffect } from 'react';
import './Header.css';
import { Moon, Sun, User } from 'lucide-react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage or system preference
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Apply theme to document
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="app-header">
            <div className="header-content">
                <div className="logo-area">
                    <div className="logo-circle">
                        <span className="logo-initial">L</span>
                    </div>
                    <h1 className="app-title">CBE LearnMate</h1>
                </div>
                <div className="header-actions">
                    <button
                        className="icon-btn theme-toggle"
                        onClick={toggleTheme}
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDarkMode ? (
                            <Sun size={24} color="var(--text-main)" />
                        ) : (
                            <Moon size={24} color="var(--text-main)" />
                        )}
                    </button>
                    <button className="icon-btn" aria-label="Profile">
                        <User size={24} color="var(--text-main)" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
