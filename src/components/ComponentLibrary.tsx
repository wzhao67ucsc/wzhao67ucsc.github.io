import React, { useState } from 'react';
import { TracesDemo } from './TracesDemo';

export const ComponentLibrary: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    if (selectedComponent === 'traces') {
        return (
            <section className="w-full animate-fade-in">
                <button
                    onClick={() => setSelectedComponent(null)}
                    className="mb-6 text-subtle hover:text-ink transition-colors text-sm flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    Back to Component Library
                </button>
                <div className="w-full mb-10 text-left">
                    <h1 className="text-3xl font-normal leading-tight mb-3 text-ink">
                        AI Observability
                    </h1>
                    <p className="text-subtle text-base leading-relaxed">
                        Real-time traces dashboard for monitoring AI agent activity.
                    </p>
                </div>
                <TracesDemo />
            </section>
        );
    }

    return (
        <section className="w-full animate-fade-in">
            <div className="w-full mb-10 text-left">
                <h1 className="text-3xl font-normal leading-tight mb-3 text-ink">
                    Component Library
                </h1>
                <p className="text-subtle text-base leading-relaxed">
                    A collection of reusable UI components and design patterns.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 w-full">
                {/* Card 5: Traces */}
                <div
                    className="group cursor-pointer block w-[160px]"
                    onClick={() => setSelectedComponent('traces')}
                >
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                        <div className="w-full h-full p-2 flex flex-col gap-1">
                            <div className="flex items-center justify-between px-2 py-1 bg-white rounded border border-gray-200">
                                <div className="w-2 h-2 bg-ink rounded"></div>
                                <span className="text-[8px] font-semibold text-ink">Traces</span>
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-white rounded border border-gray-200 p-1">
                                <div className="h-full flex flex-col gap-0.5">
                                    <div className="h-2 bg-gray-50 rounded"></div>
                                    <div className="h-2 bg-blue-50 rounded"></div>
                                    <div className="h-2 bg-gray-50 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                        <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                            Traces
                        </h2>
                        <p className="text-subtle text-[11px] uppercase tracking-wide">Dashboard</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
