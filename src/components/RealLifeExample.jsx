import React, { useState } from 'react';
import './RealLifeExample.css';

const RealLifeExample = ({ example }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`real-life-card ${isExpanded ? 'expanded' : ''}`}
            style={{ '--example-color': example.color }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="real-life-icon">{example.icon}</div>
            <h4 className="real-life-category">{example.category}</h4>

            {isExpanded && (
                <div className="real-life-examples">
                    {example.examples.map((item, idx) => (
                        <span key={idx} className="example-tag">{item}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RealLifeExample;
