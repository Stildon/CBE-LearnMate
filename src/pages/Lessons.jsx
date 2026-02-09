import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Video, PenTool, Globe, Sparkles, Star } from 'lucide-react';
import Mascot from '../components/Mascot';
import './Lessons.css';

const Lessons = () => {
    const navigate = useNavigate();

    const subjects = [
        {
            title: 'Mathematics',
            color: '#FF6B6B',
            gradient: 'linear-gradient(135deg, #FF6B6B, #FFB347)',
            icon: PenTool,
            path: '/lessons/mathematics',
            emoji: '🔢',
            description: 'Numbers, patterns & problem solving'
        },
        {
            title: 'Science',
            color: '#4FACFE',
            gradient: 'linear-gradient(135deg, #4FACFE, #00F2FE)',
            icon: Book,
            path: '/lessons/science',
            emoji: '🔬',
            description: 'Explore the world around you'
        },
        {
            title: 'English',
            color: '#FFB347',
            gradient: 'linear-gradient(135deg, #FFB347, #FFCC70)',
            icon: Globe,
            path: null,
            emoji: '📚',
            description: 'Reading, writing & communication'
        },
        {
            title: 'Art & Craft',
            color: '#9B59B6',
            gradient: 'linear-gradient(135deg, #9B59B6, #E91E63)',
            icon: Video,
            path: null,
            emoji: '🎨',
            description: 'Create and express yourself'
        }
    ];

    const handleSubjectClick = (subject) => {
        if (subject.path) {
            navigate(subject.path);
        } else {
            // Placeholder for future subjects
            alert(`${subject.title} module coming soon! 🎉`);
        }
    };

    return (
        <div className="lessons-page page-container">
            {/* Decorative Background Elements */}
            <div className="lessons-bg-decoration">
                <span className="bg-star">⭐</span>
                <span className="bg-star">✨</span>
                <span className="bg-star">🌟</span>
                <span className="bg-star">💫</span>
            </div>

            {/* Header with Mascot */}
            <div className="lessons-header">
                <div className="mascot-guide animate-float">
                    <Mascot width={80} height={80} />
                    <div className="mascot-speech-bubble">
                        <p>Choose a subject to begin your learning adventure!</p>
                    </div>
                </div>

                <div className="header-content">
                    <h1 className="lessons-title">
                        <Sparkles size={28} className="title-icon" />
                        Explore Subjects
                        <Sparkles size={28} className="title-icon" />
                    </h1>
                    <p className="lessons-subtitle">
                        Pick your favorite subject and start learning today!
                    </p>
                </div>
            </div>

            {/* Subject Cards Grid */}
            <div className="subjects-grid-enhanced">
                {subjects.map((subject, index) => (
                    <div
                        key={subject.title}
                        className={`subject-card-enhanced ${!subject.path ? 'coming-soon' : ''}`}
                        onClick={() => handleSubjectClick(subject)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Card Background Gradient */}
                        <div
                            className="card-gradient-bg"
                            style={{ background: subject.gradient }}
                        ></div>

                        {/* Coming Soon Badge */}
                        {!subject.path && (
                            <div className="coming-soon-badge">
                                <Star size={14} />
                                Coming Soon
                            </div>
                        )}

                        {/* Icon Container */}
                        <div className="subject-icon-container">
                            <div
                                className="icon-circle"
                                style={{ background: subject.gradient }}
                            >
                                <subject.icon color="white" size={36} strokeWidth={2.5} />
                            </div>
                            <div className="emoji-decoration">{subject.emoji}</div>
                        </div>

                        {/* Subject Info */}
                        <div className="subject-info">
                            <h3 className="subject-title">{subject.title}</h3>
                            <p className="subject-description">{subject.description}</p>
                        </div>

                        {/* Hover Arrow */}
                        <div className="card-arrow">→</div>

                        {/* Sparkle Effects */}
                        <div className="card-sparkles">
                            <span className="sparkle">✨</span>
                            <span className="sparkle">⭐</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Encouragement Section */}
            <div className="encouragement-section">
                <div className="encouragement-card">
                    <div className="encouragement-icon">🎯</div>
                    <p className="encouragement-text">
                        Every lesson brings you closer to becoming a super learner!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
