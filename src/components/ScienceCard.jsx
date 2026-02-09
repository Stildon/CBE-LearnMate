import React, { useState } from 'react';
import './ScienceCard.css';

const ScienceCard = ({ branch }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`science-card ${isExpanded ? 'expanded' : ''}`}
            style={{ '--card-color': branch.color }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="science-card-icon">{branch.icon}</div>
            <h4 className="science-card-title">{branch.name}</h4>

            {isExpanded && (
                <div className="science-card-content">
                    <p className="science-card-description">{branch.description}</p>
                    <div className="science-card-examples">
                        <strong>Examples:</strong>
                        <ul>
                            {branch.examples.map((example, idx) => (
                                <li key={idx}>{example}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div className="science-card-hint">
                {isExpanded ? '👆 Tap to close' : '👆 Tap to learn more'}
            </div>
        </div>
    );
};

export default ScienceCard;
