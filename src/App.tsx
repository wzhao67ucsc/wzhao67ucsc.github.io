import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Work } from './components/Work';
import { ComponentLibrary } from './components/ComponentLibrary';

function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'component-library'>('work');

  return (
    <div className="bg-canvas text-ink font-sans antialiased text-sm h-screen overflow-hidden flex flex-col justify-between selection:bg-gray-200">

      <header className="w-full px-5 py-6 md:px-10 md:py-8 flex-none flex justify-end items-center z-50">
        <nav>
          <ul className="flex gap-10 font-medium">
            <li className="text-xs md:text-sm">williamzhao474 [at] gmail [dot] com</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-grow overflow-hidden">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 px-5 md:px-10 py-10 md:pt-24 md:pb-10 flex flex-col overflow-y-auto">
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
}

export default App;
