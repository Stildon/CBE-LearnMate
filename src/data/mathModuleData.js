// Module One: Numbers - Whole Numbers
// Target: Grade 7 CBC Kenya

export const mathModuleOne = {
    id: 'math-module-1',
    title: 'Module One',
    strand: 'Numbers',
    subStrand: 'Whole Numbers',
    topic: 'Topic 1',
    targetGrade: 'Grade 7',
    totalLessons: 4,

    // Key Concepts
    concepts: [
        {
            id: 'place-value',
            name: 'Place Value & Total Value',
            icon: '📊',
            color: '#FF6B6B',
            description: 'Understanding the value of digits based on their position in a number.',
            keyPoints: [
                'Place value is the value a digit has because of its position',
                'Total value = digit × place value',
                'Moving left increases value by 10 times',
                'Moving right decreases value by 10 times'
            ]
        },
        {
            id: 'rounding',
            name: 'Rounding Off Numbers',
            icon: '🔄',
            color: '#4FACFE',
            description: 'Estimating numbers by changing them to the nearest 10, 100, 1000, etc.',
            keyPoints: [
                'Round to nearest 10, 100, 1,000, 10,000, etc.',
                'Look at the digit to the right',
                'If 5 or more, round up',
                'If less than 5, round down'
            ]
        },
        {
            id: 'even-odd',
            name: 'Even and Odd Numbers',
            icon: '⚖',
            color: '#2ECC71',
            description: 'Numbers that are divisible by 2 (even) or not (odd).',
            keyPoints: [
                'Even numbers end in 0, 2, 4, 6, 8',
                'Odd numbers end in 1, 3, 5, 7, 9',
                'Even numbers are divisible by 2',
                'Odd numbers leave remainder 1 when divided by 2'
            ]
        },
        {
            id: 'prime',
            name: 'Prime Numbers',
            icon: '⭐',
            color: '#9B59B6',
            description: 'Numbers greater than 1 with only two factors: 1 and itself.',
            keyPoints: [
                'Prime numbers have exactly 2 factors',
                'First prime number is 2 (only even prime)',
                'Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23',
                'Composite numbers have more than 2 factors'
            ]
        },
        {
            id: 'operations',
            name: 'Operations on Whole Numbers',
            icon: '➕',
            color: '#FFB347',
            description: 'Addition, subtraction, multiplication, and division of whole numbers.',
            keyPoints: [
                'Addition (+): Combining numbers',
                'Subtraction (−): Finding difference',
                'Multiplication (×): Repeated addition',
                'Division (÷): Sharing equally'
            ]
        },
        {
            id: 'sequences',
            name: 'Number Sequences',
            icon: '🔁',
            color: '#FF6B6B',
            description: 'Patterns of numbers that follow a specific rule.',
            keyPoints: [
                'Sequences follow patterns or rules',
                'Find the rule by looking at differences',
                'Use the rule to predict next numbers',
                'Common patterns: add, subtract, multiply, divide'
            ]
        }
    ],

    // Example Numbers for Activities
    examples: {
        wholeNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 50, 100],
        evenNumbers: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        oddNumbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        primeNumbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31],
        roundingExamples: [
            { number: 435678754, roundTo: 100000, result: 435700000 },
            { number: 2847, roundTo: 10, result: 2850 },
            { number: 6543, roundTo: 100, result: 6500 }
        ]
    },

    // Lessons
    lessons: [
        {
            id: 1,
            title: 'Introduction to Whole Numbers',
            objectives: [
                'Define whole numbers',
                'Identify whole numbers in daily life',
                'Understand the importance of whole numbers'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '🔢 What are Whole Numbers?',
                    content: 'Whole numbers are numbers that do not have fractions or decimals. They are complete numbers that we use every day for counting!',
                    narration: 'Welcome to the world of whole numbers! These are the numbers you use when counting your books, friends, or anything around you.'
                },
                {
                    type: 'concept',
                    title: '📝 Whole Numbers Include',
                    content: 'Whole numbers start from 0 and go on forever: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12... and so on!',
                    examples: [
                        '0 books on the shelf',
                        '5 students in a group',
                        '100 shillings',
                        '1,000 meters in a kilometer'
                    ]
                },
                {
                    type: 'real-life',
                    title: '🌍 Where We Use Whole Numbers',
                    content: 'We use whole numbers everywhere in our daily lives!',
                    showExamples: true
                },
                {
                    type: 'encouragement',
                    title: '💪 You Already Know Whole Numbers!',
                    content: 'Every time you count anything - your age, your pencils, the days of the week - you\'re using whole numbers. You\'re already a whole number expert!'
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which of these is a whole number?',
                        options: ['2.5', '7', '1/2', '3.14'],
                        correctAnswer: 1,
                        hint: 'Whole numbers have no fractions or decimals!',
                        feedback: {
                            correct: '🎉 Perfect! 7 is a whole number with no fractions or decimals!',
                            incorrect: 'Remember, whole numbers are complete numbers with no parts or decimals.'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'What is the smallest whole number?',
                        options: ['1', '0', '-1', '10'],
                        correctAnswer: 1,
                        hint: 'Think about where whole numbers start!',
                        feedback: {
                            correct: '⭐ Excellent! 0 is the smallest whole number!',
                            incorrect: 'Whole numbers start from 0 and go up: 0, 1, 2, 3...'
                        }
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Place Value and Rounding',
            objectives: [
                'Understand place value and total value',
                'Apply rounding to different place values',
                'Use rounding in real-life situations'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '📊 Understanding Place Value',
                    content: 'Every digit in a number has a special place and value. The position of a digit determines how much it\'s worth!',
                    narration: 'Let\'s discover how the same digit can mean different things depending on where it sits in a number!'
                },
                {
                    type: 'concept',
                    title: '🔢 Place Value Explained',
                    content: 'In the number 5,432:\n• 5 is in the thousands place (worth 5,000)\n• 4 is in the hundreds place (worth 400)\n• 3 is in the tens place (worth 30)\n• 2 is in the ones place (worth 2)',
                    showPlaceValue: true
                },
                {
                    type: 'concept',
                    title: '🔄 Rounding Off Numbers',
                    content: 'Rounding helps us work with simpler numbers! We round to the nearest 10, 100, 1,000, and more.',
                    showRounding: true
                },
                {
                    type: 'activity',
                    title: '🎮 Practice Rounding',
                    activityType: 'rounding',
                    instruction: 'Round these numbers to the nearest 100!',
                    items: [
                        { number: 2847, answer: 2800 },
                        { number: 6543, answer: 6500 },
                        { number: 1299, answer: 1300 }
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'In the number 7,845, what is the place value of 8?',
                        options: ['Ones', 'Tens', 'Hundreds', 'Thousands'],
                        correctAnswer: 2,
                        hint: 'Look at the position of 8 in the number!',
                        feedback: {
                            correct: '🎯 Yes! 8 is in the hundreds place!',
                            incorrect: 'Count the positions from right to left: ones, tens, hundreds...'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'Round 6,543 to the nearest hundred.',
                        options: ['6,500', '6,600', '7,000', '6,540'],
                        correctAnswer: 0,
                        hint: 'Look at the tens digit. Is it 5 or more?',
                        feedback: {
                            correct: '🌟 Perfect! 6,543 rounds down to 6,500!',
                            incorrect: 'The tens digit is 4 (less than 5), so we round down to 6,500.'
                        }
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Even, Odd, and Prime Numbers',
            objectives: [
                'Identify even and odd numbers',
                'Understand prime numbers',
                'Distinguish between prime and composite numbers'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '⚖ Even and Odd Numbers',
                    content: 'Numbers can be sorted into two groups: even numbers and odd numbers. Let\'s learn how to tell them apart!',
                    narration: 'Imagine sharing cookies with a friend. Even numbers can be shared equally, but odd numbers always have one left over!'
                },
                {
                    type: 'concept',
                    title: '✅ Even Numbers',
                    content: 'Even numbers are divisible by 2 with no remainder. They always end in 0, 2, 4, 6, or 8.',
                    examples: ['2', '4', '6', '8', '10', '12', '20', '100'],
                    showEvenOdd: true
                },
                {
                    type: 'concept',
                    title: '⭐ Prime Numbers',
                    content: 'Prime numbers are special! They are numbers greater than 1 that can only be divided evenly by 1 and themselves.',
                    showPrimes: true
                },
                {
                    type: 'activity',
                    title: '🎯 Sort the Numbers',
                    activityType: 'sort',
                    instruction: 'Sort these numbers into Even and Odd!',
                    items: [
                        { number: 7, type: 'odd' },
                        { number: 12, type: 'even' },
                        { number: 15, type: 'odd' },
                        { number: 20, type: 'even' }
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which number is odd?',
                        options: ['24', '17', '30', '46'],
                        correctAnswer: 1,
                        hint: 'Odd numbers end in 1, 3, 5, 7, or 9!',
                        feedback: {
                            correct: '🎊 Correct! 17 is an odd number!',
                            incorrect: 'Look at the last digit. Odd numbers end in 1, 3, 5, 7, or 9.'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'Which of these is a prime number?',
                        options: ['9', '15', '11', '21'],
                        correctAnswer: 2,
                        hint: 'Prime numbers have only 2 factors: 1 and themselves!',
                        feedback: {
                            correct: '🏆 Excellent! 11 is a prime number!',
                            incorrect: 'Check if the number can be divided by anything other than 1 and itself.'
                        }
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Operations and Sequences',
            objectives: [
                'Perform operations on whole numbers',
                'Understand BODMAS/PEMDAS',
                'Recognize and continue number sequences'
            ],
            sections: [
                {
                    type: 'intro',
                    title: '➕ Operations on Whole Numbers',
                    content: 'We can do four main operations with whole numbers: addition, subtraction, multiplication, and division!',
                    narration: 'These operations are like tools in your math toolbox. Each one helps you solve different problems!'
                },
                {
                    type: 'concept',
                    title: '🔢 The Four Operations',
                    content: '**Addition (+)**: Combining numbers together\n**Subtraction (−)**: Finding the difference\n**Multiplication (×)**: Repeated addition\n**Division (÷)**: Sharing equally',
                    showOperations: true
                },
                {
                    type: 'concept',
                    title: '📋 Order of Operations (BODMAS)',
                    content: 'When solving problems with multiple operations, follow this order:\n**B**rackets\n**O**rders (powers)\n**D**ivision\n**M**ultiplication\n**A**ddition\n**S**ubtraction',
                    examples: [
                        '5 + 3 × 2 = 5 + 6 = 11 (multiply first!)',
                        '(5 + 3) × 2 = 8 × 2 = 16 (brackets first!)'
                    ]
                },
                {
                    type: 'concept',
                    title: '🔁 Number Sequences',
                    content: 'Number sequences follow patterns or rules. Can you find the pattern?',
                    showSequences: true
                },
                {
                    type: 'inspiration',
                    title: '✨ You\'re a Math Star!',
                    content: 'You\'ve learned so much about whole numbers! From counting to complex operations, you now have powerful math skills. Keep practicing and you\'ll become even better!'
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'What is 5 + 3 × 2?',
                        options: ['16', '11', '13', '10'],
                        correctAnswer: 1,
                        hint: 'Remember BODMAS! Multiply before adding.',
                        feedback: {
                            correct: '🎉 Perfect! You did multiplication first: 5 + 6 = 11!',
                            incorrect: 'Remember to multiply first (3 × 2 = 6), then add (5 + 6 = 11).'
                        }
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
                        question: 'What comes next in this sequence? 8, 14, 20, 26, __',
                        options: ['30', '32', '28', '34'],
                        correctAnswer: 1,
                        hint: 'Find the pattern! What number is being added each time?',
                        feedback: {
                            correct: '⭐ Excellent! The pattern is +6, so 26 + 6 = 32!',
                            incorrect: 'Look at the differences: 14-8=6, 20-14=6. The pattern is +6!'
                        }
                    }
                ]
            }
        }
    ]
};

export default mathModuleOne;
