import React, { useState } from 'react';
import Mascot from './Mascot';
import { HelpCircle, Lightbulb } from 'lucide-react';
import './QuizComponent.css';

const QuizComponent = ({ quiz, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [hintLevel, setHintLevel] = useState(0); // 0 = no hint, 1 = small hint, 2 = bigger hint

    const question = quiz.questions[currentQuestion];

    const handleAnswerSelect = (index) => {
        if (showFeedback) return; // Prevent changing answer after submission
        setSelectedAnswer(index);
    };

    const handleSubmit = () => {
        if (selectedAnswer === null) return;

        setShowFeedback(true);

        if (selectedAnswer === question.correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
            setHintLevel(0);
        } else {
            setIsComplete(true);
            if (onComplete) {
                onComplete(score + (selectedAnswer === question.correctAnswer ? 1 : 0));
            }
        }
    };

    const handleShowHint = () => {
        if (hintLevel < 2) {
            setHintLevel(hintLevel + 1);
        }
    };

    const isCorrect = selectedAnswer === question.correctAnswer;

    // Encouraging messages for different scenarios
    const getEncouragementMessage = () => {
        const messages = {
            correct: [
                "🌟 Excellent work! You're a star learner!",
                "🎉 Amazing! You got it right!",
                "💪 Fantastic! Keep up the great work!",
                "✨ Brilliant! You're doing wonderfully!",
                "🏆 Perfect! You're a champion!"
            ],
            incorrect: [
                "💙 Don't worry! Learning takes practice. Let's try again!",
                "🌱 Every mistake helps you grow. You're doing great!",
                "💫 That's okay! You're learning something new!",
                "🌈 Keep trying! You're getting closer!",
                "🎯 Good effort! Let's review and try once more!"
            ]
        };

        const list = isCorrect ? messages.correct : messages.incorrect;
        return list[Math.floor(Math.random() * list.length)];
    };

    if (isComplete) {
        const percentage = Math.round((score / quiz.questions.length) * 100);
        const isPassed = percentage >= 70;

        const handleRedo = () => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setShowFeedback(false);
            setScore(0);
            setIsComplete(false);
            setHintLevel(0);
        };

        return (
            <div className="quiz-complete">
                <div className="mascot-celebration">
                    <Mascot width={150} height={150} />
                    {isPassed && (
                        <div className="celebration-confetti">
                            <span className="confetti">🎉</span>
                            <span className="confetti">⭐</span>
                            <span className="confetti">🌟</span>
                            <span className="confetti">✨</span>
                        </div>
                    )}
                </div>
                <h3 className="quiz-complete-title">
                    {isPassed ? '🎉 Amazing Work!' : '💪 Keep Practicing!'}
                </h3>
                <div className="quiz-score-display">
                    <div className="score-circle" style={{ '--score-percent': percentage }}>
                        <span className="score-number">{percentage}%</span>
                    </div>
                    <p className="score-text">
                        You got {score} out of {quiz.questions.length} correct!
                    </p>
                </div>
                {isPassed ? (
                    <div className="badge-earned">
                        <div className="badge-icon">🏆</div>
                        <p>You earned a competency badge!</p>
                        <p className="badge-message">You're building real skills! 🌟</p>
                    </div>
                ) : (
                    <div className="encouragement-box">
                        <p className="encouragement">Don't worry! Review the lesson and try again. You're learning!</p>
                        <p className="growth-message">🌱 Every attempt makes you stronger!</p>
                    </div>
                )}

                {/* Redo Button */}
                <button className="btn btn-primary quiz-redo-btn" onClick={handleRedo}>
                    🔄 Try Again
                </button>
            </div>
        );
    }

    const handleSkip = () => {
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
            setHintLevel(0);
        } else {
            // If last question, show completion
            setIsComplete(true);
            if (onComplete) {
                onComplete(score);
            }
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h3>🎯 Knowledge Check</h3>
                <div className="quiz-progress">
                    Question {currentQuestion + 1} of {quiz.questions.length}
                </div>
            </div>

            <div className="quiz-question-card">
                <p className="question-text">{question.question}</p>

                {/* Hint System */}
                {!showFeedback && (
                    <div className="hint-section">
                        {hintLevel === 0 && (
                            <button className="hint-btn" onClick={handleShowHint}>
                                <HelpCircle size={16} />
                                Need a hint?
                            </button>
                        )}
                        {hintLevel >= 1 && question.hint && (
                            <div className="hint-box hint-level-1">
                                <Lightbulb size={18} className="hint-icon" />
                                <p className="hint-text">💡 Small Hint: {question.hint}</p>
                                {hintLevel === 1 && question.biggerHint && (
                                    <button className="hint-btn-small" onClick={handleShowHint}>
                                        Need a bigger hint?
                                    </button>
                                )}
                            </div>
                        )}
                        {hintLevel >= 2 && question.biggerHint && (
                            <div className="hint-box hint-level-2">
                                <Lightbulb size={18} className="hint-icon" />
                                <p className="hint-text">💡 Bigger Hint: {question.biggerHint}</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="quiz-options">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`quiz-option ${selectedAnswer === index ? 'selected' : ''} ${showFeedback && index === question.correctAnswer ? 'correct' : ''
                                } ${showFeedback && selectedAnswer === index && !isCorrect ? 'incorrect' : ''}`}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showFeedback}
                        >
                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                            <span className="option-text">{option}</span>
                            {showFeedback && index === question.correctAnswer && <span className="check-icon">✓</span>}
                            {showFeedback && selectedAnswer === index && !isCorrect && <span className="cross-icon">✗</span>}
                        </button>
                    ))}
                </div>

                {showFeedback && (
                    <div className={`feedback-box ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
                        <div className="feedback-content">
                            <p className="feedback-message-main">
                                {getEncouragementMessage()}
                            </p>
                            <p className="feedback-explanation">
                                {isCorrect ? question.feedback.correct : question.feedback.incorrect}
                            </p>
                            {!isCorrect && question.explanation && (
                                <div className="explanation-box">
                                    <p className="explanation-label">📚 Let's Learn:</p>
                                    <p className="explanation-text">{question.explanation}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="quiz-actions">
                    {!showFeedback ? (
                        <>
                            <button
                                className="btn btn-primary quiz-submit-btn"
                                onClick={handleSubmit}
                                disabled={selectedAnswer === null}
                            >
                                Check Answer
                            </button>
                            <button
                                className="btn btn-secondary quiz-skip-btn"
                                onClick={handleSkip}
                            >
                                Skip Question →
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-primary quiz-next-btn" onClick={handleNext}>
                            {currentQuestion < quiz.questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;
