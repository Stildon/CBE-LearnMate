import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import './LessonProgressTracker.css';

const LessonProgressTracker = ({ sections, currentSection }) => {
    return (
        <div className="lesson-progress-tracker">
            <div className="progress-header">
                <span className="progress-label">Your Progress</span>
                <span className="progress-percentage">
                    {Math.round((currentSection / sections.length) * 100)}%
                </span>
            </div>
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${(currentSection / sections.length) * 100}%` }}
                ></div>
            </div>
            <div className="progress-steps">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`progress-step ${index < currentSection ? 'completed' : ''} ${index === currentSection ? 'active' : ''}`}
                    >
                        {index < currentSection ? (
                            <CheckCircle2 size={20} className="step-icon completed-icon" />
                        ) : (
                            <Circle size={20} className="step-icon" />
                        )}
                        <span className="step-label">{section}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonProgressTracker;
