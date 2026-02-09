import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Award, Star } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: BookOpen, label: 'Learn', path: '/lessons' },
        { icon: Award, label: 'Skills', path: '/skills' },
        { icon: Star, label: 'Fun', path: '/motivation' },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => (
                <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <div className="icon-wrapper">
                        <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <span className="nav-label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
