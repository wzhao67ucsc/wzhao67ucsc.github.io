export interface ProjectImage {
    src: string;
    label: string;
    caption: string;
}

export interface ProjectFeature {
    title: string;
    description: string;
}

export interface ProjectMeta {
    label: string;
    value: string;
    links?: { text: string; url: string }[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    cardImage: {
        light: string;
        dark: string;
    };
    meta: ProjectMeta[];
    heroImage: string;
    heroCaption: string;
    gallery?: ProjectImage[];
    challenge: string;
    featuresTitle: string;
    features: ProjectFeature[];
}

export const projects: Project[] = [
    {
        id: 'careerloop',
        title: 'CareerLoop',
        description: 'An AI-powered job search OS. This SaaS platform helps over 30,000 users in 110+ countries automate resume building and job tracking.',
        role: 'Founder',
        cardImage: {
            light: '/media/light/careerloop.png',
            dark: '/media/dark/dark_careerloop.png',
        },
        meta: [
            { label: 'Role', value: 'Founder / Product Designer' },
            { label: 'Reach', value: '30k+ Users / 110+ Countries / 70,000,000 Views' },
            { label: 'Tech Stack', value: 'Next, TS, React, Tailwind' },
            {
                label: 'Media / Press',
                value: '',
                links: [
                    { text: 'Lookout', url: 'https://lookout.co/how-a-ucsc-student-built-website-helps-undergrads-go-from-career-questions-to-options/story' },
                    { text: 'UC Tech', url: 'https://uctechnews.ucop.edu/uc-santa-cruz-student-builds-free-resume-tool/' },
                    { text: 'SC Works', url: 'https://www.santacruzworks.org/news/careerloop' },
                ]
            },
        ],
        heroImage: '/media/careerloop/hero.png',
        heroCaption: 'Fig 01. The Career OS landing page allows users to manage resumes and applications in one place.',
        gallery: [
            { src: '/media/careerloop/hero.png', label: 'Landing', caption: 'Fig 01. The Career OS landing page allows users to manage resumes and applications in one place.' },
            { src: '/media/careerloop/auth.png', label: 'Authentication', caption: 'Fig 02. Streamlined authentication and onboarding experience.' },
            { src: '/media/careerloop/dashboard.png', label: 'Dashboard', caption: 'Fig 03. The main dashboard interface for tracking job applications and career milestones.' },
            { src: '/media/careerloop/builder.png', label: 'Editor', caption: 'Fig 04. AI-powered resume builder that optimizes bullet points to match job descriptions.' },
        ],
        challenge: "The job search process is often slow and repetitive. The goal was to build a system that uses AI to bridge the gap between a user's experience and a recruiter's expectations, making it easier to land interviews.",
        featuresTitle: 'Product Features',
        features: [
            { title: 'AI Resume Optimization', description: 'The system automatically rewrites bullet points to match the specific job description a user is targeting.' },
            { title: 'Automated Job Scraping', description: 'Users can save jobs from any URL directly to their dashboard. The tool extracts all job data automatically.' },
            { title: 'Full Platform Overhaul', description: 'Redesigned every major part of the site, including the hero section, landing page, payments, and login systems.' },
            { title: 'UX/UI Iteration', description: 'Refined the interface based on usage data from over 30,000 people across various global markets.' },
        ],
    },
    {
        id: 'floot',
        title: 'Floot (YC S25)',
        description: 'As a Founding Member, I led UI/UX improvements based on data-driven insights. Focused on optimizing the hero section, simplifying authentication flows, and redesigning paywalls with copywriting tailored to user intent.',
        role: 'Founding Member',
        cardImage: {
            light: '/media/light/floot.png',
            dark: '/media/dark/dark_floot.png',
        },
        meta: [
            { label: 'Role', value: 'Founding Member / Designer' },
            { label: 'Platform', value: 'Desktop / Web' },
        ],
        heroImage: '/media/floot/hero.png',
        heroCaption: 'Fig 01. The redesigned hero section optimized for conversion based on PostHog analytics insights.',
        challenge: "Using PostHog analytics, I identified key friction points in the user journey. The hero section wasn't converting effectively, the authentication flow was unnecessarily complex, and paywalls weren't resonating with user intent. The goal was to improve conversion rates through targeted UI/UX improvements backed by data.",
        featuresTitle: 'My Work',
        features: [
            { title: 'Data-Driven Analysis', description: 'Analyzed user behavior and conversion funnels using PostHog to identify key friction points and opportunities for improvement across the platform.' },
            { title: 'Hero Section Redesign', description: 'Redesigned the hero section based on analytics data to improve clarity, messaging, and conversion rates for new users landing on the platform.' },
            { title: 'Simplified Authentication', description: 'Streamlined the authentication flow, reducing complexity and friction to create a smoother onboarding experience for users.' },
            { title: 'Intent-Based Paywalls', description: 'Redesigned paywall interfaces with copywriting tailored to user intent, improving conversion rates by addressing what users actually need at each stage of their journey.' },
        ],
    },
    {
        id: 'monotone',
        title: 'Monotone',
        description: 'An async screening platform for recruiting teams. Like Typeform, but for recruiting. Share context, ask questions, get video responses—all asynchronously to screen candidates faster without scheduling back-and-forth.',
        role: 'Founding Designer',
        cardImage: {
            light: '/media/light/monotone.png',
            dark: '/media/dark/dark_monotone.png',
        },
        meta: [
            { label: 'Role', value: 'Founding Product Designer' },
            { label: 'Platform', value: 'Web' },
        ],
        heroImage: '/media/monotone/hero.png',
        heroCaption: 'Fig 01. The Monotone interface for building async screening assessments and reviewing candidate responses.',
        challenge: "Recruiting teams waste significant time scheduling and coordinating with candidates for initial screenings. The back-and-forth of finding mutual availability creates friction and slows down the hiring process. The goal was to create an async screening platform that allows teams to screen candidates faster without the scheduling overhead.",
        featuresTitle: 'My Work',
        features: [
            { title: 'Async Screening Builder', description: 'Designed the core interface for building screening assessments where teams can share context about the role, ask questions, and request video intros—mixing content with prompts.' },
            { title: 'Candidate Response Dashboard', description: 'Created a unified dashboard where all candidate responses are displayed, with Slack notifications, comparison tools, rating systems, and shortlisting capabilities.' },
            { title: 'Link-Based Sharing', description: 'Designed the workflow for sharing a single link that candidates can complete on their own time, eliminating scheduling needs entirely.' },
            { title: 'Multi-Format Support', description: 'Built support for video, audio, and text responses, giving candidates flexibility in how they respond while maintaining consistency for reviewers.' },
        ],
    },
];

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

export const getProjectIndex = (id: string): number => {
    return projects.findIndex(p => p.id === id);
};

export const getNextProject = (currentId: string): Project | null => {
    const index = getProjectIndex(currentId);
    return index < projects.length - 1 ? projects[index + 1] : null;
};

export const getPrevProject = (currentId: string): Project | null => {
    const index = getProjectIndex(currentId);
    return index > 0 ? projects[index - 1] : null;
};
