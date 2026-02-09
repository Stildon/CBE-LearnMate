import React from 'react';
import { AlertCircle } from 'lucide-react';
import './KeyDefinition.css';

const KeyDefinition = ({ term, definition, color = "#4FACFE" }) => {
    return (
        <div className="key-definition-box" style={{ '--def-color': color }}>
            <div className="def-header">
                <AlertCircle size={20} className="def-icon" />
                <span className="def-label">Key Term</span>
            </div>
            <div className="def-content">
                <h4 className="def-term">{term}</h4>
                <p className="def-text">{definition}</p>
            </div>
        </div>
    );
};

export default KeyDefinition;
