import React from 'react';

export const ButtonDemo: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 items-start">
            {/* Primary */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Primary</h3>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 bg-ink text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                        Button
                    </button>
                    <button className="px-4 py-2 bg-ink text-white rounded-md text-sm font-medium opacity-50 cursor-not-allowed">
                        Disabled
                    </button>
                </div>
            </div>

            {/* Secondary */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Secondary</h3>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 bg-gray-100 text-ink rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                        Button
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-ink rounded-md text-sm font-medium opacity-50 cursor-not-allowed">
                        Disabled
                    </button>
                </div>
            </div>

            {/* Ghost */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Ghost</h3>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 text-ink rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                        Button
                    </button>
                    <button className="px-4 py-2 text-ink rounded-md text-sm font-medium opacity-50 cursor-not-allowed">
                        Disabled
                    </button>
                </div>
            </div>
        </div>
    );
};
