import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import './DidYouKnow.css';

const DidYouKnow = ({ fact, emoji = "💡" }) => {
    return (
        <div className="did-you-know-box">
            <div className="dyk-header">
                <Lightbulb size={20} className="dyk-icon" />
                <span className="dyk-title">Did You Know?</span>
                <Sparkles size={16} className="dyk-sparkle" />
            </div>
            <div className="dyk-content">
                <span className="dyk-emoji">{emoji}</span>
                <p className="dyk-fact">{fact}</p>
            </div>
        </div>
    );
};

export default DidYouKnow;
