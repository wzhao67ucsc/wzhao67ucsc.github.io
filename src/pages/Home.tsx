import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Work } from '../components/Work';
import { ComponentLibrary } from '../components/ComponentLibrary';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'component-library'>('work');

  return (
    <div className="bg-canvas text-ink font-sans antialiased text-sm h-screen overflow-hidden flex flex-col justify-between selection:bg-gray-200">

      <header className="w-full px-5 py-6 md:px-10 md:py-8 flex-none flex flex-col md:flex-row justify-between items-start md:items-center z-50 gap-4 md:gap-0">
        {/* Mobile: Logo + Nav tabs */}
        <div className="flex md:hidden items-center justify-between w-full">
          <a href="#" className="hover:opacity-60 transition-opacity">
            <img src="/media/wz.png" alt="William" className="h-8" />
          </a>
          <nav className="flex gap-6">
            <button
              onClick={() => setActiveTab('work')}
              className={`text-sm font-medium transition-colors ${activeTab === 'work' ? 'text-ink' : 'text-subtle hover:text-ink'}`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab('component-library')}
              className={`text-sm font-medium transition-colors ${activeTab === 'component-library' ? 'text-ink' : 'text-subtle hover:text-ink'}`}
            >
              Components
            </button>
          </nav>
        </div>

        {/* Desktop: Email on right */}
        <nav className="hidden md:block ml-auto">
          <ul className="flex gap-10 font-medium">
            <li className="text-xs md:text-sm">williamzhao474 [at] gmail [dot] com</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <main className="flex-1 px-5 md:px-10 py-6 md:pt-24 md:pb-10 flex flex-col overflow-y-auto">
          <div className="w-full max-w-2xl mx-auto">
            {activeTab === 'work' ? <Work /> : <ComponentLibrary />}
          </div>
        </main>
      </div>

      <footer className="w-full px-5 py-6 md:px-10 md:py-8 flex-none flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-100 text-xs text-subtle gap-4 md:gap-0">
        <div className="flex gap-4">
          <span>© 2025 William</span>
          <span>San Francisco, CA</span>
        </div>

        <ul className="flex gap-6">
          <li><a href="https://github.com/williamzhao7140" target="_blank" className="hover:text-ink transition-colors">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/william-zhao7140/" target="_blank" className="hover:text-ink transition-colors">LinkedIn</a></li>
        </ul>
      </footer>

    </div>
  );
};

