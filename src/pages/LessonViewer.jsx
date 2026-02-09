import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Mascot from '../components/Mascot';
import ScienceCard from '../components/ScienceCard';
import SkillBadge from '../components/SkillBadge';
import RealLifeExample from '../components/RealLifeExample';
import CareerPathway from '../components/CareerPathway';
import QuizComponent from '../components/QuizComponent';
import moduleOne from '../data/scienceModuleData';
import './LessonViewer.css';

const LessonViewer = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    const lesson = moduleOne.lessons.find(l => l.id === parseInt(lessonId));

    if (!lesson) {
        return <div className="page-container">Lesson not found</div>;
    }

    const currentIndex = moduleOne.lessons.findIndex(l => l.id === lesson.id);
    const isFirstLesson = currentIndex === 0;
    const isLastLesson = currentIndex === moduleOne.lessons.length - 1;

    const handlePrevious = () => {
        if (!isFirstLesson) {
            navigate(`/lessons/science/lesson/${moduleOne.lessons[currentIndex - 1].id}`);
            setShowQuiz(false);
        }
    };

    const handleNext = () => {
        if (!isLastLesson) {
            navigate(`/lessons/science/lesson/${moduleOne.lessons[currentIndex + 1].id}`);
            setShowQuiz(false);
        } else {
            navigate('/lessons/science');
        }
    };

    const handleQuizComplete = (score) => {
        // Save completion to localStorage
        const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
        if (!completed.includes(lesson.id)) {
            completed.push(lesson.id);
            localStorage.setItem('completedLessons', JSON.stringify(completed));
        }
    };

    return (
        <div className="page-container lesson-viewer-page">
            {/* Header */}
            <div className="lesson-header">
                <button className="back-btn" onClick={() => navigate('/lessons/science')}>
                    <ArrowLeft size={20} />
                    <span>Back to Module</span>
                </button>

                <div className="lesson-progress-indicator">
                    Lesson {lesson.id} of {moduleOne.totalLessons}
                </div>

                <button
                    className={`audio-toggle-btn ${audioEnabled ? 'active' : ''}`}
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    title={audioEnabled ? 'Disable narration' : 'Enable narration'}
                >
                    {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
            </div>

            {/* Lesson Title */}
            <div className="lesson-title-section card">
                <h1>{lesson.title}</h1>
                <div className="lesson-objectives-list">
                    <h3>🎯 What You'll Learn:</h3>
                    <ul>
                        {lesson.objectives.map((obj, idx) => (
                            <li key={idx}>{obj}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Lesson Content Sections */}
            {lesson.sections.map((section, idx) => (
                <div key={idx} className="lesson-section card">
                    <h2>{section.title}</h2>

                    {section.content && (
                        <p className="section-content">{section.content}</p>
                    )}

                    {section.narration && audioEnabled && (
                        <div className="narration-box">
                            <Mascot width={60} height={60} />
                            <p className="narration-text">💬 {section.narration}</p>
                        </div>
                    )}

                    {/* Science Branches Display */}
                    {section.showBranches && (
                        <div className="branches-grid">
                            {moduleOne.scienceBranches.map(branch => (
                                <ScienceCard key={branch.id} branch={branch} />
                            ))}
                        </div>
                    )}

                    {/* Skills Display */}
                    {section.showSkills && (
                        <div className="skills-list">
                            {moduleOne.skills.map(skill => (
                                <SkillBadge key={skill.id} skill={skill} isEarned={false} />
                            ))}
                        </div>
                    )}

                    {/* Real Life Examples */}
                    {section.showRealLife && (
                        <div className="real-life-grid">
                            {moduleOne.realLifeExamples.map(example => (
                                <RealLifeExample key={example.id} example={example} />
                            ))}
                        </div>
                    )}

                    {/* Career Pathways */}
                    {section.showCareers && (
                        <CareerPathway pathways={moduleOne.careerPathways} />
                    )}

                    {/* Activity Section */}
                    {section.type === 'activity' && (
                        <div className="activity-box">
                            <p className="activity-instruction">{section.instruction}</p>
                            <div className="activity-placeholder">
                                <p>🎮 Interactive activity coming soon!</p>
                                <p className="activity-hint">For now, try matching these in your notebook:</p>
                                <ul>
                                    {section.items?.map((item, i) => (
                                        <li key={i}><strong>{item.branch}:</strong> {item.description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Encouragement/Inspiration */}
                    {(section.type === 'encouragement' || section.type === 'inspiration' || section.type === 'reflection') && (
                        <div className="inspiration-box">
                            <Mascot width={80} height={80} />
                            <p>{section.content}</p>
                        </div>
                    )}
                </div>
            ))}

            {/* Quiz Section */}
            {!showQuiz ? (
                <div className="quiz-prompt card">
                    <h3>Ready to test your knowledge? 🧠</h3>
                    <p>Complete the quiz to earn your competency badge!</p>
                    <button className="btn btn-primary" onClick={() => setShowQuiz(true)}>
                        Start Quiz
                    </button>
                </div>
            ) : (
                <QuizComponent quiz={lesson.quiz} onComplete={handleQuizComplete} />
            )}

            {/* Navigation */}
            <div className="lesson-navigation">
                <button
                    className="btn btn-secondary nav-btn"
                    onClick={handlePrevious}
                    disabled={isFirstLesson}
                >
                    <ArrowLeft size={20} />
                    Previous Lesson
                </button>

                <button
                    className="btn btn-primary nav-btn"
                    onClick={handleNext}
                >
                    {isLastLesson ? 'Complete Module' : 'Next Lesson'}
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default LessonViewer;
