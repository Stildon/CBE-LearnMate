import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mascot from '../components/Mascot';
import { CheckCircle, Circle, Lock } from 'lucide-react';
import mathModuleOne from '../data/mathModuleData';
import './MathModule.css';

const MathModule = () => {
    const navigate = useNavigate();

    // Get progress from localStorage
    const completedLessons = JSON.parse(localStorage.getItem('completedMathLessons') || '[]');

    const handleLessonClick = (lessonId) => {
        navigate(`/lessons/mathematics/lesson/${lessonId}`);
    };

    return (
        <div className="page-container math-module-page">
            {/* Header */}
            <div className="module-header">
                <div className="mascot-welcome animate-float">
                    <Mascot width={100} height={100} />
                </div>
                <div className="module-info">
                    <span className="module-badge math-badge">Grade 7 CBC</span>
                    <h1>{mathModuleOne.title}</h1>
                    <p className="module-strand">{mathModuleOne.strand}</p>
                    <p className="module-substrand">{mathModuleOne.subStrand}</p>
                </div>
            </div>

            {/* Progress Overview */}
            <div className="progress-overview card">
                <h3>Your Progress</h3>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill math-progress"
                        style={{ width: `${(completedLessons.length / mathModuleOne.totalLessons) * 100}%` }}
                    ></div>
                </div>
                <p className="progress-text">
                    {completedLessons.length} of {mathModuleOne.totalLessons} lessons completed
                </p>
            </div>

            {/* Lessons List */}
            <section className="lessons-section">
                <h2>📚 Lessons</h2>
                <div className="lessons-grid">
                    {mathModuleOne.lessons.map((lesson, index) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isLocked = index > 0 && !completedLessons.includes(mathModuleOne.lessons[index - 1].id);

                        return (
                            <div
                                key={lesson.id}
                                className={`lesson-card math-lesson ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                                onClick={() => !isLocked && handleLessonClick(lesson.id)}
                            >
                                <div className="lesson-number math-number">Lesson {lesson.id}</div>
                                <h3 className="lesson-title">{lesson.title}</h3>
                                <p className="lesson-objectives">
                                    {lesson.objectives.length} learning objectives
                                </p>

                                <div className="lesson-status">
                                    {isLocked ? (
                                        <>
                                            <Lock size={20} color="#BDC3C7" />
                                            <span>Complete previous lesson</span>
                                        </>
                                    ) : isCompleted ? (
                                        <>
                                            <CheckCircle size={20} color="#2ECC71" />
                                            <span>Completed</span>
                                        </>
                                    ) : (
                                        <>
                                            <Circle size={20} color="#FF6B6B" />
                                            <span>Start Learning</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default MathModule;
