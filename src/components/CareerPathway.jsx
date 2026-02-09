import React from 'react';
import './CareerPathway.css';

const CareerPathway = ({ pathways }) => {
    return (
        <div className="career-pathway-container">
            <div className="pathway-line"></div>
            {pathways.map((pathway, index) => (
                <div key={pathway.id} className="pathway-node" style={{ '--node-color': pathway.color }}>
                    <div className="pathway-number">{pathway.level}</div>
                    <div className="pathway-icon">{pathway.icon}</div>
                    <h4 className="pathway-title">{pathway.title}</h4>
                    <div className="pathway-fields">
                        {pathway.fields.map((field, idx) => (
                            <span key={idx} className="field-tag">{field}</span>
                        ))}
                    </div>
                    {index < pathways.length - 1 && <div className="pathway-arrow">↓</div>}
                </div>
            ))}
        </div>
    );
};

export default CareerPathway;
