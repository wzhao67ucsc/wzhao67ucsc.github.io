import React, { useEffect } from 'react';

interface ProjectDetailProps {
    onBack: () => void;
    children: React.ReactNode;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack, children }) => {
    // Scroll to top smoothly when component mounts
    useEffect(() => {
        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="w-full animate-fade-in pb-20">
            <header className="w-full mb-8">
                <button
                    onClick={onBack}
                    className="text-subtle hover:text-ink text-sm flex items-center gap-2 transition-colors group"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-0.5 transition-transform">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Work
                </button>
            </header>

            <div className="w-full max-w-2xl mx-auto">
                {children}
            </div>
        </div>
    );
};
