import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import './SectionComplete.css';

const SectionComplete = ({ sectionTitle, xpEarned = 10 }) => {
    return (
        <div className="section-complete-banner">
            <div className="complete-animation">
                <CheckCircle size={40} className="check-icon" />
                <div className="stars-burst">
                    <Star size={16} className="burst-star star-1" />
                    <Star size={16} className="burst-star star-2" />
                    <Star size={16} className="burst-star star-3" />
                    <Star size={16} className="burst-star star-4" />
                </div>
            </div>
            <div className="complete-content">
                <h4 className="complete-title">Section Complete! 🎉</h4>
                <p className="complete-message">
                    Great job finishing "{sectionTitle}"
                </p>
                <div className="xp-earned">
                    <Star size={18} className="xp-star" />
                    <span>+{xpEarned} XP</span>
                </div>
            </div>
        </div>
    );
};

export default SectionComplete;
