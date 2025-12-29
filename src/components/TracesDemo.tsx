import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Trace {
    time: string;
    input: string;
    toolCount: number;
    model: string;
    cost: string;
    latency: string;
    isSelected?: boolean;
}

const traces: Trace[] = [
    { time: 'just now', input: 'Tokyo Weather & JPY Convert', toolCount: 2, model: 'gpt-4o', cost: '$0.0156', latency: '2.35s', isSelected: true },
    { time: '7s ago', input: 'Dinner ideas chicken rice...', toolCount: 4, model: 'gpt-4o-mini', cost: '$0.0009', latency: '1.68s' },
    { time: '13s ago', input: 'Onboarding new hire Sarah...', toolCount: 6, model: 'claude-3.5', cost: '$0.0230', latency: '2.46s' },
    { time: '20s ago', input: 'Monthly revenue data 2024', toolCount: 5, model: 'gpt-4o', cost: '$0.0390', latency: '3.23s' },
    { time: '28s ago', input: 'Summarize meeting notes Q4...', toolCount: 3, model: 'claude-3.5', cost: '$0.0180', latency: '2.11s' },
    { time: '35s ago', input: 'Draft email to client re: contract', toolCount: 2, model: 'gpt-4o', cost: '$0.0120', latency: '1.92s' },
    { time: '42s ago', input: 'Analyze sales data trends...', toolCount: 7, model: 'gpt-4o', cost: '$0.0450', latency: '4.12s' },
    { time: '51s ago', input: 'Book flight SFO to NYC Friday', toolCount: 4, model: 'gpt-4o-mini', cost: '$0.0012', latency: '1.45s' },
    { time: '1m ago', input: 'Research competitor pricing...', toolCount: 5, model: 'claude-3.5', cost: '$0.0290', latency: '3.67s' },
    { time: '1m ago', input: 'Generate weekly report PDF', toolCount: 3, model: 'gpt-4o', cost: '$0.0210', latency: '2.88s' },
];

export const TracesDemo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });

    const centerDashboard = () => {
        if (!containerRef.current) return;
        const container = d3.select(containerRef.current);
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const dashboardWidth = 1200;
        const dashboardHeight = 560;
        const scale = 0.75;
        const x = (containerWidth - dashboardWidth * scale) / 2;
        const y = (containerHeight - dashboardHeight * scale) / 2;
        const zoom = d3.zoom<HTMLDivElement, unknown>().scaleExtent([0.2, 3]);
        container.transition().duration(300).call(
            zoom.transform,
            d3.zoomIdentity.translate(x, y).scale(scale)
        );
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const container = d3.select(containerRef.current);

        const zoom = d3.zoom<HTMLDivElement, unknown>()
            .scaleExtent([0.2, 3])
            .on('zoom', (event) => {
                const { x, y, k } = event.transform;
                setTransform({ x, y, k });
            });

        container.call(zoom);

        // Center dashboard on load
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const dashboardWidth = 1200;
        const dashboardHeight = 560;
        const scale = 0.75;
        const x = (containerWidth - dashboardWidth * scale) / 2;
        const y = (containerHeight - dashboardHeight * scale) / 2;
        const initialTransform = d3.zoomIdentity.translate(x, y).scale(scale);
        container.call(zoom.transform, initialTransform);

        return () => {
            container.on('.zoom', null);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="max-w-5xl mx-auto h-[calc(100vh-220px)] min-h-[500px] cursor-grab active:cursor-grabbing overflow-hidden relative bg-gray-50/30 rounded-xl border border-gray-200"
            style={{ touchAction: 'none' }}
            onDoubleClick={centerDashboard}
        >
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                    transform: `translate(${transform.x % 24}px, ${transform.y % 24}px)`,
                }}
            />

            {/* Transformable Dashboard */}
            <div
                style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`,
                    transformOrigin: '0 0',
                    willChange: 'transform'
                }}
            >
                <div className="font-sans bg-white text-ink rounded-xl border border-gray-200 shadow-xl shadow-black/5 overflow-hidden" style={{ width: '1200px' }}>

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-white">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 bg-ink rounded-md"></div>
                            <span className="text-sm font-semibold tracking-tight text-ink">Traces</span>
                        </div>
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/50">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </div>
                            <span className="text-xs font-medium text-emerald-700">Live</span>
                        </div>
                    </div>

                    <div className="flex flex-row" style={{ height: '520px' }}>

                        {/* Table Section */}
                        <div className="flex-1 overflow-hidden flex flex-col border-r border-gray-100">
                            <div className="overflow-auto h-full">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 sticky top-0 z-10">
                                        <tr className="text-subtle text-xs uppercase tracking-wider">
                                            <th className="px-4 py-2 font-medium w-24">Time</th>
                                            <th className="px-4 py-2 font-medium">Input</th>
                                            <th className="px-4 py-2 font-medium w-28">Model</th>
                                            <th className="px-4 py-2 font-medium w-20 text-right">Cost</th>
                                            <th className="px-4 py-2 font-medium w-20 text-right">Latency</th>
                                            <th className="px-4 py-2 w-8"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {traces.map((trace, index) => (
                                            <tr key={index} className={trace.isSelected ? "bg-blue-50/30" : "hover:bg-gray-50 transition-colors cursor-pointer"}>
                                                <td className="px-4 py-2 text-subtle text-xs whitespace-nowrap">{trace.time}</td>
                                                <td className="px-4 py-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`truncate max-w-[200px] ${trace.isSelected ? 'font-medium text-ink' : 'text-ink/80'}`}>{trace.input}</span>
                                                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-violet-50 text-violet-600 border border-violet-100 font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>
                                                            {trace.toolCount}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-xs font-medium text-ink/80">{trace.model}</td>
                                                <td className="px-4 py-2 text-right text-xs font-medium text-emerald-600 tabular-nums">{trace.cost}</td>
                                                <td className="px-4 py-2 text-right text-xs text-subtle tabular-nums">{trace.latency}</td>
                                                <td className="px-4 py-2 text-subtle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Detail Panel - Compact */}
                        <div className="w-[420px] flex flex-col h-full bg-white overflow-hidden">

                            {/* Detail Header */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-canvas shrink-0">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    <span className="font-semibold text-ink text-sm">generateText</span>
                                    <span className="text-[9px] font-bold uppercase tracking-wide bg-gray-100 text-subtle px-1.5 py-0.5 rounded">stop</span>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded text-subtle transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>

                            {/* Stats Row - Compact */}
                            <div className="px-4 py-2 border-b border-gray-100 grid grid-cols-4 gap-3 bg-canvas shrink-0">
                                <div>
                                    <div className="text-[9px] uppercase tracking-wider text-subtle font-medium">Model</div>
                                    <div className="text-xs font-semibold text-ink">gpt-4o</div>
                                </div>
                                <div>
                                    <div className="text-[9px] uppercase tracking-wider text-subtle font-medium">Duration</div>
                                    <div className="text-xs font-semibold text-ink tabular-nums">2.35s</div>
                                </div>
                                <div>
                                    <div className="text-[9px] uppercase tracking-wider text-subtle font-medium">Tokens</div>
                                    <div className="text-xs font-semibold text-ink tabular-nums">1,235</div>
                                </div>
                                <div>
                                    <div className="text-[9px] uppercase tracking-wider text-subtle font-medium">Cost</div>
                                    <div className="text-xs font-semibold text-emerald-600 tabular-nums">$0.0156</div>
                                </div>
                            </div>

                            {/* Timing Waterfall - Compact */}
                            <div className="border-b border-gray-100 shrink-0">
                                <div className="px-4 py-2">
                                    <div className="flex justify-between text-[9px] text-subtle mb-1 font-medium tabular-nums">
                                        <span>0ms</span>
                                        <span className="text-[9px] font-semibold uppercase tracking-wider text-subtle">Timing</span>
                                        <span>2345ms</span>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="relative flex-1 h-5 bg-gray-50 rounded-sm overflow-hidden">
                                                <div className="absolute top-0 bottom-0 bg-sky-500 rounded-sm flex items-center px-1.5" style={{ left: '0%', width: '28.5%' }}>
                                                    <span className="text-[9px] font-medium text-white whitespace-nowrap truncate">LLM</span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] text-subtle tabular-nums w-8 text-right">670ms</span>
                                        </div>

                                        <div className="flex items-center gap-2 pl-1">
                                            <div className="relative flex-1 h-5 bg-gray-50 rounded-sm overflow-hidden">
                                                <div className="absolute top-0 bottom-0 bg-violet-500 rounded-sm flex items-center px-1.5" style={{ left: '28.5%', width: '19%' }}>
                                                    <span className="text-[9px] font-medium text-white whitespace-nowrap truncate">weather</span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] text-subtle tabular-nums w-8 text-right">450ms</span>
                                        </div>

                                        <div className="flex items-center gap-2 pl-1">
                                            <div className="relative flex-1 h-5 bg-gray-50 rounded-sm overflow-hidden">
                                                <div className="absolute top-0 bottom-0 bg-violet-500 rounded-sm flex items-center px-1.5" style={{ left: '47.7%', width: '14%' }}>
                                                    <span className="text-[9px] font-medium text-white whitespace-nowrap truncate">convert</span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] text-subtle tabular-nums w-8 text-right">330ms</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="relative flex-1 h-5 bg-gray-50 rounded-sm overflow-hidden">
                                                <div className="absolute top-0 bottom-0 bg-emerald-500 rounded-sm flex items-center px-1.5" style={{ left: '61.8%', width: '38.1%' }}>
                                                    <span className="text-[9px] font-medium text-white whitespace-nowrap truncate">Response</span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] text-subtle tabular-nums w-8 text-right">895ms</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 mt-1.5">
                                        <div className="flex items-center gap-1 text-[9px] text-subtle font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div> LLM
                                        </div>
                                        <div className="flex items-center gap-1 text-[9px] text-subtle font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div> Tool
                                        </div>
                                        <div className="flex items-center gap-1 text-[9px] text-subtle font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Out
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Messages - Compact */}
                            <div className="p-3 space-y-3 overflow-y-auto flex-1">

                                {/* System Message */}
                                <div className="flex gap-2">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-subtle"><circle cx="12" cy="12" r="3" /></svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-semibold text-ink">System</div>
                                        <div className="bg-gray-50 text-subtle text-[11px] px-2 py-1.5 rounded border border-gray-100 leading-relaxed">
                                            You are a helpful assistant that can use tools.
                                        </div>
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-2">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-semibold text-ink">User</div>
                                        <div className="text-ink text-[11px] leading-relaxed">
                                            Weather in Tokyo and convert 1000 JPY to USD
                                        </div>
                                    </div>
                                </div>

                                {/* Tool Calls - Compact */}
                                <div className="ml-8 space-y-2">
                                    <div className="bg-white rounded border border-violet-100 shadow-sm overflow-hidden">
                                        <div className="bg-violet-50/50 px-2 py-1 flex items-center gap-1.5 border-b border-violet-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>
                                            <span className="text-[10px] font-semibold text-violet-700 font-mono">get_weather("Tokyo")</span>
                                        </div>
                                        <div className="px-2 py-1 bg-canvas">
                                            <code className="text-[10px] font-mono text-ink">{`{ "temp": 22, "condition": "Cloudy" }`}</code>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded border border-violet-100 shadow-sm overflow-hidden">
                                        <div className="bg-violet-50/50 px-2 py-1 flex items-center gap-1.5 border-b border-violet-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>
                                            <span className="text-[10px] font-semibold text-violet-700 font-mono">convert_currency(1000, "USD")</span>
                                        </div>
                                        <div className="px-2 py-1 bg-canvas">
                                            <code className="text-[10px] font-mono text-ink">{`{ "rate": 0.0067, "result": 6.70 }`}</code>
                                        </div>
                                    </div>
                                </div>

                                {/* Assistant Message */}
                                <div className="flex gap-2">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><rect width="16" height="12" x="4" y="8" rx="2" /></svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] font-semibold text-ink">Assistant</div>
                                        <div className="text-ink text-[11px] leading-relaxed">
                                            Tokyo: 22°C, cloudy. 1,000 JPY ≈ $6.70 USD.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <button
                    onClick={() => {
                        if (!containerRef.current) return;
                        const container = d3.select(containerRef.current);
                        const zoom = d3.zoom<HTMLDivElement, unknown>();
                        container.transition().duration(200).call(zoom.scaleBy, 1.3);
                    }}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors text-subtle hover:text-ink"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <div className="h-px bg-gray-100"></div>
                <button
                    onClick={() => {
                        if (!containerRef.current) return;
                        const container = d3.select(containerRef.current);
                        const zoom = d3.zoom<HTMLDivElement, unknown>();
                        container.transition().duration(200).call(zoom.scaleBy, 0.7);
                    }}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors text-subtle hover:text-ink"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>

            {/* Instructions hint */}
            <div className="absolute bottom-4 left-4 text-[10px] text-subtle bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md border border-gray-100">
                Drag to pan • Scroll to zoom • Double-click to center
            </div>
        </div>
    );
};
