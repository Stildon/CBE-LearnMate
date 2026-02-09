// Module One: Scientific Investigation - Introduction to Integrated Science
// Target: Grade 7 CBC Kenya

export const moduleOne = {
    id: 'module-1',
    title: 'Module One',
    strand: 'Scientific Investigation',
    subStrand: 'Introduction to Integrated Science',
    topic: 'Topic 1.1',
    targetGrade: 'Grade 7',
    totalLessons: 4,

    // Science Branches
    scienceBranches: [
        {
            id: 'biology',
            name: 'Biology',
            icon: '🌱',
            color: '#2ECC71',
            description: 'Study of living things such as plants, animals, and humans.',
            examples: ['Plants growing', 'Animal behavior', 'Human body systems']
        },
        {
            id: 'physics',
            name: 'Physics',
            icon: '⚡',
            color: '#4FACFE',
            description: 'Study of matter, energy, forces, and motion.',
            examples: ['How things move', 'Electricity', 'Light and sound']
        },
        {
            id: 'chemistry',
            name: 'Chemistry',
            icon: '🧫',
            color: '#9B59B6',
            description: 'Study of the nature, properties, and composition of matter.',
            examples: ['Mixing substances', 'Chemical reactions', 'Materials around us']
        },
        {
            id: 'earth-science',
            name: 'Earth Science',
            icon: '🌍',
            color: '#FFB347',
            description: 'Study of the Earth including soil, rocks, weather, and environment.',
            examples: ['Weather patterns', 'Rocks and minerals', 'Soil types']
        },
        {
            id: 'astronomy',
            name: 'Astronomy',
            icon: '🌌',
            color: '#FF6B6B',
            description: 'Study of space and celestial bodies like stars, planets, and the moon.',
            examples: ['Stars and planets', 'Day and night', 'Moon phases']
        }
    ],

    // Skills and Knowledge
    skills: [
        { id: 1, text: 'Understand science concepts', icon: '🧠' },
        { id: 2, text: 'Prepare for higher level science studies', icon: '📚' },
        { id: 3, text: 'Develop scientific thinking skills', icon: '💡' },
        { id: 4, text: 'Prepare for careers in science and technology', icon: '🚀' },
        { id: 5, text: 'Build skills needed for STEM learning', icon: '🔬' }
    ],

    // Real-life Applications
    realLifeExamples: [
        {
            id: 'transport',
            category: 'Transportation',
            icon: '🚗',
            color: '#4FACFE',
            examples: ['Bicycles', 'Cars', 'Aircraft', 'Trains']
        },
        {
            id: 'medicine',
            category: 'Medicine',
            icon: '🏥',
            color: '#FF6B6B',
            examples: ['ECG machines', 'MRI machines', 'Medical tools', 'Vaccines']
        },
        {
            id: 'agriculture',
            category: 'Agriculture',
            icon: '🌾',
            color: '#2ECC71',
            examples: ['Tractors', 'Irrigation systems', 'Fertilizers', 'Crop breeding']
        },
        {
            id: 'communication',
            category: 'Communication',
            icon: '📱',
            color: '#9B59B6',
            examples: ['Mobile phones', 'Computers', 'Internet', 'Satellites']
        },
        {
            id: 'construction',
            category: 'Construction',
            icon: '🏗',
            color: '#FFB347',
            examples: ['Bulldozers', 'Graders', 'Construction machines', 'Building materials']
        }
    ],

    // Career Pathways
    careerPathways: [
        {
            id: 'pure',
            level: 1,
            title: 'Pure Sciences',
            icon: '🔬',
            color: '#4FACFE',
            fields: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
        },
        {
            id: 'applied',
            level: 2,
            title: 'Applied Sciences',
            icon: '🌾',
            color: '#2ECC71',
            fields: ['Agriculture', 'Computer Science', 'Food & Nutrition', 'Environmental Science']
        },
        {
            id: 'technical',
            level: 3,
            title: 'Technical & Engineering',
            icon: '⚙️',
            color: '#FFB347',
            fields: ['Engineering', 'Technology', 'Architecture', 'Aviation']
        }
    ],

    // Lessons
    lessons: [
        {
            id: 1,
            title: 'What is Integrated Science?',
            objectives: [
                'Define Integrated Science',
                'Identify the five components of Integrated Science',
                'Explain how science subjects connect'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '🧪 What is Integrated Science?',
                    content: 'Integrated Science means bringing together different science subjects and studying how they connect and work together. Instead of learning Physics, Chemistry, and Biology separately, we see how they all relate to each other!',
                    narration: 'Welcome to Integrated Science! This is where we discover how all science subjects work together like a team.'
                },
                {
                    type: 'branches',
                    title: '🔬 Components of Integrated Science',
                    content: 'Integrated Science combines five main areas of science. Let\'s explore each one!',
                    showBranches: true
                },
                {
                    type: 'activity',
                    title: '🎮 Fun Activity',
                    activityType: 'match',
                    instruction: 'Match each science branch to its description!',
                    items: [
                        { branch: 'Biology', description: 'Study of living things' },
                        { branch: 'Physics', description: 'Study of matter and energy' },
                        { branch: 'Chemistry', description: 'Study of substances and reactions' }
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'What does Integrated Science mean?',
                        options: [
                            'Studying only one science subject',
                            'Bringing together different science subjects',
                            'Learning only about space',
                            'Studying only plants'
                        ],
                        correctAnswer: 1,
                        hint: 'Think about the word "integrated" - it means bringing things together!',
                        feedback: {
                            correct: '🎉 Excellent! You understand what Integrated Science is all about!',
                            incorrect: 'Not quite! Remember, integrated means bringing different things together.'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'How many main components does Integrated Science have?',
                        options: ['Three', 'Four', 'Five', 'Six'],
                        correctAnswer: 2,
                        hint: 'Count the science branches we learned about!',
                        feedback: {
                            correct: '⭐ Perfect! There are five main branches of Integrated Science!',
                            incorrect: 'Try counting again! Look at all the science branches we discussed.'
                        }
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Skills and Knowledge from Science',
            objectives: [
                'Identify skills gained from studying Integrated Science',
                'Understand the importance of scientific thinking',
                'Recognize how science prepares for future learning'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '🧠 Knowledge and Skills Learners Gain',
                    content: 'Studying Integrated Science helps you develop amazing skills that you\'ll use throughout your life!',
                    narration: 'Science isn\'t just about memorizing facts - it helps you think, solve problems, and understand the world around you!'
                },
                {
                    type: 'skills',
                    title: '🌟 What You Will Learn',
                    showSkills: true
                },
                {
                    type: 'encouragement',
                    title: '💪 You\'re Building Important Skills!',
                    content: 'Every time you ask "why" or "how," you\'re thinking like a scientist. These skills will help you in school, in your future career, and in everyday life!'
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which skill does Integrated Science help you develop?',
                        options: [
                            'Only memorizing facts',
                            'Scientific thinking skills',
                            'Playing video games',
                            'Cooking skills'
                        ],
                        correctAnswer: 1,
                        hint: 'Science helps you think and solve problems!',
                        feedback: {
                            correct: '🎯 Yes! Science develops your thinking and problem-solving skills!',
                            incorrect: 'Think about what scientists do - they think, question, and solve problems!'
                        }
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Science in Daily Life',
            objectives: [
                'Recognize science applications in everyday life',
                'Connect science concepts to real-world examples',
                'Appreciate the importance of science in society'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '🌍 Importance of Science in Daily Life',
                    content: 'Science is everywhere! From the moment you wake up to when you go to sleep, you\'re surrounded by science. Let\'s explore how science makes our lives better!',
                    narration: 'Look around you! Everything you use every day was created using science. Let\'s discover how!'
                },
                {
                    type: 'real-life',
                    title: '🔍 Science Around Us',
                    showRealLife: true
                },
                {
                    type: 'reflection',
                    title: '🤔 Think About It',
                    content: 'Can you think of other ways science helps us in daily life? Look around your home or school - what do you see that uses science?'
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which of these uses science in daily life?',
                        options: [
                            'Only computers',
                            'Only medicine',
                            'Transportation, medicine, and communication',
                            'None of these'
                        ],
                        correctAnswer: 2,
                        hint: 'Science is used in many areas of our lives!',
                        feedback: {
                            correct: '🌟 Fantastic! Science is used in so many parts of our daily lives!',
                            incorrect: 'Science is everywhere! It\'s in transportation, medicine, phones, and much more!'
                        }
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Career Pathways in Science',
            objectives: [
                'Identify different science career pathways',
                'Understand the connection between science and careers',
                'Explore future opportunities in STEM fields'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '🎓 Career Pathways in Science',
                    content: 'Studying Integrated Science opens up exciting career opportunities! Let\'s explore the amazing paths you can take.',
                    narration: 'Your science journey is just beginning! There are so many exciting careers waiting for you in the future!'
                },
                {
                    type: 'careers',
                    title: '🚀 Your Future in Science',
                    showCareers: true
                },
                {
                    type: 'inspiration',
                    title: '✨ Dream Big!',
                    content: 'Whether you want to be a doctor, engineer, computer scientist, or astronaut - it all starts with learning science today. Every great scientist started exactly where you are now!'
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which is an example of Applied Science?',
                        options: [
                            'Pure Mathematics',
                            'Computer Science',
                            'Theoretical Physics',
                            'Abstract Chemistry'
                        ],
                        correctAnswer: 1,
                        hint: 'Applied sciences use science knowledge to solve real problems!',
                        feedback: {
                            correct: '🎊 Excellent! Computer Science is an applied science that uses scientific knowledge!',
                            incorrect: 'Applied sciences apply scientific knowledge to solve real-world problems!'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'What does studying Integrated Science prepare you for?',
                        options: [
                            'Only one specific job',
                            'Nothing useful',
                            'Many careers in science and technology',
                            'Only teaching'
                        ],
                        correctAnswer: 2,
                        hint: 'Science opens many doors to different careers!',
                        feedback: {
                            correct: '🏆 Perfect! Science prepares you for many exciting career opportunities!',
                            incorrect: 'Science education opens up many different career paths in various fields!'
                        }
                    }
                ]
            }
        }
    ]
};

export default moduleOne;
