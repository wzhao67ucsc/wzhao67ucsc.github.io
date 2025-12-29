import React, { useState } from 'react';
import { ComponentDetail } from './ComponentDetail';
import { ButtonDemo } from './demos/ButtonDemo';
import { ColorsDemo } from './demos/ColorsDemo';
import { TypographyDemo } from './demos/TypographyDemo';
import { InputsDemo } from './demos/InputsDemo';
import { AINativeDemo } from './demos/AINativeDemo';

type ComponentId = 'buttons' | 'typography' | 'colors' | 'inputs' | 'ai-native' | null;

export const ComponentLibrary: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<ComponentId>(null);

    const renderDetail = () => {
        switch (selectedComponent) {
            case 'buttons':
                return (
                    <ComponentDetail
                        title="Buttons"
                        description="Core interactive elements for user actions. Includes primary, secondary, and ghost variants."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <ButtonDemo />
                    </ComponentDetail>
                );
            case 'colors':
                return (
                    <ComponentDetail
                        title="Colors"
                        description="The semantic color system used throughout the application. Includes base, semantic, and decorative colors."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <ColorsDemo />
                    </ComponentDetail>
                );
            case 'typography':
                return (
                    <ComponentDetail
                        title="Typography"
                        description="Typographic scale and styles for headings, body text, and captions."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <TypographyDemo />
                    </ComponentDetail>
                );
            case 'inputs':
                return (
                    <ComponentDetail
                        title="Inputs"
                        description="Form controls for user input, including text fields, search bars, and textareas."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <InputsDemo />
                    </ComponentDetail>
                );
            case 'ai-native':
                return (
                    <ComponentDetail
                        title="AI Native"
                        description="Specialized components for AI interactions, including streaming responses and magic inputs."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <AINativeDemo />
                    </ComponentDetail>
                );
            default:
                return null;
        }
    };

    if (selectedComponent) {
        return renderDetail();
    }

    return (
        <section className="w-full animate-fade-in pb-20">
            <div className="w-full mb-12 text-left">
                <h1 className="text-3xl font-normal leading-tight mb-3 text-ink">
                    Component Library
                </h1>
                <p className="text-subtle text-base leading-relaxed">
                    A collection of reusable UI components and design patterns.
                </p>
            </div>

            {/* Foundations Section */}
            <div className="mb-12">
                <h2 className="text-sm font-medium text-subtle uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">
                    Foundations
                </h2>
                <div className="flex flex-wrap gap-6 w-full">
                    {/* Colors */}
                    <div
                        onClick={() => setSelectedComponent('colors')}
                        className="group cursor-pointer block w-[160px]"
                    >
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

                    {/* Typography */}
                    <div
                        onClick={() => setSelectedComponent('typography')}
                        className="group cursor-pointer block w-[160px]"
                    >
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
                </div>
            </div>

            {/* Components Section */}
            <div className="mb-12">
                <h2 className="text-sm font-medium text-subtle uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">
                    Components
                </h2>
                <div className="flex flex-wrap gap-6 w-full">
                    {/* Buttons */}
                    <div
                        onClick={() => setSelectedComponent('buttons')}
                        className="group cursor-pointer block w-[160px]"
                    >
                        <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                            <div className="w-20 h-8 bg-ink rounded-md shadow-sm"></div>
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                            <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                                Buttons
                            </h2>
                            <p className="text-subtle text-[11px] uppercase tracking-wide">Actions</p>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div
                        onClick={() => setSelectedComponent('inputs')}
                        className="group cursor-pointer block w-[160px]"
                    >
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
            </div>

            {/* AI Native Section */}
            <div>
                <h2 className="text-sm font-medium text-subtle uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">
                    AI Native
                </h2>
                <div className="flex flex-wrap gap-6 w-full">
                    {/* AI Components */}
                    <div
                        onClick={() => setSelectedComponent('ai-native')}
                        className="group cursor-pointer block w-[160px]"
                    >
                        <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                AI
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                            <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                                AI Native
                            </h2>
                            <p className="text-subtle text-[11px] uppercase tracking-wide">Streaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
