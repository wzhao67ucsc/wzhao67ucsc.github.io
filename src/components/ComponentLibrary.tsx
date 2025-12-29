import React from 'react';

export const ComponentLibrary: React.FC = () => {
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
                {/* Card 1: Buttons */}
                <div className="group cursor-pointer block w-[160px]">
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                        <div className="w-20 h-8 bg-ink rounded-md shadow-sm"></div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                        <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                            Buttons
                        </h2>
                        <p className="text-subtle text-[11px] uppercase tracking-wide">Components</p>
                    </div>
                </div>

                {/* Card 2: Typography */}
                <div className="group cursor-pointer block w-[160px]">
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center flex-col gap-2">
                        <div className="w-16 h-2 bg-ink rounded-full opacity-80"></div>
                        <div className="w-12 h-2 bg-ink rounded-full opacity-60"></div>
                        <div className="w-20 h-2 bg-ink rounded-full opacity-40"></div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                        <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                            Typography
                        </h2>
                        <p className="text-subtle text-[11px] uppercase tracking-wide">Styles</p>
                    </div>
                </div>

                {/* Card 3: Colors */}
                <div className="group cursor-pointer block w-[160px]">
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-ink"></div>
                        <div className="w-8 h-8 rounded-full bg-subtle"></div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                        <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                            Colors
                        </h2>
                        <p className="text-subtle text-[11px] uppercase tracking-wide">System</p>
                    </div>
                </div>

                {/* Card 4: Inputs */}
                <div className="group cursor-pointer block w-[160px]">
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                        <div className="w-24 h-8 border border-gray-300 bg-white rounded-md"></div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                        <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                            Inputs
                        </h2>
                        <p className="text-subtle text-[11px] uppercase tracking-wide">Forms</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
