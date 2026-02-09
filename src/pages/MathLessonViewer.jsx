import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Mascot from '../components/Mascot';
import ConceptCard from '../components/ConceptCard';
import QuizComponent from '../components/QuizComponent';
import mathModuleOne from '../data/mathModuleData';
import './MathLessonViewer.css';

const MathLessonViewer = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    const lesson = mathModuleOne.lessons.find(l => l.id === parseInt(lessonId));

    if (!lesson) {
        return <div className="page-container">Lesson not found</div>;
    }

    const currentIndex = mathModuleOne.lessons.findIndex(l => l.id === lesson.id);
    const isFirstLesson = currentIndex === 0;
    const isLastLesson = currentIndex === mathModuleOne.lessons.length - 1;

    const handlePrevious = () => {
        if (!isFirstLesson) {
            navigate(`/lessons/mathematics/lesson/${mathModuleOne.lessons[currentIndex - 1].id}`);
            setShowQuiz(false);
        }
    };

    const handleNext = () => {
        if (!isLastLesson) {
            navigate(`/lessons/mathematics/lesson/${mathModuleOne.lessons[currentIndex + 1].id}`);
            setShowQuiz(false);
        } else {
            navigate('/lessons/mathematics');
        }
    };

    const handleQuizComplete = (score) => {
        // Save completion to localStorage (separate key for math)
        const completed = JSON.parse(localStorage.getItem('completedMathLessons') || '[]');
        if (!completed.includes(lesson.id)) {
            completed.push(lesson.id);
            localStorage.setItem('completedMathLessons', JSON.stringify(completed));
        }
    };

    return (
        <div className="page-container lesson-viewer-page math-lesson-viewer">
            {/* Header */}
            <div className="lesson-header">
                <button className="back-btn" onClick={() => navigate('/lessons/mathematics')}>
                    <ArrowLeft size={20} />
                    <span>Back to Module</span>
                </button>

                <div className="lesson-progress-indicator math-indicator">
                    Lesson {lesson.id} of {mathModuleOne.totalLessons}
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
                        <div className="section-content">
                            {section.content.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    )}

                    {section.narration && audioEnabled && (
                        <div className="narration-box">
                            <Mascot width={60} height={60} />
                            <p className="narration-text">💬 {section.narration}</p>
                        </div>
                    )}

                    {/* Examples */}
                    {section.examples && (
                        <div className="examples-box">
                            <h4>📝 Examples:</h4>
                            <ul>
                                {section.examples.map((example, i) => (
                                    <li key={i}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Show Concepts */}
                    {section.type === 'concept' && lesson.id === 1 && (
                        <div className="concepts-grid">
                            <div className="example-numbers">
                                {mathModuleOne.examples.wholeNumbers.slice(0, 10).map((num, i) => (
                                    <span key={i} className="number-badge">{num}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Place Value Display */}
                    {section.showPlaceValue && (
                        <div className="place-value-demo">
                            <div className="place-value-box">
                                <div className="place-value-item">
                                    <span className="digit">5</span>
                                    <span className="place">Thousands</span>
                                    <span className="value">5,000</span>
                                </div>
                                <div className="place-value-item">
                                    <span className="digit">4</span>
                                    <span className="place">Hundreds</span>
                                    <span className="value">400</span>
                                </div>
                                <div className="place-value-item">
                                    <span className="digit">3</span>
                                    <span className="place">Tens</span>
                                    <span className="value">30</span>
                                </div>
                                <div className="place-value-item">
                                    <span className="digit">2</span>
                                    <span className="place">Ones</span>
                                    <span className="value">2</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rounding Display */}
                    {section.showRounding && (
                        <div className="rounding-examples">
                            {mathModuleOne.examples.roundingExamples.map((ex, i) => (
                                <div key={i} className="rounding-card">
                                    <div className="original-number">{ex.number.toLocaleString()}</div>
                                    <div className="round-arrow">→</div>
                                    <div className="rounded-number">{ex.result.toLocaleString()}</div>
                                    <div className="round-label">Rounded to nearest {ex.roundTo.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Even/Odd Display */}
                    {section.showEvenOdd && (
                        <div className="number-groups">
                            <div className="number-group even-group">
                                <h4>Even Numbers</h4>
                                <div className="number-list">
                                    {mathModuleOne.examples.evenNumbers.slice(0, 6).map((num, i) => (
                                        <span key={i} className="number-chip even">{num}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="number-group odd-group">
                                <h4>Odd Numbers</h4>
                                <div className="number-list">
                                    {mathModuleOne.examples.oddNumbers.slice(0, 6).map((num, i) => (
                                        <span key={i} className="number-chip odd">{num}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Prime Numbers Display */}
                    {section.showPrimes && (
                        <div className="prime-showcase">
                            <h4>Prime Numbers (1-31):</h4>
                            <div className="prime-grid">
                                {mathModuleOne.examples.primeNumbers.map((num, i) => (
                                    <span key={i} className="prime-number">{num}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Operations Display */}
                    {section.showOperations && (
                        <div className="operations-grid">
                            <div className="operation-card">
                                <div className="op-symbol">+</div>
                                <div className="op-name">Addition</div>
                                <div className="op-example">5 + 3 = 8</div>
                            </div>
                            <div className="operation-card">
                                <div className="op-symbol">−</div>
                                <div className="op-name">Subtraction</div>
                                <div className="op-example">8 − 3 = 5</div>
                            </div>
                            <div className="operation-card">
                                <div className="op-symbol">×</div>
                                <div className="op-name">Multiplication</div>
                                <div className="op-example">4 × 3 = 12</div>
                            </div>
                            <div className="operation-card">
                                <div className="op-symbol">÷</div>
                                <div className="op-name">Division</div>
                                <div className="op-example">12 ÷ 3 = 4</div>
                            </div>
                        </div>
                    )}

                    {/* Sequences Display */}
                    {section.showSequences && (
                        <div className="sequence-showcase">
                            <div className="sequence-example">
                                <div className="sequence-numbers">
                                    <span>8</span>
                                    <span>14</span>
                                    <span>20</span>
                                    <span>26</span>
                                    <span className="next">?</span>
                                </div>
                                <div className="sequence-rule">Rule: Add 6 each time</div>
                                <div className="sequence-answer">Answer: 32</div>
                            </div>
                        </div>
                    )}

                    {/* Activity Placeholder */}
                    {section.type === 'activity' && (
                        <div className="activity-box">
                            <p className="activity-instruction">{section.instruction}</p>
                            <div className="activity-placeholder">
                                <p>🎮 Interactive activity coming soon!</p>
                                <p className="activity-hint">For now, try these in your notebook:</p>
                                <ul>
                                    {section.items?.map((item, i) => (
                                        <li key={i}>{item.number} → {item.answer || item.type}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Encouragement/Inspiration */}
                    {(section.type === 'encouragement' || section.type === 'inspiration') && (
                        <div className="inspiration-box math-inspiration">
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
                    <button className="btn btn-primary math-btn" onClick={() => setShowQuiz(true)}>
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
                    className="btn btn-primary nav-btn math-btn"
                    onClick={handleNext}
                >
                    {isLastLesson ? 'Complete Module' : 'Next Lesson'}
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default MathLessonViewer;
