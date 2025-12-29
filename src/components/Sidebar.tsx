import React from 'react';

interface SidebarProps {
    activeTab: 'work' | 'component-library';
    onTabChange: (tab: 'work' | 'component-library') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    return (
        <aside className="w-48 md:w-56 flex-none px-5 md:px-10 py-8 flex flex-col justify-center">
            <a href="#" className="hover:opacity-60 transition-opacity mb-12">
                <img src="/media/wz.png" alt="William" className="h-8" />
            </a>
            <nav className="flex flex-col gap-6">
                <button
                    onClick={() => onTabChange('work')}
                    className={`text-sm font-medium text-left transition-colors ${activeTab === 'work' ? 'text-ink' : 'text-subtle hover:text-ink'
                        }`}
                >
                    Work
                </button>
                <button
                    onClick={() => onTabChange('component-library')}
                    className={`text-sm font-medium text-left transition-colors ${activeTab === 'component-library' ? 'text-ink' : 'text-subtle hover:text-ink'
                        }`}
                >
                    Component Library
                </button>
            </nav>
        </aside>
    );
};
