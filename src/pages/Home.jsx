import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mascot from '../components/Mascot';
import { Sparkles, Trophy } from 'lucide-react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();



    return (
        <div className="home-container page-container">
            {/* Hero Welcome Section */}
            <section className="welcome-hero animate-pop">
                <div className="hero-gradient">
                    <div className="floating-emojis">
                        <span className="emoji-float">⭐</span>
                        <span className="emoji-float">🌈</span>
                        <span className="emoji-float">🚀</span>
                        <span className="emoji-float">💡</span>
                        <span className="emoji-float">🎯</span>
                    </div>

                    <div className="mascot-hero animate-float">
                        <Mascot width={120} height={120} />
                    </div>

                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, FROM TESSY AND VALENCIA! 👋
                        </h1>
                        <p className="hero-subtitle">
                            Ready for an amazing learning adventure?
                        </p>
                        <button
                            className="btn-adventure"
                            onClick={() => navigate('/lessons')}
                        >
                            <Sparkles size={20} />
                            Start Your Adventure
                            <Sparkles size={20} />
                        </button>
                    </div>
                </div>
            </section>



            {/* Daily Mission */}
            <section className="daily-mission card">
                <div className="mission-header">
                    <div className="mission-badge">
                        <Trophy size={20} />
                        Today's Mission
                    </div>
                </div>
                <div className="mission-content">
                    <div className="mission-icon">🌱</div>
                    <div className="mission-details">
                        <h3>INTEGRATED SCIENCE</h3>
                        <p>Learn about the components of Integrated Science</p>
                    </div>
                    <button
                        className="btn-start-mission"
                        onClick={() => navigate('/lessons/science')}
                    >
                        Start
                    </button>
                </div>
            </section>

            {/* Progress Snapshot */}
            <section className="progress-section">
                <h2 className="section-title">
                    <Trophy size={24} />
                    Your Progress
                </h2>
                <div className="progress-grid">
                    <div className="progress-card level-card">
                        <div className="progress-icon">🏆</div>
                        <div className="progress-value">Level 5</div>
                        <div className="progress-label">Current Level</div>
                    </div>
                    <div className="progress-card xp-card">
                        <div className="progress-icon">⭐</div>
                        <div className="progress-value">850 XP</div>
                        <div className="progress-label">Experience Points</div>
                    </div>
                    <div className="progress-card streak-card">
                        <div className="progress-icon">🔥</div>
                        <div className="progress-value">7 Days</div>
                        <div className="progress-label">Learning Streak</div>
                    </div>
                    <div className="progress-card badge-card">
                        <div className="progress-icon">🎖️</div>
                        <div className="progress-value">12 Badges</div>
                        <div className="progress-label">Earned Badges</div>
                    </div>
                </div>
            </section>

            {/* Motivational Quote */}
            <section className="motivation-banner">
                <div className="quote-icon">💫</div>
                <p className="quote-text">
                    "Every expert was once a beginner. Keep learning, keep growing!"
                </p>
            </section>
        </div>
    );
};

export default Home;
