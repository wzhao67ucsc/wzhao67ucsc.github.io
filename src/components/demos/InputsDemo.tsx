import React from 'react';

export const InputsDemo: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 w-full max-w-md">
            {/* Standard Input */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Email Address</label>
                <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink/10 focus:border-ink transition-all"
                />
            </div>

            {/* Input with Icon */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Search</label>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink/10 focus:border-ink transition-all"
                    />
                </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Message</label>
                <textarea
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink/10 focus:border-ink transition-all resize-none"
                />
            </div>
        </div>
    );
};
