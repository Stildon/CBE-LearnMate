import React from 'react';
import './SkillBadge.css';

const SkillBadge = ({ skill, isEarned = false }) => {
    return (
        <div className={`skill-badge ${isEarned ? 'earned' : ''}`}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-text">{skill.text}</p>
            {isEarned && <div className="earned-checkmark">✓</div>}
        </div>
    );
};

export default SkillBadge;
