import React, { useState, useEffect } from 'react';

export const AINativeDemo: React.FC = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const [text, setText] = useState('');
    const fullText = "Here's a generated response that simulates a streaming AI interaction. It appears token by token.";

    useEffect(() => {
        if (isStreaming) {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.slice(0, index + 1));
                index++;
                if (index >= fullText.length) {
                    clearInterval(interval);
                    setIsStreaming(false);
                }
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isStreaming]);

    return (
        <div className="flex flex-col gap-10 w-full">
            {/* Magic Input */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Magic Input</h3>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-200 blur"></div>
                    <div className="relative flex items-center bg-white rounded-lg p-1">
                        <div className="pl-3 text-purple-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Ask AI to generate something..."
                            className="w-full px-3 py-2 bg-transparent text-sm focus:outline-none text-ink placeholder-gray-400"
                        />
                        <button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-xs font-medium rounded-md text-ink transition-colors border border-gray-200">
                            Generate
                        </button>
                    </div>
                </div>
            </div>

            {/* Streaming Card */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-medium text-subtle uppercase tracking-wide">Streaming Response</h3>
                <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm relative overflow-hidden">
                    <div className="flex gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            AI
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-ink leading-relaxed min-h-[60px]">
                                {text}
                                {isStreaming && <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-purple-500 animate-pulse"></span>}
                                {!isStreaming && !text && <span className="text-gray-400 italic">Click generate to see streaming effect...</span>}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => { setText(''); setIsStreaming(true); }}
                            disabled={isStreaming}
                            className="text-xs font-medium text-purple-600 hover:text-purple-700 disabled:opacity-50"
                        >
                            {isStreaming ? 'Generating...' : 'Regenerate Response'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
