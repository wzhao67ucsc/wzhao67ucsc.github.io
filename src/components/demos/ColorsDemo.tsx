import React from 'react';

export const ColorsDemo: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Base Colors */}
            <div className="flex flex-col gap-4">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Base</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-20 w-full bg-ink rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-ink">Ink</span>
                            <span className="text-xs text-subtle">#000000</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full bg-canvas border border-gray-200 rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-ink">Canvas</span>
                            <span className="text-xs text-subtle">#FFFFFF</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full bg-subtle rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-ink">Subtle</span>
                            <span className="text-xs text-subtle">#6B7280</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Semantic Colors */}
            <div className="flex flex-col gap-4">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Semantic</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-20 w-full bg-blue-500 rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-ink">Accent</span>
                            <span className="text-xs text-subtle">Blue 500</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full bg-red-500 rounded-lg shadow-sm"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-ink">Destructive</span>
                            <span className="text-xs text-subtle">Red 500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
