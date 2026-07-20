export const dashboardData = {
    progressCards: [
        { label: 'Courses in progress', value: 4, accent: 'bg-primary/10 text-primary', metric: '72%' },
        { label: 'Total hours learned', value: '42h', accent: 'bg-secondary/10 text-secondary', metric: '12 new' },
        { label: 'Certificates earned', value: 3, accent: 'bg-emerald-500/10 text-emerald-400', metric: '2 this month' },
        { label: 'Achievements', value: 12, accent: 'bg-sky-500/10 text-sky-400', metric: '5 badges' },
    ],
    continueLearning: [
        { id: 'design-essentials', title: 'Design Essentials for Product Teams', progress: 72, lesson: 'Lesson 6 of 12' },
        { id: 'web-dev-masterclass', title: 'Full-stack Web Development Masterclass', progress: 48, lesson: 'Lesson 9 of 24' },
    ],
    recentActivity: [
        { label: 'Completed', action: 'Lesson 5: Typography systems', time: '2h ago' },
        { label: 'Started', action: 'Course: Growth Marketing & Analytics', time: '1d ago' },
        { label: 'Downloaded', action: 'Design toolkit assets', time: '2d ago' },
    ],
    achievements: [
        { title: 'Consistency streak', value: '8 days' },
        { title: 'Top learner badge', value: 'Awarded' },
        { title: 'Fast track', value: '3 courses completed' },
    ],
}

export const learningItems = [
    { id: 'design-essentials', title: 'Design Essentials for Product Teams', instructor: 'Maya Lee', progress: 72, status: 'In progress' },
    { id: 'web-dev-masterclass', title: 'Full-stack Web Development Masterclass', instructor: 'Aiden Cole', progress: 48, status: 'In progress' },
    { id: 'data-insights', title: 'Data Insights for Business Leaders', instructor: 'Olivia Chen', progress: 100, status: 'Completed' },
]

export const bookmarks = [
    { id: 'ai-product-leadership', title: 'AI Product Leadership', category: 'Business', note: 'Save for next quarter' },
    { id: 'marketing-growth-plan', title: 'Growth Marketing & Analytics', category: 'Marketing', note: 'Review advertising module' },
    { id: 'design-essentials', title: 'Design Essentials for Product Teams', category: 'Design', note: 'Return to chapter 2' },
]

export const certificates = [
    { id: 'data-insights-cert', name: 'Data Insights for Business Leaders', issued: 'June 12, 2026', status: 'Verified' },
    { id: 'design-essentials-cert', name: 'Design Essentials for Product Teams', issued: 'May 27, 2026', status: 'Verified' },
    { id: 'web-dev-cert', name: 'Full-stack Web Development Masterclass', issued: 'April 18, 2026', status: 'Verified' },
]

export const lessons = [
    {
        id: 'lesson-01',
        title: 'Introduction to the course',
        duration: '8:32',
        type: 'Video',
        progress: 100,
        notes: ['Key design principles', 'Review course outline'],
        discussion: [
            { author: 'Mia', comment: 'Great start, looking forward to the next lesson.', time: '3h ago' },
            { author: 'Ravi', comment: 'The course structure feels very clear.', time: '5h ago' },
        ],
    },
    {
        id: 'lesson-02',
        title: 'Design systems fundamentals',
        duration: '12:18',
        type: 'Video',
        progress: 65,
        notes: ['Color tokens', 'Spacing scales'],
        discussion: [
            { author: 'Sara', comment: 'Can we use a different spacing unit?', time: '1d ago' },
        ],
    },
    {
        id: 'lesson-03',
        title: 'Interaction patterns and motion',
        duration: '10:04',
        type: 'Video',
        progress: 0,
        notes: [],
        discussion: [],
    },
]
