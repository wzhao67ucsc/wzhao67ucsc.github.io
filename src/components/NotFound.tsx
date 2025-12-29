import React from 'react';

export const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-canvas text-ink p-4 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-subtle text-lg mb-8">Page not found.</p>
            <a
                href="/"
                className="px-4 py-2 bg-ink text-canvas rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
                Go Home
            </a>
        </div>
    );
};
