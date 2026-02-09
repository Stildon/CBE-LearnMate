import React from 'react';
import './ConceptCard.css';

const ConceptCard = ({ concept }) => {
    return (
        <div className="concept-card" style={{ '--concept-color': concept.color }}>
            <div className="concept-icon">{concept.icon}</div>
            <h4 className="concept-name">{concept.name}</h4>
            <p className="concept-description">{concept.description}</p>

            {concept.keyPoints && (
                <ul className="concept-points">
                    {concept.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ConceptCard;
