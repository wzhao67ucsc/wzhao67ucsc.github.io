import React from 'react';

export const TypographyDemo: React.FC = () => {
    return (
        <div className="flex flex-col gap-12 w-full">
            {/* Headings */}
            <div className="flex flex-col gap-6">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide border-b border-gray-100 pb-2">Headings</h3>
                <div className="space-y-6">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-bold text-ink">Heading 1</h1>
                        <span className="text-xs text-subtle font-mono">text-4xl font-bold</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-semibold text-ink">Heading 2</h2>
                        <span className="text-xs text-subtle font-mono">text-3xl font-semibold</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-medium text-ink">Heading 3</h3>
                        <span className="text-xs text-subtle font-mono">text-2xl font-medium</span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide border-b border-gray-100 pb-2">Body</h3>
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-base text-ink leading-relaxed">
                            Body Large — The quick brown fox jumps over the lazy dog. A robust design system ensures consistency across all applications.
                        </p>
                        <span className="text-xs text-subtle font-mono">text-base leading-relaxed</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-ink leading-relaxed">
                            Body Default — The quick brown fox jumps over the lazy dog. Used for standard text content throughout the interface.
                        </p>
                        <span className="text-xs text-subtle font-mono">text-sm leading-relaxed</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-subtle">
                            Caption — The quick brown fox jumps over the lazy dog. Used for secondary information and labels.
                        </p>
                        <span className="text-xs text-subtle font-mono">text-xs text-subtle</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
