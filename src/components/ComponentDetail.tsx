import React from 'react';

interface ComponentDetailProps {
    title: string;
    description: string;
    onBack: () => void;
    children: React.ReactNode;
}

export const ComponentDetail: React.FC<ComponentDetailProps> = ({ title, description, onBack, children }) => {
    return (
        <div className="w-full animate-fade-in">
            <button
                onClick={onBack}
                className="mb-6 text-subtle hover:text-ink text-sm flex items-center gap-2 transition-colors group"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-0.5 transition-transform">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Library
            </button>

            <div className="mb-8">
                <h1 className="text-3xl font-normal leading-tight mb-2 text-ink">
                    {title}
                </h1>
                <p className="text-subtle text-base">
                    {description}
                </p>
            </div>

            {/* Preview Canvas */}
            <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="w-full h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30"></div>
                </div>

                <div className="p-12 min-h-[400px] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-w-[300px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
